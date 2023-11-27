import { Db, MongoClient, ReadConcern } from 'mongodb';

declare global {
  var mongoConn: MongoClient | undefined;
}

if (!process.env.MONGODB_URI) {
  throw new Error('Set Mongo URI to .env');
}

const createConnection = async () => {
  const uri = process.env.MONGODB_URI ?? '';
  const client = new MongoClient(uri, {});
  return await client.connect();
};

export const connectDB = async () => {
  return await createConnection();
};

export const executeDB = async (
  cb: (db: Db) => void,
  options: {
    useCache: boolean;
  } = {
    useCache: false,
  }
) => {
  const updateGlobalMongoConn = async () => {
    if (global.mongoConn) {
      global.mongoConn.close();
    }
    global.mongoConn = await createConnection();
  };

  if (!global.mongoConn || !options.useCache) {
    await updateGlobalMongoConn();
  }

  // This should not be happened after updateGlobalMongoConn is called.
  if (!global.mongoConn) {
    throw new Error('global.mongoConn is not defined.');
  }

  const db = global.mongoConn.db(process.env.DB_NAME);
  await cb(db);

  if (!options.useCache) {
    if (global.mongoConn) {
      global.mongoConn.close();
    }
    global.mongoConn = undefined;
  }
};
