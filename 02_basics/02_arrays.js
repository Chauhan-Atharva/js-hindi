const marvelHeroes = ["thor","ironman","captain"]
const dcHeroes = ["superman", "flash","batman"]
marvelHeroes.push(dcHeroes)//single array added as an element - no return type
console.log(marvelHeroes)
console.log(marvelHeroes[3][1])//flash 
const allHeroes = marvelHeroes.concat(dcHeroes)//returns a new array
console.log(allHeroes)
const all_new_Heroes = [...marvelHeroes, ...dcHeroes]///3 dots - spread ops 
console.log(all_new_Heroes)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableAnotherArray = anotherArray.flat(Infinity)//removes all sub arrays - give the depth in parameter 
//infinity given but try to be more accurate 
console.log(usableAnotherArray)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))//interesting case you have to tell whether to make arrays of keys/ values 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
//isArray , of , from 