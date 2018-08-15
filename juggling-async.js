var http = require( 'http' )
var bl   = require( 'bl' )

let url1 = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]

let urls    = [ url1, url2, url3 ]
let index   = 0
let results = []

fetch( urls, index, results )

// for( i=0; i<urls.length; i++){
//     fetch( urls, i, results );
// }

function fetch( urls, index, results ){
    if( index >= urls.length ){
        return console.log( results.join('\n') )
    }
    let url = urls[index]
    http.get( url, function (response){
        response.setEncoding( 'utf8' )
        response.pipe( bl( function(err, data){
            if( err ){
                return console.log( "Error: " + err )
            }
            results[index] = data.toString()
            index++
            fetch( urls, index, results )
        }) )

        response.on( 'error', console.error )
    }).on( 'error', console.error )
}

// console.log( results )

function fetchall(urls ){
    urls.forEach( function( url ){
        http.get( url, function (response){
            response.setEncoding( 'utf8' )
            response.pipe( bl( function(err, data){
                if( err ){
                    return console.log( "Error: " + err )
                } 
                // console.log( data.toString() )
            }) )

            response.on( 'error', console.error )
        }).on( 'error', console.error )
    })
}