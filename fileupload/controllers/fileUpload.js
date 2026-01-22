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