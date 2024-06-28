//console.log(process.argv);
let command = process.argv[2];
let num1Str = process.argv[3];
let num2Str = process.argv[4];

let result = 0;
let num1 = Number(num1Str);
let num2 = Number(num2Str);
if ((!num1Str) || (!num2Str)){
   console.log("undefined parameters");
   return;
}
console.log("Command is " + command);
switch(command) {
case 'add' : 
     console.log("Executing add");
     result = num1 + num2;
     break;
case 'subtract': 
     console.log("Executing subtract");
     result = num1 - num2;
     break;
case 'multiply': 
     console.log("Executing multiply");
     result = num1 * num2;
     break;
case 'divide': 
     console.log("Executing divide");
     if (num2 === 0)
       console.log("Cannot divide by 0");
       return;
     result = num1 * num2;
     break;
 default:
     console.log("Unsupported command");
}

//process.stdout.write(`${result}`);
console.log(result);
return result;

