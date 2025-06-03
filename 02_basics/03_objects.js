//singleton
//object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 10,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}
//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);
//  console.log(JsUser[mySym]);
 

//  JsUser.email = "hitesh@chatgpt.com"
//  Object.freeze(JsUser)
//  console.log(JsUser);
 
 
 JsUser.greeting = function(){
    console.log("hello js user");
    }
 JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
    }
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 