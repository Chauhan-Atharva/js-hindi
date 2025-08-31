//imp interview ques asked by sir
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// Math.PI = 5;//no effect
// console.log(Math.PI);
console.log(descriptor);//object
//this descriptor has a key - writable: false ->because of which the property can't be changed 
//it also has many checks
const  myNewObj = Object.create(null)
const chai = {
    name:"ginger chai",
    price:250,
    isAvailable : false,
    orderChai: function(){
        console.log(`chai nahi bani`);
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));//undefined if "name" not mentioned
//has writable = true 
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false//enumerable means iterable - available inside loop
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// for (let {key,value} of chai) {//Object is not iterable
//     console.log(`${key}; ${value}`);
// }
for (let [key,value] of Object.entries(chai)) {//Object is not iterable
    if(typeof value !== 'function')//for removing the function from printing
    console.log(`${key}: ${value}`);
}


