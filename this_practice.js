// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//     greet: function() {
//         console.log('hello, my name is ' + this.name)
//     },

//     doAddition: function(a,b) {
//         console.log(a +b)
//     },

// }

// arto.growOlder = function() {
//     this.age += 1
// }

// console.log(arto.age)
// arto.growOlder()
// console.log(arto.age)

// arto.greet()

// arto.doAddition(1,4)
// const referenceToAddition = arto.doAddition
// referenceToAddition(10,15)

// const referenceToGreet = arto.gree
// referenceToGreet()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()
