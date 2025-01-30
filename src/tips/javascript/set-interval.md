# setInterval() method

The <code>setInterval()</code> method repeatedly executes a callback at a specified interval in milliseconds. This is useful for creating both countdown timers and elapsed time counters.

This method takes 2 main arguments - a callback to be executed and an interval. In the below example, a <code>countdownTimer</code> function is declared that houses a <code>tick</code> function that counts down each second and updates the style of a pill depending on the time remaining. Other things to note are:

- The time variable is declared using <code>let</code> because it will be reassigned each second
- <code>padStart(2, '0');</code> is used to format the minutes and seconds
- It uses the modulus operator <code>%</code> to get the remainder of the seconds in the minutes
- <code>tick()</code> is also called immediately to avoid the 1 second delay

![](/assets/set-interval.png)
