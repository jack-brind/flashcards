# Pure functions

A pure function is one that:

- Is deterministic - given an input, it returns the same output
- Has no side effects - it does not modify any external variables or rely on external data

Simply put, a pure function relies solely on the arguments passed into it and will always perform the same operation each time. For example, if any part of the function body uses a variable that is outside of the function's scope (i.e. global variable), it is not a pure function.

In the below example, the pure version relies on only the arguments for the calculation of a share. When passing them in, it will always perform the operation <i>on the arguments that were passed in</i>. Conversely, the impure version is using the external variable (<code>totalIncomings</code>) to calculate the share, but this might change and so using the same input won't return a consistent output every time.

![](/assets/pure-function.png)
