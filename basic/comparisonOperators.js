/*
1. Create an HTML file in the current directory.
2. Add this JavaScript file to the HTML file using the <script> tag.
3. Open the HTML file in a browser.
4. Inspect the browser using developer tools. [Right-click on the page and select "Inspect" (or press Ctrl+Shift+I / Cmd+Option+I)]
5. Navigate to the "Console" tab to observe the output.
*/

// Comparison Operators in JavaScript
let a = 5, b = 3, c = "5";
console.log(`a: ${a} (${typeof a})\nb: ${b} (${typeof b})\nc: ${c} (${typeof c})\n`);

console.log("=== Comparison Operators ===");
// == : Checks if values are equal (ignores type)
console.log("a == b:", a == b); // false 
console.log("a == c:", a == c); // true (string "5" is converted to number 5)

//a is a number and c is a string how their can be true on equality ?
// js implesetly convert the string to number if any, to num then it compares! 
//To over come from this prob we use '===' instead of '==' to check if the value and datatype are equal.

// === : Checks if values and types are equal
console.log("a === c:", a === c); // false (different types)

// != : Checks if values are not equal
console.log("a != b:", a != b); // true

// !== : Checks if values and types are not equal
console.log("a !== c:", a !== c); // true (different types)

// > : Greater than
console.log("a > b:", a > b); // true

// >= : Greater than or equal
console.log("a >= b:", a >= b); // true

// < : Less than
console.log("a < b:", a < b); // false

// <= : Less than or equal
console.log("a <= b:", a <= b); // false
