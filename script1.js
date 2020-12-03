// Top side output box
var prevOutput= document.querySelector('[data-previous-operand]')
// bottom-Main output box
var currentOutput= document.querySelector('[data-current-operand]')
// console.log(state)
var state
function insert(num) {
  if (state == undefined) {
    state = "using"
    console.log("new state")
    prevOutput.innerText = ''
  }
  // if first entry replacing it
  if (currentOutput.innerText.indexOf('0') === 0) {
    currentOutput.innerText = parseFloat(currentOutput.innerText)
  }
  // data-numbers
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].indexOf(num) >= 0) {
    currentOutput.innerText += num
  }
  else {
  // data-operators
  // at input of operator in Bottom-Main output box (currentOutput) moves to Top Output box (prevOutput)
    prevOutput.innerText +=  currentOutput.innerText + num
    currentOutput.innerText = ""
  }
}

function equal() {
  if (state !== undefined){
    var exp = prevOutput.innerText + currentOutput.innerText
    // console.log(exp)
    if(currentOutput.innerText){
        prevOutput.innerText += currentOutput.innerText  
        currentOutput.innerText = eval(exp.replace('×', '*')) // replacing × to * for multiplication.
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