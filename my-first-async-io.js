let fs = require('fs')

fs.readFile( process.argv[2], 'utf8', function readFileCallback( err, data ){
    if( err ){
        return console.log( err )
    }
    let lines = data.split('\n').length - 1
    console.log( lines )
    // reportLines( lines )
})

function reportLines( lines ){
    console.log( lines )
}