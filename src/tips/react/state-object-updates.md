# Updating objects in state

Objects are technically mutable, but in React, they should be treated as immutable (read-only). Therefore, before being updated, objects should be copied first and then updates should be made to that copy. Directly mutating an object does not trigger a re-render because if it does not use the state setter function, React has no idea that the object has been updated.
To actually trigger a re-render in these cases, you need to create a new object and pass it to the state setting function.

## Object spread

When updating an object, it is convenient to only pass the setter function that value(s) that have changed and keeping the rest of the object as it was. Here, you can use the spread syntax to pass a copy of the object and then update only the value(s) that you want. In the below example, each field copies the <code>person</code> object and only updates the relevant field's state.

![](/assets/update-object.png)

### Nested objects

The spread syntax (<code>...person</code>) is only a shallow copy of an object. If you have more than one level in an object, updating it requires making a copy of the nested object too. Objects aren't really nested, they are multiple objects. In the below example, you are spreading the nested object to use in the top layer object:

![](/assets/nested-object-update.png)
