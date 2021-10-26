const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.setPrompt('Enter data: ');
readline.prompt();

const revertSrting = (str: string) => {
    return str.split('').reverse().join('')
}

readline.on('line', function(line: string) {
    console.log(revertSrting(line));
    readline.prompt();
}).on('close', function() {
    console.log('Closed');
    process.exit(0);
});
