const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('.counter');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollTopBtn = document.querySelector('.scroll-top');
const form = document.querySelector('.contact-form');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('reveal')) {
        observer.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.2 });

revealItems.forEach((item) => observer.observe(item));

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);
    const duration = 1400;
    const startTime = performance.now();

    const step = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = `${value}${target === 500 ? '+' : target === 98 ? '%' : target === 24 ? 'h' : '+'}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (target === 500) counter.textContent = '500+';
        if (target === 98) counter.textContent = '98%';
        if (target === 24) counter.textContent = '24h';
        if (target === 15) counter.textContent = '15+';
      }
    };

    requestAnimationFrame(step);
  });
};

const countersObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      countersObserver.disconnect();
    }
  });
}, { threshold: 0.4 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
  countersObserver.observe(statsSection);
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.style.display = 'grid';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});


