# Math.random()

The <code>Math.random()</code> method returns a random number between 0 and 1, for example 0.743741522598691.

The bounds of the random number can be specifed by providing a multiplication factor and an addition factor. For example, to generate a number between 2 and 9, use <code>Math.random() \* 7 + 2</code>. This multiplies the random number by 7 (i.e the range) and adds 2 to the scaled random number. This <i>shifts</i> the range from 0-7 to 2-9.

If the random number is being used for the index of an array, then keeping 0 is necassary. However, to start the random number from 1, just use <code>+ 1</code>.

You can then also wrap the random number in something like <code>Math.floor()</code> to round down, or <code>Math.trunc()</code> to trim out the decimals and only return the full integer value.

As an example, to roll a dice, you would use:

![](/assets/dice.png)
