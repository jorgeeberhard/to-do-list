import type { Metadata } from "next";
import { merriweather } from "./fonts";
import "./globals.css";
import Header from "@/app/ui/header";
import Search from "@/app/ui/search";

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple To-Do List App",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${merriweather.className} grid gap-4 grid-cols-3 p-10`}>
        <Header title="To-do List"></Header>
        {children}
      </body>
    </html>
  );
}
