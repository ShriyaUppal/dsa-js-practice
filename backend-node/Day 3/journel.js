const fs = require('fs');

const entry = process.argv[2];
if(!entry)
{
    console.log("Please provide a journel entry");
    console.log("Usage: node journel.js 'your entry here'");
    process.exit(1);
}

const date = new Date().toLocaleString();
const line = `[${date}] ${entry} \n`;
fs.appendFile('journel.txt', line, 'utf8', function(err){
    if(err){
        console.log("Error in saving file", err);
        return;
    }
    console.log("Journel Entry saved!");
})