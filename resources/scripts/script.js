"use strict";

const menuToggler = document.querySelector(".menu-toggler");
const sideBar = document.querySelector(".side-bar");

menuToggler.addEventListener("click", function () {
  sideBar.classList.toggle("active");
});

// update copyright year
const currentDate = new Date();
document.querySelector(".year").innerText = currentDate.getFullYear();

// skills toggle
const toggleBtns = document.querySelectorAll(".toggle-btn");
const toggleBtnBox = document.querySelector(".skills-toggle");
const skillsBox = document.querySelector(".skills-box");

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

// page navigation variables
const navItemLinks = document.querySelectorAll(".nav li a");
const pages = document.querySelectorAll(".page");

// page navigation functionality
for (let i = 0; i < navItemLinks.length; i++) {
  navItemLinks[i].addEventListener("click", function () {
    // collected nav links innertext
    const itemLinkText = this.textContent.toLowerCase();

    // defined page and add active class
    for (let i = 0; i < pages.length; i++) {
      // defining page condition
      if (pages[i].classList.contains(itemLinkText)) {
        // add active class on current page
        pages[i].classList.add("active");
        // add active class on clicked nav link
        navItemLinks[i].classList.add("active");
        //remove active class from sidebar when link is clicked
        sideBar.classList.remove("active");
      } else {
        // remove active class from other pages
        pages[i].classList.remove("active");
        // remove active class from other nav links
        navItemLinks[i].classList.remove("active");
      }
    }
  });
}

// variable for filtering
const filterBtn = document.querySelectorAll(".filter-item");
const itemCategory = document.querySelectorAll(".item-category");

// added eventListener in filter buttons
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    // remove all active class from filter button
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].classList.remove("active");
    }
    // added active class on filter button clicked
    this.classList.add("active");

    // show item, based on filter button click
    // for (let i = 0; i < itemCategory.length; i++) {
    // const itemCategoryText = itemCategory[i].innerText;
    // console.log(itemCategoryText);
    // switch (this.innerText) {
    //   case itemCategoryText:
    //     console.log(itemCategory)
    //     itemCategory[i].parentElement.classList.add('active');
    //     break;
    //   case 'All':
    //     itemCategory[i].parentElement.classList.add('active');
    //     break;
    //   default:
    //     itemCategory[i].parentElement.classList.remove('active');
    // }

    // if (itemCategoryText === this.textContent) {
    //   console.log(
    //     itemCategory[i].parentElement.parentElement.parentElement
    //       .parentElement
    //   );
    // } else if (this.innerText === "All") {
    //   console.log(
    //     itemCategory[i].parentElement.parentElement.parentElement
    //       .parentElement
    //   );
    // } else {
    //   console.log("None");
    // }

    for (let i = 0; i < itemCategory.length; i++) {
      const itemCategoryText = itemCategory[i].textContent;
      // console.log(itemCategoryText);
      switch (this.textContent) {
        case itemCategoryText:
          // console.log(itemCategoryText)
          itemCategory[
            i
          ].parentElement.parentElement.parentElement.parentElement.classList.add(
            "active"
          );
          break;
        case "All":
          console.log(itemCategoryText);
          itemCategory[
            i
          ].parentElement.parentElement.parentElement.parentElement.classList.add(
            "active"
          );
          break;
        default:
          itemCategory[
            i
          ].parentElement.parentElement.parentElement.parentElement.classList.remove(
            "active"
          );
      }
    }
  });
}
