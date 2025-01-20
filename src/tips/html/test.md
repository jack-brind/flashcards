# This is a test

```
const users = [
  { name: 'Jack', age: 33, pin: 1105, isActive: true },
  { name: 'Charlotte', age: 34, pin: 3112, isActive: true },
  { name: 'Amelia', age: 3, pin: 2104, isActive: true },
  { name: 'Maggie', age: 7, pin: 3010, isActive: false },
];

// Filter those who are older than 21
const oldEnough = users.filter(names => names.age > 21);

// Filter those who have names longer than 4 characters
const longNames = users.filter(names => names.name.length > 4);

// Filter users based on a name search
let searchQuery = 'Jack';
const namesFilter = users.filter(names =>
  names.name.toLowerCase().startsWith(searchQuery.toLowerCase()),
);

// Filter out inactive users
// Note that 'names.active' is truthy
const activeUsers = users.filter(names => names.isActive);
```
