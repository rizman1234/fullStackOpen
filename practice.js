// Variables
// const x = 1
// let y = 5
// console.log(x,y)
// y += 10
// console.log(x,y)
// y = 'sometext'
// console.log(x,y)
// x=4

//Arrays
// const t = [1, -1, 3]
// t.push(5)
// console.log(t.length)
// console.log(t[1])
// t.forEach(value => {
//     console.log(value)
// })

//Immutable
// const t = [1,-1,3]
// const t2 = t.concat(5)
// console.log(t)
// console.log(t2)

//Map
// const t = [1,2,3]
// const m1 = t.map(value => value *2)
// console.log(m1)

// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2)


//Destructuring
// const t = [1, 2, 3, 4, 5]
// const [first, second, ...rest] = t
// console.log(first, second)
// console.log(rest)

//Objects

// const object1 = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
// }

// const object2 = { 
//     name: 'Full Stack web application development',
//     level: 'intermediate studies',
//     size: 5,
// }

// const object3 = {
//     name: {
//         first: 'Dan',
//         last: 'Abramov'
//     },
//     grades: [2, 3,5,3],
//     department: 'Stanford University',
// }

// console.log(object1.name)
// const fieldName = 'age'
// console.log(object1[fieldName])
// object1.address = 'Helsinki'
// object1['secret number'] = 12341

// const sum = (p1, p2) => {
//     console.log(p1)
//     console.log(p2)
//     return p1 + p2

// }

// const result = sum(1,5)
// console.log(result)

// const square = p => {
//     console.log(p)
//     return p * p
// }

// const square = p => p * p

// const t = [1, 2, 3]
// const tSquared = t.map(p => p * p)
// console.log(tSquared)

function product(a,b) {
    return a * b
}

const result = product(2 , 6)
