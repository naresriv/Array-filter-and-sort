//Sorting an Array ( from A-Z)

let cars = ["bmw", "lamborgini", "rangerower", "landrower", "nexa", "creata", "vista", "amabsidor" ]
let sortCars = cars.sort();

//Sorting an Array in revervse method( from A-Z)

let reverseArray =  sortCars.reverse();
console.log(sortCars)
// ["vista", "rangerower", "nexa", "landrower", "lamborgini", "creata", "bmw", "amabsidor"]




//Filter Methods in Array numbers

let numbers = [1,22,34,41,8,9,3,4,5,6,7,2,3,4,8,23,9,2,4,3,50,522,232,565,5855,8885,888,2,8856,555,42]
let uniqueNumbers = [...new Set(numbers)]
console.log(uniqueNumbers)


//Filter Methods in Array string
let colors = ["blue", "red", "green", "red", "yellow", "blue", "orange" ,"rose"]
let uniquecolors = [...new Set(colors)]
// ["blue", "red", "green", "yellow", "orange", "rose"]  ---> output
console.log(uniquecolors);


let cars = [1,1,2, 2,9,10,11,12,13, 3,4,5,6,4,5,4,5,4,8,4,9,4,5,44,1,2]
let seennu = [...new Set(cars)]
console.log(seennu)

// by using filter
  let uniqueNumber = cars.filter((item, index) => 
   cars.indexOf(item) === index)
  console.log(uniqueNumber)
