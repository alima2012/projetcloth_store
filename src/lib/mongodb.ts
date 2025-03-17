import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/BlogProduit";

if (!MONGODB_URI) {
  throw new Error("définir l'environnement mongodb");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;

