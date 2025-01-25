# Array sort()

The <code>sort()</code> method is used to provide an order to elements in an array, but the way it is done is quite confusing. This also mutates the original array.

## Sorting numbers

Sorting numbers does not behave as you would expect out of the box because the <code>sort()</code> method only works on <emphasis>strings</emphasis>. Therefore, in an array of numbers, it will always sort based on the first digit of each number so, for example, 100 will come before 25 because <b>1</b> is before <b>2</b>.

This can be fixed by using a comparison callback function inside the method that does a comparison with the current value and the next value.

Example - <code>ages.sort((a, b) => a - b);</code>

In this example, each element of the array will have a callback applied to compare whether the current value in the array (<code>a</code>) minus the next value (<code>b</code>) is greater or less than <code>0</code>.

- If the result is greater than 0, <code>a</code> is ordered after <code>b</code>
- If the result is less than 0, <code>a</code> is ordered before <code>b</code>
- If the result is 0, their order remains the same

With the example of an array containing 10 and 5 (<code>[10, 5]</code>), <code>a</code> is 10 and <code>b</code> is 5. 10 - 5 = 5 and so 10 is placed after 5.

To sort descending, simply swap the order of <code>a</code> and <code>b</code> to <code>b - a</code>.

## Sorting strings

Sorting on strings is straight-forward if you want a simple A-Z ordering because you simply add <code>sort()</code> onto your array. However, if you want to sort Z-A, jus like numbers, you need a comparison. In the case of strings, however, you need to use the <code>localCompasion()</code> method.
This method is designed for comparing strings as it handles case-sensitivity gracefully as well as locale-specific rules (like accents).

Syntax: <code>names.sort((a, b) => b.localeCompare(a));</code>

![](/assets/sorting.png)

## toSorted()

The <code>toSorted()</code> method is a new addition which does the same thing but with one key difference. Instead of mutating the original array, this method returns a sorted copy of the original array.
