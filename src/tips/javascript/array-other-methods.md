# Other array methods

There are quite a few different array methods and this is a list of some of the more infrequently used ones that are still good to know.

## flat() and flatMap()

The <code>flat()</code> method flattens an array by removing any nested levels and combines them into a new <i>flat</i> array. This method takes one argument which specifies a depth to flatten so <code>flat(2)</code> will only flatten an array to a depth of 2 levels and keep anything beyond that nested.
The <code>flatMap()</code> method allow is the same as <code>flat()</code> with the exception that it also maps the new array at the same time. Unlike it counterpart, this method is fixed at one level only. This essentially combines <code>map()</code> and <code>flat(1)</code> into a single operation.

## Grouping arrays

The <code>Object.groupBy()</code> method provides an easy way to group objects or values in an array into categories based on a grouping function. It is a more efficient alternative to a for...of loop.

![](/assets/group-by.png)

## Array.from()

<code>Array.from()</code> is a method that creates a new array from array-like objects or iterables. The first argument is the array-like object (i.e. length) and the second argument is the mapping function that fills each slot.

![](/assets/array-from-dice.png)
