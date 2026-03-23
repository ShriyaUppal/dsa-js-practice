const fs = require('fs');

fs.unlink('output.txt', function(err){
    if(err){
        console.log("Getting error while deleting", err);
        return;
    }
    console.log("File deleted successfully");
})