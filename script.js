const menuBouton = document.getElementById("menu-bouton");
const menu = document.getElementById("menu");

// Ouvrir et fermer le menu
menuBouton.addEventListener("click", function () {
    menu.classList.toggle("actif");

    const menuOuvert = menu.classList.contains("actif");

    menuBouton.textContent = menuOuvert ? "✕" : "☰";
    menuBouton.setAttribute("aria-expanded", menuOuvert);
    menuBouton.setAttribute(
        "aria-label",
        menuOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );
});

// Fermer le menu après un clic sur un lien
const liensMenu = menu.querySelectorAll("a");

liensMenu.forEach(function (lien) {
    lien.addEventListener("click", function () {
        menu.classList.remove("actif");
        menuBouton.textContent = "☰";
        menuBouton.setAttribute("aria-expanded", "false");
        menuBouton.setAttribute("aria-label", "Ouvrir le menu");
    });
});

// Formulaire de contact vers WhatsApp

const formulaireContact = document.getElementById("contact-formulaire");

formulaireContact.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const numeroWhatsApp = "229TONNUMERO";

    const texte = `Bonjour Dani Création !

Nom : ${nom}
E-mail : ${email}
Service souhaité : ${service}

Mon projet :
${message}`;

    const lien = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

    window.open(lien, "_blank");
});

// Afficher automatiquement l'année actuelle

document.getElementById("annee").textContent =
    new Date().getFullYear();