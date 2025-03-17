import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/BlogProduit";

if (!MONGODB_URI) {
  throw new Error("définir l'environnement mongodb");
}

// Déclaration d'un cache global pour éviter les multiples connexions en développement
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Déclare une variable globale pour stocker la connexion (utile en mode dev)
declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn; // Retourne la connexion existante si elle est déjà établie
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached; // Stocke dans le cache global pour éviter les reconnections
  return cached.conn;
}

export default connectToDatabase;


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

