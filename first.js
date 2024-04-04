//Variable
let Fullname = "Ruhi" //let, const is  a keyword 
console.log (Fullname);

let age = 25
age = 45
age = 65 // let cannot be redeclared but can be updated
console.log (age);
const a = 12
console.log (a);
// block 
{
    let z = 25
    console.log (z);
}
//Arithmetic operators

let x = 5;
let y = 2;
console.log ("x + y = ", x + y);
console.log ("x - y = ", x - y);
console.log ("x * y = ", x * y);
console.log ("x / y = ", x / y);
console.log ("x % y = ", x % y);
//Uniary operator
let g = 5;
let k = 8;
console.log ("g++ = ", g++);
console.log ("++g = ", ++g); //same with others operator
//assignment operator
let c = 4;
let d = 5;
c += 3; // c=c+4
console.log ("c = ", c);
c **=3;
console.log ("c = ", c);
//comparison operator
console.log("c != d", c != d); // same with equal to
//logical operators
let cond1 = c > d;
let cond2 = c === 4;
console.log("cond1 && cond2 = ", cond1 && cond2); //condtion and,or,not
//conditional statement
let ages = 20;
if (age > 18) {
    console.log("eligible");
}
//ifelse //elseif // switch
//alert
alert("hello"); //one time popup
