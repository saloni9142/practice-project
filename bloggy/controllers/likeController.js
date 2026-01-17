const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost= async(req, res)=>{
    try {
         
//   fetch data from req body
   const {post, user}= req.body;
//    crete a comment object
const like = new Like({
    post,user
})

// save the new comment into the databse
const savedLike = await like.save();

// find the post by id, add the new like to its comments array
const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes:savedLike._id}}, {new: true})
// .populate("likes") // populate comments array with comment documents
// .exec();

res.json({
    post: updatedPost
})

    } catch (error) {
        return res.status(500).json({
            error: "Error while creating like",
        })
        
    }
 }


 exports.unLikePost= async(req, res)=>{
    try {
         
//   fetch data from req body
   const {post, like}= req.body;
//    

// save the new comment into the databse
const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

//  u[date post colection]
const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {likes:deletedLike._id}}, {new: true})


res.json({
    post: updatedPost,
})

    } catch (error) {
        return res.status(500).json({
            error: "Error while Unlike post",
        })
        
    }
 }