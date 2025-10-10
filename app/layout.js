import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Look Within Life Coaching",
  description: "Your journey to self-discovery starts here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
