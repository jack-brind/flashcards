# The forEach method

The <code>forEach()</code> method is available on arrays and this is an alternative to the <code>for...of</code> loop. Although <code>forEach()</code> acts like a loop, it is actually not and so you can't break out of it - it will process all elements of the array.

The method takes a max of 3 arguments:

- element - A representation of each object being processed as it iterates through the array. The method passes each element (one by one) to the callback function.
- index - The index of the array.
- array - The original array being iterated over.

It can be used to iterate through arrays of DOM elements or data to update the UI.

It does not return a value, only <code>Undefined</code>.

![](/assets/for-each.png)
