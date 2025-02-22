# Static keyword

The <code>static</code> keyword allows you to define methods and properties that belong to the <i>class itself</i> rather than instances. These are useful for shared data, utility functions, and one-time initialisations. They do not require an instance and prevent unnecessary duplication on every instance as every instance shares the same method / property.

- Not tied to instances – Static members belong to the class, not objects created from it.
- Used for shared data – Great for tracking counts, configuration, or reusable constant values.
- Ideal for helper methods – Functions like ID generation or validation can be static.

For a recipe class, for example, you might store <code>unitConversions = {}</code> as a static property as it is a constant that is shared across all recipes but the logic is encapsulated at the class level and shared amongst all of the recipe instances.
