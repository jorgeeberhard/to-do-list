import Header from "@/app/ui/header";
import Button from "@/app/ui/button";
export default function Signin() {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col">
        <Header className="flex justify-center" title="Sign in" />
        <p>Page in development</p>
        <a href="/">
          <Button buttonName="Go Back" />
        </a>
      </div>
    </div>
  );
}
