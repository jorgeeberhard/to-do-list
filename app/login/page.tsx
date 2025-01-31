import Header from "@/app/ui/header";
import LoginForm from "@/app/ui/login/login-form";

export default function Login() {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col w-2/3 md:w-1/3 justify-center">
        <Header className="flex justify-center" title="Login" />
        <LoginForm />
      </div>
    </div>
  );
}
