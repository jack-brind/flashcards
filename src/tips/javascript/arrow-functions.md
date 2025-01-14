# Arrow functions

Arrow functions are perfect for short, simple functions as they are (in theory) quicker to write. But if you have a large function with multiple parameters and multiple lines of code, you start to lose the advantage of arrow functions.

In simple arrow functions, the return is implicit and you don't need curly braces for the body or parentheses for the parameters e.g. const calculateAge = birthYear => 2025 - birthYear;

However, with more complex functions, you essentially need to transform it into a declaration or expression syntax.

Arrow functions do not get a <code>this</code> keyword. As a result, declarations or expressions are the best for now.

Arrow functions are heavily used in React.

Using the recipe analogy of functions, arrow functions are like small recipes on a post it note for a very specific thing (like yorkshire batter).
USE CHAT GPT ANALOGY OF A RECIPE.

Use lecture 155 (map method) at 7:07 for good explanation.

![](/assets/return-arr-obj.png)
