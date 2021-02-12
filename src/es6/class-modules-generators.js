class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0

    }

    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }

}

const calc = new calculator()
console.log(calc.sum(1, 3))


//modules
import hello from './module'
console.log(hello);


//generator
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world, ';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
