// ACCESS HTML ELEMENTS
const hamburger = document.querySelector('.hamburger'); // hamburger
const navMenu = document.querySelector('.nav-menu'); //nav menu
const navLink = document.querySelectorAll('.nav-link'); // nav links
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
); // toggle checkbox

// const lightToggle = document.querySelector('.fa-sun');

// console.log(lightToggle);

/* 
    FUNCTION TO HANDLE THEME CHANGES 
    AND STORE USER CHOICE 
*/
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// SAVE USER PREFERENCE ON LOAD
const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

/* 
    OPEN NAVIGATION MENU WHEN HAMBURGER
    IS CLICKED
*/
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

/* 
    CLOSE NAV HAMBURGER MENU WHEN A LINK 
    IS CLICKED 
*/
navLink.forEach((link) =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);