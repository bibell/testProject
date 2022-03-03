//import express and other libraries to the project
const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const rout=require('./routes/controller.js')
const app=express()

dotenv.config()//used to secure your mongose database credentials
/*over her we can write every routing code but there is batter file structure mechanism
which is MVC stand for model view controller, so we gonna make routing folder that
controls the enrite routings
*/

//calling routing middle ware and other middle wares as well
app.use(express.json()) //used to pares the proper data like json
app.use(express.urlencoded({extended:true})) //for your url encodding stuff
app.use(cors()) //handling api calles error handls fetch or axios requiests
app.use(rout) // your actual routing code file

//use dotenv libraries to secure port and credentials
const PORT=process.env.port
const urlKey=process.env.url
//now it is the time connect to with mongoose database 
mongoose.connect(urlKey,(err,data)=>{
    if(err){
       console.log('error has been ocured during connecting with mongoose '+err)
    }else{
        console.log("Connection has been made with mongoose database "+data)
    }
})

app.listen(PORT,()=>{
    console.log(`express app running on port ${PORT}`)
})