# if...else statements

An if…else statement allows you to execute one block of code if a condition is true and another block if the condition is false. You can nest statements together when there are multiple conditions using <code>else if</code> and then use <code>else</code> to finish.

The condition doesn't have to be a comparison (<code>===</code>, for example), it can be any value and JavaScript will determine the outcome based on whether it is truthy or falsy.

![](/assets/if.png)

You can use any operator in these conditions.

## If vs Switch

Prefer if statements if you have:

- Complex conditions - your conditions involve comparisons, ranges, logical operators (<code>&&</code>, <code>||</code>), or other complex expressions.
- Non-discrete values - when testing against ranges, truthy / falsy values, or non-specific conditions.
- Small number of conditions.
- When you need a default fallback if all other conditions are falsy.
