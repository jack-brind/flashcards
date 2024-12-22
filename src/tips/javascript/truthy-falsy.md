# Truthy & Falsy

These values determine how expressions evaluate in boolean contexts. Values are falsy when they return <code>false</code>, <code>0</code>, <code>''</code>, <code>Null</code>, <code>Undefined</code> or <code>NaN</code>. Values are truthy non-zero numbers, non-empty strings, <code>true</code>, or an object (<code>{}</code> or <code>[]</code>).

True and False are specific boolean values.
Truthy and falsy are broader categories that encompass all values treated as <i>true</i> or <i>false</i> in a conditional context.

![](/assets/truthy-falsy.png)

The nullish coalescing operator specifically checks for null or undefined, ignoring the other falsy values.
