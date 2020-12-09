// Top side output box
var prevOutput= document.querySelector('[data-previous-operand]')
// bottom-Main output box
var currentOutput= document.querySelector('[data-current-operand]')

// state variable is used to check whether the calculations are fresh or not!
var state
function insert(num) {
  // To clear old calculation history.
  if (state == undefined) {
    state = "using"
    // console.log("new state")
    prevOutput.innerText = ''
  }

  // Converting to float at first insert to fix decimal issues.
  if (currentOutput.innerText.indexOf('0') === 0) {
    currentOutput.innerText = parseFloat(currentOutput.innerText)
  }
  
  // data-numbers
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].includes(num)) {
    if (!currentOutput.innerText.includes(".") || num !== "."){
      currentOutput.innerText += num
    }
  }
  else {
  // data-operators
  // at input of operator in Bottom-Main output box (currentOutput) moves to Top Output box (prevOutput)

  // if an operator already exists it new-one overwrites the old operator
    var lastChar = prevOutput.innerText.charAt(prevOutput.innerText.length -1);
    if (["+", "-", "×", "/"].includes(lastChar) && currentOutput.innerText == ''){
      // overwriting condition
      prevOutput.innerText = prevOutput.innerText.replace(/.$/, num);
    }
    else {
      // No need to overwrite condition
      prevOutput.innerText +=  currentOutput.innerText + num
      currentOutput.innerText = ""
    }
  }
}

function equal() {
  // If only prevOutput is entered and not currentOutput; eg: 1+=
  if (state !== undefined){
    console.log(1)
    var exp = prevOutput.innerText + currentOutput.innerText
    // console.log(exp)
    if(currentOutput.innerText){
      // If only prevOutput is entered currentOutput also entered; eg: 1+2 =
      console.log(2)
      // adding '=' string after prevOutput history
        prevOutput.innerText += currentOutput.innerText + " ="
        // calculating
        currentOutput.innerText = eval(exp.replace('×', '*')) // replacing × to * for multiplication.
        // setting as undefined to clear old calculation history on next button insert.
        state = undefined
    }  
  }
}

function clearall() {
  // Restitng to 0
  prevOutput.innerText = ""
  currentOutput.innerText = 0
}

function backspace() {
  // Deleting last character of Bottom-Main output
  if(currentOutput.innerText){
    currentOutput.innerText = currentOutput.innerText.slice(0, -1);
  }
  // Deleting last character of Top output
  else if(prevOutput.innerText) {
    prevOutput.innerText = prevOutput.innerText.slice(0, -1);
  }
  // When Bottom-Main output empty will reset to 0
  if (currentOutput.innerText === "" && prevOutput.innerText === ""){
    currentOutput.innerText = 0
  }
}