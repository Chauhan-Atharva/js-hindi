const accountId = 144553
let accountEmail = "atharva.st.000@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"//not advisable but you can declare a variable without any keyword 
let accountState; //; not compulsory 
//2 ways to declare variables - var and let but we generally avoid var 
/* prefer not to use var
because of issue in functional and block scope
*/
//accountId = 2 - not allowed as accountId is constant 
console.log(accountId)
accountEmail = "hc@hc.com"//changeable 
accountPassword = "1223434"//changeable
accountCity = "jaipur"//changeable
console.table([accountEmail,accountPassword,accountCity,accountState]);