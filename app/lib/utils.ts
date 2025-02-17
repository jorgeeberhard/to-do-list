import sql from "@/infra/database";

export async function uniqueEmailVerification(email: string) {
  const data = await sql`SELECT * FROM users WHERE email = ${email}`;
  if (data[0] && data[0].email) {
    return false;
  }
  return true;
}
