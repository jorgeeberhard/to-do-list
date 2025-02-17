import Header from "@/app/ui/header";
import { MdClose } from "react-icons/md";
import Button from "@/app/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex justify-center py-10 px-2 md:py-10 md:px-10 ">
      <div className="flex flex-col items-center w-screen">
        <Header title="Welcome" />
        <div className="w-2/3 md:w-1/3 bg-yellow-200">
          <button className="p-2">
            <MdClose size={25} />
          </button>
          <div className="flex justify-around bg-yellow-100 py-5">
            <Link
              href="/login"
              className="px-3 py-2 m-3 bg-blue-300 rounded-md outline-offset-2 outline-blue-500 focus:outline hover:bg-blue-400 active:bg-blue-500"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-3 py-2 m-3 bg-blue-300 rounded-md outline-offset-2 outline-blue-500 focus:outline hover:bg-blue-400 active:bg-blue-500"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
