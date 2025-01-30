'use-strict';

import { marked } from 'marked';

const nextButton = document.getElementById('refresh');
const tipPanel = document.getElementById('category-container');
const tipBody = document.getElementById('tip-container');

// Get all radio inputs
const categoryRadios = document.querySelectorAll('input[name="category"]');
let panelOpen = false;

// Track last tip shown
let lastPath = null;
let currentCategory = 'JavaScript'; // Default category

// Define static glob patterns
const markdownPaths = {
  javascript: import.meta.glob('./tips/javascript/*.md', {
    query: '?raw',
    import: 'default',
  }),
  css: import.meta.glob('./tips/css/*.md', {
    query: '?raw',
    import: 'default',
  }),
  general: import.meta.glob('./tips/general/*.md', {
    query: '?raw',
    import: 'default',
  }),
  html: import.meta.glob('./tips/html/*.md', {
    query: '?raw',
    import: 'default',
  }),
  react: import.meta.glob('./tips/react/*.md', {
    query: '?raw',
    import: 'default',
  }),
  tailwind: import.meta.glob('./tips/tailwind/*.md', {
    query: '?raw',
    import: 'default',
  }),
};

async function loadTip() {
  const category = currentCategory.toLowerCase();
  const markdownFiles = markdownPaths[category];

  if (!markdownFiles) {
    tipBody.innerHTML = `<p>No tips available for ${currentCategory} yet!</p>`;
    return;
  }

  const paths = Object.keys(markdownFiles);

  if (paths.length === 0) {
    tipBody.innerHTML = `<p>No tips available for ${currentCategory} yet!</p>`;
    return;
  }

  let randomPath;
  do {
    //randomPath = paths[18];
    randomPath = paths[Math.floor(Math.random() * paths.length)];
  } while (randomPath === lastPath && paths.length > 1);

  lastPath = randomPath;

  try {
    const content = await markdownFiles[randomPath]();
    const html = marked(content);
    tipBody.innerHTML = html;
  } catch (error) {
    console.error('Error loading tip:', error);
    tipBody.innerHTML = `<p>Failed to load the tip. Please try again later.</p>`;
  }
}

// Handle radio button changes
categoryRadios.forEach(radio => {
  radio.addEventListener('change', event => {
    if (event.target.checked) {
      currentCategory = event.target.value;
      loadTip();
    }
  });
});

// Button to get a new tip
nextButton.addEventListener('click', loadTip);

// Initial load
loadTip();

tipBody.addEventListener('click', function () {
  if (!panelOpen) {
    // Open the panel
    tipPanel.style.marginTop = '0px';
    panelOpen = true;
  } else {
    // Close the panel
    tipPanel.style.marginTop = '-100px';
    panelOpen = false;
  }
});

// Tip counts
Object.keys(markdownPaths).forEach(category => {
  const files = Object.keys(markdownPaths[category]);
  console.log(`${files.length} ${category} tips`);
});

// PRACTICE AREA

const lastCvDate = new Date('21 November 2024');

const displayLastCvDate = date => {
  const monthName = date.toLocaleString('default', { month: 'short' });
  console.log(`${monthName.toUpperCase()} ${date.getFullYear()}`);
};

displayLastCvDate(lastCvDate);

const lastContact = new Date('9 Dec 2024');
const now = new Date();

const daysAgo = date => {
  const now = new Date();
  const numDays = now - date;
  const diff = numDays / (1000 * 60 * 60 * 24);
  return `${Math.floor(diff)} days ago`;
};

console.log(daysAgo(lastContact));

const nextEvent = dateStr => {
  const now = new Date();
  const event = new Date(dateStr);
  const numDays = event - now;
  const diffDays = numDays / (1000 * 60 * 60 * 24);
  return `Next event in ${Math.floor(diffDays)} days`;
};

console.log(nextEvent('21 April 2025'));

const current = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, '0');
const minutes = `${now.getMinutes()}`.padStart(2, '0');
console.log(`${day}/${month}/${year}, ${hour}:${minutes}`);
