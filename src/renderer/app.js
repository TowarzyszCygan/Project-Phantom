// PROJECT PHANTOM - Main Application Logic

// Page Navigation
document.querySelectorAll('.nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const page = btn.getAttribute('data-page');
    navigateToPage(page);

    // Update active button
    document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

function navigateToPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.remove('active');
  });

  // Show selected page
  const pageElement = document.getElementById(`${pageName}-page`);
  if (pageElement) {
    pageElement.classList.add('active');
  }
}

// Search Functionality
const searchInputs = document.querySelectorAll('.search-input, .search-input-full');
const searchBtn = document.querySelector('.search-btn');

searchBtn?.addEventListener('click', performSearch);
searchInputs.forEach((input) => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
});

function performSearch() {
  const searchTerm = document.querySelector('.search-input')?.value;
  if (searchTerm) {
    console.log('Szukaj:', searchTerm);
    // TODO: Implement search engine
    alert(`Wyszukiwanie: "${searchTerm}"`);
  }
}

// URL Bar Navigation
const urlInput = document.getElementById('urlInput');
const urlBtn = document.querySelector('.url-btn');

urlBtn?.addEventListener('click', navigateToURL);
urlInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    navigateToURL();
  }
});

function navigateToURL() {
  const url = urlInput?.value;
  if (url) {
    console.log('Nawiguj do:', url);
    // TODO: Implement URL navigation
    alert(`Nawiguj do: "${url}"`);
  }
}

// Browser Controls
const backBtn = document.querySelectorAll('.control-btn')[0];
const forwardBtn = document.querySelectorAll('.control-btn')[1];
const refreshBtn = document.querySelectorAll('.control-btn')[2];

backBtn?.addEventListener('click', () => console.log('Back'));
forwardBtn?.addEventListener('click', () => console.log('Forward'));
refreshBtn?.addEventListener('click', () => console.log('Refresh'));

// Initialize
console.log('PROJECT PHANTOM v1.0.0 - Initialized');
console.log('Electron app name:', window.electron?.app?.name);
