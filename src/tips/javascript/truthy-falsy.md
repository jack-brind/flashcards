# Truthy & Falsy

These values determine how expressions evaluate in boolean contexts - every value in JavaScript can be transformed to a boolean value.
Values are falsy when they return:

- <code>false</code>
- <code>0</code>
- <code>-0</code>
- <code>''</code> - empty strings
- <code>null</code>
- <code>undefined</code>
- <code>NaN</code>

Values are truthy when they return:

- non-zero numbers (e.g. <code>25</code>, <code>500</code>, <code>-4</code>)
- non-empty strings
- <code>true</code>
- an object (<code>{}</code> or <code>[]</code>).

![](/assets/truthy-falsy.png)

Truthy and falsy are broader categories that encompass all values treated as <i>true</i> or <i>false</i> in a conditional context.
