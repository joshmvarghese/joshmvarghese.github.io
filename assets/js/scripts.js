// Smooth scrolling for same-page anchor links only
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const href = this.getAttribute('href');

		// Only intercept links that are same-page anchors
		if (href && href.startsWith('#')) {
			e.preventDefault();

			const targetSection = document.querySelector(href);

			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
	});
});