/*
1. Create an HTML file in the current directory.
2. Add this JavaScript file to the HTML file using the <script> tag.
3. Open the HTML file in a browser.
4. Inspect the browser using developer tools. [Right-click on the page and select "Inspect" (or press Ctrl+Shift+I / Cmd+Option+I)]
5. Navigate to the "Console" tab to observe the output.
*/

// Arithmetic Operators in JavaScript
let a = 11;
let b = 3;

console.log("=== Arithmetic Operators ===");
// Addition
console.log("Addition (a + b):", a + b); // Adds two numbers (11 + 3 = 14)

// Subtraction
console.log("Subtraction (a - b):", a - b); // Subtracts second number from the first (11 - 3 = 8)

// Multiplication
console.log("Multiplication (a * b):", a * b); // Multiplies two numbers (11 * 3 = 33)

// Division
console.log("Division (a / b):", a / b); // Divides first number by second (11 / 3 = 3.666...)

// Floor Division using bitwise OR (| 0)
console.log("Floor Division (a // b):", (a / b) | 0); // Returns the integer part (3)

// Floor Division using double tilde (~~)
console.log("Floor Division (a // b):", ~~(a / b)); // Returns the integer part (3)

// Modulus
console.log("Modulus (a % b):", a % b); // Returns the remainder (11 % 3 = 2)

// Exponentiation
console.log("Exponentiation (a ** b):", a ** b); // Raises a to the power of b (11^3 = 1331)



// Pre and Post Increment/Decrement Operators

//pre: pre operator says that first i will do my job then i will perform your job.
//post: post operator says that first i will perform your job then i will do my job.

let x = 10;

console.log("=== Increment and Decrement Operators ===");
// Pre-Increment: First increments the value, then uses it
console.log("Pre-Increment (++x):", ++x); // 11 { 'x' becomes 11(incremented)[operators job] then 'x' will be printed[our job] }

// Pre-Decrement: First decrements the value, then uses it
console.log("Pre-Decrement (--x):", --x); // 10 { 'x' becomes 10(decremented)[operators job] then 'x' will be printed[our job] }
console.log("value after pre-Decrement:",x);

// Post-Increment: First uses the value, then increments it
console.log("Post-Increment (x++):", x++); // 10 { 'x' will be printed[our job] then 'x' becomes 11(incremented)[operators job] }
console.log("Value after Post-Increment:", x); // 11

// Post-Decrement: First uses the value, then decrements it
console.log("Post-Decrement (x--):", x--); // 11 { 'x' will be printed[our job] then 'x' becomes 10(decremented)[operators job] }
console.log("Value after Post-Decrement:", x); // 10
