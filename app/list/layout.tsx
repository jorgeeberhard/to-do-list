import type { Metadata } from "next";
import { merriweather } from "@/app/fonts";
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
  return <div className={`${merriweather.className}`}>{children}</div>;
}
