import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "АЗС «УЦГ» — Сеть заправок Ульяновска",
    template: "%s | АЗС «УЦГ»",
  },
  description:
    "Сеть АЗС «УЦГ» — 26 заправок города Ульяновска и области. Качественное топливо, автомойка, магазин, кафе и дополнительные услуги.",
  keywords: [
    "АЗС",
    "УЦГ",
    "заправка",
    "Ульяновск",
    "бензин",
    "топливо",
    "газ",
    "автомойка",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
