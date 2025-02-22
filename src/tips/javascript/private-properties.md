# Private fields

Private fields are properties and methods in classes that <i>cannot be accessed from outside the class</i>. They are useful for encapsulating data and ensuring that certain operations or values are only used internally within the class. They are defined using a <code>#</code> prefix.

Private fields typically store sensitive data such as passwords, API keys, tokens, financial details, etc., providing encapsulation, maintainability and security. It also prevents accidental access, reducing the risk of modifying properties that should not be changed directly. Controlled access to private fields can be provided via public methods such as getters and setters.

![](/assets/private-fields.png)
