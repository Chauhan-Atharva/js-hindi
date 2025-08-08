//array 
//() - parenthesis 
//{} - braces/ curly braces
// [] - brackets 
const myArr = [0,1,2,3,4,5,"true", true]//different types can be included
//array is a collection of objects 
//resizable and diff types of data types 
//zero - based indexing 
//copy operation always create shallow copy 
//shallow - same reference 
//deep - not same reference
console.log(myArr[0])
const myHeroes = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)//another method of array declaration 
//Array Methods 
myArr.push(6)//add element at end of array 
myArr.push(7)
myArr.pop()//removes last element 
myArr.unshift(9)//puts 9 at start of array 
myArr.shift()//removes 9 from array - removes first element 
myArr.shift()
console.log(myArr.includes(9))//whether element is included in the array
console.log(myArr.indexOf(19))//-1 if not present 
console.log(myArr.indexOf(1))//returns index of the element 
 
const newArr = myArr.join()//converts all values to string with , 

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice , splice 
console.log("A",myArr)
const myn1 = myArr.slice(1,3)//returns a section of the array 3 not included - last index not included
console.log("B", myn1)
 
const myn2 = myArr.splice(1,3)//original array changed - last index also included 
//all the index form (1,3) are removed from the original array
console.log("c",myArr)
console.log(myn2)