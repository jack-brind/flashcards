# Array find()

The <code>find()</code> method will return the first element in an array (a truthy value) that matches a condition. If no match is found, it returns <code>undefined</code>. Behind the scenes, it uses a callback to evaluate each item in the array to determine if it meets a specified condition.

## Common use cases

- You're finding an item that matches an specific Id
- You only care about getting ONE valid option
- You're just checking if something exists

If you want to return all matches rather than just the first one, use <code>filter()</code> instead.

![](/assets/array-find.png)
