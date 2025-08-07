//************************************conversions************************************** 
// let score = "33abc"
// let sc = null
// console.log(Number(sc))
// console.log(typeof score);
// console.log(typeof(score));
// let valueInNumber = Number(score)//convert into number data type
// console.log(typeof valueInNumber)
// console.log(valueInNumber)//NaN 
// let sc1 = undefined
// let value1 = Number(sc1)
// console.log(value1)
// let sc2 = true
// let value2 = Number(sc2)
// console.log(value2)
// //"33" => 33
// //"33abc" => Nan
// //true => 1 false => 0 
// //number to boolean 
// let isLoggedIn = 0 
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)
// //1 => true ; 0=> false
// //"" => false 
// //"hitesh" => true 
// //convert to string 
// let someNumber = 33 
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
//*******************************Operations ***********************************************
let value = 3; 
let negValue = -value
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)//power
console.log(2/2)
console.log(2%2)
let str1 = "hello"
let str2 = " hitesh"
let str3 = str1+ str2; //string concatenation
console.log(str3)
console.log("1" + 2)//12
console.log(1+ "2")//12
console.log("1" + 2 +2)//122
console.log(1+2+"2")//32
console.log( 3 + 4 * 5 % 3)//messy code
console.log(+true)//messy code
console.log(+"")//not advisable
let num1, num2 , num3 //messy code
num1 = num2 = num3 = 2+2 
let gameCounter = 100
gameCounter ++; //postfix 
++gameCounter;//prefix 
console.log(gameCounter)