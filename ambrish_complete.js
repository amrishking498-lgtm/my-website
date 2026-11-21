// ============================================================
// 01. OUTPUT: console.log(), alert()
// ============================================================
console.log("Hello JavaScript!");
console.log("Ambrish Raj Mishra");
// alert("Welcome to JavaScript!");
// ============================================================
// 02. VARIABLES: var, let, const
// ============================================================
// var oldName = "Ambrish";
// let age = 19;
// const college = "GLA University";
// age = 20;                 // let can be reassigned
// oldName = "Ambrish Raj";  // var can be reassigned
// college = "Other";        // Error: const cannot be reassigned
// console.log(oldName, age, college);
// ============================================================
// 03. DATA TYPES: String, Number, Boolean, Undefined, Null
// ============================================================
// let studentName = "Ambrish";  // String
// let marks = 85;               // Number
// let isPassed = true;          // Boolean
// let result;                   // Undefined
// let selectedValue = null;     // Null
// console.log(typeof studentName);
// console.log(typeof marks);
// console.log(typeof isPassed);
// console.log(typeof result);
// console.log(typeof selectedValue); // JavaScript reports "object" for null
// ============================================================
// 04. OPERATORS
// ============================================================
// Arithmetic: +, -, *, /, %, **
// let a = 10;
// let b = 3;
// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.333...
// console.log(a % b);  // 1 (remainder)
// console.log(a ** b); // 1000
// Assignment: =, +=, -=, *=, /=
// let n = 10;
// n += 5;
// console.log(n); // 15
// Comparison: ==, ===, !=, !==, >, <, >=, <=
// console.log(5 == "5");  // true: value comparison with conversion
// console.log(5 === "5"); // false: value and type both checked
// console.log(10 > 5);    // true
// Logical: && (AND), || (OR), ! (NOT)
// console.log(10 > 5 && 5 > 2); // true
// console.log(10 < 5 || 5 > 2); // true
// console.log(!(10 > 5));       // false
// Increment / decrement
// let count = 1;
// count++;
// count--;
// console.log(count);
// ============================================================
// 05. TYPE CONVERSION
// ============================================================
// let value = "25";
// console.log(Number(value));      // 25
// console.log(parseInt("25.8"));   // 25
// console.log(parseFloat("25.8")); // 25.8
// console.log(String(100));        // "100"
// console.log(Boolean(1));         // true
// console.log(Boolean(0));         // false
// console.log(Boolean(""));        // false
// console.log(Boolean(" "));       // true

// IMPORTANT: prompt() returns text (a string).
// let userAge = Number(prompt("Enter your age:"));
// console.log(userAge + 1);
// ============================================================
// 06. STRINGS AND TEMPLATE LITERALS
// ============================================================
// let firstName = "Ambrish";
// let lastName = "Mishra";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// console.log(fullName.length);
// console.log(fullName[0]);
// console.log(`${firstName} ${lastName} is learning JavaScript.`);
// let course = "  JavaScript Basics  ";
// console.log(course.trim());
// console.log(course.toUpperCase());
// console.log(course.toLowerCase());
// console.log(course.includes("Script"));
// console.log(course.startsWith("  Java"));
// console.log(course.indexOf("Basics"));
// console.log(course.slice(2, 12));
// console.log(course.replace("Basics", "Advanced"));
// let skills = "HTML,CSS,JavaScript";
// console.log(skills.split(","));
// let word = "hello";
// console.log(word.split("").reverse().join(""));
// ============================================================
// 07. CONDITIONAL STATEMENTS: if, else if, else
// ============================================================
// let number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }
// Grade example
// let marks = Number(prompt("Enter marks:"));
// if (marks >= 95) {
//     console.log("Grade A+");
// } else if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 80) {
//     console.log("Grade B");
// } else if (marks >= 70) {
//     console.log("Grade C");
// } else {
//     console.log("Grade D");
// }
// Even / odd
// let n = Number(prompt("Enter a number:"));
// if (n % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }
// ============================================================
// 08. SWITCH STATEMENT
// ============================================================
// let day = Number(prompt("Enter day number (1-7):"));
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }
// ============================================================
// 09. LOOPS: for
// ============================================================
// Print 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// Sum from 1 to 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log("Sum =", sum);
// Print 10 to 1
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// Factorial
// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact *= i;
// }
// console.log("Factorial =", fact);

// Sum of even and odd numbers from 1 to 10
// let evenSum = 0;
// let oddSum = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         evenSum += i;
//     } else {
//         oddSum += i;
//     }
// }
// console.log("Even sum =", evenSum);
// console.log("Odd sum =", oddSum);


// ============================================================
// 10. LOOPS: while and do...while
// ============================================================

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do...while runs at least once
// let j = 10;
// do {
//     console.log(j);
//     j++;
// } while (j <= 5);


// ============================================================
// 11. FUNCTIONS: declaration, parameters, return, default value
// ============================================================

// Function declaration
// function greet() {
//     console.log("Welcome to JavaScript!");
// }
// greet();

// Parameters and arguments
// function add(a, b) {
//     console.log(a + b);
// }
// add(5, 4);

// Return value
// function multiply(a, b) {
//     return a * b;
// }
// let answer = multiply(4, 5);
// console.log(answer);

// Default parameter
// function introduce(name, city = "Unknown") {
//     return `I am ${name} from ${city}`;
// }
// console.log(introduce("Riya", "Mathura"));
// console.log(introduce("Riya"));

// Function expression
// const square = function (n) {
//     return n * n;
// };
// console.log(square(5));

// Arrow function
// const subtract = (a, b) => a - b;
// console.log(subtract(9, 4));

