import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    process.exit(1);
  } else {
    console.log("✅ Connected to MySQL database successfully");
  }
});

export default db;
