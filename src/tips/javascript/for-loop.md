# The for loop

The <code>for</code> statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop. The syntax is:

![](/assets/for-syntax.png)

A typical for loop looks like this:

![](/assets/for.png)

<code>i</code> is traditionally used for counters. <code>x</code> or <code>n</code> are also used.

Tips:

- For loop keeps running while condition is true.
- When using a for loop with an array, start the counter at 0.
- Use let for a counter as the variable will be updated by the loop.

## Looping arrays

When looping an array, ensure it is dynamic by setting the condition to the <code>array.length</code>. In the below example, the for loop is looping through the family array one by one and where the gender of the family member is female, they are being pushed into a new array which contains only females in the family.

![](/assets/loop-push.png)

When looping arrays backwards, you can dynamically set the length of the array by using <code>let i = array.length - 1</code>. You would then set the condition to <code>i >= 0</code> and decrement using <code>i--</code>.
