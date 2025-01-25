# Arrow functions

Arrow functions (<code>=></code>) are perfect for short, simple functions as they are (in theory) quicker to write. But if you have a large function with multiple parameters and multiple lines of code, you start to lose the advantage of arrow functions.

In terms of syntax:

- You don't need to write <code>function</code>
- You don't need curly braces (unless there is more than one line in the body)
- You don't need to include <code>return</code> because it is implicit (unless there are more than one line in the body)
- You don't need parentheses for the arguments if there is only one argument (you do if there is > 1 argument)

There are also a few behavioural differences from regular functions:

- They don’t have their own <code>this</code>. Instead, they inherit this from the surrounding lexical scope (the context in which they were defined). Therefore, you don’t have to worry about the value of <code>this</code> being reassigned in callbacks.
- They don't have an arguments object so you need to use the <code>(...args)</code> rest parameters to get access to the arguments.
- They should not be used as methods due to the behaviour of <code>this</code>.

## Lexical this

In regular functions, the value of <code>this</code> depends on how the function is called, not where it’s defined and so they don’t automatically know their context and it set dynamically by the caller. By contrast, arrow functions solve the problem by inheriting the <code>this</code> from their lexical scope (the place where they were defined) so you can't use <code>bind()</code> on them, for example.

![](/assets/arrow.png)
