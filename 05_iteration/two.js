let i = 0; 
while (i<=10) {
    console.log(`Value of i is = ${i}`);
    i = i+2; //updation 
}
let myArr = ["flash","batman","superman"]
let index = 0; 
while (index < myArr.length) {
    console.log(`Value is = ${myArr[index]}`);
    index++;//or index = index +1
}

//do while loop - entry controlled loop - condition at end 
let score = 11;//it will print at least once 
do {
    console.log(`Value of score is = ${score}`);
    score ++; 
} while (score <= 10);