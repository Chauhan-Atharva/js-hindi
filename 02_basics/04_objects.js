// const tinderUser = new Object() - singleton object
const tinderUser ={} //non- singleton object 
tinderUser.id = "123abd"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {//object inside object
        userFullName : {//object inside object
            firstName : "hitesh",
            lastName: "chauhan"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {3:"c",4:"d"}
const obj3 = {obj1, obj2}
const obj4 = Object.assign({},obj1,obj2)//returns a new object - empty paranthesis - optional
//{}- is considered as an target object 
console.log(obj3)//has two objects in obj3
const obj5 = {...obj1,...obj2}//spread operator 
console.log(obj4)
console.log(obj5)

const users = [//array of objects 
    {
        id : 1, 
        email:"h@gmail.com",
    },
    {
        id : 1, 
        email:"h@gmail.com"
    },
    {
        id : 1, 
        email:"h@gmail.com"
    },
    {
        id : 1, 
        email:"h@gmail.com"
    }
]
users[1].email//accesssing 1st value of the object

console.log(Object.keys(tinderUser))//output data type is array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//each key value pair in an array inside a whole big array 
console.log(tinderUser.hasOwnProperty("isLoggedIn"))//which keys are availble

const course = { 
    courseName : "js in hindi",
    courseInstructor : "hitesh",
    price : 999
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);//gives - hitesh
const {courseInstructor : ins} = course; 
console.log(ins);
//{} - destructoring of object
//react code: - 
// const navbar = ({company}) => { 

// }
// navbar(company = "hitesh")
//JSON - Api - format in which data is retrieved from backend 
// {
//     "name": "hitesh",
//     "courseName" : "js in hindi",
//     "price" : 999
// }
//sometimes you may get api in form of object 
[
    {},
    {},
    {}
]