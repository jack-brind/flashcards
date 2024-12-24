# Variables & Data Types

Variables are containers to store data. You can use variables to store values and reuse and manipulate them later.

Variables can be declared using:

- <code>let</code> (mutable)
- <code>const</code> (immutable) - These must be initialised when declared i.e. you can't have <code>const newButton;</code>
- <code>var</code> (not recommended for modern JS)

## Data types

Primitive types are immutable.

- Number (integer or float)
- String (<code>‘’</code>, <code>“”</code> or <code>``</code>)
- Boolean (<code>true</code> or <code>false</code>)
- Null
- Undefined (<code>let age;</code>)

Reference types <i>are</i> mutable and store collections of data.

- Object - key value pairs
- Array - ordered (indexed) list of values
- Function - readable block of code

It is best practice to use <code>const</code> by default to avoid accidental reassignment of a variable. You can always change to <code>let</code> if needed.

It is recommended that consts like API keys are uppercased with underscores e.g. <code>const API_KEY = vryU7ALYdaKo55xr;</code>.
