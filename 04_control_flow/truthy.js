// const userEmail = "h@gmail.com"
 const userEmail = ""

if(userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}
//falsy values : 
// false, 0, undefined, -0, BigInt 0n, "", null, NaN(not a number)
//only these are falsy values
//Rest all truthy values : 
//eg "0", 'false'(single quotes also string), " ",[], function(){} -> empty function 

const arr = []
if(arr.length === 0 ){
    console.log("array is empty");
}
const obj = {}
if(Object.keys(obj).length === 0 ){
    console.log("object is empty");
}
//Remember these 
// false == 0
// true
// false == ''
// true
// 0 == ''
// true

//NUllish Coalescing Operator(??): only works for null and undefined 
let val1 ; 
// val1 = 5 ?? 10; //5
// val1 = null ?? 10; //10
// val1 = undefined ?? 15;//15
val1 = null ?? 10 ?? 15; //10 - first value assigned 
console.log(val1);

//Ternary Operator - condition ? true: false;
const iceTeaPrice = 100 ; 
iceTeaPrice>=80? console.log("more than 80"): console.log("less than 80");
;
