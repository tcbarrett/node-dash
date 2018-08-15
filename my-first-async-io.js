let fs = require('fs')
let lines = undefined
let cheese = 1

// function countLines(){
    cheese = 2
    fs.readFile( process.argv[2], 'utf8', function readFileCallback( err, data ){
        lines = data.toString()
        reportLines( lines.split('\n').length - 1 )
    })
// }

function reportLines( lines ){
    console.log( lines )
}