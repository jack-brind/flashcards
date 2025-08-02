# Array filter()

The <code>filter()</code> method is used to create a <i>new</i> array that only contains the elements of the original array that meet a certain conditions. It’s just like filtering a list in an app — you’re narrowing it down to only the items that match your criteria.

## Common use cases

- Numbers based on them being greater than x
- Strings that meet a criteria (e.g. <code>startsWith('m')</code>)
- Strings that are shorter than 6 characters
- Objects based on their properties (e.g. user that have <code>isActive: true</code>).
- Objects that match a specific key value pair (e.g. <code>user.id === currentUserId</code>)

Unlike the <code>find()</code> method (which only returns the first matching value), <code>filter()</code> returns all matching values.

![](/assets/array-filter.png)
