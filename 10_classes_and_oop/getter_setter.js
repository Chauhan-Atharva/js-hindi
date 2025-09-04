class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    //imp - getter and setter always have the same name as of the property 
    get email(){//always have return 
        return this._email.toUpperCase();
    }
    set email(value){//no return 
         this._email = value;
    }
    get password(){//always need to define getter and setter both for a property
        // return this.password.toUpperCase();
        // return this._password.toUpperCase();
        return `${this._password}hitesh`
    }//runs when property is called outside class

    set password(value){//setter
        this._password = value
        //error -> maximum call stack size exceeded 
    }
}
const nick = new User("nick@gmail.com", "abc");
console.log(nick.password);//get function runs
console.log(nick.email);

