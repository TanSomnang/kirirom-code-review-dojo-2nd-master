"use strict"

//write code in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')
var count = 0
function changeNum(number)
{
  textElement.textContent=number
}
plusButton.addEventListener('click', () => changeNum(count += 1))
minusButton.addEventListener('click', () => changeNum(--count))
resetButton.addEventListener('click', () => changeNum(count = 0))