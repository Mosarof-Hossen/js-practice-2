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