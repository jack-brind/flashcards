# Return keyword

The <code>return</code> keyword is used exclusively inside functions. It ends a function's execution and specifies a value to be returned to the code that called the function.

Without the <code>return</code> keyword, a function will return <code>Undefined</code> by default.

You can return any type of value - a primitive, object, array or even other functions.

![](/assets/return-arr-obj.png)

Arrow functions have implicit returns.

You don't need a return in a function (if it doesn't need one), but there are some limitations. The return keyword explicitly specifies the value a function should “give back” to the code that called it. If you add a return, the function can provide a result that can be used elsewhere in your program. This is valuable for storing a result for later use, manipulating it, or passing the result to another function. It also avoids dependency on console.log(). It also makes the function less reusable.

Don't use returns for one-time function use or highly specific cases that provide no value elsewhere.

Use return when the function logically produces a result that might be useful.

Even if the result of a function execution is stored in a variable, without returning, the result would still be undefined.

![](/assets/return.png)
