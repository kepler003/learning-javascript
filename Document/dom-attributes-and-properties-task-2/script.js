
for (const link of document.querySelectorAll('a[href]')) {
  const href = link.getAttribute('href');
  if (!href.includes('://') || href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}