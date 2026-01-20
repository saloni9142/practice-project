const express  = require("express");
const router= express.Router();

const {login,signup}= require("../controllers/Auth");
const {auth, isStudent,isAdmin}= require("../middleware/auth")

router.post("/signup", signup);
 router.post("/login", login);




//  testing protected routes for single middlieware
router.get("/test", auth,(req,res)=>{
    res.json({
        success:true,
        message: 'welcome to the protected route for student'
        });

})

//  protected
router.get("/student", auth ,isStudent,(req,res)=>{
    res.json({
        success:true,
        message: 'welcome to the protected route for student'
        });

});

router.get("/admin", auth , isAdmin,(req,res)=>{
    res.json({
        success:true,
        message: 'welcome to the protected route for student'
        });

})

module.exports= router