const currentValue = document.querySelector(".current-value");
const odds = document.querySelector(".odds");
const evens = document.querySelector(".even");
const threes = document.querySelector(".divisible-by-3");
const fives = document.querySelector(".divisible-by-5");
const fifteens = document.querySelector(".divisible-by-15");

let counter = 0;

currentValue.addEventListener("click", incrementUserInput);
function incrementUserInput() {
  console.log("in the function");
  ++counter;
  currentValue.innerText = counter;
  evaluateUserInput(counter);
}

function evaluateUserInput(currentCount) {
  const numberContainer = document.createElement("div");
  numberContainer.innerHTML = currentCount;
  numberContainer.classList.add("numberContainer");
  numberContainer.addEventListener("click", deleteNumber);

  if (currentCount % 15 === 0) {
    fifteens.appendChild(numberContainer);
  } else if (currentCount % 5 === 0) {
    fives.appendChild(numberContainer);
  } else if (currentCount % 3 === 0) {
    threes.appendChild(numberContainer);
  } else if (currentCount % 2 === 0) {
    evens.appendChild(numberContainer);
  } else {
    odds.appendChild(numberContainer);
  }
}

function deleteNumber(event) {
  event.target.remove();
}
