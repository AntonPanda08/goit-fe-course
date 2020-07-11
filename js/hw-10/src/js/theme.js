const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeChangeRef = document.querySelector('input.js-switch-input');
const bodyRef = document.querySelector('body');
let theme = localStorage.getItem('theme');
localStorage.setItem('theme', Theme.LIGHT);
const darkTheme = () => {
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
};
const lightTheme = () => {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
};
const changeTheme = e => {
  theme = localStorage.getItem('theme');
  if (themeChangeRef.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
};

if (theme === Theme.DARK) {
  themeChangeRef.checked = true;
  darkTheme();
}

themeChangeRef.addEventListener('change', changeTheme);
