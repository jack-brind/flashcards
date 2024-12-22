# Strict equality operator

The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different. Both the value and the <i>type</i> must match for it to return true.

You can use the loose equality (==) operator if you want to convert the type of the two operands.

![](/assets/strict-equality.png)

Basically, always prefer strict equality to avoid unexpected results due to type coercion.
The assignment operator (=) has nothing to do with comparisons.
