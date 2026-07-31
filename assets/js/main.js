document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  const navCollapse = document.getElementById('mainNav');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (navCollapse && navCollapse.classList.contains('show')) {
        const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        collapseInstance.hide();
      }
    });
  });
});