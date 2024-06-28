const {readFileSync, writeFile} = require('fs');

const data = readFileSync("input.txt", "utf-8");

/* 
let outputData = data.toUpperCase();

console.log(outputData);

writeFile('output.txt', outputData, (err) => {
    (err)? console.log("error!!! :" + err) : console.log("file created");
})

*/

const jsonData = readFileSync("data.json", "utf-8");

console.log(jsonData);

let outputData = JSON.parse(jsonData);

console.log(outputData);

outputData.forEach(element => {
    element.updatedAt = new Date();
    console.log(element);
});

console.log(outputData);

writeFile('modifiedData.json', JSON.stringify(outputData), (err) => {
    (err)? console.log("error!!! :" + err) : console.log("file created");
})

