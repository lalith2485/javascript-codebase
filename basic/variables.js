/*
1. Create an HTML file in the current directory.
2. Add this JavaScript file to the HTML file using the <script> tag.
3. Open the HTML file in a browser.
4. Inspect the browser using developer tools. [Right-click on the page and select "Inspect" (or press Ctrl+Shift+I / Cmd+Option+I)]
5. Navigate to the "Console" tab to observe the output.
*/

// Variables in JavaScript

// "Different types of variable declarations"

// var : Variables can be re-declared & updated. They are function-scoped (if declared inside a function) or globally scoped.
// let : Variables cannot be re-declared in the same scope but can be updated. They are block-scoped.
// const : Variables cannot be re-declared or updated. They are block-scoped and must be initialized during declaration.

// Example of var
var x = 10;
console.log("x before updating:", x);
var x = 20; // Re-declared and updated
console.log("x after re-declaring and updating:", x);

// Example of let
let y = 10;
console.log("y before updating:", y);
y = 20; // Updated
console.log("y after updating:", y);
// let y = 30; // Error: "Cannot redeclare block-scoped variable 'y'".

// Example of const
const pi = 3.14;
console.log("pi:", pi);
/* pi = 20; // Error in console: "Uncaught TypeError: Assignment to constant variable." */
// const pi = 22; // Error: "Cannot redeclare block-scoped variable 'pi'".

// NOTE: Avoid using var for better code predictability and safety. Use let or const instead.

// Declaring variables without initialization
let y1;
console.log("The value of y1 when declared (using let):", y1); // undefined
let y2 = 10;
console.log("The value of y2 when declared and initialized (using let):", y2); 

/* const pi1; // Error: "Uncaught SyntaxError: Missing initializer in const declaration" */
const pi2 = 3.14;
console.log("The value of pi2 when declared and initialized (using const):", pi2);

// Rules for Variable Declarations in JS

// 1. Variable names can include letters (a-z, A-Z), numbers (0-9), underscore (_), and dollar sign ($).
let myVariable = 10; // Valid
let my_variable = 10; // Valid
let my$variable = 10; // Valid
let $myVariable = 10; // Valid
let _myVariable = 10; // Valid

// 2. Variable names cannot start with a number.
// let 1variable = 20; // Invalid

// 3. Variable names are case-sensitive
let myVar = 10;
let MyVar = 20; // This is a different variable
console.log("myVar:", myVar, "MyVar:", MyVar);

// 4. Variable names cannot be reserved keywords
// let let = 10; // Invalid
// let function = 10; // Invalid

// Additional Best Practices for Variable Naming:
// - Use meaningful names that indicate the purpose of the variable.
// - Follow camelCase convention for multi-word variable names (e.g., totalPrice, userAge).
// - Avoid overly short or single-character names unless used in loops (e.g., i, j).

// Demonstrating the scope of var, let, and const
function demoScope() {
    if (true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";

        console.log(varVariable); // Accessible
        console.log(letVariable); // Accessible
        console.log(constVariable); // Accessible
    }

    console.log(varVariable); // Accessible outside block (function-scoped)
    // console.log(letVariable); // Error: letVariable is not defined (block-scoped)
    // console.log(constVariable); // Error: constVariable is not defined (block-scoped)
}

// Calling the function to demonstrate scope
demoScope();
