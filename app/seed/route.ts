import bcrypt from "bcrypt";
import sql from "@/infra/database";
import { users } from "@/app/lib/placeholder-data";

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

async function seedUser() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );`;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return await sql`
        INSERT INTO users (id, email, password)
        VALUES (${user.id}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );
  return insertedUsers;
}

export async function GET() {
  try {
    await seedTasks();
    await seedUser();

    return Response.json({ message: "Database seeded sucessfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
