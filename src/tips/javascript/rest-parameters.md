# Rest parameters

The rest operator (<code>...</code>) is primarly used for function parameters to collect multiple arguments into an array (the input).

The rest syntax can be used for parameters when the arguments that a function can accept is unknown. For example, you may have a function that returns the total of the values passed in. In some cases, this might be a variable in which case you just pass the array. However, this could come from an indeterminate number of values and sources. In these cases, you can use the <code>...args</code>, <code>...nums</code>, <code>...items</code>, etc., syntax as the parameter. This will collect all of the arguments into an array and use that array as the argument.

![](/assets/rest-parameters.png)

The rest operator also has some other uses, particularly in destructuring.
