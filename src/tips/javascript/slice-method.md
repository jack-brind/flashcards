# slice() method

The <code>slice()</code> method can be used on arrays and strings. It allows you to extract a portion of a string or array and return it as a new value without modifying the original. It takes 2 arguments - a <i>start</i> and an <i>end</i> (both of which are optional). If you do not specify and start and end, a copy is returned with no modification.

The <i>start</i> argument allows you to specify where the slice starts and this begins on the specified index. The <i>end</i> argument allows you to specify where the slice goes up to and this stops before the index.

These arguments can also be negative which will slice from the end. So <code>slice(-2)</code> will take the last 2 items of an arry or characters of a string.

![](/assets/slice.png)
