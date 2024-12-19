'use-strict';

const javascriptTips = [
  {
    title: 'Nullish Coalescing Operator',
    summary:
      "Nullish Coalescing Operator works with nullish values, not falsy values. This will evaluate null or undefined as falsy but treat 0 or '' as truthy. Therefore, zero or empty strings are accepted.",
    snippet: '/snippets/nullish.png',
    highlight: "It's good for working with default values.",
  },
  {
    title: 'Math.trunc()',
    summary:
      'This method returns the integer part of a number by removing any demical points.',
    snippet: '/snippets/trunc.png',
  },
  {
    title: 'Math rounding',
    summary: 'To round a value, use floor, ceil and round.',
    snippet: '/snippets/math functions.png',
    highlight: "There's a lot more that can be done here",
  },
  {
    title: 'Or operator',
    summary: 'Use || to or stuff',
    snippet: '/snippets/nullish.png',
    highlight: 'This is some random highlight3',
  },
  {
    title: 'Parameters',
    summary: 'Used for passing stuff to functions',
    snippet: '/snippets/nulllish-operator1.png',
    highlight: 'This is some random highlight2',
  },
  {
    title: 'For of loop',
    summary: 'Used to loop arrays',
    snippet: '/snippets/nulllish-operator1.png',
  },
  {
    title: 'Getting a DOM reference',
    summary: 'This is the summary',
    snippet: '/snippets/docbyid.png',
    highlight: 'This is some random highlight',
  },
];

// DOM references
const titleElement = document.getElementById('title');
const summaryElement = document.getElementById('summary');
const nextButton = document.getElementById('refresh');
const snippetElement = document.getElementById('snippet');
const highlightElement = document.getElementById('highlight');
const highlightText = document.getElementById('highlight-text');

// Random number generator
function randomItem(array) {
  // Generate a random number between 0 and length of array passed in
  let randomNumber = Math.floor(Math.random() * array.length);
  // Grab the tip at the array index matching the random number generated
  let randomArrayItem = array[randomNumber];
  // Return the random array item
  return randomArrayItem;
}

// Function to display a tip
function displayTip(tip) {
  titleElement.textContent = tip.title;
  summaryElement.textContent = tip.summary;
  if (tip.snippet) {
    snippetElement.src = tip.snippet;
    snippetElement.style.display = 'block';
  } else {
    snippetElement.style.display = 'none';
  }
  if (tip.highlight) {
    highlightText.textContent = tip.highlight;
    highlightElement.style.display = 'flex';
  } else {
    highlightElement.style.display = 'none';
  }
}

// Show a random tip on first load
document.addEventListener('DOMContentLoaded', () => {
  const initialTip = randomItem(javascriptTips);
  displayTip(initialTip);
});

// Button to get a new tip
nextButton.addEventListener('click', () => {
  const currentTip = randomItem(javascriptTips);
  displayTip(currentTip);
});
