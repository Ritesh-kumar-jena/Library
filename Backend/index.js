const dotenv=require("dotenv").config()
const express=require("express")
const cors=require('cors')
const { connection } = require("./db")
const { userRoute } = require("./Controller/userRoutes")
const { bookRoute } = require("./Controller/bookRoutes")
const { myBookRoute } = require("./Controller/myBookRoutes")

const port=process.env.port

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Wlcome to our Library")
})

app.use("/users",userRoute)
app.use("/books", bookRoute)
app.use("/mybooks", myBookRoute)

app.listen(port,async()=>{
    try {
        await connection
        console.log(`server is running on port:- ${port} and connected to Library Database`)
    } catch (error) {
        console.log(error)
    }
})