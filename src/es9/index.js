const obj = {
    name: 'sebas',
    age: 27,
    country: 'COL'
}

//es9
let { country, ...all } = obj;
console.log(country, all);


const obj2 = {
    name: 'Sebas',
    age: 27
}

const obj3 = {
    ...obj2,
    country: 'COL'
}
console.log(obj3)


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello World')
        : resolve(new Error(''))
    }) 
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))