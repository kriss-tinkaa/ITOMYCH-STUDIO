// Lesson 8


// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function newmyFunction (obj) {
    const newObj = {
        fn: obj.fn, 
        ln: obj.ln,
    }
    if(obj.size !== undefined){
        newObj.size = `${obj.size}cm`;
    }
    if(obj.weight !== undefined){
        newObj.weight = `${obj.weight}kg`;
    }
   return newObj
    }

   // console.log( newmyFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
   // console.log( newmyFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))
   // console.log( newmyFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}))
   // console.log( newmyFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
    
    //Expected {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
    //myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
    //Expected {fn: 'Martin', ln: 'Harper', weight: '102kg'}
    //myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
    //Expected {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
    //myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
    //Expected {fn: 'Matthew', ln: 'Müller'}