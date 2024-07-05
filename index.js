//Le code à l'intérieur de la fonction ne sera exécuté qu'une fois que le DOM aura été entièrement chargé et analysé par le navigateur.
document.addEventListener("DOMContentLoaded", async function () {
  // Définition des URL de l' API (Attention: auparavant, dans le terminal, se positionner sur le répertoire local /backend, puis effectuer la commande npm start qui permettra l'accès à l'API ... sinon l'API ne fonctionnera pas).
  const apiUrl = "http://localhost:5678/api";
  const getWorksUrl = apiUrl + "/works"; //Concaténation de chaîne classique; autre option: écrire cela sous forme de "Littéraux de gabarit" `${apiUrl}/works`.
  const loginUrl = apiUrl + "/users/login"; ////Concaténation de chaîne classique; autre option: écrire cela sous forme de "Littéraux de gabarit" `${apiUrl}/users/login`.

  //AFFICHAGE DES PROJETS################################################################
  // Sélectionne la div gallery.
  const galleryDiv = document.querySelector(".gallery");
  // Vide le contenu de la div gallery avant de créer de nouveaux éléments.
  galleryDiv.innerHTML = "";

  // Fonction pour créer les éléments de la galerie.
  function createGalleryProject(project) {
    const figure = document.createElement("figure"); //C'est le conteneur formant project; je conserve le nom d'origine pour que le CSS soit conservé.
    const img = document.createElement("img");
    img.src = project.imageUrl; //C'est l'image du projet; je conserve le nom d'origine pour que le CSS soit conservé
    img.alt = project.title; //C'est le texte de remplacement de l'image.
    const figcaption = document.createElement("figcaption"); // C'est le titre du projet; je conserve le nom d'origine pour que le CSS soit conservé.
    figcaption.textContent = project.title;

    figure.appendChild(img); //Créé l'enfant "image du projet" dans la balise parent "figure".
    figure.appendChild(figcaption); //Créé l'enfant "titre du projet" dans la balise parent "figure".

    return figure; //permet de renvoyer l'élément HTML complet créé par la fonction createGalleryProject afin qu'il puisse être utilisé ailleurs dans le code, notamment pour l'ajouter à la galerie.
  }

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
    //Autre option possible avec 'for ... of':
    //for (const project of works) {
    //  const galleryProject = createGalleryProject(project);
    //  galleryDiv.appendChild(galleryProject);
    //}
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }

  // CREATION DES FILTRES ##################################################################

  // Fonction pour créer un bouton et l'ajouter au conteneur
  function createFilterButton(text) {
    // Créer un élément bouton
    const button = document.createElement("button");
    // Définir le texte du bouton
    button.textContent = text;
    // Ajouter la classe CSS pour le style
    button.classList.add("custom-button");

    // Ajouter le bouton au conteneur de boutons
    document.getElementById("button-container").appendChild(button);
  }

  // Création des boutons avec les textes spécifiés
  createFilterButton("Tous"); // Bouton 1: Tous
  createFilterButton("Objets"); // Bouton 2: Objets
  createFilterButton("Appartements"); // Bouton 3: Appartements
  createFilterButton("Hotels et restaurants"); // Bouton 4: Hotels et restaurants
});
