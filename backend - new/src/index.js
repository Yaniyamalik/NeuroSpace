import app from "./app.js"
import connecDB from "./databases/index.js"
import dotenv from "dotenv"
import server from "./app.js"

dotenv.config({
    path:"../env"
})

connecDB()
.then(()=>{
    server.listen(process.env.PORT||8000 ,()=>{
      console.log(`Server is running at :${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed")
})