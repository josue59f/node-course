const fs = require('fs')
// const book = {
//     name: 'Josue',
//     planet: 'Earth',
//     age: 21
// }

// converts string into JSON object 
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// converts JSON object into string -- allows access to properties
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// read file and load data
const dataBuffer = fs.readFileSync('1-json.json')
//convert that buffer into a readable string
const dataJSON = dataBuffer.toString()
// parse into an object
const data = JSON.parse(dataJSON)

console.log(data)

 data.name = 'josue'
 data.age = 21

 console.log(data);
 // turn object into string
 const bookstring = JSON.stringify(data)
 // upload string to file
  fs.writeFileSync("1-json.json", bookstring);

  










