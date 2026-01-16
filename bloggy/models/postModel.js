
   const mongoose = require("mongoose");

//   / /  route handler
  const postSchema = new mongoose.Schema({
     
        title:{
            type: String,
            required: true,
        },
        body:{
            type: String,
            required: true,

        },
        likes:[{
            types: mongoose.Schema.Types.ObjectId,
            ref: "Like",
        }],
        comments:[{
           types: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }]


    })
module.exports=mongoose.model("Like", postSchema);