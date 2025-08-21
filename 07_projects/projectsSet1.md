# the project link is :
https://stackblitz.com/edit/stackblitz-starters-ypm3ywu7?file=1-colorChanger%2Fstyles.css

## project1 
```
javascript 
console.log("Atharva")
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function (button){
  console.log(button);
  button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id == "grey"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "white"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "blue"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "yellow"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "purple"){
      body.style.backgroundColor = e.target.id;
    }
  })
});

```
## project 2 

```javascript 
console.log("hi")
const form = document.querySelector("form")
// const height = parseInt(document.querySelector("#height").value)
//don't take values before submitting the form as it will give emmpty values 
form.addEventListener("submit",function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#result")
  if(height === "" || height < 0  || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === "" || weight < 0  || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //show the result 
    if(bmi < 18.6) {
    result.innerHTML = ` <span> ${bmi}</span>  <p> you are underweight </p>`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span> ${bmi}</span>  <p> you are in normal range </p>`;
      }
      if(bmi > 24.9) {
        result.innerHTML = `<span> ${bmi}</span>  <p> you are overweight </p>`;
        }
  }

})
```
## project 3 

```javascript 
const clock = document.getElementById("clock")
let date = new Date();
console.log(date.toLocaleString())
setInterval(function (){
  let date = new Date();
  // console.log(date.toLocaleString)
  clock.innerHTML = date.toLocaleString()
}, 1000)//remeber this format always - 1000 in milli seconds 
```

## project 4 
```javascript 
let num = parseInt((Math.random() *100) +1)//generating nos form 1 to 100
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")//input 
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".remaining")
const lowOrHigh = document.querySelector(".loworHI")
const startOver = document.querySelector(".resultPara")
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1; 
let playGame = true;
if(playGame){
  submit.addEventListener("click", function (e){
    //preventing the form to give data to server
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  //validate the no entered by user
  if(isNaN(guess)){
  alert("Please enter a valid number");
  }
  else if(guess < 1){
    alert("Please enter a number greater than 1");
  }
  else if(guess > 100){
    alert("Please enter a number less than 100");
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 11 ){//if guess no  was 11
      displayGuess(guess);
      displayMessage(`Game over Random number was ${num}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  //check if guess is equal to random value 
  if(guess === num){
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if(guess < num){
    displayMessage(`Number is too low`);
  }
  else{
    displayMessage(`Number is too high`);
  }
}
function displayMessage(message){
  //displays msg - used for dom manipulation
  lowOrHigh.innerHTML = ` ${message}`;

}
function displayGuess(guess){
  userInput.value = '';//cleaning up value 
  guessSlot.innerHTML += ` ${guess}, `;
  numGuess ++;
  remaining.innerHTML = `${ 11 - numGuess}`;
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener("click", function(e){
    num = parseInt((Math.random() *100) +1);
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true; 
  })
  
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute("disabbled", '');//key , value pair
  p.classList.add("button");//adding a class
  p.innerHTML = `<h2 id = "newGame"> Start new Game </h2> `
  startOver.appendChild(p);
  playGame = false;
  newGame();

}
```