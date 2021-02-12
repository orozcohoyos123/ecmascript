function newFunction(name, age, country){
    var name = name || 'Sebas';
    var age = age || 32;
    var country = country || 'COL';
    console.log(name, age, country);
}

//To try it directly in visual code, install the extension: 'Code Runner'
//es6
function newFunction2(name = 'Sebas', age = 27, country  = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Someone', 0, 'Somewhere');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
//Inverted quotation mark = alt gr + } = ``  ||  Alt + 96
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor \n" 
+ "amet, consectetur"

//es6
let lorem2 = `Neque porro quisquam est qui dolorem ipsum quia dolor 
sit amet, consectetur, `

console.log(lorem)
console.log(lorem2)


let person =  {
    'name': 'Sebas',
    'age': 27,
    'country': 'COL'
}

console.log(person.name, person.age, person.country)

//es6
let { name, age, country } = person;
console.log(name, age, country)

let team1 = ['Sebas', 'Martini', 'Julieta']
let team2 = ['Juli', 'Tuti', 'Bruno']

//es6 Spread Operator
let theBest = ['Otra vez Sebas', ...team1, ...team2]
console.log(theBest)


{
    //the variable scope is accesible everywhere
    var globalVar = 'Global var'
}

{
    //the variable scope is only accesible inside the keys
    let globalLet = 'Global let'
    console.log(globalLet)
}

console.log(globalVar)
console.log(globalLet)

const a = 'something'
a = 'you cant change it'
console.log(a)