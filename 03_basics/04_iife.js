// Immediately Invoked Function Expressions (IIFE)
function chai(){
    console.log(`DB CONNECTED`);
}
chai();//we immdiately invoke it but it still has danger of global variables pollution
//iife also eleminates the global scope pollution 
//writing iife 
//()()// - first block - definition , second block - execution 
(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //always put semicolon so as to close the current context 
((name)=> {//arrow function with parameters 
    console.log(`DB CONNECTED ${name}`);
})("atharva");
//two write two iife always use semicolons 