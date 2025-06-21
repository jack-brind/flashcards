# .map() Keys

When mapping over an array in React, each element always needs to have a <code>key</code>. A key is a special prop in React, but it's not a regular prop that gets passed to your component. React uses it internally to track which elements are which when your list changes.

When React re-renders a list, it needs to figure out which items are new, removed or just moved position. Without proper keys, React has to guess, which can lead to bugs or performance issues.

Using the index is not advised but can sometimes be fine on a case-by-case basis. A better approach is to use <code>crypto.randomUUID()</code> and generate truly unique keys for each item in the array. When creating a new object, add this as a property:

![](/assets/random-id.png)

When possible, it is best to use a genuine ID, for example from a database record, or a unique ID from a third party like an SKU code. You could also use the current date/time using <code>id: new Date()</code>.
You only need the <code>key</code> prop when you're rendering JSX elements with <code>map()</code>.
