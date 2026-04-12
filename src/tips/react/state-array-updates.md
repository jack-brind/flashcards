# Updating arrays in state

Just like objects, arrays should be treated as immutable and read-only. For this reason, you shouldn't directly update an item in an array or use use methods that mutate the array, such as <code>push()</code> and <code>pop()</code>. Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like <code>filter()</code> and <code>map()</code>. Then you can set your state to the resulting new array.

Good methods to use are:

- Adding – <code>concat</code>, <code>...array</code>
- Removing – <code>filter</code>, <code>slice</code>
- Replacing – <code>map</code>
- Adding – <code>toSorted</code>, <code>...array</code>

## Adding to an array

The easiest method here is to use the spread syntax as this lets you append or prepend depending on where you spread the array.

![](/assets/append-prepend.png)

In this way, spread can do the job of both <code?>push()</code> by adding to the end of an array and <code?>unshift()</code> by adding to the beginning of an array.

## Removing from an array

The easiest way to remove an item from an array is to filter it out. In other words, you will produce a new array that will not contain that item.

![](/assets/remove-from-array.png)

## Replacing items in an array

To replace an item, create a new array with <code>map()</code>. Inside your map call, you get access item index as the second argument which can be used to return a new value / item.

