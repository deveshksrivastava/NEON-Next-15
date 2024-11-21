import mongoose from 'mongoose';
import { use } from 'react';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const dbName = process.env.MONGO_DBNAME;

  if (!username || !password || !dbName) {
    throw new Error("MONGO_USERNAME, MONGO_PASSWORD, or MONGO_DBNAME is not defined");
  }

  const uri = `mongodb+srv://${username}:${password}@cluster0.z4fif.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };
  return mongoose.connect(uri, opts);
};

export default dbConnect;