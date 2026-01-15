// import model
const Todo=  require("../models/Todo");
//  define route handler

exports.getTodo = async(req,res)=>{
    try {
        // fetch all todo fromdatabase
        const todos = await Todo.find({});


        // response
        res.status(200)
        .json({
            sucess: true,
            data: todos,
            message: "all are fetch"
        })

        
    } catch (err) {
        console.error(err);
        res.status(500)
        .json({
            success : false,
            error: err.message,
            message: "todo not fetch"
        })
        
        
    }
}

exports.getTodoById = async(req,res)=>{
    try {
        // extrcat todo items basics on id
        const id = req.params.id;
        const todo = await Todo.findById(id)



        // data forgiven not found 
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "No data found with given id",

            })
 }

 // data for given id found
            res.status(200)
            .json({
                success: true,
                data:todo,
                message: `Todo ${id} data fetched`
            })
        
    } catch (error) {

         console.error(err);
        res.status(500)
        .json({
            success : false,
            error: err.message,
            message: "todo not fetch"
        })
        
    }
}


