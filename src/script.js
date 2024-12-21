'use-strict';

import { javascriptTips } from './tips.js';

console.log(javascriptTips.length);

// DOM references
const titleElement = document.getElementById('title');
const summaryElement = document.getElementById('summary');
const nextButton = document.getElementById('refresh');
const snippetElement = document.getElementById('snippet');
const highlightElement = document.getElementById('highlight');
const highlightText = document.getElementById('highlight-text');

// Keep track of the tip being displayed
let lastNumber = null;

// Random number generator
function randomItem(array) {
  function getRandomNumber() {
    let randomNumber;

    //While the random number is the same as the last number, generate a new random number
    do {
      randomNumber = Math.floor(Math.random() * array.length);
    } while (randomNumber === lastNumber);

    // Set the last number to the current random number
    lastNumber = randomNumber;
    return randomNumber;
  }
  // Return the tip at the array index matching the random number generated
  return array[getRandomNumber()];
}

// Function to display a tip
function displayTip(tip) {
  titleElement.textContent = tip.title;
  summaryElement.textContent = tip.summary;

  // If the tip has a snippet, display it, otherwise hide it
  if (tip.snippet) {
    snippetElement.src = tip.snippet;
    snippetElement.style.display = 'block';
  } else {
    snippetElement.style.display = 'none';
  }

  // If the tip has a highlight, display it, otherwise hide it
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
