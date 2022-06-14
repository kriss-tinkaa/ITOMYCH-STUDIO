import '../styles/main.scss';

// Lesson 3

//let name = prompt('What is your name?', 'Leo');
//let surname = prompt('What is your surname?', 'Smith');

//alert(`Ваше имя ${name} и ваша фамилия ${surname}`);


// Lesson 4

for(let i = 0; i < 100; i++){
    if(i % 3 == 0){
        console.log(`кратное 3: ${i}`)
    }
    if(i % 5 == 0){
        console.log(`кратное 5: ${i}`)
    }
    if(i % 15 == 0){
        console.log(`кратное 15: ${i}`)
    }
}