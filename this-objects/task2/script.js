let calculator = {
    read: function(){
        calculator.firstNum = Number(prompt("enter first number"));
        calculator.secondNum = Number(prompt("enter second number"));
    },
    sum: function(){
        return this.firstNum + this.secondNum;
    },
    mul: function(){
        return this.firstNum * this.secondNum;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );