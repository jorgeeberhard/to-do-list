import sql from "@/infra/database";
import { TaskContents } from "./definitions";

export async function fetchTasks(userId: string): Promise<TaskContents[]> {
  try {
    const data = await sql<TaskContents[]>`
      SELECT * FROM tasks
      WHERE user_id = ${userId}
      ORDER BY date DESC;`;

    return data;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch tasks data.");
  }
}
