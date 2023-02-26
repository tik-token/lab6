let length = parseFloat(prompt("Enter the length of a rectangle: "));
let width = parseFloat(prompt("Enter the width of a rectangle: "))
let perimeter;
if (length <= 0 || width <= 0) {
    console.log(`Refresh the page and enter the positive numbers`);
  }

 else{
    perimeter = 2 * length + 2 * width;
 } 
 
console.log(`The perimeter of a rectangle is ${perimeter}`);



let number1 = parseFloat(prompt("Enter the first number: "));
let number2 = parseFloat(prompt("Enter the second number: "))

if (number1 == number2) {
    console.log(`These numbers are equal`);   
}
else {
    console.log(`These numbers are not equal`);  
}



let number3 = parseFloat(prompt("Enter the first number: "));
let number4 = parseFloat(prompt("Enter the second number: "))

if (number3 == number4) {
    console.log(`These numbers are equal`);   
}
else if (number3 > number4) {
    console.log(`The greatest number is ${number3}`);  
}
else if (number3 < number4) {
    console.log(`The greatest number is ${number4}`);  
}