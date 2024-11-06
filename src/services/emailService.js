import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (to, subject, text, html, pdfPath) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      text,
      html,
      attachments: [
        {
          filename: "informe.pdf",
          path: pdfPath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo enviado correctamente.");
  } catch (error) {
    console.error("Error al enviar el correo:", error.message);
    throw new Error("Error al enviar el correo");
  }
};
