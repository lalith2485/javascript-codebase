/*
1. Create an HTML file in the current directory.
2. Add this JavaScript file to the HTML file using the <script> tag.
3. Open the HTML file in a browser.
4. Inspect the browser using developer tools. [Right-click on the page and select "Inspect" (or press Ctrl+Shift+I / Cmd+Option+I)]
5. Navigate to the "Console" tab to observe the output.
*/

// Logical Operators in JavaScript
let x = true, y = false;
console.log(`x = ${x} & y = ${y}`);

console.log("=== Logical Operators ===");
// && : AND (true only if both are true)
console.log("x && y:", x && y); // false

// || : OR (true if at least one is true)
console.log("x || y:", x || y); // true

// ! : NOT (negates the value)
console.log("!x:", !x); // false
console.log("!y:", !y); // true

