const words = [
    "multidisciplinary",
    "graphic",
    "social",
    "research-driven",
    "process-oriented",
    "creative",
    "experimental"
  ];
  
  let index = 0;
  const el = document.getElementById("changing-word");
  
  setInterval(() => {
    // fade out
    el.style.opacity = 0;
  
    setTimeout(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
  
      // fade in
      el.style.opacity = 1;
    }, 300);
  
  }, 2000);