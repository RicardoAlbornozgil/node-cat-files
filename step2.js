const fs = require('fs');
const process = require('process');
const axios = require('axios');

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


/** Print out html content of url */
async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error('Error fetching ${url}: ${err}');
        process.exit(1);
    }
}

let path = process.argv[2];

if(path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}