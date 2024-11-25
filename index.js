console.log("filename",__filename);
console.log("dirname",__dirname);
const path = require("path");
const fs = require("fs");

fs.readFile('example.txt','utf8',(err,data)=>{
  if(err){
    console.error("Error reading the file: ",err);
  }
  console.log("Data: ",data);
});

const filename = path.dirname(__filename);
const dirname = path.basename(__dirname);
const extension = path.extname(__filename);

console.log("filename", filename);  
console.log("dirname", dirname);
console.log("extension", extension);
