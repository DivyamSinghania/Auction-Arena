const { Client } = require('pg');

// Create a new client instance and connect to PostgreSQL
const client = new Client({
  user: 'postgres',           // Your PostgreSQL username
  host: 'localhost',       // Database server address (use localhost if local)
  database: 'arena',     // Database name
  password: 'Satsahib@123', // Your PostgreSQL password
  port: 5432,              // Default PostgreSQL port
});

client.connect();

// Example: Query the 'arena' table
client.query('SELECT * FROM arena;', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows); // Prints the rows from the 'arena' table
  }

  client.end(); // Close the connection
});
