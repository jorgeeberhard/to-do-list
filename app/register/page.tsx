import Header from "@/app/ui/header";
import Button from "@/app/ui/button";
import Link from "next/link";
export default function Signin() {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col">
        <Header className="flex justify-center" title="Sign in" />
        <p>Page in development</p>
        <Link href="/">
          <Button buttonName="Go Back" />
        </Link>
      </div>
    </div>
  );
}
