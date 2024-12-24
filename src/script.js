'use-strict';

import { marked } from 'marked';

const nextButton = document.getElementById('refresh');

// Track last tip shown
let lastPath = null;

async function loadTip() {
  const markdownFiles = import.meta.glob('./tips/javascript/*.md', {
    as: 'raw',
  });
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

loadTip();

// Button to get a new tip
nextButton.addEventListener('click', () => {
  loadTip();
});
