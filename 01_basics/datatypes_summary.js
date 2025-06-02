// Primitive 

// 7 categories/types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score =100
const scoreValue = 1000.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId= Symbol('123');
console.log(id==anotherId);


// const bigNumber = 3456543576654356754n

//Reference Type ( Non Primitive type)

// array , Objects, functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



 //++++++++++++++++++++++++++++++++++++++++++

 // stack  (Primitive), heap (Non-Primitive)

 let myYoutubename = "hiteshchoudharydotcom"

 let anothername = myYoutubename

//  console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne
 userTwo.email = "hitesh@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);