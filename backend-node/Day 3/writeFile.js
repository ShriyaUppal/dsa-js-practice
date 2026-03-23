const fs = require('fs');

fs.writeFile('output.txt',  'This file was created by Node.js!', 'utf8', function(err){
    if(err)
    {
        console.log("Getting while writing the file", err);
        return;
    }
    console.log("File created successfully");
})