// Calculator using a function
// function calculator(a, b, operator) {
//     if (operator === "+") {
//         return a + b;
//     } else if (operator === "-") {
//         return a - b;
//     } else if (operator === "*") {
//         return a * b;
//     } else if (operator === "/") {
//         return b !== 0 ? a / b : "Cannot divide by zero";
//     } else {
//         return "Invalid operator";
//     }
// }
// console.log(calculator(5, 9, "+"));


// ============================================================
// 12. ARRAYS: create, access, update, length
// ============================================================

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);
// fruits[1] = "Orange";
// console.log(fruits);

// Arrays use zero-based indexing: first index is 0.


// ============================================================
// 13. ARRAY METHODS: add and remove elements
// ============================================================

// let fruits = ["Apple", "Banana", "Mango"];

// fruits.push("Orange");     // add at end
// console.log(fruits);

// fruits.pop();              // remove from end
// console.log(fruits);

// fruits.unshift("Grapes");  // add at beginning
// console.log(fruits);

// fruits.shift();             // remove from beginning
// console.log(fruits);

// let numbers = [10, 20, 30, 40];
// console.log(numbers.slice(1, 3)); // returns [20, 30], original unchanged
// numbers.splice(1, 2);             // from index 1, remove 2 elements
// console.log(numbers);             // [10, 40]


// ============================================================
// 14. ARRAY METHODS: includes, indexOf, join, concat
// ============================================================

// let colors = ["Red", "Green", "Blue"];
// console.log(colors.includes("Green")); // true
// console.log(colors.indexOf("Blue"));   // 2
// console.log(colors.join(" - "));       // Red - Green - Blue

// let x = [1, 2];
// let y = [3, 4];
// let z = x.concat(y);
// console.log(z);


// ============================================================
// 15. ARRAY LOOPS: for, for...of, forEach
// ============================================================

// let numbers = [10, 20, 30, 40];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let value of numbers) {
//     console.log(value);
// }

// numbers.forEach(function (value, index) {
//     console.log(index, value);
// });


// ============================================================
// 16. ARRAY METHODS: map, filter, reduce,find
// ============================================================

// map: creates a new array by changing each element
// let numbers = [1, 2, 3, 4];
// let double = numbers.map(function (n) {
//     return n * 2;
// });
// console.log(double); // [2, 4, 6, 8]

// // filter: creates a new array with elements that pass a condition
// let values = [1, 2, 3, 4, 5, 6];
// let even = values.filter(function (n) {
//     return n % 2 === 0;
// });
// console.log(even); // [2, 4, 6]
// // find: returns the first element that passes a conditions
// let values1 =[20,10,30,40];
// let even1=values1.find(function(n){
//     return n%2==0
// });
// console.log(even1); //20
// // reduce: combines array values into one result
// let nums = [10, 20, 30];
// let total = nums.reduce(function (sum, n) {
//     return sum + n;
// }, 0);
// console.log(total); // 60

// let nums1 = [10, 20, 30];
// let total1 = nums.reduce(function (acc, n) { //also use let total1 = nums.reduce( (acc, n) => {
//     return acc* n;
// }, 1);
// console.log(total1);

// ============================================================
// 17. OBJECTS
// ============================================================

// let student = {
//     name: "Ambrish",
//     age: 19,
//     course: "JavaScript"
// };
// const key="age";
// console.log(student[key])
// console.log(student.name);
// console.log(student["age"]);
// student.age = 20;
// student.city = "Mathura";
// console.log(student);
// student.city="vrindavan";
// student.name="AMBRISH RAJ MISHRA"
// delete student.age;
// console.log(student);
// ============================================================
// 18. ARRAY OF OBJECTS
// ============================================================

// let students = [
//     { name: "Rahul", age: 22, course: "JavaScript" },
//     { name: "Riya", age: 20, course: "Python" }
// ];

// console.log(students.length);
// console.log(students[0]);
// console.log(students[0].name);
// console.log(students[1]["course"]);
// =============================================================
// object creations : 
// =============================================================
// const user1=new Object();
// user1.name="Aman";
// user1.age=25;
// console.log(user1)
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const u1 = new User("Rohan", 21);
// console.log(u1);          // User { name: "Rohan", age: 21 }
// console.log(u1.age);      // 21

// function User2(name) {
//     this.name = name;
// }
// const user2 = new User("mohan");
// console.log(user2.name); // "mohan"
// class Student {
//     constructor(name,course){
//         this.name=name;
//         this.course=course;
//     }
//     display(){
//         console.log(
//             this.name + " learns "+ this.course
//         );
//     }
// }
// const s1=new Student("aman", "JS");
// s1.display()
// //...spreat/
// const first=[10,20,40];
// const second=[30,40];
// const th=[...first,70,80]
// const combined=[...first,...second];
// console.log(combined);//[10,20,30,40]
// console.log(...combined)//10,20,30,40
// ============================================================
// 20. BREAK AND CONTINUE
// ============================================================

// break stops the loop
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// continue skips the current turn
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// ============================================================
// 21. PRACTICE QUESTIONS
// ============================================================

// Q1. Print numbers from 1 to 20.
// Q2. Print all even numbers from 1 to 50.
// Q3. Find the sum of numbers from 1 to n.
// Q4. Find the factorial of a number.
// Q5. Check whether a number is positive, negative, or zero.
// Q6. Check whether a number is even or odd.
// Q7. Find the largest of three numbers.
// Q8. Make a function that returns the square of a number.
// Q9. Find the largest value in an array.
// Q10. Find the sum of all values in an array.
// Q11. Create a new array containing only even numbers using filter().
// Q12. Double every array value using map().
// Q13. Create a student object and print its properties.
// Q14. Count how many items are in an array.

// ============================================================
// END OF JAVASCRIPT PRACTICE FILE
// ============================================================
