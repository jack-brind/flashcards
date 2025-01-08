# Shallow and deep copies

When you want to copy a variable, you can either create a <emphasis>shallow copy</emphasis> or a <emphasis>deep copy</emphasis>. The choice depends on the situation and whether you need a fully independent copy or one that may still reference parts of the original.

## Shallow copies

Shallow copies can be created using the spread operator (<code>...</code>) but shallow copies can have some unintended side effects depending on what you are changing in the copy. The main difference here is to do with the data types:

- Primitive types are copied by value where changes to the copy don't affect the original
- Reference types are copied by reference where the original and the copy share the same reference to nested objects or arrays

Arrays and objects are reference types, meaning the variable stores a pointer to the memory location where the data is kept. A shallow copy only duplicates the reference to nested objects, not the objects themselves.

![](/assets/shallow.png)

## Deep copies

Deep copies allow you to create an entirely new variable that is disconnected from the original. This means that nested arrays and objects are copied across, and <i>not</i> by reference.It recursively copies all levels of the variable, ensuring complete independence.
The easiest way to do this is using the <code>structuredClone()</code> method and passing the array or object to be copied as an argument.

![](/assets/deep.png)
