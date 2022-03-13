
function plus(firstNumber,secondNumber){
  console.log(firstNumber+secondNumber)
}
function divide(firstNumber,secondNumber){
  console.log(firstNumber/secondNumber)
}
plus(60,10)
divide(60,10)

const calculate ={
  plus:function(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber)
  },
  divide:function(firstNumber,secondNumber){
    console.log(firstNumber/secondNumber)
  },
};
let a = calculate.plus
a(1,4)