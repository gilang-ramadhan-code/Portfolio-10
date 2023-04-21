// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58;

    const sectionId = current.getAttribute('id');

    const sectionsClass = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

// SHOW MENU
const navClose = document.getElementById('nav-close'),
  navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

// ADD BLUR TO HEADER
const blurHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

// EMAIL JS
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  contactMessage.textContent = 'Message sent successfully';

  setTimeout(() => {
    contactMessage.textContent = '';
  }, 5000);

  contactForm.reset();
};

contactForm.addEventListener('submit', sendEmail);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  delay: 400,
  distance: '60px',
  duration: 2500,
  origin: 'top',
});

sr.reveal(
  `.contact__container, .footer__container, .home__data, .home__social`
);

sr.reveal(`.home__images`, { origin: 'bottom' });
sr.reveal(`.about__data, .skills__data`, { origin: 'left' });
sr.reveal(`.about__images, .skills__content`, { origin: 'right' });
sr.reveal(`.projects__card, .services__card`, { interval: 100 });
