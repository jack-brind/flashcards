# Optional chaining

The <code>?.</code> operator is like the <code>.</code> chaining operator, except that instead of causing an error if a reference is nullish (<code>null</code> or <code>undefined</code>), the expression short-circuits with a return value of <code>undefined</code>.

This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

![](/assets/optional-chaining.png)
