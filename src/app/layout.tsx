import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Elyna — Automatiza tus Llamadas con IA",
  description:
    "Crea asistentes de voz con inteligencia artificial, lanza campañas de llamadas y automatiza tu comunicación telefónica sin código.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
