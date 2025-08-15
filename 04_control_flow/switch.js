//use switch statement to compare is equal to(==) a value to a no of values 
// switch(key){//compare key with case values
//     case value: 

//     break; 
//     default: 
//       break; 
// }
const month = 3
switch (month) {//compare key with case values
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default://executed if all the cases are not matched 
        console.log("enter again");
        break;
}
//break st - necessary as if any case mathches - it keeps on executing all the cases until it 
//finds a break statement except the default st - condition called - fall through 
const month1 = "march"
switch (month) {//compare key with case values
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    default://executed if all the cases are not matched 
        console.log("enter again");
        break;
}
//all data types can be used 
