  const projectBadge = document.getElementById('project1');
  const infoPanel = document.querySelector('.project-info');

  if (projectBadge && infoPanel) {
    projectBadge.addEventListener('click', function(e) {
      e.preventDefault();
      infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // opzionale: mettere un breve evidenziatore
      infoPanel.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
      setTimeout(() => infoPanel.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)', 1200);
    });
  }

