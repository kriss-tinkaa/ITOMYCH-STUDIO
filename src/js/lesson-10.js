// CLASSES



class User {

    constructor(name, age) {
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

    doSomething() {
        return `HELLO ${this._name}`
    }
}


const user = new User('valy', 23)


//console.log(user)
//console.log(user.age(24))
//console.log(user)
//console.log(user.doSomething())
user._name = 'Gala'
//console.log(user)



/* Наследование */

class Animal { 
    constructor(name) { 
        this.speed = 10; 
        this.name = name; 
    } 
    
    run(speed) { 
        this.speed = speed; 
        alert(`${this.name} бежит со скоростью ${this.speed}.`); 
    } 
    stop() {
         this.speed = 0;
         alert(`${this.name} стоит.`); 
        }
} 

let animal = new Animal("Мой питомец");

// class Rabbit extends Animal{ 
//     hide() { 
//         alert(`${this.name} прячется!`); 
//     } 
// } 

/* Переопределение методов */

class Rabbit extends Animal{ 
    constructor(name, age){
        super(name);
        this.age = age
    }
    hide() { 
        alert(`${this.name} прячется!`); 
    } 
    stop(){
        super.stop() // вызываем родительский метод stop
        this.hide()
    }
 } 

let rabbit = new Rabbit("Белый кролик", 15);

//console.log(rabbit)
//console.log(rabbit.stop())
//console.log(rabbit.hide())
//console.log(rabbit)
//console.log(animal)


/* HOMEWORK */

class Pen {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showPrice() {
        return `Price of ${this.name} is ${this.price}`
    }
}

const pen1 = new Pen("Marker", "Blue", "$3");
//console.log(pen1.showPrice())
//console.log(pen1)

class Laptop {
    constructor(model, prozessor, betriebssystem, netzteil, bluetooth){
        this.model = model;
        this.prozessor = prozessor;
        this.betriebssystem = betriebssystem;
        this.netzteil = netzteil;
        this.bluetooth = bluetooth;
        this.isOn = false;
    }

    turnOn () {
        this.isOn = true;
        alert(this.isOn)
    }
    turnOff() {
        this.isOn = false;
        alert(this.isOn)
    }
    showInfo() {
        alert(`model: ${this.model}, prozessor: ${this.prozessor}, netzteil: ${this.netzteil}!`)
    }
}
const laptop = new Laptop('ThinkPad E15 Gen 2', 'Intel® Core™ i7', '4 GB SO-DIMM DDR4 3200MHz', '65W Netzteil PCC (3-polog) – EU (USB Typ C)', 5)
//console.log(laptop)
//console.log(laptop.turnOff())
//console.log(laptop.showInfo())


class myLaptop extends Laptop{
    constructor(model, prozessor, betriebssystem, netzteil, bluetooth,age, shop) {
        super(model, prozessor, betriebssystem, netzteil, bluetooth);
        this.age = age;
        this.shop = shop;
      }

      showAge() {
        alert( age = 2022 - this.age)
      }
}

const myLaptop2 = new myLaptop('Apple MacBook Pro 13', 'Intel Core i5-8257U', '16 ГБ LPDDR4X 3733 МГц', '61W', 5, 2017, 'Apple shop')


console.log(myLaptop2)
console.log(myLaptop2.turnOn())
console.log(myLaptop2)
console.log(myLaptop2.turnOff())
console.log(myLaptop2)
console.log(myLaptop2.showInfo())
console.log(myLaptop2.showAge())