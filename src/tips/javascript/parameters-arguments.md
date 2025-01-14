# Parameters and arguments

Parameters are placeholders defined in a function to accept input values (ingrdients) when the function is called. They act as variables inside the function, allowing you to pass data into it for processing. When the function is called, the values you pass are assigned to these parameters.

You cannot skip parameters - you need to add each argument to match the order of the parameters. If you want to skip a parameter, you can set the argument to 'undefined'. For example, if a function has a, b and c as parameters, you can pass the arguments <code>a, undefined, c</code>.

Default parameters allow you to set a default value for a function’s parameter, which is used if no argument is provided or if the argument is <code>undefined</code>. You can also use expressions for default parameters.

In the below example, the function return an object that includes a flight number, a number of passengers and a price. The default passenger is 1 and the default price is 359. Therefore, if no arguments are specified, the default will be 1 passenger for 359. However, there is also an expression in the body to calculate the price based on the number of passengers.

![](/assets/params.png)
