import mongoose,{Schema } from "mongoose"

const recordSchema = new Schema({
    record:String,
    description:String,
},{
    timestamps:true,
})

const Record = mongoose.models.Record || mongoose.model("Record",recordSchema)

export default Record;