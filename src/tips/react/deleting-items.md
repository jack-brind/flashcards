# Deleting items from an array

This is done by using the filter() method.

onDelete={() => handleDeleteItem(item.id)}

function handleDeleteItem(itemId) {
setList((list) => list.filter((item) => item.id !== itemId));
}

So step by step:

- Function receives an itemId to delete
- setList calls the updater function with the current list
- filter goes through each item in the current list
- For each item, it asks: "Is this item's ID different from the ID we want to delete?"
- If yes (item.id !== itemId), keep it in the new array
- If no (item.id === itemId), exclude it from the new array
- React updates the state with this new filtered array
