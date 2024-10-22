// console.log("Hello world!");
const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!" , (err) => {
    if (err) throw err;
    console.log("File has been saved!");
});