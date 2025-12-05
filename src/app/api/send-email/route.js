import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, surname, email, number, message } = await request.json();

  // Налаштування Nodemailer
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "olevskijvlad@gmail.com", // ваша пошта
      pass: "your-email-password", // пароль або спеціальний "app password"
    },
  });

  // Лист
  let mailOptions = {
    from: email,
    to: "olevskijvlad@gmail.com",
    subject: `Нове повідомлення від ${name}`,
    text: `
      Ім'я: ${name}
      Прізвище: ${surname}
      Телефон: ${number}
      Пошта: ${email}
      Коментар: ${message}
    `,
  };

  // Надсилаємо лист
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email відправлено" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Помилка надсилання", error }),
      {
        status: 500,
      }
    );
  }
}
