const name = "hitesh"
const repoCount = 2 
console.log(name + repoCount+" value")
//place holder usage : 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('hiteshhc')//another way of creating a string
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)//gameName.function - way of accessing all methods
console.log(gameName.toUpperCase())//original value not changed of gameName
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
console.log(gameName.indexOf('a'))//-1 if not found
const newStr = gameName.substring(0,4)//4 not included - last int not included
//subtring - don't use -ve indexing 
console.log(newStr)
const anotherString = gameName.slice(-8,4)//-ve values used 
//negative indexing only in slice
console.log(anotherString)
const newStirng1 = "   hitesh   "
console.log(newStirng1)
console.log(newStirng1.trim())
const url = "https://atharva.com/%30583afred0chauhan"
let ss = "nick op"
ss.replace(" ", "0")//no change in original string 
console.log(ss)
console.log(url.replace("chauhan","-"))
console.log(url)//no change in url 
console.log(url.includes("atharva"))
const str = "hitesh-com-my-space"
console.log(str.split("-"))
const arr = str.split("-")
console.log(arr[0])
