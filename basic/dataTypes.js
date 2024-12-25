/*
1. Create an HTML file in the current directory.
2. Add this JavaScript file to the HTML file using the <script> tag.
3. Open the HTML file in a browser.
4. Inspect the browser using developer tools. [Right-click on the page and select "Inspect" (or press Ctrl+Shift+I / Cmd+Option+I)]
5. Navigate to the "Console" tab to observe the output.
*/

// Demonstration of Primitive Data Types in JavaScript

// 1. String: Represents textual data
let name = "Ramachandra"; // Double quotes
let otherName = 'Dasarathi'; // Single quotes
console.log(otherName + " is one of the names of " + name);


// 2. Number: Represents integer and floating-point numbers
let age = 1016; // Integer value
let marks = 97.5; // Floating-point value
console.log("Name:", name, '(Type:', typeof name, ')');
console.log("Age:", age, '(Type:', typeof age, ')');
console.log("Marks:", marks, '(Type:', typeof marks, ')');

// Special case: NaN (Not-a-Number)
let nanValue = NaN;
console.log("NaN Value:", nanValue, '(Type:', typeof nanValue, ')');

// 3. Boolean: Represents logical values (true or false)
let isStudent = true;
let isTeacher = false;
console.log("Is student:", isStudent, '(Type:', typeof isStudent, ')');
console.log("Is teacher:", isTeacher, '(Type:', typeof isTeacher, ')');

// 4. Null: Represents an intentional absence of any object value
let nullValue = null;
console.log("Null Value:", nullValue, '(Type:', typeof nullValue, ')'); // typeof null returns "object" (quirk in JavaScript)

// 5. Undefined: Represents a variable that has been declared but not assigned a value
let undefinedValue1; // Uninitialized variable
let undefinedValue2 = undefined; // Explicitly assigned undefined
console.log("Undefined Value 1:", undefinedValue1, '(Type:', typeof undefinedValue1, ')');
console.log("Undefined Value 2:", undefinedValue2, '(Type:', typeof undefinedValue2, ')');

// 6. BigInt: Represents integers larger than the Number type's limit (Introduced in ES11)
let bigIntNumber = 1234567890123456789012345678901234567890n; // Use 'n' to define a BigInt
console.log("BigInt Value:", bigIntNumber, '(Type:', typeof bigIntNumber, ')');

// 7. Symbol: Represents a unique and immutable value (Introduced in ES6)
let symbol1 = Symbol('My Symbol'); // Symbol with description "My Symbol"
let symbol2 = Symbol('My Symbol'); // Another unique Symbol, even with the same description
console.log("Symbol1:", symbol1, '(Type:', typeof symbol1, ')');
console.log("Symbol2:", symbol2, '(Type:', typeof symbol2, ')');
console.log("Are Symbol1 and Symbol2 equal?", symbol1 === symbol2); // Always false because Symbols are unique

/*
Additional Notes:
- NaN (Not-a-Number) is of type "number" but represents an invalid number.
- typeof null returns "object" due to a historical bug in JavaScript.
- BigInt allows representation of very large integers beyond the limit of the Number type.
- Symbol instances are always unique, even if they have the same description.
*/
