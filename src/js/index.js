import '../styles/main.scss';

require('./lesson-9.js');


// Lesson 3

//let name = prompt('What is your name?', 'Leo');
//let surname = prompt('What is your surname?', 'Smith');

//alert(`Ваше имя ${name} и ваша фамилия ${surname}`);


// Lesson 4

// for(let i = 0; i < 100; i++){
//     if(i % 3 == 0){
//         console.log(`кратное 3: ${i}`)
//     }
//     if(i % 5 == 0){
//         console.log(`кратное 5: ${i}`)
//     }
//     if(i % 15 == 0){
//         console.log(`кратное 15: ${i}`)
//     }
// }


// Lesson 5

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function equalItems(a, b) {
    if (a === b) {
        return true;
    }
    return false;
}

// console.log( equalItems(2, 3));
// console.log( equalItems(3, 3));
// console.log( equalItems(1, '1'));
// console.log( equalItems('10', '10'));


// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(x, y) {
    while (x % y !== 0) {
        x++;
    }
    return x;
}

// console.log(myFunction(1, 23))
// console.log(myFunction(23, 23))
// console.log(myFunction(7, 3))

// Lesson 6

const laptop = {
    model: 'ThinkPad E15 Gen 2',
    prozessor: 'Intel® Core™ i7',
    betriebssystem: '4 GB SO-DIMM DDR4 3200MHz',
    netzteil: '65W Netzteil PCC (3-polog) – EU (USB Typ C)',
    bluetooth: 5,
    openVideo() {
        alert(`Open new lesson`)
    },
    search() {
        alert(`Search info about ${this.model}`)
    },
    clearStory() {
        alert(`Clear history`)
    }
}

//laptop.openVideo();
//laptop.search();
//laptop.clearStory();

function NewMyLaptop(model, prozessor, betriebssystem, netzteil, bluetooth) {
    this.model = model;
    this.prozessor = prozessor;
    this.betriebssystem = betriebssystem;
    this.netzteil = netzteil;
    this.bluetooth = bluetooth;
}

const myLaptop = new NewMyLaptop('Apple MacBook Pro 13', 'Intel Core i5-8257U', '16 ГБ LPDDR4X 3733 МГц', '61W', 5)

//console.log(myLaptop)

// Lesson 7

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

function sortFunction(arr) {
    return arr.sort()
}

//console.log(sortFunction(['b', 'c', 'd', 'a']))
//console.log(sortFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']))


// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function sumGreaterThanEasy(a, b) {
    let sum = 0;
    a.forEach((item) => {
       if(item > b) sum += item;
    } )
    if(sum > b) return sum
    return b
}

//console.log(sumGreaterThanEasy([1, 2, 3, 4, 5, 6, 7], 2))
//console.log(sumGreaterThanEasy([-10, -11, -3, 1, -4], -3))
//console.log(sumGreaterThanEasy([78, 99, 100, 101, 401], 99))


function sumGreaterThan(arr, num) {
    return arr.reduce((sum, cur) => {
       if (cur > num) return sum + cur;
       return sum;
    }, 0);
}

//console.log(sumGreaterThan([1, 2, 3, 4, 5, 6, 7], 2))

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function compare(firstArr, secondArr) {
   return firstArr.concat(secondArr.filter(item => firstArr.indexOf(item) == -1))
}

