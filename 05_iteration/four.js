const myObj = {
    js: "javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

//for in loop 
for (const key in myObj) {
    //key -> key of object 
    // console.log(key);//all keys printed 
    // console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);   
}

const programming = ["cpp","js","python","java","rb"]
for (const key in programming) {
    console.log(key)//keys of array - 0,1,2,3,4
    console.log(programming[key]);   
}
//for in loop directly takes key values 
const map = new Map()
//has key - value pair 
map.set("IN","India")//IN - key , India = value 
map.set("USA","United States of America")
map.set("FR","France")
map.set("IN","india")//two same key values can't exist together 
//map is not iterable using for in loops 
// for (const key in map) {
//     console.log(key);
// }