import mongoose from "mongoose";


export const tourSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true,

    },
    location:{
        type:String,
        required:true,
    },
    heading:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
  
    users:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
    }
})
export default mongoose.model("tours",tourSchema)