import nodemailer from "nodemailer";
import { db } from "@/lib/firebase";
import { doc, runTransaction, serverTimestamp, setDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    const body = await req.json();
    const fullName = body.fullName || body.name || "";
    const email = body.email || "";
    const phone = body.phone || "";
    const service = body.service || "General Testing Enquiry";
    const message =
      body.message ||
      (body.service ? `Consultation request for ${body.service}` : "Consultation Call Request");
    const source = body.source || "Website Enquiry";

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      return Response.json(
        { success: false, message: "Name, email, and 10-digit phone number are required" },
        { status: 400 }
      );
    }

    let nextLeadId = "MQTL00001";
    try {
      const counterRef = doc(db, "counters", "enquiries");
      await runTransaction(db, async (transaction) => {
        const counterDoc = await transaction.get(counterRef);
        let currentCount = 0;
        if (counterDoc.exists()) {
          const data = counterDoc.data();
          currentCount = typeof data.count === "number" ? data.count : 0;
        }
        const newCount = currentCount + 1;
        transaction.set(
          counterRef,
          { count: newCount, lastUpdated: serverTimestamp() },
          { merge: true }
        );
        const padded = String(newCount).padStart(5, "0");
        nextLeadId = `MQTL${padded}`;
      });
    } catch (counterError) {
      console.error("Counter transaction error, using fallback ID:", counterError);
      const randomSuffix = String(Math.floor(10000 + Math.random() * 90000));
      nextLeadId = `MQTL${randomSuffix}`;
    }

    let firestoreSaved = false;
    try {
      const enquiryRef = doc(db, "enquiries", nextLeadId);
      await setDoc(enquiryRef, {
        leadId: nextLeadId,
        fullName,
        email,
        phone,
        service,
        message,
        source,
        createdAt: serverTimestamp(),
        status: "New",
      });
      firestoreSaved = true;
      console.log(`[Firestore] Lead ${nextLeadId} successfully saved to 'enquiries' collection.`);
    } catch (firestoreError) {
      console.error("[Firestore] Save error:", firestoreError.message || firestoreError);
    }

    const recipientEmail = process.env.ENQUIRY_TO_EMAIL || "mail@anglobalservices.com";
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"MQTL" <${process.env.EMAIL_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Enquiry [${nextLeadId}] Received From MQTL Laboratory`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f1f5f9;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06);">
              
              <!-- Header -->
              <div style="background-color: #06182b; padding: 20px 24px; border-bottom: 3px solid #ef4444;">
                <h2 style="color: #ffffff; margin: 0 0 6px 0; font-size: 20px; font-weight: 700;">New MQTL Enquiry</h2>
              </div>

              <!-- Body -->
              <div style="padding: 24px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
                  <tr>
                    <td style="padding: 9px 0; color: #64748b; width: 140px; font-weight: 600;">Lead ID:</td>
                    <td style="padding: 9px 0; color: #0f172a; font-weight: 700;">${nextLeadId}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Full Name:</td>
                    <td style="padding: 9px 0; color: #0f172a; font-weight: 600;">${fullName}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
                    <td style="padding: 9px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${phone}</a></td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                    <td style="padding: 9px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Required Service:</td>
                    <td style="padding: 9px 0; color: #0f172a; font-weight: 600;">${service}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 9px 0; color: #64748b; font-weight: 600; vertical-align: top;">Requirement / Message:</td>
                    <td style="padding: 9px 0; color: #0f172a; white-space: pre-wrap;">${message}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Source:</td>
                    <td style="padding: 9px 0; color: #475569;">${source}</td>
                  </tr>
                </table>
              </div>

              <!-- Footer -->
              <div style="background-color: #f8fafc; padding: 12px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
                Minu Quality Testing Laboratories Private Limited (MQTL)
              </div>
            </div>
          </div>
        `,
      });
    }

    return Response.json({
      success: true,
      leadId: nextLeadId,
      firestoreSaved,
      message: `Enquiry successfully registered with Lead ID: ${nextLeadId}`,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return Response.json(
      { success: false, message: error.message || "Failed to process enquiry" },
      { status: 500 }
    );
  }
}