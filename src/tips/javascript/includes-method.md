# .includes() method

The <code>.includes()</code> method is used for checking if a specific value exists within a string or an array and returns a boolean. The method takes 2 arguments - a search element (what you're looking for) and an index (the position in the string or array - optional).

Using this method on strings is case sensitive so you should use <code>.toLowerCase()</code> in conjunction with it.

This method is most useful when used with arrays as it allows you perform <i>simple membership checks</i> to determine whether a value is included in an array. Some things to keep in mind when using <code>.includes()</code> in arrays are:

- It always uses strict equality (<code>===</code>) so looking for <code>1</code> will not match <code>'1'</code>.
- It is a more concise alternative to using a for loop to manually check each item.
- (<code>.some()</code>) is more appropriate when performing condition-based checks.

![](/assets/includes.png)
