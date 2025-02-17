import { roboto } from "@/app/fonts";

export default function Button({
  className,
  buttonName,
  type,
}: {
  className?: string;
  buttonName: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) {
  return (
    <div className="flex justify-center">
      <button
        className={`${roboto.className} ${className} px-2 py-1 m-3 border border-blue-300 bg-blue-300 solid rounded-md`}
        type={type}
      >
        {buttonName}
      </button>
    </div>
  );
}
