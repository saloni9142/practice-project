const express = require("express");
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");
const { likePost, unLikePost } = require("../controllers/LikeController");
const router = express.Router();






//  mapping craete
router.post("/comment", createComment)
router.post("/post", createPost)
router.get("/posts", getAllPosts)
router.post("/likes", likePost)
router.post("/unLikes", unLikePost)




//  export
module.exports = router;