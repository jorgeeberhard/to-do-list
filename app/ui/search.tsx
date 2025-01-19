"use client";
import { useActionState } from "react";
import { CreateTask } from "@/app/ui/buttons";
import { State } from "@/app/lib/actions";
import { createTask } from "@/app/lib/actions";

export default function Search({ placeholder }: { placeholder: string }) {
  const initialState: State = { errors: undefined };
  const [data, action, isPending] = useActionState(createTask, undefined);

  return (
    <form action={action}>
      <div className="col-start-2">
        <div className="flex">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            name="taskDescription"
            className="peer block rounded-md w-full border border-gray-300 py-[9px] pl-5"
            type="text"
            placeholder={placeholder}
          />
          <CreateTask />
        </div>
      </div>
    </form>
  );
}
