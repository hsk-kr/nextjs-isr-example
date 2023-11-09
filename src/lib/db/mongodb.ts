import { MongoClient } from 'mongodb';

declare global {
  var mongoConn: MongoClient;
}

const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Set Mongo URI to .env');
}

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI ?? '';

  const createConnection = async () => {
    const client = new MongoClient(uri, options);
    return await client.connect();
  };

  if (process.env.NODE_ENV === 'development') {
    if (global.mongoConn) {
      return global.mongoConn;
    }
    global.mongoConn = await createConnection();
    return global.mongoConn;
  } else {
    return await createConnection();
  }
};
