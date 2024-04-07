const fs = require('fs');
const process = require('process');

/** Print out contents of file at path */
function cat(path) {
   fs.readFile(path, 'utf8', function (err,data) {
    if(err) {
        console.log('Error reading ${path}: ${err}');
        process.exit(1);
    } else {
        console.log(data);
    }
   });
}

cat(process.argv[2]);