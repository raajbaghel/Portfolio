// SHOW MENU

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//  menu show

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//  menu hidden

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Add blur to header

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// Sending mail from contact form to me

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()

    // service id - templateid  - formid - puvlickey

    emailjs.sendForm('service_bdvl4x8', 'template_q7gkblq', '#contact-form', '0wwvIjJpp-JpHa1sn')
        .then(() => {
            // show sent msg
            contactMessage.textContent = 'Message sent succesfully ✅';

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            //  clear input
            contactForm.reset()
        }, () => {
            // show error message
            contactMessage.textContent = 'Message not sent (service error) ❌';

        })
}

contactForm.addEventListener('submit', sendEmail);