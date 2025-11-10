// 🌿 Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 🌿 Floating contact button alert
const chatButton = document.querySelector('.floating-button');
if (chatButton) {
  chatButton.addEventListener('click', () => {
    alert("Thank you for reaching out! 💬 Chat support will be available soon.");
  });
}