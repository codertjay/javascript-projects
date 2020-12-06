/*

function fun(){
    alert('This is a function');
}

//calling the function
fun();
*/

/* let us create a function that says hello by your name

for example

Name:"Favour"
return : "hello" Favour
 */

/*
function greeting() {
    var name=prompt("what is your name? ");
    var result = alert("Hello "+ name);
    console.log("Hello "+ name);

}
// calling the greeting function
greeting();

//adding two numbers in a function
function sumNumbers(num1,num2){
    var result = num1 + num2;
    console.log(result);

}

sumNumbers(5,6);
*/
//
// var dog = {name:"boogy", color:"brown",legs:4};
//
// document.write(dog.name,' ' ,dog["name"]+"<br>");
//
//
//
// function getnames() {
//     document.write("dog name is  " + dog.name +" color is "+ dog.color+"<br>");
//     document.write(`dog name is   ${dog.name} color is  ${dog.color}`
//    +"<br>" );
//
// }
//
// var names = function() {
//     document.write("dog name is  " + dog.name +" color is "+ dog.color+"<br>");
//     document.write(`dog name is   ${dog.name} color is  ${dog.color}`
//    +"<br>" );
//
// };
//
// getnames();
//




// anonymous function
//these are functions without name


var add = (x,y)=>{
    var res = x+y;
    document.write(res + "<br>")
};


add(33,22);
add(113,11);
