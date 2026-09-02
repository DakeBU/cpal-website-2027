// CPAL 2026 behavior: clicking an expandable category title toggles its
// children exactly like clicking the arrow, without navigating away.
document.addEventListener('click', function (event) {
  var titleButton = event.target.closest && event.target.closest('.nav-list-link-expander');
  if (!titleButton) return;

  event.preventDefault();
  var item = titleButton.parentElement;
  if (!item) return;

  var expanded = item.classList.toggle('active');
  titleButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');

  var arrowButton = item.querySelector(':scope > .nav-list-expander');
  if (arrowButton) {
    arrowButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }
});
