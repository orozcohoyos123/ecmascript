let name = 'Sebas'
let age = 27

obj = { name : name, age : age}

//es6
obj2 = { name, age }
console.log(obj)
console.log(obj2)


const names = [
    { name : 'Sebas', age : 27},
    { name : 'Juli', age : 25}
]

let listNames = names.map(function(item){
    console.log(item.name);
})

//es6
let listNames2 = names.map(item => console.log(item.name))



const square = function (num){
    return num * num
}
//es6
const square2 = num => num * num


const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Ok')
        }
        else {
            reject('Fail')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hi')) //concatenate multiple functions
    .catch(error => console.log(error))