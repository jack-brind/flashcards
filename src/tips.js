export const javascriptTips = [
  {
    title: 'Ternaries',
    summary:
      'A ternary operator is a concise way to write an if...else statement. It has the syntax: condition ? expressionIfTrue : expressionIfFalse. If the condition is true, the first expression executes; otherwise, the second one does. It’s useful for simple conditions and makes the code more compact.',
    snippet: '/snippets/ternary.png',
    highlight:
      'Ternaries are a powerful tool, but their brevity shouldn’t come at the cost of readability. Use them wisely',
    category: 'js',
  },
];

const weatherData = [
  { location: 'Tenterden', temperature: 25 },
  { location: 'Tunbridge Wells', temperature: null }, // Missing data
  { location: 'Herne Bay' }, // No data
];

for (const temp of weatherData) {
  console.log(`Location: ${this.location}`);
  console.log(`Temperature: ${this.current?.temperature ?? 'No data'}°C`);
}
