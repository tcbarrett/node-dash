let fs   = require('fs')
let path = require('path');

let dir = process.argv[2]
let ext = '.' + process.argv[3]

fs.readdir( dir, function (err, list ){
    let filteredFiles = list.filter( function (file){
        return path.extname(file) === ext
    });
    console.log( filteredFiles.join('\n') )
})