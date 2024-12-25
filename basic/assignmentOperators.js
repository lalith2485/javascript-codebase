/*
1. Create an HTML file in the current directory.
2. Add this JavaScript file to the HTML file using the <script> tag.
3. Open the HTML file in a browser.
4. Inspect the browser using developer tools. [Right-click on the page and select "Inspect" (or press Ctrl+Shift+I / Cmd+Option+I)]
5. Navigate to the "Console" tab to observe the output.
*/

// Assignment Operators in JavaScript
let y = 10;

console.log("=== Assignment Operators ===");
// = : Assigns value
console.log("Initial value of y:", y); // 10

// += : Adds to the current value
y += 5; // y = y + 5
console.log("y += 5:", y); // 15

// -= : Subtracts from the current value
y -= 5; // y = y - 5
console.log("y -= 5:", y); // 10

// *= : Multiplies with the current value
y *= 5; // y = y * 5
console.log("y *= 5:", y); // 50

// /= : Divides the current value
y /= 5; // y = y / 5
console.log("y /= 5:", y); // 10

// %= : Finds the remainder
y %= 5; // y = y % 5
console.log("y %= 5:", y); // 0

// **= : Raises the value to the power
y = 2; // Reset y to 2
y **= 3; // y = y ** 3
console.log("y **= 3:", y); // 8
