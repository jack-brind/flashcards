export const javascriptTips = [
  {
    title: 'Nullish Coalescing Operator',
    summary:
      "Nullish Coalescing Operator works with nullish values, not falsy values. This will evaluate null or undefined as falsy but treat 0 or '' as truthy. Therefore, zero or empty strings are accepted.",
    snippet: '/snippets/nullish.png',
    highlight: "It's good for working with default values.",
  },
  {
    title: 'Math.trunc()',
    summary:
      'This method returns the integer part of a number by removing any demical points.',
    snippet: '/snippets/trunc.png',
  },
  {
    title: 'Math rounding',
    summary: 'To round a value, use floor, ceil and round.',
    snippet: '/snippets/math functions.png',
  },
  {
    title: 'OR (||) operator',
    summary:
      'The OR (||) operator evaluates expressions from left to right and returns the first “truthy” value it encounters. If all values are “falsy” (e.g., false, 0, "", null, undefined, or NaN), it returns the last value',
    snippet: '/snippets/or dark.png',
  },
  {
    title: 'Parameters',
    summary:
      'Parameters are placeholders defined in a function declaration to accept input values when the function is called. They act as variables inside the function, allowing you to pass data into it for processing. When the function is called, the values you pass are assigned to these parameters. Default parameters allow you to set a default value for a function’s parameter, which is used if no argument is provided or if the argument is undefined.',
    snippet: '/snippets/parameters.png',
    highlight:
      'When passing data when the function is invoked, these are known as arguments',
  },
  {
    title: 'for...of loop',
    summary:
      'The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, or other iterables. It retrieves the values of the iterable in order, making it simpler to work with the contents directly compared to other loop types.',
    snippet: '/snippets/for of.png',
    highlight:
      'Unlike for...in, which works with object keys, for...of focuses solely on the values.',
  },
  // {
  //   title: 'for...in loop',
  //   summary:
  //     'The for...in loop iterates over the keys (or property names) of an object or the indices of an array. It’s commonly used to access all properties of an object but should be avoided for arrays if you only want the values, as it may include inherited properties. For arrays, for...in is less common because it retrieves the indices, not the values directly.',
  //   snippet: '/snippets/nulllish-operator1.png',
  //   highlight:
  //     'Unlike for...in, which works with object keys, for...of focuses solely on the values.',
  // },
  {
    title: 'Higher order functions',
    summary:
      'Higher order functions accept other functions as arguments (callback functions). They delegate the smaller tasks to the lower level callback functions. This is important for async functions that call a function to do something and wait for that callback function to return something.',
    snippet: '/snippets/truthy falsy.png',
    highlight: 'Higher order functions are like CEOs that have an assistant',
  },
  {
    title: 'Abstraction',
    summary:
      'Abstraction is about hiding the complexity of a system and exposing only the essential parts that you need to work with. It allows you to focus on what a program does rather than how it does it.',
    snippet: '/snippets/truthy falsy.png',
    highlight: "You don't need to how a car's engine works to drive it",
  },
  {
    title: 'Modulus operator',
    summary:
      'The modulus (%) will return anything left over from a division. So for 10 % 3, this works out what is left over when 10 is divided by 3.',
    snippet: '/snippets/modulus.png',
  },
  {
    title: 'Truthy & Falsy values',
    summary:
      'These values determine how expressions evaluate in boolean contexts. Values are falsy when they return false, 0, an empty string, Null, Undefined or NaN. Values are truthy non-zero numbers, non-empty strings, true, or an object ({} or []).',
    snippet: '/snippets/truthy falsy.png',
    highlight:
      'The nullish coalescing operator specifically checks for null or undefined, ignoring the other falsy values.',
  },
  {
    title: '.bind() method',
    summary:
      "The bind method is used to create a new function with a specific this value (context). This is like borrowing a function that's scope is encapsulated, but switching the context to the current invokation.",
    snippet: '/snippets/bind.png',
    highlight:
      "When using bind, the first argument is what you want 'this' to be set to",
  },
  {
    title: 'Closures',
    summary:
      'Any function always have access to the variable environment of the execution context in which the function was created. When a function is created, it “remembers” the environment (variables, functions, and objects) in which it was created. Closures created encapsulation, maintaining state and avoiding polluting the global scope - Even though the outer function is done executing, the inner function still “keeps hold of” (or closes over) the variables it needs.',
    snippet: '/snippets/closure.png',
    highlight:
      'A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.',
  },
];
