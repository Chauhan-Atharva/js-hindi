//Primitive data types 
//7 in number : String , null, Number, Boolean, undefined, Symbol, BigInt(some big values)

//JS - dynamically typed language - as it doesn't require explicit variables declaration 
//like in java : int aa = 100
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // or let userEmail= undefined; 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
const bigNumber = 2345974087387892534n // n used to make it bigint 
console.log(typeof bigNumber)//bigint 
//Reference/ Non Primitive Data Types

//Arrays, Objects, Functions 
const heroes = ["skatiman", "naagraj","doga"]//array
let myObj = {//oject inside curly braces
    name: "atharva",//key:value data stored
    age: 19,
}
//function 
const myFunction = function(){
    console.log("hello world")
}
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof id)
console.log(typeof heroes)
/* typeof operator : 
 number - number 
 string - string 
 function - function 
 symbol - symbol 
 array - object 
 bigint - bigint 
 boolean - boolean 
 null - object 
 undefined - undefined 
*/
//************************************** Memory ******************************************* 
//stack - primitive and heap - non-primitve 
//stack - we get a copy of variable 
//heap - we get a reference of variable 
let myYoutubeName = "atharvachauhan" //primitive 
let anotherName = myYoutubeName
anotherName = "chai aur code"
console.log(anotherName)
console.log(myYoutubeName)
let user1 = {//non primitive type
    email: "user@google.com",
    upi: "himy@8890"
}
let user2 = user1
user2.email = "atharva.st.050@gmail.com"
console.log(user1.email)
console.log(user2.email)