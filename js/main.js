const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');

};

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home-text',{delay:200, origin:'top'});
sr.reveal('.home-img',{delay:300, origin:'top'});
sr.reveal('.feature, .product, .cta-content, .contact',{delay:200, origin:'top'});


const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'admin' && password === 'password') {
		// Login successful, redirect to dashboard page
		window.location.href = 'dashboard.html';
	} else {
		errorMessage.textContent = 'Invalid username or password';
	}
});

const showPopupLink = document.querySelector(".show-popup");
    const popup = document.querySelector(".popup");

    showPopupLink.addEventListener("click", () => {
        popup.classList.toggle("show-popup");
    });