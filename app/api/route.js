import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // 1️⃣ Gmail SMTP setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,     // your Gmail
        pass: process.env.CONTACT_APP_PASS,  // app password
      },
    });

    // 2️⃣ Email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // 3️⃣ Send mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
