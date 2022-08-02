
var fs = require('fs'),
content = fs.readFileSync(process.argv[2],'utf8');
console.log(content.split('\n').length - 1);
