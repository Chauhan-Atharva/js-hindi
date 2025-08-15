//for of loop 
["","",""]//string inside array
[{},{},{}]//objects inside array
const arr = [1,2,3,4,5]

for (const num of arr) {//for each loop syntax 
    //num is each element of arr
    console.log(num);   
}
const str = "Hello World!"
for(const i of str){
    //i is each character of str(string)
    console.log(i);
}

//Maps 
const map = new Map()
//has key - value pair 
map.set("IN","India")//IN - key , India = value 
map.set("USA","United States of America")
map.set("FR","France")
map.set("IN","india")//two same key values can't exist together 
console.log(map);
//iteration of map 
for(const key of map){
    console.log(key);//array of [key, value] for each pair 
}
for(const [key,value] of map){
    console.log(key, " :- ", value);
}

const myObj = {
    game1: "NFS",
    game2:"BGMI",
    game3 : "SpiderMan"
}
// for(const [key,value] of myObj){ - error as object is not iterable 
//     console.log(key, " :- ", value);
// }
//for each loop don't work with objects 
//for each loop directly takes values 