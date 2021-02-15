let array = [1,2,3,[1,2,3,[1,2,3]]]

//es10
console.log(array.flat(1))

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value * 2]))
console.log(array.flatMap(value => [value, value * 2]))


let hello = '        hello world'
console.log(hello)
console.log(hello.trimStart())

hello = 'hello world         '
console.log(hello)
console.log(hello.trimEnd())


try {
    
} catch  { //se omite los parentesis y el objeto (err)
    err
}

let entries = [["name","sebas"], ["age", 27]]
//es10 convertir arrays to json object
console.log(Object.fromEntries(entries))

let mySymbol = `My simbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)