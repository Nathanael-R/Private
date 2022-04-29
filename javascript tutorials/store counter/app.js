/*Objects
let school = {
  name: "FIHS",
  date: 2014,
  review(){
    console.log("great school") 
  }
}
school.review()*/
//to call the function it has to be object.function name

/*let school = {
  name: "FIHS",
  date: 2014,
  NameandDate: function(){
    return this.name + " " + this.date
  }
}
 
 console.log(school.NameandDate())*/ //the this keyword has to be present as a substitute for the object name

//summary when a function is the property of an object, it becomes a method
 
/* Constructor
A constructor function is like a regular function, but it has to start with a captital letter, e.g Person(arg, arg)
it can only be called with the 'new' operator
function Person(firstName, lastName) {
    this.firstName = firstName; this is like a mold to shape future objects using this
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }; this is also a mold to shape future instances/objects/functions
}

*/
/*function Person(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
  
  this.getFullName = function(){
    return this.firstName+ " "+ this.lastName
  }
}
let person1 = new Person("Rika", "Tano")
console.log(person1.getFullName())

A few mistakes made on this, remember to add quotes to the arguments

*/
/*const person = {
  name: ['Rhayne', 'Nathanael'],
  age: 25,
  bio: function(){
    console.log(`${this.name[0]} ${this.name[1]} is 
 ${this.age} years old.`);
  },
  introduceSelf: function(){
    console.log(`Hi! I'm ${this.name[0]}.`);
  }
};
const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

console.log(person.height);//Adding a property to an object is not possible with dot notation, only bracket notation
*/

/*to convert a string to a number you can use the number constructor 
for example if myNum is somehow equal to '700' the quotes obviously make it a string, to make it a number just call the number constructor
like Number(myNum), this converts myNum string to a number of equal value
*/

//the Math.pow(b, e) is used to get the exponent of a number where b is the base and e is the exponent, '**'' also does the same thing 

/*You can include template literals in a backtick 
const name = 'Chris'
const greeting = `Hello, ${name}` this is a template literal and it acts like a constructor

const one = "Hello, "
const two = 'how are you'
const joined = `${one}${two}`the backticks here are important
*/

/* const button = document.querySelector('button')

function greet(){
  const name = prompt('What is your name?') this tells the system to give a prompt and assign that prompt to the name variable
  alert(`Hello ${name}, nice to see you`) this then tells the system to print out this statement with the name you gave
}

button addEventListener('click', greet) */
//strings
/*
  the .includes method is used to test if a string contains a certain substring e.g Drawn
  let art = 'Drawn'
  if(art.includes('awn')){
    console.log('Correct')
    else{
      console.log('Wrong')
    }
  }
  
  the startsWith() and endsWith() are part of it
  
  the replace method is used to replace some part of a string too
  
  const browserType = 'Chrome'
  const updated = browserType.replace('moz', 'van')
  
  console.log(updated);
  console.log(browserType);
  
  the replace method like many string methods does not change the string it was called upon, it instead returns a new string
  to replace the original string you can assign a new var.replace to the original var
*/

//to access every item in an array you can use the for...of statement
/*Objects
let school = {
  name: "FIHS",
  date: 2014,
  review(){
    console.log("great school") 
  }
}
school.review()*/
//to call the function it has to be object.function name

/*let school = {
  name: "FIHS",
  date: 2014,
  NameandDate: function(){
    return this.name + " " + this.date
  }
}
 
 console.log(school.NameandDate())*/ //the this keyword has to be present as a substitute for the object name

//summary when a function is the property of an object, it becomes a method
 
/* Constructor
A constructor function is like a regular function, but it has to start with a captital letter, e.g Person(arg, arg)
it can only be called with the 'new' operator
function Person(firstName, lastName) {
    this.firstName = firstName; this is like a mold to shape future objects using this
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }; this is also a mold to shape future instances/objects/functions
}

*/
/*function Person(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
  
  this.getFullName = function(){
    return this.firstName+ " "+ this.lastName
  }
}
let person1 = new Person("Rika", "Tano")
console.log(person1.getFullName())

A few mistakes made on this, remember to add quotes to the arguments

*/
/*const person = {
  name: ['Rhayne', 'Nathanael'],
  age: 25,
  bio: function(){
    console.log(`${this.name[0]} ${this.name[1]} is 
 ${this.age} years old.`);
  },
  introduceSelf: function(){
    console.log(`Hi! I'm ${this.name[0]}.`);
  }
};
const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

console.log(person.height);//Adding a property to an object is not possible with dot notation, only bracket notation
*/

/*to convert a string to a number you can use the number constructor 
for example if myNum is somehow equal to '700' the quotes obviously make it a string, to make it a number just call the number constructor
like Number(myNum), this converts myNum string to a number of equal value
*/

//the Math.pow(b, e) is used to get the exponent of a number where b is the base and e is the exponent, '**'' also does the same thing 

/*You can include template literals in a backtick 
const name = 'Chris'
const greeting = `Hello, ${name}` this is a template literal and it acts like a constructor

const one = "Hello, "
const two = 'how are you'
const joined = `${one}${two}`the backticks here are important
*/

