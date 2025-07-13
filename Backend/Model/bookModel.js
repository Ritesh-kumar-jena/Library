const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
  title: {type:String,required:true},
  author: {type:String,required:true},
  coverImage: {type:String,required:true},
  availability: { type: Boolean, enum: [true, false], default: true}
},{versionKey:false})

const books=mongoose.model("book",bookSchema)


module.exports={books} 