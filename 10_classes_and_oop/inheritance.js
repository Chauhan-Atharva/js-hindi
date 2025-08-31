class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(` User name is = ${this.username}`);
    }
}
class Teacher extends User{//Teacher can access User class
    constructor(username,email, password){
        super(username);//keyword - calls the parent class
        this.email = email ;
        this.password = password;
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@teacher.com", 123);//new keyword is important
chai.addCourse();
const masalaChai = new User("masalaChai");
// masalaChai.addCourse();//error - addCourse is not func of User class
masalaChai.logMe();
chai.logMe();
console.log(chai === masalaChai);//false
console.log(chai === Teacher);//false
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true



