var fs = require('fs')

let myFileBuffer = fs.readFileSync( process.argv[2] );
let myFileString = myFileBuffer.toString()
let lines        = myFileString.split('\n')

console.log( lines.length - 1 )