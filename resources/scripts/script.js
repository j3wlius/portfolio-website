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

const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    // remove all active class from filter button
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].classList.remove('active');
    }
    // added active class on filter button clicked
    this.classList.add('active');

    // show item, based on filter button click
    for (let i = 0; i < itemCategory.length; i++) {
      const itemCategoryText = itemCategory[i].textContent;
      console.log(itemCategoryText);
      switch (this.textContent) {
        case itemCategoryText:
          itemCategory[i].parentElement.classList.add('active');
          break;
        case 'All':
          itemCategory[i].parentElement.classList.add('active');
          break;
        default:
          itemCategory[i].parentElement.classList.remove('active');
      }
    }
  });
}
