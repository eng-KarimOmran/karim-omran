import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: Number(process.env.TRANSPORT_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export { transporter };