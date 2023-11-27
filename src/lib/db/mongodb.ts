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

const updateGlobalMongoConn = async () => {
  if (global.mongoConn) {
    global.mongoConn.close();
  }
  global.mongoConn = await createConnection();
  global.mongoConn.on('timeout', updateGlobalMongoConn);
  global.mongoConn.on('error', updateGlobalMongoConn);
  global.mongoConn.on('connectionCheckOutFailed', updateGlobalMongoConn);
  global.mongoConn.on('connectionPoolClosed', updateGlobalMongoConn);
  global.mongoConn.on('serverClosed', updateGlobalMongoConn);
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
  let conn: MongoClient;
  if (options.useCache) {
    if (!global.mongoConn) {
      await updateGlobalMongoConn();
    }

    // The error should not occur after updateGlobalMongoConn is called.
    if (!global.mongoConn) {
      throw new Error('global.mongoConn is not defined.');
    }

    conn = global.mongoConn;
  } else {
    conn = await createConnection();
  }

  const db = conn.db(process.env.DB_NAME);
  await cb(db);

  if (!options.useCache) {
    conn.close();
  }
};
