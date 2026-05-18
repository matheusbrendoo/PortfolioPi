// Dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal — skip if user prefers reduced motion (CSS already handles visibility)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
