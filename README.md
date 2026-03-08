 1️⃣ What is the difference between var, let, and const?
      
  #ans: 
   Difference Between var, let, and const in JavaScript

   In JavaScript, var, let, and const are used to declare variables. However, they differ in terms of scope, redeclaration, and reassignment.

   #var

   a. var is the oldest way to declare variables in JavaScript. It is function-scoped, which means it is accessible throughout the entire function where it is declared.

   b. Variables declared with var can be redeclared.

   c. They can also be reassigned with a new value.

   #let
     let was introduced in ES6 (2015). It is block-scoped, meaning it is only accessible within the block { } where it is declared.

     a. Variables declared with let cannot be redeclared in the same scope.

     b. They can be reassigned.
    
   #const

   a. const is also introduced in ES6 and is block-scoped like let. However, variables declared with const cannot be reassigned after they are initialized.

   b. Cannot be redeclared

   c. Cannot be reassigned




2️⃣ What is the spread operator (...)?

#ans: The spread operator (...) is used to expand elements of arrays, objects, or iterables. It is commonly used for copying arrays, merging arrays or objects, and passing multiple values into functions. It makes JavaScript code cleaner and more efficient




3️⃣ What is the difference between map(), filter(), and forEach()?

#ans: 
1. map()
The map() method is used to transform each element of an array and return a new array with the modified values.

a. It returns a new array.

b. The original array remains unchanged.

2. filter()

The filter() method is used to select specific elements from an array based on a condition. It returns a new array containing only the elements that satisfy the condition.

a. It returns a new array.

b. Elements that do not meet the condition are excluded.





4️⃣ What is an arrow function?
#ans:
An arrow function is a shorter and more modern way to write functions in JavaScript. It was introduced in ES6 (ECMAScript 2015) and uses the arrow (=>) syntax.

Arrow functions make the code more concise and easier to read, especially for simple functions.
Key Characteristics

a. Provides shorter syntax for writing functions.

b. Does not have its own this context; it inherits this from the surrounding scope.

c. Commonly used with array methods like map(), filter(), and forEach().

An arrow function is a modern and concise way to write functions in JavaScript. It simplifies function syntax and is widely used in modern JavaScript development.





5️⃣ What are template literals?
#ans:
Template literals are a feature introduced in ES6 (ECMAScript 2015) that allow us to create strings in a more flexible and readable way. we use **backticks ( ) instead of single (' ') or double (" ") quotes.

Template literals make it easier to embed variables, create multi-line strings, and write dynamic content inside strings.

a. String Interpolation

Template literals allow us to insert variables or expressions directly into a string using ${ }.

b. Multi-line Strings

With template literals, we can write strings across multiple lines without using special characters like \n.

c. Expressions Inside Strings

We can also perform calculations or expressions inside ${ }.