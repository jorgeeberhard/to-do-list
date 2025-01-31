"use client";

import { MdClose } from "react-icons/md";
import { roboto } from "@/app/fonts";
import { redirect } from "next/navigation";
import Button from "@/app/ui/button";

export default function LoginForm() {
  function handleClose() {
    redirect("/");
  }
  return (
    <section className={`${roboto.className} shadow-md bg-yellow-200`}>
      <button className="block p-2" type="submit" onClick={handleClose}>
        <MdClose size={25} />
      </button>
      <form className="bg-yellow-100">
        <div className="flex flex-col px-3 py-2">
          <input
            className="bg-yellow-100 focus:outline-0"
            type="email"
            placeholder="email@domain.com.br"
          />
        </div>

        <div className="flex flex-col px-3 py-2">
          <input
            className="bg-yellow-100 focus:outline-0"
            placeholder="Password"
            type="password"
            id="password"
          />
        </div>
        <div className="flex justify-center">
          <Button buttonName="Login" type="submit" />
        </div>
      </form>
    </section>
  );
}
