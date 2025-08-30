const user = {
    username: "hitesh",
    loginCount: 8,
    singnedIn : true,
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);//object 
        //this gives current context 
        //this keyword helps in getting the reference to the object 
    }
}
console.log(this);//empty parenthesis 

console.log(user.username);
console.log(user["singnedIn"]);
user.getUserDetails();

//constructor function 
// const promise1 = new Promise();//new is constructor func 
const date = new Date();//creates instances/copy of object literal

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function (){
        console.log(`Welcome ${this.username}`);
    }
    // return (this); - even if you don't write this 
    //this will always be returned - it is implicitly defined
}
const user1 = new User("hitesh", 23, true);
const user2=  new User("chai aur code", 45, false);//overrides the value given by user1
console.log(user1);
console.log(user2);
console.log(user1.constructor);//gives a reference to User function 
console.log(user1 instanceof User);//true
console.log(user1 instanceof Object);//true - all objects are from Object 



//new keyword -> a new empty object is created 
//a constructor func is called 
//all the arguments are then injected 
//you get the result







