import { MongoClient } from 'mongodb';

const url = process.env.ATLAS_URI;
const client = new MongoClient(url);
const dbName = 'owl';

let connection;
try {
  connection = await client.connect();
  console.log('Connected successfully to the database server');
} catch (error) {
  console.error(error);
}

export const db = client.db(dbName);
