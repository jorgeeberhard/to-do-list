import type { Metadata } from "next";
import { roboto } from "@/app/fonts";
import "@/app/globals.css";

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
      <body className={`${roboto.className} `}>{children}</body>
    </html>
  );
}
