"use strict";
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.setPrompt('Enter data: ');
readline.prompt();
var revertSrting = function (str) {
    return str.split('').reverse().join('');
};
readline.on('line', function (line) {
    console.log(revertSrting(line));
    readline.prompt();
}).on('close', function () {
    console.log('Closed');
    process.exit(0);
});
