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
co






