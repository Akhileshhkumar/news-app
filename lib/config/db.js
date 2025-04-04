import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Akhilesh:Akhilesh123@cluster0.rbavr.mongodb.net/news-app');
    console.log("DB Connected");
}