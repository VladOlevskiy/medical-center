// import { Lato } from "next/font/google";
import NavBar from "./(components)/NavBar/NavBar";
import "./(styles)/globals.scss";
import localFont from "next/font/local";
// const lato = Lato({
//   weight: ["300", "400", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

const myFont = localFont({
  src: [
    {
      path: "../../fonts/Lato/latolight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Lato/latoregular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Lato/latomedium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-lato",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.variable}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
