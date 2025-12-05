import { Html, Heading, Text } from "@react-email/components";
import * as React from "react";

export default function Welcome({ name, surname, number, email, message }) {
  return (
    <Html>
      <Heading>Єва Центр</Heading>
      <Text>Ім'я: {name}</Text>
      <Text>Прізвище: {surname}</Text>
      <Text>Мобільний: {number}</Text>
      <Text>Пошта: {email}</Text>
      <Text>Повідомлення: {message}</Text>
    </Html>
  );
}
