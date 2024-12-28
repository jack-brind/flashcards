# Switch statements

A switch statement is used to evaluate an expression against multiple possible cases, executing the code block for the first matching case. A <code>break</code> statement is typically used to stop further case evaluation. If no case matches, the default block (if present) runs.

![](/assets/switch.png)

It’s an alternative to writing multiple <code>if...else</code> conditions, making the code more organised.

## Swtich vs If

Prefer switch statements if you have:

- Discrete, fixed values - when comparing a single variable or expression against specific, discrete values.
- Many cases for single a variable - checking one variable or expression against multiple possible values, switch is cleaner.
- Grouped logic for multiple cases - when multiple cases share the same behavior.
- Readability - longer conditions can be more readable that if statements.

🔴 General sentiment online if that you should mostly prefer if else over switch but it is down to personal preference.
