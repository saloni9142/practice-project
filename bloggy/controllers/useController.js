export const employ =async (req, res) => {
    
    try {

        const {name,email,salary} = req.body;
        const post = new Post({
            name,email,salary
        })
        const savePost = await post.save();
        if(salary<10000){
            res.
        }
            

        
    } catch (error) {
        
    }

};