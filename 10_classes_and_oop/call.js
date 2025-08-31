function setUserName(username){
    //complex DB calls
    this.username = username;//here this is reference to setUserName func
    console.log("called");
    
}
function createUser(username, email, password){
    setUserName.call(this,username);//as soon as func is called it's execution context is destroyed
    //this is passed so that we get the reference 
    //it passes the current execution context to some other function 
    this.email = email; 
    this.password = password;
}
const chai = new createUser("chai" , "chai@facebook.com" , "124");
console.log(chai);//object returned but no username is set
