// import mongoose from 'mongoose'

// const MONGODB_URI = process.env.MONGO;

// if(!MONGODB_URI){
//     throw new Error ("définir l'environnement mongodb")
// }
// async function connectToDatabase(){
//     if(mongoose.connection.readyState === 1){
//         return mongoose;
//     }
//     const opts = {
//         bufferCommands: false,
//     }
//     await mongoose.connect(MONGODB_URI!, opts);
//     return mongoose;
// }
// export default connectToDatabase;