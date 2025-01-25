# Array some() and every()

The <code>some()</code> and <code>every()</code> methods are used to test conditions on arrays. They both return a boolean value but they behave differently based on the condition you are testing.

<code>some()</code> tests whether at least one element in the array matches the condition and stops when it finds the first one. <code>every()</code> tests to see whether the all elements of the array match the condition and stops at the first element that does not meet the condition.

Typical uses are 'is there at least one...?' or 'are all of them...?'.

![](/assets/some-every.png)

Use <code>some()</code> when you need to check for a condition (e.g., even numbers, specific object properties) as it allows custom logic. Opt for <code>includes()</code> when you’re checking for the <i>exact presence of a value</i>.
