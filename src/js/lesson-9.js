
// PROTOPYTE

/*  HOMEWORK */


const obj1 = {
    a: 2
}
    
const obj2 = {
    
    a: 2
    
}
    
const obj3 = Object.create(obj1)
    
function isPrototype (a, b) {
    
    return a == b.__proto__
    
    }
    
//console.log(isPrototype(obj1, obj2)) // false;
    
//console.log(isPrototype(obj3, obj1)) // false;
    
//console.log(isPrototype(obj1, obj3)) // true;


/*  LESSON */


// let anotherObject = {
//     a: 2,
// }

// let myObject = Object.create(anotherObject);

// //console.log(anotherObject.a); //2
// //console.log(myObject.a); //2

// //console.log(anotherObject.hasOwnProperty('a')) //true
// //console.log(myObject.hasOwnProperty('a')) //false

// myObject.a++;

// //console.log(anotherObject.a);  //2
// //console.log(myObject.a);  //3

// myObject.hasOwnProperty('a')



// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// checking the prototype value
//console.log(Person.prototype); // { ... }


////////////////////

let anotherObject = {};

// Object.defineProperties(anotherObject, 'a', {
//     value: {
//         a: 23
//     },
//     writable: false,
// })


let myObject = {
    a : 2
};


// myObject = Object.create(anotherObject);

// Object.defineProperties(myObject, 'a', {
//     value: 19
// })

console.log(myObject)





/* ADDITIONAL  */
// __proto__  - у любого объкта
// prototype - у class or function

class Samurai {};
function Component() {}
const API = function() {}

//console.log(Samurai.prototype)
//console.log(Component.prototype)
//console.log(API.prototype)

//console.log(Object.prototype)
//console.log(Promise.prototype)
//console.log(Function.prototype)
//console.log(Boolean.prototype)
//console.log(Number.prototype)
//console.log(String.prototype)
//console.log(Array.prototype)


let promise = new Promise(() => {}) // promise.__proto__ === Promise.prototype

let man = {} // man.__proto__ === Object.prototype
//console.log(man.__proto__ === Object.prototype)

let users = [] //users.__proto__ === Array.prototype

let age = 18 //age.__proto__ === Number.prototype