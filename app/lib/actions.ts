"use server";

import { tasksList } from "@/app/lib/definitions";
import { revalidateTag } from "next/cache";

export type State = {
  errors?: string;
};

export async function createTask(prevState: unknown, formData: FormData) {
  console.log(`Task List: ${tasksList}`);

  const taskDescription = formData.get("taskDescription") as string;
  console.log(`Task Description: ${taskDescription}`);

  if (!taskDescription) {
    return { error: "Task Description is Required." };
  }

  tasksList.unshift(taskDescription);
  revalidateTag("TaskWrapper");
  return;
}
