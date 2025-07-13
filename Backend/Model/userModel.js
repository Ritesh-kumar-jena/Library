const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    pass:{type:String,required:true}

},{versionKey:false})

const users=mongoose.model("user",userSchema)

const blacklistingSchema=mongoose.Schema({
    token:{type:String},
},{versionKey:false})

const blacklisting=mongoose.model("blacklist",blacklistingSchema)

module.exports={users,blacklisting} 