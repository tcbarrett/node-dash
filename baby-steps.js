// console.log( process.argv );

let numArgs = process.argv.length;
let total = 0;
for( i=2; i<numArgs; i++ ){
    total += Number( process.argv[i] );
}

console.log( total );