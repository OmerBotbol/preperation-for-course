function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += Number(prompt("enter a number", 0));
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);