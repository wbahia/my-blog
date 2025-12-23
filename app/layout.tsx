import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog - Criado com Next.js",
  description: "Descrição do meu blog criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
          {children}
      </body>
    </html>
  );
}
