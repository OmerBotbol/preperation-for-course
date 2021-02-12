
function Calculator() {
    this.read = function(){
        this.firstNum = Number(prompt("enter first number"));
        this.secondNum = Number(prompt("enter second number"));
    };
    this.sum = function(){
        return this.firstNum + this.secondNum;
    };
    this.mul = function(){
        return this.firstNum * this.secondNum;
    };
  };
  let calculator = new Calculator();
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );