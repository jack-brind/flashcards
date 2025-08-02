# Immutability

Because arrays and objects are passed by reference in JavaScript, mutating the original data can lead to unintended side effects — especially when React tries to detect changes and update the UI.
To avoid these issues, it’s better to treat data as immutable: instead of modifying an object or array directly, create a copy with the updated values.
That’s why using the spread operator (...) is so common in React — it provides a simple way to clone and update arrays or objects without mutating the original.
