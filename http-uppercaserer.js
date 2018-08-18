var http = require( 'http' )
var map  = require('through2-map')

var server = http.createServer(function (req, res) {
    // res.writeHead(200, { 'content-type': 'text/plain' })

    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    req.pipe( 
        map(function (chunk) {
            return chunk.toString().toUpperCase()
        })
    ).pipe(res)
})

// let uppercaseit = map(function (chunk) {
//     return chunk.toString().toUpperCase()
// })

// var server = http.createServer(function (req, res) {
//     if( req.method === 'POST' ){
//         req.pipe( uppercaseit ).pipe( res )
//     }
// })

server.listen(Number(process.argv[2]))


// inStream.pipe(map(function (chunk) {
//   return chunk.toString().split('').reverse().join('')
// })).pipe(outStream)

// http.get( url, function (response){
//     response.setEncoding( 'utf8' )
//     response.pipe( bl( function(err, data){
//       if( err ){
//           return console.log( "Error: " + err )
//       } 
//       console.log( data.toString().length )
//       console.log( data.toString() )
//     }) )

//     response.on( 'error', console.error )
// }).on( 'error', console.error )


// let server = http.createServer( function(request, response ){
//     response.writeHead( 200,{
//         'Content-Type':'text/plain'
//     })

//     content = fs.createReadStream( file )
//     content.on('readable', () => {
//         response.end( content.read() )
//     })
// })

// server.listen(port)

