"use server";

import { revalidatePath } from "next/cache";
import sql from "@/infra/database";

export type State = {
  errors?: string;
};

export async function createTask(prevState: unknown, formData: FormData) {
  const taskDescription = formData.get("taskDescription") as string;

  if (!taskDescription) {
    return { error: "Task Description is Required." };
  }

  const date = new Date().toISOString();
  try {
    await sql`
    INSERT INTO tasks (description, date)
    VALUES (${taskDescription}, ${date})
  `;
  } catch (error) {
    console.error(error);
    return {
      error: "Error: Failed to insert task information to Database",
    };
  }

  revalidatePath("/");
  return;
}

export async function deleteTask(id: string) {
  try {
    await sql`
      DELETE FROM tasks WHERE id =  ${id}
    `;

    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}
