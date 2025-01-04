# Strict equality operator

The strict equality (<code>===</code>) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different. Both the value and the <i>type</i> must match for it to return true.

You can use the loose equality (<code>==</code>) operator if you want to convert the type of the two operands. For example, <code>25 == '25'</code> will return true. This is not recommended.

![](/assets/strict-equality.png)

Basically, always prefer strict equality to avoid unexpected results due to <i>type coercion</i>.
