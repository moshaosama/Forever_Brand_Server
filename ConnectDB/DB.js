import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    process.exit(1);
  } else {
    console.log("✅ Connected to the database successfully!");
  }
});

export default db;
