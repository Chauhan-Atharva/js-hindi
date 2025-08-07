let score = "33abc"
let sc = null
console.log(Number(sc))
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)//convert into number data type
console.log(typeof valueInNumber)
console.log(valueInNumber)//NaN 
let sc1 = undefined
let value1 = Number(sc1)
console.log(value1)
let sc2 = true
let value2 = Number(sc2)
console.log(value2)
//"33" => 33
//"33abc" => Nan
//true => 1 false => 0 
//number to boolean 
let isLoggedIn = 0 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)
//1 => true ; 0=> false
//"" => false 
//"hitesh" => true 
//convert to string 
let someNumber = 33 
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
