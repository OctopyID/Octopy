import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, subject, message } = body;

  // Validate inputs
  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required',
    });
  }

  // Check if SMTP credentials are provided (default to Mailpit)
  const config = useRuntimeConfig();
  const host = config.smtpHost || process.env.SMTP_HOST || '192.168.100.3';
  const port = config.smtpPort || process.env.SMTP_PORT || 1025;
  const user = config.smtpUser || process.env.SMTP_USER;
  const pass = config.smtpPass || process.env.SMTP_PASS;

  try {
    const authConfig = user && pass ? { user, pass } : undefined;

    // Create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: host,
      port: Number(port),
      secure: Number(port) === 465, // true for 465, false for other ports
      auth: authConfig,
      ignoreTLS: true, // Required for local Mailpit
    });

    // Setup email data
    const mailOptions = {
      from: `"${name}" <noreply@octopy.dev>`, // Sender address
      replyTo: email,
      to: 'supianidz@octopy.dev', // Receiver
      subject: `[Portfolio Contact] ${subject}`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Plain text body
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return { success: true, message: 'Message sent successfully.' };
  } catch (error: any) {
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. ' + error.message,
    });
  }
});
