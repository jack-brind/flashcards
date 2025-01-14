# Scope and hoisting

🚨 Add code examples here eventually.

Scope refers to where a variable, function, or block of code is declared and where it is accessible. It’s determined by where the variable or function is declared, not where it is used.

If a variable, function or block of code is declared in the:

- Global scope: Its lexical scope is global, accessible anywhere in the code (this is the window object - <code>window</code> or <code>globalThis</code>).
- Function scope: Its lexical scope is the function where it is declared.
- Block scope: Its lexical scope is the block {...} where it is declared.

All data inside of a scope is private and encapsulated.

## Lexical scope

Lexical scope (also known as static scope) means that the scope of a variable is determined by where it is declared in the source code, not by where or how it is accessed during runtime.

The scope chain is basically where every scope has access to all the variables in the outer / parent scope. It starts in the current scope, and if the variable can't be resolved, the engine looks up to the parent and then global scope (variable lookup).
Closures rely on the scope chain to retain variables and nested functions use parent variables via the scope chain.

## Hoisting

Hoisting is a behavior where variable and function declarations are moved to the top of their scope (either the global scope or a function scope) during the <i>compilation</i> phase, before the code is executed. This means you can use certain variables or functions before they appear in the code. However, only declarations are hoisted. The actual initialisation (assignment of values) happens where the code is written.
Function declarations are fully hoisted, including their body, and function expressions and arrow functions are hoisted as <i>variables</i>, not callable functions.

## var vs. const / let

Declaring variables using <code>var</code> are hoisted and initialised and are set to <code>undefined</code>. These variables will always attach to the window object (the global scope).

By contrast, variables declared using <code>const</code> and <code>let</code> are hoisted but they remain in a “temporal dead zone” (TDZ) until their declaration is encountered in the code. You cannot access them before they are declared. This is because they are always block scoped <i>even if they are declared in the global scope</i>. They can still be part of the global scope but are <emphasis>never</emphasis> attached to the window object.

❌ Basically, don't declare variables using <code>var</code>.
