const fs = require('fs');

fs.appendFile('output.txt', '\nThis line was added by appendFile!', 'utf8', function(err){
    if(err)
    {
        console.log("Getting error in appending data", err);
        return;
    }
    console.log("Line appending successfully.");
})