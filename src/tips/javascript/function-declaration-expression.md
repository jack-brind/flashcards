# Function declarations vs expressions

Functions are like recipes of how to perform certain actions. The parameters are the ingredients of the function and the body is the instructions. What is returned from both types of functions depends on what you input.

<emphasis>Function declarations</emphasis> use the <code>function</code> keyword to declare a function, a bit like declaring a variable. Declarations must have a name, and they can be hoisted because they are not stored in variables. Using the analogy of a recipe, these are named recipes in a cookbook. The recipe is always available in the book, and you can refer to it by name whenever you want. You can’t <i>move</i> the recipe - it’s always stored in the cookbook with its name.

<emphasis>Function expressions</emphasis> are stored in variables and expressions produce a value. It is not the <i>returned value</i> that is stored in the variable, but the function <emphasis>expression</emphasis> itself. The return value of the function can vary based on the inputs you provide when you call it. This recipie is like a custom recipe (that you can name or not - anonymous function) on a sticky note and you can attach it to a specific spot (like the fridge). You store the recipe in a variable (the sticky note) and can move or replace it as needed. Because they are variables, they cannot be hoisted and so must be declared before initialisation.

What one to use is a matter of personal preference. Opt for function expressions for better structure as it forces delcaration at the top. It is also nice to have all functions stored in variables should you need them in the future.

![](/assets/dec-exp.png)
