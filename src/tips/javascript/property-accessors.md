# Property accessors

Property accessors provide access to an object's properties by using the <i>dot notation</i> (<code>.</code>) or the <i>bracket notation</i> (<code>[]</code>) and both have different use cases.
Objects are collections of key-value pairs, where the keys (property names) are defined as strings.

## Dot notation

The dot notation is the nicer of the two in that you can retrieve what you need from an object by simply using <code>object.property</code>. It is the most common method because it is quicker, cleaner and easier to write but it comes with a drawback, particularly when working with objects from an external source, like an API.
When accessing properties using the dot notation, property names must be static and must be valid JavaScript identifiers. This means they cannot contain spaces or special characters, cannot start with a number, and cannot be a reserved keyword like 'Class'.

![](/assets/dot-notation.png)

## Bracket notation

Unlike the dot notation, the bracket notation can be dynamic and can be accessed using variables or strings as the property name. When working with data from an API, property names from JSON might be required to be more descriptive and use property names like <i>"full name"</i>, <i>"current temperature"</i> or where the property is a year such as <i>2025</i>, for example.

In these cases, you can access the properties using the bracket notation (<code>person["full name"]</code>). You can also store these as variables and then use the variable.

![](/assets/bracket-notation.png)
