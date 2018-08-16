var http = require( 'http' )
// var bl   = require( 'bl' )

let port = process.argv[2]

let server = http.createServer( function(request, response ){
    let hwtxt = 'HTTP Hello World!'
    response.writeHead( 200,{
        'Content-Length': hwtxt.length,
        'Content-Type':'text/plain'
    })
    console.log('header sent')
    response.end( hwtxt )
    console.log( 'request conplete')
})

server.listen(port)