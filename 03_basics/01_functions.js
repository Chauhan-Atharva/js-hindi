
function sayMyName(){
console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")

}
sayMyName//function reference 
sayMyName()//execution 
function addTwoNumbers(number1, number2){
    //number1 and number2 are parameters - in function definition 
    console.log(number1+ number2);   
}
addTwoNumbers();//NaN - no number 
addTwoNumbers(3,4);//3 , 4 are arguments - actual values 
addTwoNumbers(3,"4");//34
addTwoNumbers(3,"a");//3a
addTwoNumbers(3,null)//3
function addTwoNumbers(number1, number2){
    //number1 and number2 are parameters - in function definition 
    //returing a value from function 
    let result = number1+ number2   
    return result;//as soon as return is hit - the compiler goes out of the function 
    console.log(result);   
}
const result = addTwoNumbers(3,8);
console.log("result : ", result);

function loginUserMessage(userName= "Sam"){//default value of parameter 
    // if(userName=== undefined){
    //     console.log("Please enter a username")
    //     return;//function terminates
    // }
    if(!userName){//if not true 
        console.log("Please enter a username")
        return;//function terminates
    }
    return `${userName} just logged in `//a string is returned 
}
//default parameter values is used if no value is passed in arguments 
console.log(loginUserMessage("Atharva"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());//undefined as userName is not given
//we don't know how many items are there in the cart but we need to add all of them 
function calculateCartPrice(...num1){//gives all the arguments in the array - rest operator
    return num1;
}
console.log(calculateCartPrice(200,400,500))
//... - rest and spread operator 
function calculateCartPrice1(val1, val2, ...num1){//gives all the arguments in the array - rest operator
    return num1;
}
console.log(calculateCartPrice1(200,400,500,600))
//200 and 300 goees into val1 and val2 respectively rest all goes into the array

const user = {
    userName: "hitesh",
    price : 199
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);   
}
// handleObject(user)
handleObject({userName:"Sam",price:699})

const myNewArray = [200,400,100,600]

function returnSecondValue(arr){
    return arr[1];
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,500,67,90]))