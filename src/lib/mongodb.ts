import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const dbName = process.env.MONGO_DBNAME;

  if (!username || !password || !dbName) {
    throw new Error("MONGO_USERNAME, MONGO_PASSWORD, or MONGO_DBNAME is not defined");
  }

  const uri = `mongodb+srv://${username}:${password}@cluster0.z4fif.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  return mongoose.connect(uri, {
  
  });
};

export default dbConnect;

// import { MongoClient } from "mongodb";

//   if (!process.env.MONGODB_URI) {
//     throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
//   }
//   // const uri = new MongoClient('mongodb+srv://visaukjob:Swindon@123@cluster0.ffxxt.mongodb.net/sample_mflix?retryWrites=true&w=majority')
//   // const uri = process.env.MONGODB_URI;
//   // const uri = 'mongodb+srv://visaukjob:89VsAFrLeMcGkyy3@cluster0.ffxxt.mongodb.net/sample_mflix?retryWrites=true&w=majority';
//   // const uri = 'mongodb+srv://visaukjob:BWW2jtKH0FqPThDK@clusterdb.ifctm.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=ClusterDB';
//   const uri = 'mongodb+srv://visaukjob:admin123@cluster0.z4fif.mongodb.net/sample_mflix?retryWrites=true&w=majority';
//   const options = {};
  
//   let client: MongoClient;

//   // try{

//     if (process.env.NODE_ENV === "development") {
//       // In development mode, use a global variable so that the value
//       // is preserved across module reloads caused by HMR (Hot Module Replacement).
//       let globalWithMongo = global as typeof globalThis & {
//         _mongoClient?: MongoClient;
//       };
//       debugger
//       if (!globalWithMongo._mongoClient) {
//         globalWithMongo._mongoClient = new MongoClient(uri, options);
//       }
//       client = globalWithMongo._mongoClient;
//     } else {
//       // In production mode, it's best to not use a global variable.
//       client = new MongoClient(uri, options);
//     }
    
//   // }catch(err){
//   //   console.log("Mongo Error",err)
//   // }
  
//   // Export a module-scoped MongoClient. By doing this in a
//   // separate module, the client can be shared across functions.
//   export default client;