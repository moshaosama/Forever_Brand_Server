import mysql from "mysql2";

const urlDb = `mysql://root:wsyNFcjUlJygDXSHWgawNWNaFYjQzcWd@mysql.railway.internal:3306/forever_brand`;

const db = mysql.createConnection(urlDb);

db.connect((err) => {
  if (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    process.exit(1);
  } else {
    console.log("✅ Connected to the database successfully!");
  }
});

export default db;
