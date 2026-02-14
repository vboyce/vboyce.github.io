document.addEventListener('DOMContentLoaded', function() {
  const pubSection = document.querySelector('.publications');
  if (!pubSection) return;
  
  // Collect all unique tags from rendered entries
  const allTagElements = document.querySelectorAll('.bib-entry .tag');
  const uniqueTags = new Map();
  
  allTagElements.forEach(tagEl => {
    const tagText = tagEl.textContent.trim();
    const classes = tagEl.className.split(' ');
    const slugClass = classes.find(c => c.startsWith('tag-') && c !== 'tag');
    if (slugClass) {
      const slug = slugClass.replace('tag-', '');
      uniqueTags.set(slug, tagText);
    }
  });
  
  // Only create filter bar if there are tags
  if (uniqueTags.size === 0) return;
  
  // Create filter bar
  const filterBar = document.createElement('div');
  filterBar.className = 'tag-filter-bar';
  
  // Add "All" button
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.setAttribute('data-tag', 'all');
  allBtn.textContent = 'All';
  filterBar.appendChild(allBtn);
  
  // Add button for each unique tag (sorted alphabetically)
  Array.from(uniqueTags.entries())
    .sort((a, b) => a[1].localeCompare(b[1]))
    .forEach(([slug, text]) => {
      const btn = document.createElement('button');
      btn.className = `filter-btn tag-${slug}`;
      btn.setAttribute('data-tag', slug);
      btn.textContent = text;
      filterBar.appendChild(btn);
    });
  
  // Insert filter bar at the top
  pubSection.insertBefore(filterBar, pubSection.firstChild);
  
  // Add click handlers for filtering
  const filterBtns = filterBar.querySelectorAll('.filter-btn');
  const bibEntries = document.querySelectorAll('.bib-entry');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter entries
      bibEntries.forEach(entry => {
        if (selectedTag === 'all') {
          entry.classList.remove('hidden');
        } else {
          const entryTags = entry.getAttribute('data-tags') || '';
          if (entryTags.includes(selectedTag)) {
            entry.classList.remove('hidden');
          } else {
            entry.classList.add('hidden');
          }
        }
      });
      
      // Hide year headings and empty lists
      document.querySelectorAll('h2.bibliography').forEach(yearHeader => {
        const bibList = yearHeader.nextElementSibling;
        if (bibList && bibList.tagName === 'OL') {
          const visibleEntries = bibList.querySelectorAll('.bib-entry:not(.hidden)');
          if (visibleEntries.length === 0) {
            yearHeader.style.display = 'none';
            bibList.style.display = 'none';
          } else {
            yearHeader.style.display = '';
            bibList.style.display = '';
          }
        }
      });
    });
  });
});
