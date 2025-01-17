# .toFixed() method

The <code>.toFixed()</code> method is used to format numbers to a specified number of decimal places. The argument is takes is a number of digits between 0 - 100. Numbers are always rounded mathematically to the nearest integer (same as <code>Math.round</code>).

It is primarily used for display purposes so it is important to note that the result is returned as a <emphasis>string</emphasis>. For example, if you want to return a result to 2 decimal places in a function, using that value would be the <i>un-fixed value</i>. To use the number, wrap it in the <code>Number()</code> function like so - <code>Number((s / totalIncomings).toFixed(2))</code>. This will then convert the fixed string to a number to be used in calculations.

Setting the decimal places on a whole integer adds 0 padding.

![](/assets/to-fixed.png)
