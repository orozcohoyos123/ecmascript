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
    //es9
    .finally(() => console.log('Ended'))

const regexData = /([0-9]{4}-([0-9]{2}-([0-9]{2})))/
const match = regexData.exec('2018-04-20')   
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)