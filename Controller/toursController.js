import Tours from "../model/tourSchema.js";
import User from "../model/Userschema.js"

export const CreateTour = async(req,res)=>{
    const {location,heading,price}=req.body;
    console.log(location,heading,price)
    const userid =req.userid;
    const user = await User.findById(userid)
    if(!user){
        return res.status(403).json({success:false,message:"user not found"})
    }

    try {
       
        const tour = new Tours({
            
            location,
            heading,
            price,
            users:{
                id:user_Id,
                name:user.username
            }
        })
        console.log(img,location,heading,price,)
        await tour.save();
        return res.status(200).json({sucess:true,message:"new tour is added"})
    } catch (error) {
        return res.status(500).json({success:false,message:"internal server error"})
    }
}