"use server";

import { tasksList } from "@/app/lib/definitions";
import { revalidateTag } from "next/cache";

export type State = {
  errors?: string;
};

export async function createTask(prevState: unknown, formData: FormData) {
  const taskDescription = formData.get("taskDescription") as string;
  if (!taskDescription) {
    return { error: "Task Description is Required." };
  }

  tasksList.unshift(taskDescription);
  console.log(`Task List: ${tasksList}`);
  console.log(`Task Description: ${taskDescription}`);
  revalidateTag("TaskWrapper");
  return;
}
