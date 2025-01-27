import { GoPlus } from "react-icons/go";

export function CreateTask() {
  return (
    <div className="">
      <button className="rounded-lg border p-3 hover:bg-gray-100 ml-5 hover:bg-gray-200 active:bg-gray-100">
        <span className="sr-only">Create</span>
        <GoPlus size={30} />
      </button>
    </div>
  );
}
