const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums.map((num) => num+10 )//automatically returns each value in form of array 
//after updating each value 
console.log(newNums);
const newNums1 = []; 
nums.forEach((num) => {
    newNums1.push(num+10)
})
console.log(newNums1);
//chaining : 
const myNums = nums.map((num)=> num*10).map((num)=> num +1);//in second map num is already 
//multiplied by 10 effect of chaining 
console.log(myNums);
//another example of chaining 
const myNums1 = nums.map((num)=> num*10).map((num)=> num +1).filter((num)=> num>40);
console.log(myNums1);


