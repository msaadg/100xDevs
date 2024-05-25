import { Client } from "pg";

const client = new Client({
    // user: "postgres",
    // host: "localhost",
    // database: "postgres",
    // password: "mysecretpassword",
    // port: 5432,

    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public",
});

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}

createUsersTable();