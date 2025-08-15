const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {//forEach doesn't return any item
    console.log(item);
    return item 
})
console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]
//filter operations
const newNums = nums.filter((num)=> num>4 )//returns values satisfying condition
console.log((newNums));
const newNums1 = nums.filter((num)=> {
  return (num>4) 
} )//returns values satisfying condition
console.log((newNums1));
const myNums = []
nums.forEach((num) => {
    if(num>4){
        myNums.push(num)
    }
})
console.log((myNums));
const books = [
    //objects inside an array 
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk)=> bk.genre == "History" )
console.log(userBooks);
const userBooks1 = books.filter((bk)=> bk.publish >= 2000 )
console.log(userBooks1);
const userBooks2 = books.filter((bk)=> bk.publish >=1995 && bk.genre == "History")
console.log(userBooks2);