/* const button = document.querySelector('button')

function greet(){
  const name = prompt('What is your name?') this tells the system to give a prompt and assign that prompt to the name variable
  alert(`Hello ${name}, nice to see you`) this then tells the system to print out this statement with the name you gave
}

button addEventListener('click', greet) */
//strings
/*
  the .includes method is used to test if a string contains a certain substring e.g Drawn
  let art = 'Drawn'
  if(art.includes('awn')){
    console.log('Correct')
    else{
      console.log('Wrong')
    }
  }
  
  the startsWith() and endsWith() are part of it
  
  the replace method is used to replace some part of a string too
  
  const browserType = 'Chrome'
  const updated = browserType.replace('moz', 'van')
  
  console.log(updated);
  console.log(browserType);
  
  the replace method like many string methods does not change the string it was called upon, it instead returns a new string
  to replace the original string you can assign a new var.replace to the original var
*/

//to access every item in an array you can use the for...of statement

/*const list = document.querySelector('.output ul')
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';

const products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99',
];

for (const product of products) { //the for...of loop is used to iterate over each item in the array
  const subArray = product.split(':');//this is used to split the array at the ':' it now becomes two sub arrays, one array is name, the other is price
  const name = subArray[0]; //this assigns the items in the first array to the name variable
  const price = Number(subArray[1]);// this converts the second subarray to numbers and then assigns those numbers to the price variable
  total += price; //this increments the price value as you move through each array item
  const itemText = `${name} — $${price}`; //this is the text that will be displayed, note how two dollar signs are used so that the dollar sign can be printed out

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`; //to Fixed is to round up the numbers to the figure indicated, in this case two decimal places



const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value); //this is to add the most recent search value at the top of the pile

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
 the replace method is used to replace some part of a string too
  
  const browserType = 'Chrome'
  const updated = browserType.replace('moz', 'van')
  
  console.log(updated);
  console.log(browserType);
  
  the replace method like many string methods does not change the string it was called upon, it instead returns a new string
  to replace the original string you can assign a new var.replace to the original var
*/

//Arrays
//to access every item in an array you can use the for...of statement
/*
  There are five methods of copying an array
  i) Using the for loop
    const newData = []
    for(let i = 0, i<data.length; i++){
      newData.push(data[i)
    }
      
  2) Using the from() method 
  const newData = Array.from(data)
  
  3) Using the slice() method this method seems to be the fastest for browsers
  const newData = data.slice()
  
  4) Using the rest/spread operator
  const newData = [...data]
  
  5) Using the map() method
  const newData = data.map(x => x)
*/
//Ternary operator
/*The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value if it is true and return another if false
  (condition)? run this code:run this code instead
  
  const select = document.querySelector('select')
  const html= document.querySelector('html')
  document.body.style.padding = '10px'
  
  function update(bgColor, textColor){
  html.style.backgroundColor = bgColor
  html.style.color = textColor;
  }
  
  select.addEventListener('change', () => (select.value
  'black' ) ? update('black', 'white'): this tells the system to use whatever color was selected as the background color and its inverted for text
  update('white', 'black')); what it means is if black is selected, make black the background color and make the text white

*/

  //Loops
  /*
    for (const cat of cats){} when cats is an array, this means get the first item in the cats collection
    assign it to the variable cat and the run the code.  between the curly brackets
  
    map is a specialized loop for collecton and you can use it to do something to each item in a collection
    then create a new item containing the changed items
    function toUpper(string){
      return string.toUpperCase()
    }
    const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
    const upperCats = cats.map(toUpper); since the map function prints a new array you have to declare the map function under a new variable
    
    console.log(upperCats); this prints a new array with all array entries in capital letters
    in this code a fuction was passed into the map method, map calls the function once for each item in the array it then adds the return value from each function call to a new array 
    when it's done it returns the new array
    
    filter() tests each item in a collection and creates a new collection containing only items that match
    function lCat(cat){
        return cat.startsWith('L') this tells the function to note the strings in the array that start with the word 'L'
      }
      
      const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger','Caracal', 'Lion']
      
      const filtered = cats.filter(lCat);// the filter method here tells the program to filter out the words stated in the function and return them to a new array
      
      console.log(filtered) this prints a new array ["Leopard", "Lion"]
      
    

1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

2. RAW TEXT STRINGS

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
let insertX = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"] //the arrays are to create random strings in strategic positions

let insertY = ["the soup kitchen",
"Disneyland",
"the White House"]

let insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"]

3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result); //this means on clicking the button, execute a defined function 

function result() {
    let newStory= storyText;// this is to change the as many times as we want, if we modify the text irectly it will only change once
    let xItem = randomValueFromArray(insertX) //it is important to declare the array as an argument
    let yItem = randomValueFromArray(insertY)
    let zItem = randomValueFromArray(insertZ)
    newStory = newStory.replace(":insertx:", xItem) //this is the replace method in a string, it is used to replace a substring, if you want to modify the original string you have to equate the replaced string with original 
    newStory = newStory.replace(":inserty:", yItem)
    newStory = newStory.replace(":insertz:", zItem)
    newStory = newStory.replace(":insertx:", xItem) //this was written twice because there are two instances of insertx 
  if(customName.value !== '') {//if the custom value is not an empty input, replace with inputted value
    const name = customName.value;
    newStory = newStory.replace("Bob", name) //replace original value with this value
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.071) + ' stone'; 
    const temperature =  Math.round(((94-32)*5)/9) + ' centigrade';
    newStory = newStory.replace("94 fahrenheit", temperature)
    newStory = newStory.replace("300 pounds", weight)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
*/
