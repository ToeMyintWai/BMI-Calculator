const button = document.getElementById("btn");
const heightFeet = document.getElementById("feet");
const heightInches = document.getElementById("inches");
const weight = document.getElementById("weight");
const resultNumber = document.getElementById("result-number");
const resultText = document.getElementById("result-text");
const metricSys = document.getElementById("bmi-imperial");

let totalHeight = 0;
let bmiNumber = 0;

const bmiSystems = () => {
  if (document.getElementById("bmi-imperial").checked) {
    weight.placeholder = "lbs";
    heightFeet.placeholder = "ft";
    heightInches.placeholder = "in";
    heightInches.style.display = "inline";
    heightFeet.style.width = "45%";
  } else {
    weight.placeholder = "kg";
    heightFeet.placeholder = "cm";
    heightInches.style.display = "none";
    heightFeet.style.width = "92%";
  }
};

const bmiResult = () => {
  calculateBMI();
  resultNumber.innerText = bmiNumber;
  if (bmiNumber < 18.5) {
    resultText.innerHTML = `You are Underweight`;
  } else if (bmiNumber >= 18.5 && bmiNumber < 25) {
    resultText.innerHTML = `Yor are Healthy<br>
        <span>😊</span>`;
  } else if (bmiNumber >= 25 && bmiNumber < 30) {
    resultText.innerHTML = `You are Overweight<br>
         <span>😥</span>`;
  } else if (bmiNumber >= 30 && bmiNumber < 40) {
    resultText.innerHTML = `You are Obese<br>
         <span>😰</span>`;
  } else {
    resultText.innerHTML = `You are Severely Obese<br>
         <span>😭</span>`;
  }
};

button.addEventListener("click", bmiResult);

const calculateBMI = () => {
  if (document.getElementById("bmi-imperial").checked) {
    totalHeight =
      parseInt(heightFeet.value) * 12 + parseInt(heightInches.value);
    bmiNumber = (
      (parseInt(weight.value) / (totalHeight * totalHeight)) *
      703
    ).toFixed(2);
  } else {
    totalHeight = parseInt(heightFeet.value)/100;
    bmiNumber = (
      (parseInt(weight.value) / (totalHeight * totalHeight)) 
    ).toFixed(2);
  }
};
