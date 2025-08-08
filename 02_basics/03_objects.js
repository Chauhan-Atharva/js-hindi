//singleton - don't form when formed with literals 
//formed using constructor
//object Literals 

const mySym = Symbol("key1")//define a symbol 
//use symbol as key in object 

const jsUser = {//key: value 
    "full name": "atharva chauhan",
    name: "atharva",
    age: 19,
    [mySym] :"mykeys1",
    location: "delhi",
    email: "atharva@google.com",
    lastLoginDays: ["monday","saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])//only this way to access full name 
console.log(typeof jsUser[mySym])//remember these important cases for accessing the keys in an object 
jsUser.email = "chatgpt.com"//change the values 
// Object.freeze(jsUser)//after this no changes can occur 
jsUser.email = "micro"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())
