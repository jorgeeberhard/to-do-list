"use server";

import { revalidatePath } from "next/cache";
import sql from "@/infra/database";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { z } from "zod";
import { uniqueEmailVerification } from "@/app/lib/utils";

export type State = {
  errors?: string;
};

export async function registerUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const parsedCredentials = z
      .object({
        email: z.string().email(),
        password: z.string().min(8),
        password_confirmation: z.string().min(8),
      })
      .safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
      });

    if (!parsedCredentials.success) {
      return "Invalid Credentials";
    }

    const { email, password } = parsedCredentials.data;

    const isEmailUnique = await uniqueEmailVerification(email);
    console.log(isEmailUnique);

    if (!isEmailUnique) {
      return "Email Already Registered";
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO users(email, password)
      VALUES (${email}, ${encryptedPassword})
    `;

    console.log("Registration Successfull");
  } catch (error) {
    console.error("Error registering user: ", error);
    return "Error With Registration";
  }
  redirect("/login");
}

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
