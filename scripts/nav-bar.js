const createNavbar = () => {
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark";
  
    navbar.innerHTML = `
      <a class="navbar-brand">Borschaga company</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="api.html">API</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about-us.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacts.html">Contacts</a>
          </li>
        </ul>
      </div>
    `;
  

    const currentPageURL = window.location.href;
    const navLinks = navbar.querySelectorAll(".nav-link");
  
    navLinks.forEach((link) => {
      if (currentPageURL.includes(link.getAttribute("href"))) {
        link.style.color = "rgb(255, 255, 255)"; 
      }
    });
  
    return navbar;
  };
  

  window.addEventListener("DOMContentLoaded", () => {
    const navbar = createNavbar();
    document.body.insertBefore(navbar, document.body.firstChild);
  });
  