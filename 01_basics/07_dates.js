let myDate = new Date()
console.log(myDate)//not readable 
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(typeof myDate)//object 

let myCreatedDate = new Date(2025,0,23,5,3)//year, month, date - month always start from 0 in JS
console.log(myCreatedDate.toLocaleString())
let createdDate = new Date("2025-01-14")//yy-mm-dd
let createdDate1 = new Date("01-14-2025")//mm-dd-yy
console.log(createdDate.toLocaleString())
console.log(createdDate1.toLocaleString())
let myTimeStamp = Date.now()//value in milli sec
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())//value in milli sec 
console.log(Math.floor(Date.now()/1000))//getting value in seconds 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.toLocaleString("default" , { 
    weekday : "long"
}))

//`${newDate.getDay()}`