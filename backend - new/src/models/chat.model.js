import mongoose, { Schema } from "mongoose";

const chatschema= new Schema({
    senderId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", required: true 
         }, 
     ReceiverId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "User", required: true 
     }, 
     message: { 
        type: String,
         required: true
         }, 
  status:{
    type:String,
  enum:["sent","deleiverd","read"],
  default:"sent"
  }
},{timestamps:true});

export const Chat = mongoose.model("Chat", chatschema)