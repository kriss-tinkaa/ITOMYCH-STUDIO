// CLASSES



 class User {

    constructor (name, age) {
        this._name = name;
        this._age = age;
     }
    
     //getter
      get name() {
         return this._name
      }
    
      //setter
      set age(age) {
         this.age = age;
      }
    
     doSomething () {
        return `HELLO ${this._name}`
     }
 }


const user = new User('valy', 23)


console.log(user)
console.log(user.doSomething())
user._name = 'Gala'
console.log(user)



/* HOMEWORK */

class Pen {
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price =  price;
    }

    showPrice() {
        return `Price of ${this.name} is ${this.price}`
    }
}

const pen1 = new Pen("Marker", "Blue", "$3");
console.log(pen1.showPrice())
console.log(pen1)