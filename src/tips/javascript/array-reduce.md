# Array .reduce()

The <code>.reduce()</code> method takes an array and boils it down (reduces it) to a single value. It does this by applying a callback function (the reducer) to each element of the array, while keeping track of a running total.

The reducer callback takes 2 main arguments - the accumulator and the current value. The accumulator is like a snowball rolling down a hill, getting larger and larger.

The method also takes an optional initial value. In the vast majority of cases, this will be <code>0</code>, but you can set any numeric value. If the initial value is not provided, it will be set to the first element of the array (which is likely not going to be correct).

![](/assets/reduce.png)

The reduce method is very versatile and is most commonly used on numerical arrays to sum the total, but it can also be used on arrays that contain strings, it can return objects, group results, etc.

In the below example, the code iterates through the array and separates the total prices of items into two categories: expensiveTotal (prices >= 3) and cheapTotal (prices < 3). For each item, it adds its price to the appropriate category, initialising totals to 0 if not already set. Then it returns an object with the totals for both categories.

![](/assets/reduce-object.png)
