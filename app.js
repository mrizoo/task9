// EXAMPLE 1
// const greeting = () => {
//     return "Hello"
// }

// const sayHello = (func, name) => {
//     return func() + ' ' + name
// }

// const result = sayHello(greeting,'Doniyor') // berilayotgan argumentlar cheksiz bulishi mumkin

//EXAMPLE 2
//  function sayHello(){
//     return () =>{
//       return   "Hello";
//     }
//  }

//  const result = sayHello()()
// console.log(result)

//EXAMPLE 3
//   let callMe = () => {
//     console.log("Hello There");
//   }

// const movies = [
//   {
//     name: "Spiderman Across The Spider-Verse",
//     year: 2023,
//     rate: 8.8,
//     genre: ["Adventure", "Action", "Comedy"],
//     country: ["United States", "Italy"],
//     isAdult: true,
//   },
//   {
//     name: "The Gogfather",
//     year: 1972,
//     rate: 9.2,
//     genre: ["Mafia", "Crime Film", "Drama"],
//     country: ["United States", "Italy"],
//     isAdult: true,
//   },
//   {
//     name: "T-34",
//     year: 2018,
//     rate: 5.9,
//     genre: ["Adventure", "Drama", "War", "Action"],
//     country: ["Russia"],
//     isAdult: true,
//   },
//   {
//     name: "Parasite",
//     year: 2019,
//     rate: 7.5,
//     genre: ["Adventure", "Drama", "Thriller", "Action"],
//     country: ["South Korea"],
//     isAdult: true,
//   },
//   {
//     name: "Titanic",
//     year: 1997,
//     rate: 7.5,
//     genre: ["Adventure", "Drama", "Thriller", "Comedy"],
//     country: ["United States", "England"],
//     isAdult: true,
//   },
//   {
//     name: "Paddington",
//     year: 2014,
//     rate: 4.5,
//     genre: ["Adventure", "Fantasy", "Animation", "Comedy"],
//     country: ["France", "England"],
//     isAdult: false,
//   },
// ];

//for
// console.group("About Movies")
// for (let i = 0; i < movies.length; i++) {
//   console.log(`Name: ${movies[i].name}, "Year:" ${movies[i].year}`);
// }
// console.groupEnd

//forEach();
// movies.forEach((item) => {
//   console.log(`Name: ${item.name}, Year: ${item.year}`);
// });

// movies.forEach((item, index, arr) => {
//     console.log(arr)
//     console.log(index,`Name: ${item.name}, Year: ${item.year}`);
// })

// some()  va ever()

// const someMovies = movies.some((movie) =>{
//    return movie.year > 2020
// })
// console.log(someMovies);

// const someMovies = movies.every((movie) =>{
// return movie.year < 2013
// })
// console.log(someMovies);

//for 2
// const moviesUpTo6 = []
// for ( let i = 0; i<movies.length;i++){
//     if(movies[i].rate >= 6 && movies[i].rate <= 8){
//     moviesUpTo6.push(movies[i])
//     }
// }
// console.log(moviesUpTo6);

// const moviesUpTo6 = movies.filter((movie)=>{
//   return movie.rate >= 6 && movie.rate <= 8
// })
// console.log(moviesUpTo6);
// console.log(movies);

//MAP
// const decrisRates = movies.map((movie) => {
//   return { ...movie, rate: movie.rate - 1 };
// });
// console.log(movies);
// console.log(decrisRates);

//FIND | FINDINDEX()
// const findMovie = movies.findIndex((movie) =>{
//     return movie.name == 'Titanic'
// })

// console.log(findMovie);

//FLAT() & FLATMAP()

// let arr1 = [10, 20, [30, 40, 50], [60, 70, 80, 90], 100];
// let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100];
// let arr3 = [10, 20, 30, [40, 50], [[[60, 70], 80], 90], 100];

// const arr2Example == arr2.flat()
// console.log(arr2Example)

// let employee = [
//   { id: 101, name: "John", skills: ["HTML", "CSS", "JAVASCRIPT"] },
//   { id: 101, name: "John", skills: ["C#", "SQL"] },
//   { id: 101, name: "John", skills: ["ANGULAR", "REACT"] },
// ];


//   let employee1 = employee.map((employer) =>{
//     return employer.skills
//   })
//   console.log(employee1);


// let employee2 = employee.flatMap((employer) => {
//   return employer.skills;
// });
// console.log(employee2);


//SORT()

// const sortedMovies = movies.sort((m1,m2) =>{
//     return m1.rate -m2.rate
// })
// console.log('New Array'sortedMovies);
// console.log('originalArray',movies);


//Object Assign

// const newObj = Object.assign(movies)
// console.log(newObj);

//REDUCE()

// const array1 = [1,2,3,4,5];
// const sum = array1.reduce((accumulator,currentValue) =>{
//     console.log("Accumulator", accumulator, "CurrentValue", currentValue);
//     return accumulator + currentValue
// })
// console.log(sum);

// const allMoviesGenres = movies.flatMap((movie) => {
//     return movie.genre
// })
// const sumAllGenres = allMoviesGenres.reduce((acc, curVal) =>{
   
//      if(!acc[curVal]){
//         acc[curVal] = 1
//      }else{
//         acc[curVal] +=1
//      }

//     return acc
// },{})

// console.log(sumAllGenres);