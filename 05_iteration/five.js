const coding = ["js","ruby","java","python","cpp"]
coding.forEach(  function (item){//item is each element of array
    //this function don't have any name 
    //the parameter passed in func will have each element of array
    console.log(item);
})

coding.forEach( (val) => {
    console.log(val);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index,arr) =>{//for each function can also get element, index,and full array
    console.log(item,index,arr);  
})
//objects inside array
const myCoding = [
    {
        languangeName:"javaScript",
        languangeFileName : "js"
    },
    {
        languangeName:"java",
        languangeFileName : "java"
    },
    {
        languangeName:"python",
        languangeFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languangeName);
    
} )