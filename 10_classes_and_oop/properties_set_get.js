function User(email, password){
    this._email = email;
    this._password = password;
    Object.defineProperty(this, 'email', {
        get: function (){
            return this._email.toUpperCasea();
        },
        set : function(value){
            this._email = value; 
        }
    });
    Object.defineProperty(this, 'password', {
        get: function (){
            return this._password.toUpperCasea();
        },
        set : function(value){
            this._passwordemail = value; 
        }
    });
}
const chai = new User("chai@chia.com", "chai");
console.log(chai.email);

