const button = document.getElementById("btn");
const heightFeet = document.getElementById("feet");
const heightInches = document.getElementById("inches");
const weight = document.getElementById("weight");
const resultNumber = document.getElementById("result-number");
const resultText = document.getElementById("result-text");

let totalHeight = 0;
let bmiNumber = 0;

const bmiResult = () => {
  calculateBMI();
  resultNumber.innerText = bmiNumber;
      if (bmiNumber<18.5){
        resultText.innerHTML = `You are Underweight`
      }
      else if (bmiNumber >=18.5 && bmiNumber < 25) {
        resultText.innerHTML = `Yor are Healthy<br>
        <span>😊</span>`;
      } else if (bmiNumber >= 25 && bmiNumber < 30) {
        resultText.innerHTML = `You are Overweight<br>
         <span>😥</span>`;
      } else if (bmiNumber >= 30 && bmiNumber < 40) {
        resultText.innerHTML= `You are Obese<br>
         <span>😰</span>`;
      } else {
        resultText.innerHTML = `You are Severely Obese<br>
         <span>😭</span>`;
      }
      

  
};

button.addEventListener("click", bmiResult);

const addHeight = () => {
  totalHeight = parseInt(heightFeet.value) * 12 + parseInt(heightInches.value);
};

const calculateBMI = () => {
  addHeight();
  bmiNumber = (
    (parseInt(weight.value) / (totalHeight * totalHeight)) *
    703
  ).toFixed(2);
};
