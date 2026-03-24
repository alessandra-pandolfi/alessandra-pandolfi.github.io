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

  function openWindow(url) {
    window.open(
      url,
      "_blank",
      "width=900,height=700,top=100,left=200,resizable=yes,scrollbars=yes"
    );
  }

  const projects = {
   portfolio: `
    <div class="project-card">
      <h2> Portfolio </h2>
      <p>
       Here you can find a collection of most recent or selected works. Check it out!
      </p>

      <div class="buttons">
        <a href="https://alessandrapandolfi.cargo.site" target="_blank">  → Portfolio</a>
        <a href="https://www.instagram.com/_pandalter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">  → IG</a>
      </div>
    </div>
  `,
    civicity: `
      <div class="project-card">
        <h2> CIVICITY - Redesign Design Weeks (April 2026)</h2>
        <h4> Residency (Milan, Italy). 
        Nieuwe Instituut x Embassy and Consulate-General of the Netherlands in Italy x cheFare. Curated by Peter Zuiderwijk and Karin Mientjes of Collective Works. </h4>
        <p>
          Partecipating as <b>Demo-practice</b>, a social design collective formed with Pheobe Hotopf. 
          We will develop a collaborative research and design project exploring civic
          infrastructures, participation, and collective imaginaries.
        </p>
  
        <div class="buttons">
          <a href="https://demo-practice.com/" target="_blank">  → Website</a>
          <a href="https://www.instagram.com/demo__practice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">  → IG </a>
        </div>
      </div>

       <div class="project-card">
        <h2> Urgency Toolkit (June 2026)</h2>
        <h4> Exhibiting at New European Bauhuas (Bruxelles, Belgium). 
        Created during a two-months residency at Circolo del Design, Sept - Nov 2025.<p>
          Developed through a co-design process with local communities, <i> Urgency Toolkit </i>is a replicable model for shared decision-making and civic transformation.  </p>
  
        <div class="buttons">
          <a href="https://substack.com/@circolodeldesign1" target="_blank">  → Project </a>
        </div>
      </div>
    `,

 research:`
      <div class="project-card">
        <h2>Sharing is caring</h2>
        <p>
        As I work on different projects, I continue to research and archive my findings. Here are some insights into my process: </p>
  
        <div class="buttons">
          <a href="https://www.are.na/alessandra-pandolfi" target="_blank">
  → Are.na
</a>
 </div>
      </div>
    `
  };

  const display = document.getElementById("project-display");

document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.dataset.project;

    display.innerHTML = projects[id];
  });
});

const popup = document.getElementById("contactPopup");
const btn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".popup .close");

// Open popup
btn.onclick = function(e) {
  e.preventDefault();
  popup.style.display = "block";
}

// Close popup on X click
closeBtn.onclick = function() {
  popup.style.display = "none";
}

// Close popup on clicking outside the content
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}