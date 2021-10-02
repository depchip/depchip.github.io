window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

   
const contactUsForm = document.querySelector('#contactForm');
contactUsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactUsForm.elements.name;
    const email = contactUsForm.elements.email;
    const phone = contactUsForm.elements.phone;
    const message = contactUsForm.elements.message;
    
    submitContactDetails(name.value, email.value, phone.value, message.value);
    name.value = email.value = phone.value = message.value = '';
})

function showSuccessMessage(){
    document.querySelector("#submitSuccessMessage").className="d-block";
    setTimeout(function(){
    document.querySelector("#submitSuccessMessage").className="d-none";
    },3000)
}

function showErrorMessage(){
    document.querySelector("#submitErrorMessage").className="d-block";
    setTimeout(function(){
    document.querySelector("#submitErrorMessage").className="d-none";
    },3000)
}

let submitContactDetails = function (name, email, phone, message) {
    axios.post('https://depmail.herokuapp.com/send-mail', {
        name,
        email,
        phone,
        message
    })
        .then(function (response) {
            showSuccessMessage();
        })
        .catch(function (error) {
            showErrorMessage();
        });
}

});
