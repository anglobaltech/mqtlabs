import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`, 
      to: "mail@anglobalservices.com", 
      subject: "New Enquiry Received From MQTL Laboratory",
      html: `
        <h3> MQTL WEBSITE TESTING REQUEST </h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length !== 0) return;

  try {
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("error");
    }

  } catch {
    setStatus("error");
  }
};