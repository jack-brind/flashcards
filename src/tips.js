export const javascriptTips = [
  {
    title: 'Nullish Coalescing Operator',
    summary:
      "Nullish Coalescing Operator works with nullish values, not falsy values. This will evaluate null or undefined as falsy but treat 0 or '' as truthy. Therefore, zero or empty strings are accepted.",
    snippet: '/snippets/nullish.png',
    highlight: "It's good for working with default values.",
    category: 'js',
  },
  {
    title: 'Math.trunc()',
    summary:
      'This method returns the integer part of a number by removing any demical points.',
    snippet: '/snippets/trunc.png',
    category: 'js',
  },
  {
    title: 'Math rounding',
    summary:
      'To round a value, use floor to round down, ceil to round up and round to perform normal rounding where 0.5 rounds up.',
    snippet: '/snippets/math.png',
    category: 'js',
  },
  {
    title: 'OR (||) operator',
    summary:
      'The OR (||) operator evaluates expressions from left to right and returns the first “truthy” value it encounters. If all values are “falsy” (e.g., false, 0, "", null, undefined, or NaN), it returns the last value',
    snippet: '/snippets/or.png',
    category: 'js',
  },
  {
    title: 'Parameters',
    summary:
      'Parameters are placeholders defined in a function declaration to accept input values when the function is called. They act as variables inside the function, allowing you to pass data into it for processing. When the function is called, the values you pass are assigned to these parameters. Default parameters allow you to set a default value for a function’s parameter, which is used if no argument is provided or if the argument is undefined.',
    snippet: '/snippets/parameters.png',
    highlight:
      'When passing data when the function is invoked, these are known as arguments',
    category: 'js',
  },
  {
    title: 'for...of loop',
    summary:
      'The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, or other iterables. It retrieves the values of the iterable in order, making it simpler to work with the contents directly compared to other loop types.',
    snippet: '/snippets/for of.png',
    highlight:
      'Unlike for...in, which works with object keys, for...of focuses solely on the values.',
    category: 'js',
  },
  {
    title: 'Switch statements',
    summary:
      'A switch statement is used to evaluate an expression against multiple possible cases, executing the code block for the first matching case. A break statement is typically used to stop further case evaluation. If no case matches, the default block (if present) runs.',
    snippet: '/snippets/switch.png',
    highlight:
      'It’s an alternative to writing multiple if...else if conditions, making the code more organised.',
    category: 'js',
  },
  {
    title: 'Higher order functions',
    summary:
      'Higher order functions accept other functions as arguments (callback functions). They delegate the smaller tasks to the lower level callback functions. This is important for async functions that call a function to do something and wait for that callback function to return something.',
    snippet: '/snippets/truthy falsy.png',
    highlight: 'Higher order functions are like CEOs that have an assistant',
    category: 'js',
  },
  {
    title: 'Abstraction',
    summary:
      'Abstraction is about hiding the complexity of a system and exposing only the essential parts that you need to work with. It allows you to focus on what a program does rather than how it does it.',
    snippet: '/snippets/truthy falsy.png',
    highlight: "You don't need to how a car's engine works to drive it",
    category: 'js',
  },
  {
    title: 'Modulus operator',
    summary:
      'The modulus (%) will return anything left over from a division. So for 10 % 3, this works out what is left over when 10 is divided by 3.',
    snippet: '/snippets/modulus.png',
    category: 'js',
  },
  {
    title: 'Truthy & Falsy values',
    summary:
      'These values determine how expressions evaluate in boolean contexts. Values are falsy when they return false, 0, an empty string, Null, Undefined or NaN. Values are truthy non-zero numbers, non-empty strings, true, or an object ({} or []).',
    snippet: '/snippets/truthy falsy.png',
    highlight:
      'The nullish coalescing operator specifically checks for null or undefined, ignoring the other falsy values.',
    category: 'js',
  },
  {
    title: '.bind() method',
    summary:
      "The bind method is used to create a new function with a specific this value (context). This is like borrowing a function that's scope is encapsulated, but switching the context to the current invokation.",
    snippet: '/snippets/bind.png',
    highlight:
      "When using bind, the first argument is what you want 'this' to be set to",
    category: 'js',
  },
  {
    title: 'Closures',
    summary:
      'Any function always have access to the variable environment of the execution context in which the function was created. When a function is created, it “remembers” the environment (variables, functions, and objects) in which it was created. Closures created encapsulation, maintaining state and avoiding polluting the global scope - Even though the outer function is done executing, the inner function still “keeps hold of” (or closes over) the variables it needs.',
    snippet: '/snippets/closure.png',
    highlight:
      'A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.',
    category: 'js',
  },
  {
    title: 'Ternaries',
    summary:
      'A ternary operator is a concise way to write an if...else statement. It has the syntax: condition ? expressionIfTrue : expressionIfFalse. If the condition is true, the first expression executes; otherwise, the second one does. It’s useful for simple conditions and makes the code more compact.',
    snippet: '/snippets/ternary.png',
    highlight:
      'Ternaries are a powerful tool, but their brevity shouldn’t come at the cost of readability. Use them wisely',
    category: 'js',
  },
  {
    title: 'YAGNI',
    summary:
      'The YAGNI principle stands for “You Ain’t Gonna Need It” and is a key concept in software development. It encourages developers to only implement what is immediately necessary and avoid adding features or functionality that are not currently required.',
    highlight:
      'In summary, YAGNI reminds developers to avoid solving problems that don’t exist yet. Build what’s needed now, and adapt when new needs arise.',
    category: 'general',
  },
];
