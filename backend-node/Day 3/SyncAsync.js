const fs = require('fs');

const data1 = fs.readFileSync('notes.txt', 'utf8');
console.log(data1);

console.log("This runs after");


const data2 = fs.readFile('notes.txt', 'utf8', function(err, data2){
    if(err){
        console.log("Getting Error while reading!", err);
        return;
    }
    console.log(data2);
});
console.log("This runs immediately, before file is ready");



