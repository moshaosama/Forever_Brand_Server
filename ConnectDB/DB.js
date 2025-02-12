import sql from "mysql2";

const db = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  } else {
    console.log("Connected to the database successfully");
  }
});

export default db;
