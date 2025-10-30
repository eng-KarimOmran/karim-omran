import { NextResponse } from "next/server";
import { transporter } from "@/utils/SendEmail/nodemailer";
import generateEmailTemplate from "@/utils/SendEmail/generateEmailTemplate";

export async function POST(req: Request) {
  try {
    const { name, email, text } = await req.json();

    const info = await transporter.sendMail({
      from: '"Portfolio" <pckareem2004@gmail.com>',
      to: "eng.karimomran@gmail.com",
      subject: "New Client Message",
      text,
      html: generateEmailTemplate({
        username: name,
        email,
        message: text,
      }),
    });

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
