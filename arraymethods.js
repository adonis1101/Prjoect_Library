const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];
//.forEach() method .forEach() applies a function to each element of an array
function printEm(x) { return x.forEach(element => console.log(element))};
console.log(".forEach() method");
console.log(printEm(parks));
console.log("");
//.find() - method .find(array) - finds the first instance of a condition
const found = parks.find(park => park.name === "Biscayne"); //park.name === "Biscayne" is the condition
console.log(".find() method",found);
console.log("");
//.filter() - method .filter() - returns a new array with all of the elements that match a condition
const allTheFound = parks.filter(eachPark => eachPark.rating >= 4.5);
console.log(".filter() method",allTheFound);
console.log("");
//.map() - method .map() - returns a new array of every element that 'maps' to an item in the new array
//the new array is the same size as the original
//'maps' means that it takes the directions for where the element is in the array and takes whatever is in that location as output
const eachParkName = parks.map(element => element.name);
console.log(".map() method", eachParkName);
console.log("");
//.some() - method .some() - returns boolean if at least one element in the array matches a condition
const isThereOne = parks.some(element => element.rating > 4); //checks each parks rating to see if it is greater than 4
console.log('.some() method', isThereOne);
console.log("");
//.every() - method .every() - returns boolean
//only returns true if every element matches a condition
const everything = parks.every(element => element.rating > 1);
console.log('.every() method', everything);
console.log("");
//.reduce() - method .reduce() - can either reduce an array of simple elements down to one simple output
//or it can output one object from an array of objects
//syntax .reduce(accumulator, area, index) <-- you can output the index :o
const sampleArray2 = [1, 2, 3];
const addEmTogether = sampleArray2.reduce((a,b) => a + b);
const exampleWithIndex = sampleArray2.reduce((a, b, index) => `This is Indexception ${index}: ${a + b}`); //weird... the "Step Index" keeps printing :o but not the last park
console.log(".reduce() for simple numbers", addEmTogether);
console.log(".reduce() with the index included::: ", exampleWithIndex)
//example of an array of objects being reduced into one object based on a parameter
const babyObject = parks.reduce((a, b) => 
  {
    a[b.name] = b.rating;
    //from what I understand, the a tells the reduce what index it's at
    //after the a, it tells what should go inide of the new object
    //then a is returned so the process can reiterate itself
    return a;
  }, {} /*from what I understand, this tells it to return an object instead of an array*/);
console.log("");
console.log(".reduce() for an array of objects", babyObject);



//.reduce practice
console.log("Here is a sample array")
const sampleArray = [{a : 1, b : 2, c : 3}, {a: "first", b: "second", f: 3},{a: 44, b: "quack"}, {a: 33, b: "lemonade"}];
console.log(sampleArray);
console.log("")
console.log("This is what I assigned: const banana = sampleArray.reduce((a, b, index) => {..............")
console.log("");
const banana = sampleArray.reduce((a, b, index) => {
  a[b.a] = b.b;
  if(index === 0){
    console.log(`Step: ${index}`)
    console.log("The accumulator 'a' in this case is an empty object. 'b' is the object taken from the first index in the array given. Then the function sets a key to the object  'a' and then assigns to a value. After that, the accumulator is returned to be used again in the next loop-through.");
    console.log("");
    console.log("What this first run-through makes:");
    console.log(a);
    console.log("What was in b:");
    console.log(b);
    console.log("");
  }
  else if(index === 1){
    console.log(`Step: ${index}`)
    console.log("The accumulator 'a' is no longer an empty object but now has the key-value pair inputted from the first run of the function");
    console.log("");
    console.log("What this second run-through makes:");
    console.log(a);
    console.log("What was in b:");
    console.log(b);
    console.log("");
  }
  else {
    console.log(`Step ${index}`)
    console.log("the process repeats itself again");
    console.log("");
  };
  return a;
}, {}/*this tells reduce to output an object (it can be an array too)... even objects nested in an array*/);
console.log(banana);
console.log("Notice that reduce orders the object for you.")
white_check_mark
eyes
raised_hands






















