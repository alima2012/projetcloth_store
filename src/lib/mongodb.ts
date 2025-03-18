import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/BlogProduit"

if (!MONGODB_URI) {
  throw new Error("définir l'environnement mongodb")
}

// Définition de l'interface pour le cache mongoose
interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// Définition du type pour globalThis avec notre cache
type GlobalWithMongoose = typeof globalThis & {
  mongoose?: MongooseCache
}

// Initialisation du cache
const cached: MongooseCache = (globalThis as GlobalWithMongoose).mongoose || {
  conn: null,
  promise: null,
}

// Sauvegarde du cache dans globalThis
;(globalThis as GlobalWithMongoose).mongoose = cached

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    return cached.conn
  } catch (error) {
    cached.promise = null
    throw error
  }
}

export default connectToDatabase

