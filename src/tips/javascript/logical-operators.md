# Logical operators

The logical operators for <code>&&</code> and <code>||</code> are used to evaluate expressions in a <emphasis>boolean context</emphasis>, determining whether they are truthy or falsy.

- The AND operator (<code>&&</code>) stops at the <i>first falsy value</i> and returns it. If <emphasis>all values are truthy</emphasis>, it returns the last one.
- The OR operator (<code>||</code>) stops at the <i>first truthy value</i> and returns it. If <emphasis>all values are falsy</emphasis>, returns the last one.

While these operators do return a value, what is returned doesn’t always matter and might never be used. The primary purpose of these operators is often <emphasis>logical flow control</emphasis>, such as deciding whether to evaluate subsequent expressions at all.
