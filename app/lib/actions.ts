"use server";

import { revalidatePath } from "next/cache";
import sql from "@/infra/database";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export type State = {
  errors?: string;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/list",
    });
    redirect("/list");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid Credentials";
        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
}

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

  revalidatePath("/list");
  return;
}

export async function deleteTask(id: string) {
  try {
    await sql`
      DELETE FROM tasks WHERE id =  ${id}
    `;

    revalidatePath("/list");
  } catch (error) {
    console.error(error);
  }
}
