const themeToggler = document.getElementById('theme-toggle');
const navLinks = document.querySelectorAll('.navlink');
const sections = document.querySelectorAll('section[id]');

const setActiveNav = (id) => {
	navLinks.forEach(link => {
		link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
	});
}

const syncActiveNav = () => {
	const sections = [...document.querySelectorAll('section[id]')];

	const current = sections.find(section => {
		const rect = section.getBoundingClientRect();
		return rect.top <= 150 && rect.bottom >= 150;
	});

	if (current) setActiveNav(current.id);
}

themeToggler.addEventListener('click', (e) => {
	e.preventDefault();
	if (document.documentElement.classList.contains('light-mode')) {
		document.documentElement.classList.add('dark-mode');
		document.documentElement.classList.remove('light-mode');
	} else {
		document.documentElement.classList.add('light-mode');
		document.documentElement.classList.remove('dark-mode');
	}
	localStorage.setItem('theme', themeToggler.textContent);
	themeToggler.textContent = themeToggler.textContent === 'light_mode' ? 'dark_mode' : 'light_mode';
})

document.addEventListener('DOMContentLoaded', () => {
	if (!localStorage.getItem('theme')) {
		localStorage.setItem('theme', 'dark_mode')
	}

	if (localStorage.getItem('theme') === 'light_mode') {
		themeToggler.textContent = 'dark_mode';
	} else {
		themeToggler.textContent = 'light_mode';
	}

	syncActiveNav()
	renderServicesCard();
	renderTestimonialCards();
	renderPricingCards();
});

window.addEventListener('scroll', syncActiveNav);
