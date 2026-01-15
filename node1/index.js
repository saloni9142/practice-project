
const fs = require("fs")
// fs.writeFile("hy.txt", "i am saloni", function(err){
fs.appendFile("hey.text", "mai to acha hai", function(err){
    if(err)
        console.log(err);
    else{
        console.log("done");
        
    }
        
})