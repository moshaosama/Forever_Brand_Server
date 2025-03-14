import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // 🛠️ تحميل متغيرات البيئة من ملف .env

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Failed to connect to the database:", err.message);
  } else {
    console.log("✅ Connected to the database successfully!");
  }
});

export default db;
