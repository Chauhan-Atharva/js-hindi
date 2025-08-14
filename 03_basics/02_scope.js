{}//-scope in function, if-else, loop but not object(as it is declaration)
if(true){
let a = 10
const b = 20
var c = 30
console.log(a);//block scope

}
// console.log(a)//a is not defined
// console.log(b)//b is not defined
console.log(c)//this gives output but it should not give output as it not in the block
//so this is why we don't ever use var for declaring varaibles 
let a = 300//global scope 
console.log(a)
//scope in browser and node is different 
//dom - document object model

//Nested Scope
function one(){//nested function 
    const userName = "hitesh"
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website);//outside scope - error
    two();
}
one();
//the execution of program happens line by line - if error found in one line the execution 
//will not continue until that error is removed 

if(true){
    const username = "atharva";
    if(username === "atharva"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website) - error
}
// console.log(username)- error

//+++++++++++++++++++++++++++++++  interesting  ++++++++++++++++++++++++++++++++++++
console.log(addOne(5));//no error - will give right output
function addOne(num){//normal function declaration 
    return num+1
}

// console.log(addTwo(5));//error 
//function stored in a variable
const addTwo = function(num){//variables can hold functions
    return num +2
}
//in place of const let can also be used 
console.log(addTwo(5));


