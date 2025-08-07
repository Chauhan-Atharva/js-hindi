console.log(2 > 1)
//comparison answers always returned in true/false
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)
//different data types 
console.log("2" > 1)//true- implicitly converted to number
console.log("02" > 1)//true 
//avoid such comparisons 
console.log(null > 0 )
console.log( null == 0 )
console.log(null >= 0)
//all false 
// ==(equality ops) and <, <= etc are comparison ops 
//== don't convert null to 0 but comparison ops convert null to 0 
// === - strict check - no conversions - checks data type and value
console.log("2" === 2)
//avoid such comparisons 
console.log(undefined > 0 )
console.log( undefined == 0 )
console.log(undefined >= 0)
