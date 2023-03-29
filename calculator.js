let a=prompt("enter first number")
a=Number.parseFloat(a)
let b=prompt("enter second number")
b=Number.parseFloat(b)
const operator=prompt("enter opertor")
switch(operator)
{
case '+':console.log(a+b)
break;
case '-':console.log(a-b)
break;
case '*':console.log(a*b)
break;
case '/':console.log(a/b)
break;
default:console.log("Invalid operation")
}