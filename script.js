const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

    if(fnameValue === '') {
		setErrorFor(fname);
	} else {
		setSuccessFor(fname);
	}

    if(lnameValue === '') {
		setErrorFor(lname);
	} else {
		setSuccessFor(lname);
	}

    if(emailValue === '') {
        setErrorFor(email);
	} else if (!isEmail(email.value)) {
        setErrorFor(email);
    } else {
		setSuccessFor(email);
	}

    if(passwordValue === '') {
		setErrorFor(password);
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorForEmail(input, message) {
	const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
	formControl.className = 'form-control error';
}