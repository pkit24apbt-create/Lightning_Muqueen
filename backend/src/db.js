import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// One shared connection pool for the whole app.
const pool = new pg.Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'lightning_mcqueen',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

pool.on('error', (err) => {
  console.error('Unexpected PostgreSQL error:', err.message);
});

export default pool;