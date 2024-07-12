const galleryDiv = document.querySelector(".gallery"); // Sélectionner la div gallery.

// Ajouter la classe 'cursor-pointer' à tous les <li> dans le <ul> de l'en-tête
function addCursorPointerToLinks() {
  const headerListItems = document.querySelectorAll("header nav ul li");
  headerListItems.forEach(function (item) {
    item.classList.add("cursor-pointer");
  });

  // Ajouter la classe 'cursor-pointer' à tous les <input>
  function addCursorPointerToInput() {
    const allButtonsInput = document.querySelectorAll(
      'input[type="submit"][value="Envoyer"]'
    );
    allButtonsInput.forEach(function (item) {
      item.classList.add("cursor-pointer");
    });
  }

  // Ajouter la classe 'cursor-pointer' à tous les <li> dans le <ul> du footer
  const footerListItems = document.querySelectorAll("footer nav ul li");
  footerListItems.forEach(function (item) {
    item.classList.add("cursor-pointer");
  });
}

// Vider le contenu de la div gallery avant de créer de nouveaux éléments.
function deleteGalery() {
  galleryDiv.innerHTML = "";
}

// Récupérer les projets depuis l'API, puis les ajouter dans la galerie des Projets
async function fetchAndDisplayWorks() {
  try {
    // Récupération des works depuis l'API.
    const response = await fetch(getWorksUrl);
    const works = await response.json();

    // Utilisation d'une boucle for pour créer et ajouter les éléments de la galerie.
    for (let i = 0; i < works.length; i++) {
      const project = works[i];
      const galleryProject = createGalleryProject(project);
      galleryDiv.appendChild(galleryProject);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}

// Vider la balise "main" de tout son contenu pour pemettre le chargement du formulaire de connexion
function deletePageContent() {
  const sections = ["#introduction", "#portfolio", "#contact"];
  sections.forEach((sectionId) => {
    const sectionElement = document.querySelector(sectionId);
    if (sectionElement) {
      sectionElement.innerHTML = "";
    }
  });
}
