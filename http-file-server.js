var http = require( 'http' )
var fs   = require( 'fs' )
// var bl   = require( 'bl' )

let port = process.argv[2]
let file = process.argv[3]

let server = http.createServer( function(request, response ){
    response.writeHead( 200,{
        'Content-Type':'text/plain'
    })

    content = fs.createReadStream( file )
    content.on('readable', () => {
        response.end( content.read() )
    })
})

server.listen(port)

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })

//     fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))