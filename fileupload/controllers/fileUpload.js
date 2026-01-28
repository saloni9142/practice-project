const File= require("../models/File");

// localfileupload-> handlwr function

exports.localFileUpload = async (req,res)=>{
    try {
        // fetch file
        const file= req.files.file;
        console.log(("file aagyi jee->",file));

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("path",path);
        file.mv(path, (err)=>{
            console.log(err);
            

        });
        res.json({
            success: true,
            message: "local file uploaded succesfully"
        })
        
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

// i mage upload ka handler
exports.imageUpload = async(req,res)=>{
    try {

        // data fetch
        const {name, tags,email} = req.body;
        console.log(name, tags, email);

        const file= req.files.imageFile;
        console.log(file);
        
        // valodation
        const supportedTypes =["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success: false,
                message:"file format not supppoeted"
            })
        }
        
    } catch (error) {
        
    }
}