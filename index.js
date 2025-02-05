import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import UserRoute from "./Routes/user.js"
import TourRoute from "./Routes/tour.js"
 
dotenv.config();
const app=express();
 const port= process.env.PORT || 5000
mongoose.set("strictQuery",false)

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("DB connection success")
    } catch (error) {
        console.log("DB connection error")
    }
}
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/user",UserRoute)
app.use("/api/v1/tour",TourRoute)
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log("server listening in 5000")
    })
}).catch((error)=>{console.log(error)})