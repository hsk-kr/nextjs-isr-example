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

  const updateGlobalMongoConn = async () => {
    if (global.mongoConn) {
      try {
        await global.mongoConn.close();
      } catch {}
    }
    global.mongoConn = await createConnection();
    global.mongoConn.on('connectionCheckOutFailed', updateGlobalMongoConn);
    global.mongoConn.on('error', updateGlobalMongoConn);
    global.mongoConn.on('close', updateGlobalMongoConn);
    global.mongoConn.on('connectionPoolClosed', updateGlobalMongoConn);
    global.mongoConn.on('error', updateGlobalMongoConn);
    global.mongoConn.on('serverClosed', updateGlobalMongoConn);
    global.mongoConn.on('serverHeartbeatFailed', updateGlobalMongoConn);
    global.mongoConn.on('timeout', updateGlobalMongoConn);
  };

  if (!global.mongoConn) {
    await updateGlobalMongoConn();
  }

  return global.mongoConn;
};

export const getDB = async () => {
  return (await connectDB()).db(process.env.DB_NAME);
};
