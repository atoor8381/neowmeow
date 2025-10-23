// --- Calculate days remaining in the year ---
const today = new Date();
const endOfYear = new Date(today.getFullYear(), 11, 31);
const diffDays = Math.ceil((endOfYear - today) / (1000 * 60 * 60 * 24));
document.getElementById('days-remaining').textContent = `${diffDays} days remaining this year 🎉`;

// --- Google Search Redirect ---
const form = document.getElementById('search-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

// --- Bookmarks Toggle ---
const toggleBtn = document.getElementById('toggle-bookmarks');
const section = document.getElementById('bookmark-section');
const list = document.getElementById('bookmarks-list');

toggleBtn.addEventListener('click', async () => {
  if (section.style.display === 'none') {
    section.style.display = 'block';
    list.innerHTML = ''; // Clear previous
    const bookmarks = await chrome.bookmarks.getTree();
    displayBookmarks(bookmarks[0].children, list);
  } else {
    section.style.display = 'none';
  }
  
});

function displayBookmarks(nodes, parent) {
  nodes.forEach(node => {
    if (node.url) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = node.url;
      link.textContent = node.title || node.url;
      link.target = '_blank';
      parent.appendChild(li);
      li.appendChild(link);
    } else if (node.children) {
      displayBookmarks(node.children, parent);
    }
  });
}


    console.log(chrome.permissions)
