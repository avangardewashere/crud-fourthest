import mongoose from "mongoose";

const connectMongoDb = async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("MONGODB: Success Connection [{status: 200}]")
    }catch(e){
        console.log(e)
    }
}

export default connectMongoDb;