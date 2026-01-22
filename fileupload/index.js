const express = require ("express");
const app = express();

// load config from env file

require("dotenv").config();
const PORT = process.env.PORT|| 4000;

// middleware to parse json request body
app.use(express.json());
const fileUpload= require("express-fileupload");
app.use(fileUpload());

//  import route for todo api
const todoRoutes = require("./routes/todo");
// mount the todo api routes
app.use("/api/v1/todos", todoRoutes);


// server start
app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
    
})
// connect to the databse
const dbConnect = require("./config/database")
    dbConnect();

    // cloud se connect karns
    const cloudinary= require("./config/cloudinary");
    cloudinary.cloudinaryConnect();
// api route mount krnah h
const Upload = require("./routes/FileUpload");
app.use("api/v1/upload",Upload);

    // default route
    app.get("/", (req, res)=>{
        res.send(`<h1> this is homepage </h1>`)
    })