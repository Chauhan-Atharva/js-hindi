let myName = "atharva     ";
let myChannel = "chai      ";

// console.log(myName.truelength);//we want a method to remove extra spaces 

let myHeroes = ["thor","spiderman"];
let heroPower ={
    thor:"hammer",
    spiderman:"sling",
    getspiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){//injecting a function in prototype of Object
    console.log(`hitesh is present in all objects`);
}
//heroPower is a function which is derived from Object
heroPower.hitesh();
myHeroes.hitesh();//array
myName.hitesh();//string

Array.prototype.heyHitesh = function(){ //imp - array has power
    console.log(`hitesh says Hello - present in array`);   
}
myHeroes.heyHitesh();
let arr = ["hi"];
arr.heyHitesh();//valid
// heroPower.heyHitesh();

//Inheritance 
const user={
    name: "chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment :"JS assignment",
    fullTime: true,
    __proto__ : TeachingSupport //2 underscore
} 

Teacher.__proto__= user;//__proto__ is an old approach 

//modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher);
//TeachingSupport can access all properties of Teacher

let anotherUserName = "  chai aur code   ";
String.prototype.trueLength = function(){
    console.log(`${this}`);//chai aur code
    // console.log(`${this.name}`);//undefined
    console.log(`True length is : ${this.trim().length}`);
}
//Trim removes all the spaces from front and back of the string 
anotherUserName.trueLength();
"hitesh   ".trueLength();
"iceTea".trueLength();


