const bcrypt= require("bcrypt");
const User = require("../models/User");
const { jwt } = require("jsonwebtoken");

// signup route handler

exports.signup= async(req, res)=>{
    try {
        const {name,email, password, role} = req.body;
       const existingUSer = await User.findOne({email});
       if(existingUSer){
        return res.status(400).json({
            success: false,
            message: " USer already exists"
        })
       }

    //    secure password

    let hashedPasword;
    try {
        hashedPasword = await bcrypt.hash(password, 10);
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'error inn hasing password'
        })
        
    }

    //  create entry for user
    const user = await User.create({
        name, email,password:hashedPasword,role
    })

    return res.status(201).json({
        success:true,
        message: "USer ctaeted Successfully"
    })


        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"user cannot be registerd, plase try again later"
        });

        
    }
}

exports.login= async(req,res)=>{
    try {
        // data fetch 
        const{email, password} = req.body;
        // validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "please fill all the details carefully"
            })
        }

        // check for registerd user
        const user = await User.findOne({email});
        // if not a registerd user
        if(!user){
            return res.status(401).json({
                success: false,
                message: "user is not registered"
            })
        }

        const payload ={
            email : user.email,
            id: user._id,
            role: user.role,
        }
        // verify password nad gebnerate a jwt token
        if( await bcrypt.compare(password, user.password)){
            // password match
            let token = jwt.sign(payload,process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            });
            user.token=token;
            user.password = undefined;

            const options={
                expires: new Date(Date.now() + 3*24 *60*60*1000),
                httpOnly:true,
            }
            res.cookie("token", token,options).status(200).json({
                success: true,
                token,
                user,
                message:"user logged in successfully"
            });
            
            
        }
        else{
            // password do not match
            return res.status(403).json({
                success: false,
                message:"Password incorect"
            })
        }

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"failed"

        })
        
        
    }
}