var http = require( 'http' )
var bl   = require( 'bl' )

let url = process.argv[2]

http.get( url, function (response){
    response.setEncoding( 'utf8' )
    response.pipe( bl( function(err, data){
      if( err ){
          return console.log( "Error: " + err )
      } 
      console.log( data.toString().length )
      console.log( data.toString() )
    }) )

    response.on( 'error', console.error )
}).on( 'error', console.error )
