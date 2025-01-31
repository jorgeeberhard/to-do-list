import { buttonTypes } from "@/app/lib/definitions";
import { roboto } from "../fonts";

export default function Button({
  buttonName,
  type,
}: {
  buttonName: string;
  type?: buttonTypes;
}) {
  return (
    <div>
      <button
        className={`${roboto.className} px-2 py-1 m-3 border border-blue-300 bg-blue-300 solid rounded-md`}
        type={type}
      >
        {buttonName}
      </button>
    </div>
  );
}
