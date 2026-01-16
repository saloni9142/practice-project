const express = require ("express");
const app = express();

// load config from env file

require("dotenv").config();
const PORT = process.env.PORT|| 4000;

// middleware to parse json request body
app.use(express.json());

//  import route for todo api
const blogRoutes = require("./routes/blog");
// mount the todo api routes
app.use("/api/v1/blogs", blogRoutes);


// server start
app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
    
})
// connect to the databse
const dbConnect = require("./config/database")
    dbConnect();

    // default route
    app.get("/", (req, res)=>{
        res.send(`<h1> this is homepage </h1>`)
    })