const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// business logic

 exports.createComment= async(req, res)=>{
    try {
         
//   fetch data from req body
   const {post, user, body}= req.body;
//    crete a comment object
const comment = new Comment({
    post,user,body
})

// save the new comment into the databse
const savedComment = await comment.save();

// find the post by id, add the new commeng to its comments array
const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments:savedComment._id}}, {new: true})

    } catch (error) {
        
    }
 }