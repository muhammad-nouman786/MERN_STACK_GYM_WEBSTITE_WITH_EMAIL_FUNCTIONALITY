import express from "express";
import cors from "cors";
import {config} from "dotenv"
import { sendEmail } from "./utils/sendEmail.js";
const app = express();
const router = express.Router()
config({path:"./.env"})
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

router.post("/send/mail",async(req,res)=>{
  console.log(req.body)
const {name,email,message,phone} = req.body
if(!name || !email || !message || !phone){
    return res.status(400).json({message:"Please provide all details"})
}
try {
  await sendEmail({
    email:"muhammadnuman761@gmail.com",
    subject:"GYM WEBSITE CONTACT",
    message,
    userEmail: email
  })
  res.status(200).json({message:"Message Sent Successfully"})
} catch (error) {
  res.status(500).json({message:"Internal Server Error", error})
}
})
app.use(router)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
