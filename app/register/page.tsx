import Header from "@/app/ui/header";
import RegisterForm from "@/app/ui/register/register-form";

export default function Register() {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col w-2/3 md:w-1/3 justify-center">
        <Header className="flex justify-center" title="Register" />
        <RegisterForm />
      </div>
    </div>
  );
}
