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
- You can use complex logic for the conditions such as <code>&&</code> or <code>%</code>, or a ternary, for example.
- Loops don't always have to incremement / decrement by 1; You can increment by 2, for example (<code>i += 2</code>).
- When ommitting a conditional, the condition always evaluates to true.
- Initialise the counter variable inside the loop to create a closure.

## Looping arrays

When looping an array, ensure it is dynamic by setting the condition to the <code>array.length</code>. In the below example, the for loop is looping through the family array one by one and where the gender of the family member is female, they are being pushed into a new array which contains only females in the family.

![](/assets/loop-push.png)

When looping arrays backwards, you can dynamically set the length of the array by using <code>let i = array.length - 1</code>. You would then set the condition to <code>i >= 0</code> and decrement using <code>i--</code>.

## Control flow

You can use <code>continue</code> and <code>break</code> to control the flow for loops.

The continue keyword allows you to skip particular iterations of a loop. You can run a loop for an array but skip over those that meet a certain condition. So, for example, loop through an array of objects and skip over records that were created over a year ago. In the below example, banana is specifically skipped over.

![](/assets/loop-continue.png)

The break keyword allows a loop to be exited when a certain condition is met. This can be more performant because it stops unnecassary code from running once you've found your specific value.

![](/assets/loop-break.png)
