const renderServicesCard = () => {
	const servicesContainer = document.querySelector('.services-container');

	services.forEach((service) => {
		const span = document.createElement('span');
		span.classList.add("material-symbols-outlined");
		span.textContent = service.icon;

		const icon = document.createElement('div');
		icon.classList.add('icon');
		icon.appendChild(span);

		const h1 = document.createElement('h1');
		h1.textContent = service.title;

		const p = document.createElement('p');
		p.textContent = service.description;

		const serviceCard = document.createElement('div');
		serviceCard.classList.add('service-card', 'glass-card', 'card-shadow');
		serviceCard.append(icon, h1, p);

		servicesContainer.appendChild(serviceCard);
	})

}

const renderTestimonialCards = () => {
	const testimonialsContainer = document.querySelector('.testimonials-container');

	testimonials.forEach((review) => {
		const userAvatar = document.createElement('img');
		userAvatar.classList.add('user-avatar');
		userAvatar.setAttribute('src', review.avatar);
		userAvatar.setAttribute('alt', `${review.name} Avatar`);;

		const name = document.createElement('h1');
		name.textContent = review.name;

		const company = document.createElement('span');
		company.textContent = review.company;

		const span = document.createElement('span');
		span.append(name, company);

		const cardHeader = document.createElement('div');
		cardHeader.classList.add('card-header');
		cardHeader.append(userAvatar, span);

		const message = document.createElement('p');
		message.textContent = review.review;

		const cardBody = document.createElement('div');
		cardBody.classList.add('card-body');
		cardBody.appendChild(message);

		const testimonialCard = document.createElement('div');
		testimonialCard.classList.add('testimonial-card', 'glass-card', 'card-shadow');
		testimonialCard.append(cardHeader, cardBody);

		testimonialsContainer.append(testimonialCard);
	})
}


const renderPricingCards = () => {
	const pricesContainer = document.querySelector('.prices-container');

	pricingPlans.forEach((plan) => {
		const h1 = document.createElement('h1');
		h1.textContent = plan.name;

		const startingAt = document.createElement('span');
		startingAt.textContent = 'starting at';

		const amount = document.createElement('span');
		amount.textContent = plan.price;

		const price = document.createElement('div');
		price.classList.add('price');
		price.append(startingAt, amount);

		const button = document.createElement('button');
		button.textContent = 'Get Started';

		const featuresList = document.createElement('ul');
		plan.features.forEach((feature) => {
			const span = document.createElement('span');
			span.classList.add('material-symbols-outlined');
			span.textContent = 'check_circle';

			const text = document.createTextNode(feature);

			const li = document.createElement('li');
			li.append(span, text);

			featuresList.appendChild(li);
		});

		const priceCard = document.createElement('div');
		priceCard.classList.add('price-card', 'glass-card', 'card-shadow');

		if (plan.popular) {
			priceCard.classList.add('popular')
			button.classList.add('btn-primary', 'btn-shadow');
		}

		priceCard.append(h1, price, button, featuresList);

		pricesContainer.appendChild(priceCard);
	})
}
