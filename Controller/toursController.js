import Tours from "../model/tourSchema.js";
import User from "../model/Userschema.js"

export const CreateTour = async(req,res)=>{
    const { email} = req.body;
   


    try {
        let user= await User.findOne({email:email})
        console.log( "email is",email)
        if(!user){
            return res.status(404).json({success:false,message:"user not found"})
        }
        const tour = new Tours({
            img,
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