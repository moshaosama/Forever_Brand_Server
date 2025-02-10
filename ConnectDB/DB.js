import sql from "mysql2";

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forever_brand",
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
