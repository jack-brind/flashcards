# Spread & Rest operators

Both of these operators use the same <code>...</code> syntax but have different usages.

## Spread

The spread operator allows you to unpack or <i>spread</i> arrays, objects, strings, maps or sets.

It can serve the following purposes:

- Cloning arrays or objects by creating a brand new shallow copy that does not affect the original
- Combining/merging one or more arrays or objects into a brand new variable
- Expanding strings, since strings are essentially arrays of letters
- Unpacking function arguments

![](/assets/spread-combine.png)

## Rest

The rest operator does the opposite of the spread operator and collects the rest of the items into an object or an array. This is particularly useful when destructuring where you want to extract a handful of values from an object or array, but you also still want the rest of the values or elements. You can also use the rest operator as function arguments.

The rest operator must be the last element in any given situation.

![](/assets/rest-destructure.png)
