import type { Metadata } from "next";
import { Montserrat, Open_Sans, Lora, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkillShift - Professional Development & Training",
  description:
    "Transform your career with SkillShift's high-impact training interventions. We provide soft skills training, mentorship, and HR services for businesses and individuals.",
  keywords:
    "soft skills training, professional development, mentorship, HR services, corporate training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${lora.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
