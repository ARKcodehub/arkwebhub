const sections = document.querySelectorAll('.section');
const toggle = document.getElementById('darkToggle');

function revealSections() {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});
