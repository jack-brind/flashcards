# Iterative loops

Iterative loops are the <code>for...of</code> and <code>for...in</code> loops and both are used to iterate over elements, albeit in different ways.

## for...of

The <code>for...of</code> loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc (but not objects themselves as these are not technically <i>iterables</i>).
This loop focuses on the <emphasis>values</emphasis> of the elements in the iterable so you can use it when you want to loop over values of an iterable data structure, such as an array.

![](/assets/for-of.png)

## for...in

The <code>for...of</code> loop is used to loop over the <emphasis>keys</emphasis> (properties) of an object or the <emphasis>indices</emphasis> of an array rather than the values. This loop isn't necessarily purely used for objects, but objects are the primary use case.

![](/assets/for-in.png)
