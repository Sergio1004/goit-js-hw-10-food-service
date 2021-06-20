const themeToggleBtn = document.getElementById('theme-switch-toggle');
const bodyTheme = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleThemeMode = () => {
  bodyTheme.classList.toggle(Theme.LIGHT);
  bodyTheme.classList.toggle(Theme.DARK)

  if (themeToggleBtn.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

themeToggleBtn.addEventListener('change', toggleThemeMode);

const setTheme = () => {
  if (localStorage.getItem('theme') === Theme.DARK) {
    bodyTheme.classList.add(Theme.DARK);
    themeToggleBtn.checked = true;
  } else {
    bodyTheme.classList.add(Theme.LIGHT);
  }
}

setTheme();