# Array splice()

The <code>splice()</code> method allows you to mutate an original array by adding / removing one or more elements within it and returning the updated array.

This method takes the following arguments:

- start - The index to start the splice from (inclusive)
- deleteCount - The number of elements to remove
- items - The new elements to replace the deleted elements

You can also remove from the end using negative numbers as the start argument.

This method is useful to perform actions such as:

- Removing a particular element from a list
- Inserting new elements at a specific position
- Replacing elements within an array (i.e. not using <code>push()</code>, <code>pop()</code>, <code>shift()</code> or <code>unshift()</code>)
- Clearing all elements of an array
- Updating an element in an array

![](/assets/splice.png)
