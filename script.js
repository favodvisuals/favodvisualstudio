
// 1. Current Year
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Custom Cursor Tracking
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// 3. Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 4. Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// 5. Light / Dark Mode Toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
themeIcon.innerHTML = savedTheme === 'dark' ? '<i class= "fa fa-sun-o"><i>' : '<i class="fa fa-moon-o"><i>';

themeToggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  themeIcon.innerHTML = newTheme === 'dark' ? '<i class= "fa fa-sun-o"><i>' : '<i class="fa fa-moon-o"><i>';
  localStorage.setItem('theme', newTheme);
});



