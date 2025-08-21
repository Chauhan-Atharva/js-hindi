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