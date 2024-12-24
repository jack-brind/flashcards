# Temporal Deadzone (TDZ)

The TDZ is a period of time during which a variable declared with <code>let</code> or <code>const</code> exists but cannot be accessed. This period starts from the beginning of the scope (block, function, or script) until the variable’s declaration is encountered.

Example:
![](/assets/tdz.png)

The TDZ helps catch errors early. Declaring variables at the top of their scope is best practice, and this pretty much solves the issue.
