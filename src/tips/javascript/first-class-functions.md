# First class functions

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

They are useful for:

- Storing functions in variables
- Passing functions as arguments
- Returning functions from other functions
- Storing functions in data structures like objects or arrays

First class functions means that functions are just another type of object. Because objects are values, functions are also values. So we store them in variables and object properties.

First class functions allow us to use and write higher order functions, callback functions and closures.

Passed as arguments - You can use functions as arguments inside other functions. When passing a function expression, you can pass it by its variable name without parentheses if you want to pass the function itself for use as a callback. If you pass any function with parentheses, it is called immediately, and its return value is passed as the argument instead of the function.
