const Todo=  require("../models/Todo");
//  define route handler

exports.updateTodo = async(req,res)=>{
    try {
        const {id} =req.params;
        const {title, description} =req.body;
        const todo = await Todo.findByIdAndUpdate(id,
            {title, description}
        )
         res.status(200)
            .json({
                success: true,
                data:todo,
                message: `Todo ${id} data updated`
            })
        
    } catch (error) {
        
         console.error(err);
        res.status(500)
        .json({
            success : false,
            error: err.message,
            message: "todo not updated"
        })
    }

}