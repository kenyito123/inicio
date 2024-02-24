import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.scss";
import { Nav } from "@/components";

const inter = Dancing_Script({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Primer app en next",
  description: "Esto fue creado en next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
