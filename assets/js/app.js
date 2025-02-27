document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-button');
  const logoImg = document.querySelector('#logo img');
  let currentTheme = localStorage.getItem('theme') || 'light'; // retrieve the theme from localStorage or set it to light if not found

  // Update the logo based on the current theme
  function updateLogo() {
    if (currentTheme === 'light') {
      logoImg.src = './assets/img/CreatorsLogoblack.png';
    } else {
      logoImg.src = './assets/img/CreatorsLogo.png';
    }
  }

  // Set the initial logo based on the current theme
  updateLogo();

  btn.addEventListener('click', () => {
    if (currentTheme === 'light') {
      // switch to dark mode
      currentTheme = 'dark';
    } else {
      // switch to light mode
      currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme); // store the updated theme in localStorage
    updateLogo(); // update the logo after changing the theme
  });
});
