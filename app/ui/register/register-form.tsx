"use client";

import { MdClose } from "react-icons/md";
import { roboto } from "@/app/fonts";
import { redirect } from "next/navigation";
import Button from "@/app/ui/button";
import { registerUser } from "@/app/lib/actions";
import { useActionState } from "react";

export default function RegisterForm() {
  function handleClose() {
    redirect("/");
  }

  const [data, formAction] = useActionState(registerUser, undefined);

  return (
    <section className={`${roboto.className} shadow-md bg-yellow-200`}>
      <button className="block p-2" type="submit" onClick={handleClose}>
        <MdClose size={25} />
      </button>
      <form action={formAction} className="bg-yellow-100">
        <div className="flex flex-col px-3 py-2">
          <input
            id="email"
            name="email"
            type="email"
            className="bg-yellow-100 focus:outline-0"
            placeholder="email@domain.com.br"
          />
        </div>

        <div className="flex flex-col px-3 py-2">
          <input
            id="password"
            name="password"
            type="password"
            className="bg-yellow-100 focus:outline-0"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col px-3 py-2">
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            className="bg-yellow-100 focus:outline-0"
            placeholder="Password confirmation"
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit">
            <p>Register</p>
          </Button>
        </div>
      </form>
      <div>
        <p className="p-3 text-red-500 font-bold">{data}</p>
      </div>
    </section>
  );
}
