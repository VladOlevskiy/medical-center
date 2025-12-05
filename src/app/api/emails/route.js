import { Resend } from "resend";
import Welcome from "@/app/(components)/emails/Welcome";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, surname, number, email, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["olevskijvlad@gmail.com"],
      subject: "Hello world",
      react: Welcome({ name, surname, number, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
