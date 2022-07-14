let url = 'https://jsonplaceholder.typicode.com/posts';




// fetch(url)
// .then( res => res.json())
// .then( data =>  {
//   let newArr = []
//   for (key in data) {
//     if(key <= 10){
//       console.log(data[key])
//       newArr.push(data[key])
//     }
//   }
//   return newArr
// })
// .catch(err => {
//   return err
// });


async function FetchData(url){
  try{
    let promise = await fetch(url);
    let data = await promise.json();
    let newArr = []
    for (key in data) {
      if(key <= 10){
        await newArr.push(data[key])
      }
    }
   return newArr
  } catch(err){
    return err
  }
}

console.log(FetchData(url))