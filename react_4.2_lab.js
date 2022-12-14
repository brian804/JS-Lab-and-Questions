
//How do we assign a value to a variable?
//By using the = operator


//How do we change the value of a variable?
//By erasing it and typing a new one


//How do we assign an existing variable to a new variable?
//Declare a variable with Let, then you can reasign its variable


//Remind me, what are declare, assign, and define?
//Declare the variable with let or const, assign it with the = operator, define it by writing something after the = operator


//What is pseudocoding and why should you do it?
//Pseudocode is writing out your steps in plain english and breaking the problem down so it can be translated into code. 


//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//Depending on the difficulty of the problem and experience, spend most of your time thinking and the rest coding. 90% think, 10% code.

//

/* Create a variable called firstVariable

Assign it the value of the string "Hello World"

Change the value of this variable to some number

Store the value of firstVariablein a new variable called secondVariable

Change the value of secondVariableto any string.

What is the value of firstVariable?

Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

let firstVariable = 'Hello World'
firstVariable = 1
let secondVariable = firstVariable
secondVariable = 'hi'
let yourName = 'Brian'
let sentence = 'Hi im'
let fullSentence = yourName + sentence */

//

/* const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48'); */

//

/* let animal = 'cow'
if(animal = 'cow'){
    console.log('moo')
} else {
    console.log('youre no cow')
} */

//

/* let age = 16
if(age >= 16){
    console.log('heres the keys')
} else if (age < 16){
    console.log('too young')
}
 */

//


/* for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let i = 0; i <= 400; i++){
    console.log(i)
}

for(let i = 12; i <= 400; i+=3){
    console.log(i)
} */


/* for(let i = 1; i <= 100; i++)
    if(i % 2 === 0){
    console.log(i, 'is an even number')
} else {
    console.log(i)
} */


/* for (let i = 0; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log(i, 'high five and threes a crowd')
    }
    if (i % 5 === 0){
        console.log(i, 'high five')
    } else if(i % 3 === 0){
        console.log(i, 'threes a crowd')
    } else {
        console.log(i)
    }
}  */


/* let bank_account = 0;
for (let i = 1; i <= 10; i += 1) {
  bank_account += i;
}
console.log("bank_account = ", bank_account); */


//


/* What are the things in an array called?
//Elements

Do Arrays guarantee those things will be in order?
//no

What real-life thing could you model with an array?
//An array in JavaScript is a type of global object used to store data. Arrays can store multiple values in a single variable, which can condense and organize our code. */

/* let arr = ['quote1', 'quote2', 'quote3']

const randomThings = [1, 10, 'hello', true]
console.log(randomThings[0])
randomThings[2] = 'World'
console.log(randomThings[2]) */

/* const ourClass = ['salty', 'zoom', 'sardine', 'slack', 'github']
console.log(ourClass[2])
ourClass[4] = 'octocat'
ourClass.push('cloud city')
console.log(ourClass) */

/* const myArray = [5, 10, 500, 20]
myArray.push('aegon', 'hi')
myArray.shift()
myArray.unshift('bob')
myArray.pop
myArray.reverse()
console.log(myArray)
//mutating the array lets you assign a different element in the array without changing the const myArray */

//

/* let i = 0
if (i < 100){
    console.log('little num')
} else if (i >= 100) {
    console.log('big num')
}
 */


// accessing elements in nested arrays
/* const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up shirt",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  kristynsCloset.splice(6, 0, 'raybans')
  kristynsCloset[5] = "stained knit hat"
  console.log(kristynsCloset)

  const shirt = thomsCloset[0][0]
  const jeans = thomsCloset[1][0]
  const accessories = thomsCloset[2][2]
  console.log('tom is wearing a', shirt, jeans, 'and', accessories) */

  //


/* //write a function with a parameter that returns a greeting with the argument interpolated
 function printGreeting(name){
    console.log('Hello there,', name + '!')
 }
 printGreeting('Brian')


 function printCool(name){
    console.log(name, 'is cool')
 }
 printCool('joe') */


/* // cube a number 
function cubed(n){
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum += i ** 3
    }
    return sum
}
console.log(cubed(3))
console.log(cubed(4))
 */


/* //if its a vowel return true, else false
function isVowel(v) {
    let vowel = ["a", "e", "i"]
    for(let i = 0; i < vowel.length; i++){
        if(v === vowel[i]){
            return true
        } else {
            return false
        }
    }
}
console.log(isVowel("a")) */


/* //finds length of strings

const getTwoLengths = (str1, str2) => [str1.length, str2.length]
console.log(getTwoLengths("Christmas", "winter")) */

/* const getMultipleLengths = (...args) => [args.lenght]
console.log(getMultipleLengths('hi', 'what', 'welcome')) */


/* //getMultipleLengths
function getMultipleLengths(...args){
    for (let i=0; i<args.length; i++){
        console.log(args[i].length);
        }
}
console.log(getMultipleLengths('hi', 'welcome')) */


/* //maxOfThree
let num = [4,5,1,3];
console.log(Math.max.apply(null, num));
  */

/* //print the longest word
function longestString(arr){
    let longest = ''
    arr.map(function(str){
        if (str.length > longest.length){
            longest = str
        }
    })
    return longest
}
console.log(longestString(['we', 'are', 'strings', 'hi'])) */

//

/* //Make a user object
let user = {
    name: "Brian",
    email: "brian@email",
    age: 28,
    purchased: [],
    friend: {
        name: 'jane',
        age: 28,
        location: 'NJ',
        purchased: []
    }
}

user.email = "updated@email"
user.age++
user.location = 'NC'
user.purchased.push('carbohydrates', 'peace of mind', 'merino jodhpurs')
user.friend.age = 55
user.friend.purchased.push('the one ring', 'a latte') */