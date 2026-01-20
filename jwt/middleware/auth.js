// auth , isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();
 
exports.auth=(req,res,next)=>{
    try {
        // extarct jwt token
        // pending : lother ways to fetch token
        const token = req.body.token;
        if(!token){
            return res.satatus(401).json({
                success: false,
                message:"token missing"
            })
        }


        // verify the token

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            // why this
            req.user= decode;
            
            
        } catch (error) {
            return res.status(401).json({
                success:false,
                message: "token is invalid"
            })
            
        }
        next();
        
    } catch (error) {
        return res.status(401).json({
                success:false,
                message: "something went wrong, while verifying the toekm"
            })
        
    }
}


exports.isStudent=(req,res,next)=>{
    try {
        if(req.user.role !=="Studnet"){
            return res.status(401).json({
                success: true,
                message:" this is a protected route for student",
            })
        }

        next();

        
    } catch (error) {
         return res.status(500).json({
                success: true,
                message: "user role is not matching"
            })
    }
}
exports.isAdmin= {req,res,next}