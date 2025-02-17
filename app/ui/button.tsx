import { roboto } from "@/app/fonts";

export default function Button({
  className,
  type,
  children,
}: {
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <button
        className={`${roboto.className} ${className} px-3 py-2 m-3 bg-blue-300 rounded-md outline-offset-2 outline-blue-500 focus:outline hover:bg-blue-400 active:bg-blue-500`}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}
