# Array flat()

The <code>flat()</code> method flattens an array by removing any nested levels and combines them into a new <i>flat</i> array. This method takes one argument that specifies a depth to flatten so <code>flat(2)</code> will only flatten an array to a depth of 2 levels and keep anything beyond that nested.

<strong>Mental model:</strong> I have data organised in groups/categories, but I need to work with all the items together.
It is useful for when data is fetched from an API and you want to manipulate the structure.

## flatMap()

There is also the <code>flatMap()</code> method which is the same as <code>flat()</code> with the exception that it also maps the new array at the same time. Unlike it counterpart, this method is fixed at one level only. This essentially combines <code>map()</code> and <code>flat(1)</code> into a single operation.
