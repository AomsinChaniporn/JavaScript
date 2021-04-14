function EvenorOdd(num) {
    number = num;

// ternary operator
 result = (number % 2  == 0) ? "odd" : "even";

// display the result
return (`${result}`);
}

console.log(EvenorOdd(33));
console.log(EvenorOdd(36));
console.log(EvenorOdd(7));