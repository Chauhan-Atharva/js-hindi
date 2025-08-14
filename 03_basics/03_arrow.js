const user = {
    username: "atharva",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//this is used to refer to current context
        console.log(this);//gives the object - current context 
    }
}

user.welcomeMessage()//atharva 
user.username = "sam"
user.welcomeMessage()//sam

console.log(this);//{} - gives empty object 
//in browser when we print this - we get the windows global object 

// function chai(){
//     let username = "hitesh"
//     console.log(this); // will give the gobal object of node js 
// }
//so majorly this keyword is used only with objects 
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {//arrow function 
    let username = "hitesh"
    console.log(this.username);//undefined 
    //you can't use this in arrow func also
    console.log(this)//emtpy object - {} - this is difference b/w func and arrow func
}
chai()

const addTwo = (num1, num2) => {//arrow func with parameters 
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2 - this is also correct 
//Implicit Arrow func 
//Only one line code 
const addTwo1 = (num1, num2) => ( num1 + num2 )//no need to write return statement 

const addTwo2 = (num1, num2) => ({username: "hitesh"})//returning an object from arrow func


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()