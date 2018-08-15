var filterModule = require( './filter-module.js' )

let dir = process.argv[2]
let ext = process.argv[3]

filterModule(dir, ext, function report( err, data ){
    if( err ){
        console.log( "ERROR" )
        console.log( err )
        return
    }
    console.log( data.join('\n') )
})