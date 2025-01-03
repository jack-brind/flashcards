# The while loop

The <code>while</code> loop is used when you don't know how many iterations the loop will have. Unlike the for loop, the while loop:

- Check the condition <emphasis>after</emphasis> each iteration.
- Will always run at least once
- Only a condition can be specified
- Does not need a counter variable

It keeps a loop running <i>while</i> a condition is true. The other components of the for loop are then explicitly defined inside the body. The while loop is more versatile than the for loop and has a larger variety of use cases.

A nice, simple example of the while loop is rolling a dice until a 6 is rolled. Before the first roll, the loop doesn't know if it should run again. The loop will also continue to run while the dice is not 6.

![](/assets/while-dice.png)

## do...while loop

While loops also have a variation of <code>do...while</code> which is very similar to a while loop with the exception that a block of code will always be run before the condition is checked. The while loop will always check the condition first.

A prime use case for this is in this app. Here, I am generating a random tip from the tips folder, but I want a tip to be loaded immediately and that the next tip is different to the currenty tip.

![](/assets/do-while.png)
