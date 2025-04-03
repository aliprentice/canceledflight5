import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    res.status(500).json({ error: 'MONGO_URI not set' });
    return;
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db('testdb'); // Use a database named "testdb"
    const collection = database.collection('test'); // And a collection named "test"
    const result = await collection.findOne({});
    res.status(200).json({ message: 'Hello from MongoDB', data: result });
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to database' });
  } finally {
    await client.close();
  }
}
