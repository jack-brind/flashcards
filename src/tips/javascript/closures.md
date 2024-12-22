# Closures

Any function always have access to the variable environment of the execution context in which the function was created. When a function is created, it “remembers” the environment (variables, functions, and objects) in which it was created. Closures created encapsulation, maintaining state and avoiding polluting the global scope - Even though the outer function is done executing, the inner function still “keeps hold of” (or closes over) the variables it needs.

A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
