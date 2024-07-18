import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://Gurjaipal17:gurjaipal1710@cluster0.44qf0to.mongodb.net/Food').then(()=>console.log("DB Connected"));
}