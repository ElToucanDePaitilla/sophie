// Définition des URL de l' API (Attention: auparavant, dans le terminal, se positionner sur le répertoire local /backend, puis effectuer la commande npm start qui permettra l'accès à l'API ... sinon rien ne s'affichera dans la gallerie des projets).

const apiUrl = "http://localhost:5678/api";

const getWorksUrl = apiUrl + "/works"; //Concaténation de chaîne classique; autre option: écrire cela sous forme de "Littéraux de gabarit" `${apiUrl}/works`.

const getCategoriesUrl = apiUrl + "/categories"; //Concaténation de chaîne classique; autre option: écrire cela sous forme de "Littéraux de gabarit" `${apiUrl}/categories`.

const loginUrl = apiUrl + "/users/login"; ////Concaténation de chaîne classique; autre option: écrire cela sous forme de "Littéraux de gabarit" `${apiUrl}/users/login`.
