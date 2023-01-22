import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI){
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cached = global.mongoose
if(!cached){

    cached= global.mongoose={
        conn:null,
        promise:null
    }
}

async function dbConnect(){

  var opts = null;
    if(cached.conn){
        return cached.conn
    }

    if (!cached.promise) {
      opts = {
          bufferCommands: false,
        }
    }

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
        return mongoose
      })
    
      try {
        cached.conn = await cached.promise
      } catch (e) {
        cached.promise = null
        throw e
      }


      return cached.conn


}



export default dbConnect