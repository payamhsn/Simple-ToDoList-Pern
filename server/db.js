import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "payam",
  password: "payton1366",
  host: "localhost",
  port: 5432,
  database: "learndb",
});

export default pool;
