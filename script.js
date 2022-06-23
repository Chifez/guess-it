'use strict';
//getting all the click elements
const againEl = document.querySelector(".again");
const numberEl = document.querySelector(".number");
const numEl = document.querySelector('.number p')
const inputEl =document.querySelector(".guessinput");
const checkEl = document.querySelector(".check");
let startEl =document.querySelector(".start");
let scoreEl = document.querySelector(".score_value");
let highscoreEl = document.querySelector(".highscore");

//generate random numbers between 1 and 20

  let secretNum = Math.floor(Math.random() * 20) + 1;
  numberEl.value = secretNum;
  
  console.log(secretNum);
  let score = 20;


//adding an event listener for the again button when clicked
  againEl.addEventListener("click", function(){
    inputEl.value = "";//clearing the input field
    scoreEl.textContent = Number("20");// hard-coding the initial value of the score content to 20
    score = scoreEl.textContent; // setting the value of score to start decreamenting from 20
    numEl.innerText = '?';

    // console.log(scoreEl.textContent);
    secretNum = Math.floor(Math.random() * 20) + 1;
    startEl.textContent = "Start guessing...."
    console.log(secretNum);
  });




// ADDING THE CLICK EVENT TO THE CHECK BUTTON
checkEl.addEventListener("click",function(){
  //assigning a variable to the value inputed in the box and converting it to a number
let inputNum = Number(inputEl.value);
console.log(inputNum);

//if no number is inputed
if (inputNum == 0){
  startEl.textContent ="Input a number between 1 to 20...";

  //when the correct number is inputed
}else{
  if(inputNum ===  secretNum){
    startEl.textContent = "correct guess";
    numEl.innerText = secretNum;

    // making the highscore to change only when the recent score is greater than the present one
    if (scoreEl.textContent > highscoreEl.textContent){
      highscoreEl.textContent = scoreEl.textContent;
    }else{
      highscoreEl.textContent =  highscoreEl.textContent;
    }

    //when a wrong number is inputed; the score keeps decreases until when the score is 1

  }else{
    if(score > 1){
        startEl.textContent = (inputNum >  secretNum) ? " too high": " too low";
        score--;
        scoreEl.textContent = score;

    //the player loses the game when the score gets to 0

    }else{
      startEl.textContent = "you lost the game";
      scoreEl.textContent = 0;
    }
  }
}
});
