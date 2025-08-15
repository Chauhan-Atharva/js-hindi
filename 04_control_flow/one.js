//if statement 
if(true){//executed 

}
if(false){//not executed

}
const isUserLoggedIn = true; 
const temp = 51
if(temp < 50){
    console.log("less than 50");
}
else{//else block will be executed if condition is false
console.log("more than 50 ");
}
if(isUserLoggedIn){
}
if(2 === "2"){
    console.log("executed")
}
//<,>,<=,>= , ==(equal to) , !=,  (Relational operators)-> always gives output in true/false
//= (assignment operator)
//===(triple equal to ) , checks value as well as the data type also 
//!== not equal to -> negative of ===(triple equal to)

const score = 200
if(score >100){
    const power = "fly"
    console.log(`user power: ${power}`);   
}
// console.log(`user power: ${power}`); - error 
const balance = 1000

if(balance>500) console.log("test");//implicit scope - only one line code 
if(balance >500) console.log("test"),
console.log("test 2");//not good practice but really avoid it 
// if - else if
if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");   
}

const userLoggedIn = true
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true; 
//&&(and) , ||(or), !(not) - Logical Operators
if(userLoggedIn && debitCard ){
    console.log("Allow to buy courses");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}
