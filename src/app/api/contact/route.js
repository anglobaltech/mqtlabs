import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, phone, message } = await req.json();

    // Validation
    if (!fullName || !email || !phone || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: "mail@anglobalservices.com",
      replyTo: email,
      subject: "New Enquiry Received From MQTL Laboratory",
      html: `
        <div style="font-family: Arial; padding: 10px;">
          <h2 style="color:#d32f2f;">New MQT Lab Enquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("MAIL ERROR:", error);
    return Response.json(
      { success: false, message: "Email sending failed" },
      { status: 500 }
    );
  }
}