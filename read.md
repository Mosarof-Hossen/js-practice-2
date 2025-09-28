js=>>javascript is a programming language .web page interactive and dynamic. use HTML,CSS,JavaScript..

//js=>> Js primitive DataType is a type of data that is not an object and no methods.

(======>>>>>PRIMITIVE Data <<<=====)
⚔Primitive values are immutable ==>> can not be change directly ==>> and are  stored by value 
Js Primitive data==>>{(String==>textual data.),
(Number==>> Both integers and floating-point Number)
,(BigInt==>>Very large integers beyond Number limits)
(Boolean==>>true or false)
(Undefined==>>A Variable declared but not assigned a value)
(Null==>>Represents intentional"no value"or Empty)
(Symbol==>> Unique and immutable Identifier,often used as object)
}

{===>>Non-Primitive<<===}Nn-Primitive (Reference0)Data Types in js 
1|(Object)==>> A collection of kay value
2|(Array)===>> A special kind of object for ordered list
3|(Function)===>>> in javascript,function are objct to
4|(Date)==>>> Built in object for working with dates and times



In JavaScript, undefined is a primitive value that represents the absence of a defined value.

🔹 What is undefined in JavaScript?

It means "a variable has been declared, but has not been assigned a value yet."

🧠 Examples:
1. Unassigned Variable:
let x;
console.log(x); // Output: undefined


→ x exists, but no value has been assigned.

2. Missing Function Return:
function greet() {
  // no return
}

console.log(greet()); // Output: undefined


→ The function runs but doesn’t return anything.

3. Accessing Non-Existent Property:
const person = { name: "Ali" };
console.log(person.age); // Output: undefined


→ The property age doesn’t exist.

🔸 Difference between undefined and null:


{====>>>>truthy data<<<====}
🔹 Falsy values

In JavaScript, these values are always considered false when used in a condition:

false

0 (zero)

"" (empty string)

null

undefined

NaN

👉 Example:

if (0) {
  console.log("This will not run"); // 0 is falsy
}

🔹 Truthy values

Anything that is not falsy is considered truthy.

Examples of truthy values:

true

Any non-zero number → 1, -5, 3.14

Any non-empty string → "hello", "0", "false"

Objects → {}, []

Functions

👉 Example:

if ("hello") {
  console.log("This will run"); // non-empty string is truthy
}

🔹 How it works with !

The ! operator flips truthy/falsy:

let data = "hi";

if (!data) {
  console.log("Falsy");
} else {
  console.log("Truthy");
}


➡️ Output: "Truthy" (because "hi" is a non-empty string, so it’s truthy).

👉 Rule of thumb:

Falsy = very few special values (false, 0, "", null, undefined, NaN).

Everything else is truthy.