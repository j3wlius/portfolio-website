"use strict";
import {
	projectsData as data,
	handleProjectsData,
} from "./projectsData.js";

// side bar && menu toggler variables
const menuToggler = document.querySelector(".menu-toggler");
const sideBar = document.querySelector(".side-bar");

menuToggler.addEventListener("click", function () {
	sideBar.classList.toggle("active");
});

// copyright year update
const currentDate = new Date();
document.querySelector(".year").innerText = currentDate.getFullYear();

// skills toggle functionality
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

// handle page navigation
function handleNavLinksClick(event) {
	event.preventDefault();

	navItemLinks.forEach((navItemLink) => {
		navItemLink.classList.remove("active");
		let clickedLink = event.target.innerText.toLowerCase();
		event.target.classList.add("active");

		pages.forEach((page) => {
			if (page.classList.contains(clickedLink)) {
				page.classList.add("active");
				sideBar.classList.remove("active");
			} else {
				page.classList.remove("active");
			}
		});
	});
}

navItemLinks.forEach((navItemLink) => {
	navItemLink.addEventListener("click", handleNavLinksClick);
});