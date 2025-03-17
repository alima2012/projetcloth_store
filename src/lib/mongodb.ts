import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/BlogProduit";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Déclaration d'un cache global pour éviter les multiples connexions en développement
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Étendre `globalThis` pour inclure `mongooseCache`
declare global {
  namespace NodeJS {
    interface Global {
      mongooseCache?: MongooseCache;
    }
  }
}

const globalNode = global as unknown as NodeJS.Global;
const cached: MongooseCache = globalNode.mongooseCache || { conn: null, promise: null };

async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) return cached.conn; // Retourne la connexion existante

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  globalNode.mongooseCache = cached; // Stockage dans le cache global pour éviter les reconnections
  return cached.conn;
}

export default dbConnect;



// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/BlogProduit";

// if (!MONGODB_URI) {
//   throw new Error("définir l'environnement mongodb");
// }

// let cached = (global as any).mongoose || { conn: null, promise: null };

// async function connectToDatabase() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectToDatabase;

