// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// fetch("https://something.com").then().catch().finally()
const promise1 = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, network calls are async tasks
    setTimeout(function(){
        console.log("Async task is complete"
            
        );
        resolve();
    },1000);
} );//promise object created 
//then connected to resolve
promise1.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai", email: "chai@example.com"})
    },1000)
})
promise3.then(function(user){//parameter passed in resolve get passed to then
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
           let error = false; 
           if(error != true){
            resolve({username:"hitesh", password:123});
           }
           else{
            reject("Error: Something went wrong");
           }
    },1000);
})
//this code will give error
// const username = promise4.then((user)=>{
//     console.log(user);
//     return user.username;
// });
// console.log(username);
//then chaining 
//write code in diff line for better viewing 
promise4
.then((user)=>{
    console.log(user);
    return user.username;//this gets passed on to then in lower chain
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);  
}).finally(()=> {console.log("the promise is either resolved or rejected");})
//finally will always get printed 

const promise5 = new Promise(function(resolve,reject){
     setTimeout(function(){
           let error = true; 
           if(error != true){
            resolve({username:"javascript", password:"123"});
           }
           else{
            reject("Error: JS went wrong");
           }
    },1000);
})
//another syntax: important in database connectivity 
async function consumePromise5(){
    try {
        const response = await promise5 //awaits stores final output of promise5 
        //response has a object - executes if no error
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();//response.json will take time to run so use await
//         .json() - will return a promise so always use await or then/catch
//         console.log(typeof(data));//object 
//         console.log(data);//prints as an array of objects
//     } catch (error) {
//         console.log("E: ",error);  
//     }
// }
// getAllUsers();
fetch("https://api.github.com/users/hiteshchaudhary").then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{ console.log(error);
})
;




