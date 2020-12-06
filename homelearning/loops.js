// loops in javascript


// while loops
/*
var counter = 0;
while(counter < 5){
    console.log("favour "+ counter);
    counter+=1;
}
*/

/*
// do while loop
//they run the code before they check if the condition is true or false

var number = 10;
do{
    console.log('hello '+ number);
    number-=2;
}while (number > 2 );

*/

/*
// for loops
var demo;
for ( demo = 5; demo >0 ; demo-=2 ){
    console.log("i am not bad" + demo)
}
*/



/*
// looping over string using the forloop
// this way i havwec just looped over a forloop

var string = "looping is fun! ";
for (var i = string.length -1; i >0; i-=1 ){
    console.log(string + i);

}
*/

// using the continue statement in a loop
// in this loop i tried to add all the odd numbers from 1 to 100 and give the value
// i used the if statement  for loop continue modulus

/*
var sum =0;
for (var number =0; number < 100;number++){
    if ( number % 2 == 0){
        continue;
    }
    sum+=number;
}
console.log('this is the addition of the odd number trom 1 -- 100: '+sum);

/*
for (let num=0; num<100; num++){
    console.log(num);
} */


// this is an object in java script it is just like dictionary
let name= {first: 'favour', last:'Afenikhena'};
alert(name.first);















































