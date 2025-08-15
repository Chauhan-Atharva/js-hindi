//for loop 
for (let i = 0; i <= 10; i++) {//index is inside for loop
    const element = i; 
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}
//for(initialization, condition, updation )
// console.log(element); - not accessible outside block 

// for (let i = 0; i <= 10; i++) {//nested loop 
//     console.log(`outer loop value ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value: ${j} and inner loop : ${i}`);   
//         console.log(i + " * " +j+  " = " + i*j);   
//     }
// }

let myArr = ["flash","batman","superman"]
console.log(myArr.length);
//Array loop 
for (let i = 0; i < myArr.length; i++) {//don't include arr length as element don't exist at arr[n]
    const element = myArr[i];
    console.log(element);
}

//Break and Continue 
console.log("Break example");

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break; //makes the control go out of the loop scope 
    }
    console.log(`Value of i is = ${i}`);
}
console.log("Continue Example");

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue; //skips the current iteration and forces the next iteration of the loop 
        //skipping all the lines after it 
    }
    console.log(`Value of i is = ${i}`);
}
    