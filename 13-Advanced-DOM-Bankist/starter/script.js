'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

// TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

const allSections = document.querySelectorAll('.section'); // returns NodeList
const allButtons = document.getElementsByTagName('button') // returns HTMLCollection
const header = document.querySelector('.header');

const section1 = document.querySelector('#section--1');


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// console.log(document.documentElement); //document.head, document.body

document.querySelector('.header');

// CREATING AND INSERTING ELEMENTS

const message = document.createElement('div')
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = `We use cookies for improved functionality and analytics.<button class='btn ok--button'>Ok!</button>`
header.append(message);

// DELETE ELEMENTS
document.querySelector('.ok--button').addEventListener('click', function(e){
  e.preventDefault();
  message.remove()
})

// TABS CONTAINER/CONTENT FUNCTIONALITY 
tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');

  // guard clause
  if (!clicked) return;

  // Remove Active class 
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(t => t.classList.remove('operations__content--active'))
  
  // Activate Tab
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// MENU FADE ANIMATION

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// Passing "arg" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// STICKY NAV: intersection observer api
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
}

const headerobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerobserver.observe(header);
