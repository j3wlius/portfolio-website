'use strict';

// update copyright year
const currentDate = new Date();
document.querySelector('.year').innerText = currentDate.getFullYear();

// skills toggle
const toggleBtns = document.querySelectorAll('.toggle-btn');
const toggleBtnBox = document.querySelector('.skills-toggle');
const skillsBox = document.querySelector('.skills-box');

const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener('click', function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

// page navigation
const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

for (let i = 0; i < navItemLinks.length; i++) {
  navItemLinks[i].addEventListener('click', function () {
    const itemLinkText = this.textContent.toLowerCase();

    for (let i = 0; i < pages.length; i++) {
      if (pages[i].classList.contains(itemLinkText)) {
        pages[i].classList.add('active');

        navItemLinks[i].classList.add('active');
      } else {
        pages[i].classList.remove('active');

        navItemLinks[i].classList.remove('active');
      }
    }
  });
}
