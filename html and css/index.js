console.log('Hello World');

let name = 'mosh';
console.log(name);
let document= 22;
console.log(document)
// not a variable cannot be a reserve keyword
// the name should be meaningful
// a variable cannot start with a number
// variables are case sensitive



 const  interstRate = 0.3; // const is used for final it cannot be change
//interstRate =1; // here i was trying to change the interstRate so it wont
// change unless i use let not const in the first interstRate

console.log(interstRate); // it would give ma an error



// there are five types of premitive types in javascript
//string
//Number
//Boolean
// undefined
// null

let firstName='favour'; // string literal
let  age = 30; // Number Literal
let isApproved= true; // boolean Literal
let lastName=undefined;
let selectedColor = null;
let ask = 20;

let person={
    name : 'favour',
    age : 222
};

// there are two ways to access the preson name from this dictionary
// the dot
// bracket notation
console.log(person.name)

//    ARRAYS IN JAVASCRIPT
// array can be changed in js and it is dynamic and can be changed it can contain numbers and
// it also can contain alphbet at the same time

let selectedColors = ['red','blue'];// declaring an array
console.log(selectedColors[0]); // getting only the first item
console.log(selectedColors.length); // length of the array



// functions in an array

// this is how we declare  a fuction in js and the next is for us to call it
function greet(lastName, firstName) {
    console.log('Helllo World i am ' + lastName   + firstName);
}

greet('Afenikhena',' favour')

// performing a task
// calculating a value

function square(number) {
    return number * number;
}

console.log(square(2))






















