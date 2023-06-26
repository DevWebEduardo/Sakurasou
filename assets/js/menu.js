const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar-default');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});