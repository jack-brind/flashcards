'use-strict';

import { marked } from 'marked';

const nextButton = document.getElementById('refresh');
const tipSelector = document.getElementById('tip-selector');
const tipPanel = document.getElementById('header');
const documentBody = document.querySelector('body');

// Track last tip shown
let lastPath = null;

async function loadTip() {
  const selectedCategory = tipSelector.value;
  let markdownFiles;

  if (selectedCategory === 'javascript') {
    markdownFiles = import.meta.glob('./tips/javascript/*.md', {
      query: '?raw',
      import: 'default',
    });
  } else if (selectedCategory === 'general') {
    markdownFiles = import.meta.glob('./tips/general/*.md', {
      query: '?raw',
      import: 'default',
    });
  } else if (selectedCategory === 'react') {
    markdownFiles = import.meta.glob('./tips/react/*.md', {
      query: '?raw',
      import: 'default',
    });
  } else {
    console.error('Invalid category selected');
    return;
  }
  const paths = Object.keys(markdownFiles);

  let randomPath;
  do {
    randomPath = paths[Math.floor(Math.random() * paths.length)];
  } while (randomPath === lastPath && paths.length > 1);

  lastPath = randomPath;

  try {
    const content = await markdownFiles[randomPath]();
    const html = marked(content);
    document.getElementById('tip-container').innerHTML = html;
  } catch (error) {
    console.error('Error loading tip:', error);
    document.getElementById('tip-container').innerHTML =
      `<p>Failed to load the tip. Please try again later.</p>`;
  }
}

tipSelector.addEventListener('change', loadTip);

// Button to get a new tip
nextButton.addEventListener('click', loadTip);

loadTip();

let panelOpen = false;

documentBody.addEventListener('click', function () {
  if (!panelOpen) {
    // Open the panel
    tipPanel.style.height = '100px';
    tipSelector.style.opacity = '1';
    panelOpen = true;
  } else {
    // Close the panel
    tipPanel.style.height = '0px';
    tipSelector.style.opacity = '0';
    panelOpen = false;
  }
});
