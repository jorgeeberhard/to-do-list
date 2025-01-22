import sql from "@/infra/database";

async function seedTasks() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    description TEXT NOT NULL,
    date TIMESTAMP NOT NULL
    );
  `;
}

export async function GET() {
  try {
    await seedTasks();

    return Response.json({ message: "Database seeded sucessfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
