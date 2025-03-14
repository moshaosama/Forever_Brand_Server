import mysql from "mysql2";

const urlDb = `mysql://root:wsyNFcjUlJygDXSHWgawNWNaFYjQzcWd@mysql.railway.internal:3306/forever_brand`;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306,
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
