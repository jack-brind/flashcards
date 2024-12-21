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
    highlight: "There's a lot more that can be done here",
  },
  {
    title: 'Or operator',
    summary: 'Use || to or stuff',
    snippet: '/snippets/nullish.png',
    highlight: 'This is some random highlight3',
  },
  {
    title: 'Parameters',
    summary: 'Used for passing stuff to functions',
    snippet: '/snippets/nulllish-operator1.png',
    highlight: 'This is some random highlight2',
  },
  {
    title: 'For of loop',
    summary: 'Used to loop arrays',
    snippet: '/snippets/nulllish-operator1.png',
  },
  {
    title: 'Getting a DOM reference',
    summary: 'This is the summary',
    snippet: '/snippets/docbyid.png',
    highlight: 'This is some random highlight',
  },
  {
    title: 'Higher order functions',
    summary:
      'Higher order functions accept other functions as arguments (callback functions). They delegate the smaller tasks to the lower level callback functions. This is important for async functions that call a function to do something and wait for that callback function to return something.',
    snippet: '/snippets/docbyid.png',
    highlight: 'Higher order functions are like CEOs that have an assistant',
  },
  {
    title: 'Abstraction',
    summary:
      'Abstraction is about hiding the complexity of a system and exposing only the essential parts that you need to work with. It allows you to focus on what a program does rather than how it does it.',
    snippet: '/snippets/docbyid.png',
    highlight: "You don't need to how a car's engine works to drive it",
  },
  {
    title: 'textContent',
    summary: 'When manipulating some text in the DOM, use element.textContent',
    snippet: '/snippets/docbyid.png',
    highlight: "You don't need to how a car's engine works to drive it",
  },
  {
    title: 'Modulus operator',
    summary:
      'The modulus (%) will return anything left over from a division. So for 10 % 3, this works out what is left over when 10 is divided by 3.',
    snippet: '/snippets/modulus.png',
  },
  {
    title: '=, ==, ===',
    summary: 'When manipulating some text in the DOM, use element.textContent',
    snippet: '/snippets/docbyid.png',
    highlight: "You don't need to how a car's engine works to drive it",
  },
  {
    title: 'Array methods',
    summary: 'When manipulating some text in the DOM, use element.textContent',
    snippet: '/snippets/docbyid.png',
    highlight: "You don't need to how a car's engine works to drive it",
  },
  {
    title: 'String methods',
    summary: 'When manipulating some text in the DOM, use element.textContent',
    snippet: '/snippets/docbyid.png',
    highlight: "You don't need to how a car's engine works to drive it",
  },
  {
    title: 'Truthy & Falsy values',
    summary:
      'These values determine how expressions evaluate in boolean contexts. Values are falsy when they return false, 0, an empty string, Null, Undefined or NaN. Values are truthy non-zero numbers, non-empty strings, true, or an object ({} or []).',
    snippet: '/snippets/docbyid.png',
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
      'Any function always have access to the variable environment of the execution context in which the function was created. When a function is created, it “remembers” the environment (variables, functions, and objects) in which it was created. Closures created encapsulation, maintaining state and avoiding polluting the global scope',
    snippet: '/snippets/closure.png',
    highlight: 'Closures are used a lot in React',
  },
];
