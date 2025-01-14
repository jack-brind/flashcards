# Higher order functions

Sometimes passing a simple primitive value as an argument isn't enough to express what you want a function to do. Higher order functions accept other functions as arguments (callback functions). They delegate the smaller tasks to the lower level callback functions. This is important for async functions that call a function to do something and wait for that callback function to return something.

A higher-order function is a function that:

- Takes another function as an argument
- Returns another function
- Both

The addEventListener() function is a higher order function example that we use all the time.
Also allows for functions that return a new function.

Higher order functions allow for smaller, modularised code.
Array methods are good examples of higher order functions as is <code>addEventListender()</code> and <code>setTimeout()</code>.

For example, if I wanted to process some data in a <code>dataProcess()</code> function, I could pass it in another function that processes a specific part of the data like adding some of them to an array and another to update some properties.

When passing in a function as a parameter, they should not be called with parentheses <code>()</code> because otherwise we are passing in the return value of the function in (which is not what you want).

Higher order functions create a high level of abstraction.

Higher order functions are like CEOs that have an assistant.
