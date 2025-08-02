# Handler functions

- The General Rule: If your event handler needs ANY arguments, use a function wrapper e.g. <code>onClick={() => handleDelete(item.id)}</code>
- Don't even call handler functions immediately as they are called on each component re-render (i.e. whenever the state is updated). Don't do this: <code>onClick={handleDelete(item.id)}</code>
- Prefix handler functions with 'handle'; when passing handler function as a prop, prefix with 'on'
- Pass function by name when using events (React passes event objects automatically) e.g. <code>onChange={handleInputChange}</code>
