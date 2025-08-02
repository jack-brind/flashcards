# Array.from()

<code>Array.from()</code> is a method that programmatically creates and fills arrays. This is useful when you need exactly X number of items and the count comes from a variable, not when you have actual data to use.

## Length

This array is typically created using a length object as the first argument. This determines how many items to fill the array with and it can be static or dynamic. An example of where this would be static is a Star Rating component with 5 stars – here, you set the length to 5. However, this could come from a variable if you wanted a different value.

It could also be a calculated value where the array length is determined by how many items are generated. For example, this could be the number of pages to display based on the total number of items (if you have 8 items per page), or the number of toast components to show.

Examples:

- Static: <code>{ length: 5 }</code> for a 5-star rating
- Dynamic: <code>{ length: items }</code> from state
- Calculated: <code>{ length: Math.ceil(items.length / itemsPerPage) }</code> for pagination

## Mapping function

The second argument fills each slot in the array. Examples of this could be:

Creating random numbers for dice rolls:

![](/assets/array-from-dice.png)

Or, it could be calculating page contents for pagination:

![](/assets/array-from-pages.png)
