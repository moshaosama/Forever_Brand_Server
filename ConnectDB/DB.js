import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // 🛠️ تحميل متغيرات البيئة من ملف .env

const urlDB = `mysql://root:JoDeiyXeDjsNRqNvbOIYtHjQrZNYpeOI@mysql.railway.internal:3306/railway`;

const db = mysql.createConnection(urlDB);

db.connect((err) => {
  if (err) {
    console.error("❌ Failed to connect to the database:", err.message);
  } else {
    console.log("✅ Connected to the database successfully!");
  }
});

export default db;
