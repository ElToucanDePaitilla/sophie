




//Fonctions filtres



//Filtre "Tous"
const listProjTous = works.filter((objet) => {
    return true;
})
console.log(listProjTous);


//Filtre "Objets"
const listProjObj = works.filter((objet) => {
    if (objet.category.name == "Objets")
    return objet
})
console.log(listProjObj);


//Filtre "Appartements"
const listProjAppt = works.filter((objet) => {
    if (objet.category.name == "Appartements")
    return objet
})
console.log(listProjAppt);

//Filtre "Hotels et restaurants"
const listProjHotRest = works.filter((objet) => {
    if (objet.category.name == "Hotels et restaurants")
    return objet
})
console.log(listProjHotRest);








//###########################################################################  
//VIDAGE DES SECTIONS #######################################################
//###########################################################################  

  // Fonction pour vider le contenu des éléments
  function viderSections() {
    const sections = ["#introduction", "#portfolio", "#contact"];
    sections.forEach(sectionId => {
      const sectionElement = document.querySelector(sectionId);
      if (sectionElement) {
        sectionElement.innerHTML = "";
      }
    });
  }

  viderSections(); // Appeler la fonction pour vider les sections



/*
// Ajouter dynamiquement le lien "login"
const navList = document.querySelector("header nav ul");
const loginListItem = document.createElement("li");
const loginLink = document.createElement("a");
loginLink.href = "#";
loginLink.id = "login-link";
loginLink.textContent = "login";
loginListItem.appendChild(loginLink);
navList.appendChild(loginListItem);

// Ajouter un événement de clic au lien "login"
loginLink.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  viderSections(); // Appelle la fonction pour vider les sections
});
*/

/*
viderSections()
*/





  