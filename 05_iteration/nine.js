//reduce 
const nums = [1,2,3]
//acc - accumulator , curr - current value
const total = nums.reduce(function (acc,curr){
    console.log(`acc: ${acc} curr: ${curr}`);
    return acc+curr //after returing acc + curr - goes into acc
},0)//0 - is the first value of accumulator 
console.log(total);

const total1 = nums.reduce((acc,curr)=> acc+curr,0);//acc + curr returned and 0 is initial value 
console.log(total1);

const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "python course",
        price : 999
    },
    {
        itemName: "mobile dev course",
        price : 5999
    },
    {
        itemName: "data science course",
        price : 12999
    },
]

const total2 = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(`total price to pay ${total2}`);


