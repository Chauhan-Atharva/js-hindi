const score = 400
const balance= new Number(100)
console.log(score)
console.log(balance)
console.log(balance.toString())
console.log(typeof balance.toString())
console.log(balance.toFixed(2))//toFixed - gives/ truncates the decimal digits 
//gives the no of digits after teh decimal point
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))//no of digits to be kept in the answer 
//round off the digit
const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3))
const hunderds = 1000000
console.log(hunderds.toLocaleString())//inserts , in number
console.log(hunderds.toLocaleString("en-IN"))
//***************************************** Maths ********************************************** 
//maths is a library
console.log(Math);
console.log(Math.abs(-4))//makes -ve value to +ve 
console.log(Math.round(4.6))//round off
console.log(Math.ceil(4.1))//next bigger int
console.log(Math.floor(4.999))//previous smaller int 
console.log(Math.min(4,6,85,4,3,5,33))
console.log(Math.max(66,56,4,643,55))
console.log(Math.random())//gives any random value b/w 0 and 1
console.log(Math.floor((Math.random()*10))+1)
const min = 10 
const max = 20
console.log(Math.floor(Math.random()* (max - min +1))+ min) 