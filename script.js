<<<<<<< HEAD
const header = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      mobileMenu.classList.remove("open");
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Completá los campos obligatorios.";
      return;
    }

    formMessage.textContent = "Tu consulta fue enviada. Este formulario está listo para conectar con backend más adelante.";
    contactForm.reset();
  });
}
=======
const header = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      mobileMenu.classList.remove("open");
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Completá los campos obligatorios.";
      return;
    }

    formMessage.textContent = "Tu consulta fue enviada. Este formulario está listo para conectar con backend más adelante.";
    contactForm.reset();
  });
}
>>>>>>> 9ab7df9c2c040164d7a8cd51918b1a6ca3b9d689
