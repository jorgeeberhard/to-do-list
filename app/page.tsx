import Header from "@/app/ui/header";
import { MdClose } from "react-icons/md";
import Button from "@/app/ui/button";

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
            <a href="/login">
              <Button buttonName="Login" />
            </a>
            <a href="/register">
              <Button buttonName="Register" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
