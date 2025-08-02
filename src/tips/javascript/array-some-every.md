# Array some() and every()

The <code>some()</code> and <code>every()</code> methods are used to test conditions on arrays. They don't return a value, but instead a boolean value.

The <code>some()</code> method tests whether <strong>at least one</strong> element in the array matches the condition and will stop when it finds the first occurrence that meets the condition.
The <code>every()</code> method tests whether <strong>all</strong> elements of the array match the condition and will stop when it finds the first occurrence that does not meet the condition.

<strong>Mental models:</strong>

- is there at least one...?
- are all of them...?

![](/assets/some-every.png)

Use <code>some()</code> when you need to check for a condition (e.g., even numbers, specific object properties) as it allows custom logic like ranges. Opt for <code>includes()</code> when you’re checking for the presence of an <i>exact value</i>.
