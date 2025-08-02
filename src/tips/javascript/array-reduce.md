# Array reduce()

The <code>reduce()</code> method takes an array and boils it down (reduces it) to a single value. It does this by applying a callback function (the reducer) to each element of the array, while keeping track of a running total.

The reducer callback takes 2 main arguments – the accumulator and the current value. The accumulator is like a snowball rolling down a hill, getting larger and larger.

The method also takes an optional second argument for the initial value. You can set this to any numerical value, but in almost all cases it should be <code>0</code>. If no initial value is provided, it uses the first array element as the <i>starting</i> accumulator and begins processing from the second element, which is why <code>0</code> should almost always be set as the initial value.

![](/assets/reduce.png)

The reduce method is very versatile and is most commonly used on numerical arrays to sum the total, but it can also be used on arrays that contain strings, it can return objects, group results, etc. In these cases, the initial value might be <code>{}</code> or <code>[]</code>.
