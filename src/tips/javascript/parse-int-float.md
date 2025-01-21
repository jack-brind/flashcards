# parseInt() & parseFloat()

Both of these functions allow you to convert strings explicitly into either integers (whole numbers) or floats (decimals). This is commonly used for user input where there is flexibility and the data is captured as a string. Both of these conversions stop when they encounter an invalid character that is not a number.

If you want guaranteed and strict parsing, use <code>Number()</code> instead as it doesn’t ignore invalid characters and will return <code>NaN</code>.

![](/assets/int-float.png)
