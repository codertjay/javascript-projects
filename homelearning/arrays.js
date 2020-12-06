// arrays
// array is  a sequence of set of values
// arrays are mutable in javascript



// arrays common method
let fruits = ['banana','pineapple','orange','apple'];
// here i wants to use to string
console.log('to string',fruits.toString());
//this way i have printed all the array out but it would be in the same line

console.log(fruits.join('*'));
// here i am joining the array with an exponential it wont be in comma
// i can change the * to - or any thing i feel  like

console.log(fruits.push('blueberries')); //this is to add value to the array judt like apppend in python
console.log(fruits.shift()); //this is to remove first from an array
console.log(fruits.unshift('blueberries')); //this is ti add first element to an array

// there is a  way you can add two  array using concat then you put it in another array

let vegetables = ['asparagus','tomato','broccoli']

let allGroceries=  fruits.concat(vegetables);// this way i have added vegetables to the array
console.log(allGroceries);







// there are two methods
// we import an array by using the new operator and this method uses bracket
// ie var name = new Array("favour1","favour","david","Afenikhena")
// the second method uses the square bracket anf does not use new
//var nameList = ["favour","david","Afenikhena","boss"];

/*
var nameList = ["favour","david","Afenikhena","boss"];
for (x in nameList){
    console.log(nameList[x]);
    console.log("favour");

}
*/
/*
// ther is another way using for loop in an array by using namelist.length

for(var i=0; i< nameList.length ; i +=1){
    console.log(nameList[0])
}
*/


// in java script you can remove the last element by using pop
// using shift remove first word in an array
// using the splice you can note to where you wat to add something in an array
// you can also use the splice method to remove something from the array
// ie splice(1,2) this means you arfe removing index 1 and 2 in the array
// the adding method is by array.splice(1,2,"facv","demo") you just added to the  index 1 and 3


/*
var numbers= [12,3,5,43,23,"5t6",7];
numbers.pop();// remove last word in an array

numbers.shift();// remove the first word in an array

numbers.splice(1,1,"demo","drey"); // add demo and drey in position one in the array

numbers.splice(1,1)
// i am using the forloop to print the array
for (x in numbers ){
    console.log(numbers[x]);
*/



// merging two arraylist and assigning it to a new variabled before printing it out
// by using concat
// using array.concat you can join two arrays and put in another variable

/*
var alphabet = ['a','b','c','d','e','f','g'];
var alphabet2 =['h','i','j','k','l'];
var  numbers = [1,23,4,5,6,6,];
var allAlphabets= alphabet.concat(alphabet,alphabet2, numbers);// joining(merging) alphabet  and alphabet2 and putting it in allAlphabet
console.log(allAlphabets);

// using the slice  i choose to print out array starting from 0 to 6 so it wont give me the rest
console.log(allAlphabets.slice(0,6));
*/

/*
var lastname = ['demo','drey','dammy'];

var scores = [1,33,2,45,3,6787,65,343,56,78   ];
// this is to sort the words alphebetically

console.log(lastname.sort());

console.log(lastname.reverse());

console.log(scores.sort());
*/

















































