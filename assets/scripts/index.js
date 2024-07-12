
//Le code à l'intérieur de la fonction ne sera exécuté qu'une fois que le DOM aura été entièrement chargé et analysé par le navigateur:

document.addEventListener("DOMContentLoaded", async function () {

addCursorPointerToLinks() // Ajoute une classe "Survol des liens"

// Ajouter la classe 'cursor-pointer' à tous les <input>
function addCursorPointerToInput() {
  const allButtonsInput = document.querySelectorAll('input[type="submit"][value="Envoyer"]');
  allButtonsInput.forEach(function(item) {
      item.classList.add("cursor-pointer");
  });
  }

addCursorPointerToInput()

const galleryDiv = document.querySelector(".gallery");// Sélectionner la div gallery.
 
deleteGalery() 

  // Fonction pour créer les éléments de la galerie Projets.

  function createGalleryProject(project){
    const figure = document.createElement("figure"); //C'est le conteneur formant project; nous conservons le nom d'origine pour que le CSS continue de s'appliquer.
    const img = document.createElement("img");
    img.src = project.imageUrl; //C'est l'image du projet; nous conservons le nom d'origine pour que le CSS continue de s'appliquer.
    img.alt = project.title; //C'est le texte de remplacement de l'image en cas de défaut d'affichage.
    const figcaption = document.createElement("figcaption"); // C'est le titre du projet; nous conservons le nom d'origine pour que le CSS continue de s'appliquer.
    figcaption.textContent = project.title;

    figure.appendChild(img); //Créé l'enfant "image du projet" dans la balise parent "figure".
    figure.appendChild(figcaption); //Créé l'enfant "titre du projet" dans la balise parent "figure".
    return figure; //permet de renvoyer l'élément HTML complet créé par la fonction createGalleryProject.
  }

  // Fonction pour récupérer les projets depuis l'API, puis les ajouter dans la galerie
  
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

// Fonction pour créer le conteneur des boutons filtres
function createFilterButtonsContainer() {
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "button-container";
  const portfolioSection = document.querySelector("#portfolio");
  if (!portfolioSection) {
    console.error("La section #portfolio n'a pas été trouvée !");
    return;
  }
  portfolioSection.insertBefore(buttonContainer, galleryDiv);
}

//PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-PB-
//Création du conteneur des boutons filtres
function filterButtonsContainer (){
//  Bug si intégration du code ci-dessous ici...
}

const buttonContainer = document.createElement("div");
  
  buttonContainer.id = "button-container";
  document
    .querySelector("#portfolio")
    .insertBefore(buttonContainer, galleryDiv);

filterButtonsContainer();

// Fonction pour créer un bouton et l'ajouter au conteneur
  function createFilterButton(text) {
    // Créer un élément bouton
    const button = document.createElement("button");
    // Définir le texte du bouton
    button.textContent = text;
    // Ajouter la classe CSS pour le style
    button.classList.add("custom-button");
    // Ajouter le bouton au conteneur de boutons
    buttonContainer.appendChild(button);
    return button;
  }

// Chargement de l'API pour créer et personaliser les boutons avec le nom des catégories  
async function fetchAndCreateFilterButtons() {
      try {
      // Récupération des catégories depuis l'API.
      const response = await fetch(getCategoriesUrl);
      const categories = await response.json();

      // Utilisation d'un Set pour stocker les catégories
      const categorySet = new Set();

      // Ajouter la catégorie "Tous" au Set
      categorySet.add("Tous");

      // Ajouter les catégories récupérées au Set
      categories.forEach((objCategory) => {
        categorySet.add(objCategory.name);
      }); 
      console.log(categorySet)

      // Création des boutons à partir du Set de catégories
      categorySet.forEach((categoryName) => {
        createFilterButton(categoryName);
      });

      } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
      }
      }       

  fetchAndDisplayWorks() // Fonction pour récupérer les projets depuis l'API, puis les ajouter dans la galerie
  
  fetchAndCreateFilterButtons();// Fonction pour créer les boutons de filtre






//###########################################################################  
//Création des filtres  ##############
//###########################################################################  

/*

1- Ajouter un gestionnaire de Clic sur les Boutons filtres :
a) récupérer tous les boutons de filtre créés dynamiquement
b) pour chaque bouton, ajouter un écouteur d'événement qui réagira au clic.

2-Implémenter la Logique de Filtrage :
a) lorsqu'un bouton filtre est cliqué, vider le contenu de la galerie.
b) puis filtrer les projets récupérés depuis l'API pour n'afficher que ceux qui appartiennent à la catégorie correspondante
c) ajouter les projets filtrés à la galerie.

*/
/*
export async function setupFilterButtonClick() {
  const filterButtons = document.querySelectorAll('.custom-button-filter');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', async function() {
      const categoryName = button.textContent.trim(); // Récupère le texte du bouton cliqué
      
      try {
        // Récupération des projets depuis l'API
        const response = await fetch(getWorksUrl);
        const works = await response.json();
        
        // Filtrage des projets par la catégorie sélectionnée
        const filteredWorks = works.filter(project => {
          return project.category === categoryName;
        }); 
        
        // Vider la galerie existante
       
        deleteGallery()
        
        // Ajouter les projets filtrés à la galerie
        filteredWorks.forEach(project => {
          const galleryProject = createGalleryProject(project);
          galleryDiv.appendChild(galleryProject);
        });
        
      } catch (error) {
        console.error("Erreur lors du filtrage des projets:", error);
      }
    });
  });
}

*/









});
