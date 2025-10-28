// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
	console.log('Portfolio loaded!');
	const nav = document.querySelector('nav');
	const toggle = document.querySelector('.menu-toggle');
	const links = document.querySelectorAll('nav ul li a');

	// Function to set CSS variable for header height so anchors don't hide under fixed header
	function setHeaderHeight() {
		const header = document.querySelector('header');
		if (!header) return;
		const height = header.offsetHeight;
		document.documentElement.style.setProperty('--header-height', height + 'px');
	}

	// Run once to initialize correct spacing
	setHeaderHeight();
	// Update on resize in case header wraps or font sizes change
	window.addEventListener('resize', setHeaderHeight);

		if (toggle && nav) {
		toggle.addEventListener('click', function () {
			const isOpen = nav.classList.toggle('open');
			// update aria-expanded for accessibility
			toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			// header size could change when menu opens (mobile wrap) -> recalc
			setHeaderHeight();
			if (isOpen) {
				// focus the first link in the menu for keyboard users
				const firstLink = nav.querySelector('ul li a');
				if (firstLink) firstLink.focus();
			}
		});

		// Close menu when a link is clicked (mobile)
		links.forEach(link => {
			link.addEventListener('click', function () {
				if (nav.classList.contains('open')) {
					nav.classList.remove('open');
					toggle.setAttribute('aria-expanded', 'false');
				}
			});
		});
			// Close menu with Escape key
			document.addEventListener('keydown', function (e) {
				if (e.key === 'Escape' && nav.classList.contains('open')) {
					nav.classList.remove('open');
					toggle.setAttribute('aria-expanded', 'false');
					toggle.focus();
				}
			});
	}
});
