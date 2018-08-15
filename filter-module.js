let fs   = require('fs')
let path = require('path');

module.exports = function ( dir, ext, callback){
    fs.readdir( dir, function (err, list ){
        if( err ){
            return callback( err )
        }
        let filteredFiles = list.filter( function (file){
            return path.extname(file) === '.' + ext
        });
        return callback( null, filteredFiles )
    })
}

