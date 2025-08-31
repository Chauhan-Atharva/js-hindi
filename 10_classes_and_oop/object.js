function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//{} - empty parenthesis 

function createUser(username, score){
    this.username = username;//this sets/uses current context
    this.score = score;
}
//injecting a function 
createUser.prototype.increment = function(){
    this.score++;//current context - jis ne bhi bulaya hai uska increment kar do
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}
const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);//new keyword is extremely important 

chai.printMe();//error - can't read properties of undefined - if new keyword is not included
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



