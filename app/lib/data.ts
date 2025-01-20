import { sql } from "@vercel/postgres";

export async function fetchTasks() {
  try {
    const data = await sql`
      SELECT * FROM tasks
      ORDER BY date DESC
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch tasks data.");
  }
}
