import type { Metadata } from "next";
import { merriweather } from "@/app/fonts";
import "@/app/globals.css";
import Header from "@/app/ui/header";

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple To-Do List",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${merriweather.className} flex justify-center items-center flex-col p-10`}
      >
        <div className="lg:w-2/3">
          <Header title="To-do List"></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
