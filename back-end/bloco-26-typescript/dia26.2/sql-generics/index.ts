import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

const main = async () => {
  const result = await connection.execute('SELECT * FROM books');
  const [rows] = result;
  console.log(rows);
}

main();
