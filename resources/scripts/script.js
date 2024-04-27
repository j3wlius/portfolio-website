'use strict';

// update copyright year
const currentDate = new Date();
document.querySelector('.year').innerText = currentDate.getFullYear();

// skills toggle

const toggleBtns = document.querySelectorAll('.toggle-btn');
const toggleBtnBox = document.querySelector('.skills-toggle');
const skillsBox = document.querySelector(".skills-box");


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
