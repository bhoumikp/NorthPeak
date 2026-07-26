const constactForm = document.getElementById('contact-form');
const successMsgField = constactForm.querySelector('.success-message');

const isEmpty = (value) => value.trim() === "";

const isValidEmail = (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);

const checkMaxLength = (value, length) => value.trim().length >= length;

const handleErrorField = (valid, input, message = '') => {
	const formGroup = input.closest('.form-group');
	const errorMsgField = formGroup.querySelector('.error-message');

	errorMsgField.textContent = valid ? "" : message;
	input.classList.add(valid ? 'valid' : 'invalid');
	// successMsgField.display = "flex";
}

const validateField = (input) => {
	const value = input.value;
	const maxLength = input.dataset.minlength;

	// required validation
	if (input.required && isEmpty(value)) {
		handleErrorField(false, input, 'This field is required');
		return false;
	}

	// email validation
	if (input.type === 'email' && !isValidEmail(value)) {
		handleErrorField(false, input, 'Please enter a valid email address');
		return false;
	}

	// textarea max length validation
	if (maxLength && checkMaxLength(value, int(maxLength))) {
		handleErrorField(input, 'Max 1000 characters are allowed', false);
		return false;
	}

	handleErrorField(true, input);
	return true;
}

constactForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const inputs = constactForm.querySelectorAll("input, textarea");
	let isValid = true;

	inputs.forEach((input) => {
		if (!validateField(input)) {
			(isValid = false);
		}
	})

	if (isValid) {
		successMsgField.style.display = 'flex';
		inputs.forEach((input) => input.value = '');
	}
})