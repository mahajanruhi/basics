for(let i = 1; i <= 5; i++) {
    console.log("i=", i);
}
console.log("loop has ended");
//while loop
let x =3;
while (x <= 5) {
    console.log("x=", x);
    x++;
}
//dowhileloop
let y=4;
do {
     console.log("y=",y);
y++; }
while(y <= 3);
//for-of loop 
let str ="myname";   //for of loop used for array,string. // for in loop used for objects
for (let p of str) {
    console.log("p=", p);
}
// string 
let string ="hello everyone"
y=string.length // we use different methods of string
console.log(string); 
console.log(y); 

//Array
let marks = [67,87,56,29,45];
console.log(marks); 
//array use for, for of, for in loops
//different methods of array use

//Funtions
function myFunction() {
    console.log("welcome to javasript");
    console.log("we learn basics");
}
myFunction(); 
function sum(j, k) {
    console.log(j + k);
}
sum(4,5);
//arrowfunction
const arrowmul = (r, p) => {
    console.log(r*p);
}
arrowmul(5,5);
//foreachfunnction
let array = [1,2,3,4,5];
array.forEach(function printVal(val){ //Write this also with arrow function
    console.log(val);
});
//maparray
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val)=> {
    return val * 2;
});
console.log(newArr);
//filter
let num = [1, 2, 3, 4, 5, 6];
let newnum = num.filter((val) => {
    return val % 2 === 0;
});
console.log(newnum);
// Events
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("button was clicked");

}
//clases and objects
class Maruticar {
    constructor(brand) {
      console.log ("new object");
      this.brand = brand;
    }
    start () {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}
    let fortuner = new Maruticar("fortuner")
    console.log(fortuner);
