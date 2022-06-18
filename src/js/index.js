import '../styles/main.scss';

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
    if( a === b ){
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

function myFunction (x, y) {
    while(x % y !== 0) {
        x++;
    }
    return x;
}

console.log(myFunction(1, 23))
console.log(myFunction(23, 23))
console.log(myFunction(7, 3))