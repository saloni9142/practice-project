// import model
const Todo=  require("../models/Todo");
//  define route handler

exports.createTodo = async(req,res)=>{
    try {
        // extarct title and description from request body
        const {title, description} = req.body;
        // create a new Todo and nsert in the db
        const response = await Todo.create({title,description});

        // send a json respisne with a success flag
        res.status(200).json(
            {
                success : true,
                data: response,
                message: "entry craeted sucessfully"
            }
        )
        
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data:"error",
            message : err.message,
        })
        
        }
        
}