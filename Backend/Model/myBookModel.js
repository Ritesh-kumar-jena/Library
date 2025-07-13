const mongoose=require("mongoose")

const myBookSchema=mongoose.Schema({
 userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'book' },
  status: { type: String, default: 'Want to Read' },
  rating: { type: Number, default: 0 }
},{versionKey:false})

const myBooks=mongoose.model("myBook",myBookSchema)


module.exports={myBooks} 