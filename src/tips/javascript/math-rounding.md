# Math rounding

To round a value, use <code>.floor</code> to round down, <code>.ceil</code> to round up and <code>.round</code> to perform normal rounding where 0.5 rounds up. The rounding here will always be performed on the integer part of the number and return a whole number.

![](/assets/math.png)

<code>Math.floor</code> is good for generating random indices in arrays since they are zero-based. Using <code>.floor</code> will ensure that 0 is included.
