import { Asap } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const asap = Asap({
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-asap",
});

export const metadata = {
  title: "Look Within Life Coaching",
  description: "Your journey to self-discovery starts here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={asap.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
