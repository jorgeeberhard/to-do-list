import postgres from "postgres";
import "dotenv/config";

function getSSLValues() {
  return process.env.NODE_ENV === "production" ? true : false;
}

const sql = postgres("", {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: getSSLValues(),
});

export default sql;
