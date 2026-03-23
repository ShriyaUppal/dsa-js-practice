const fs = require('fs');
fs.readFile('notes.txt', 'utf8', function(err, data) {
    if(err)
    {
        console.log("Error", err);
        return;
    }
    console.log("File Contents");
    console.log(data);
})