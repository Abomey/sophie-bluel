import { getData, deleteElement } from "./api.js";

// Objet global contenant tous les projets et catégories.
const data = {
    works: [],
    categories: []
};

document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Récupération des projets.
        data.works = await getWorks();
        // Récupération des catégories.
        data.categories = await getCategories();
        // Affichage des projets.
        renderWorks(data.works);
        // Affichage des catégories.
        renderCategories(data.categories);
    } catch(error) {
        console.error(error);
    }
});

/**
 * Fonction permettant d'afficher les projets au sein de la gallerie.
 * @param {Array} Tableau de projets à afficher
 */
function renderWorks(works) {
    const gallery = document.querySelector(".gallery");
    // Vidage de la gallerie en utilisant une chaine de caratères vide.
    gallery.innerHTML = "";
    for (let work of works) {
        // Génération de l'HTML représentant l'affichage du projet (en cours au sein de la boucle).
        const figure = generateWorkHTML(work);
        // Ajout de l'HTML à la gallerie.
        gallery.innerHTML += figure;
    }
}

/**
 * Fonction permettant de générer le HTML d'affichage d'un projet.
 * @param {Object} work Objet représentant un projet
 * @returns {string} HTML représentant l'affichage du projet passé en paramètre
 */
function generateWorkHTML(work) {
    return `			
    <figure>
    <img src="${work.imageUrl}" alt="${work.title}">
    <figcaption>${work.title}</figcaption>
    </figure>`;
}

/**
 * Fonction permettant d'afficher les boutons de catégories.
 * @param {Array} categories Tableau de catégories à afficher
 */
function renderCategories(workcategories) {
    

    // @TODO : Implémenter cette fonction.
}

/**
 * Fonction permettant de générer le HTML d'affichage d'un bouton de catégorie.
 * @param {Object} category Objet représentant une catégorie.
 * @returns {string} HTML représentant l'affichage d'un bouton de catégorie.
 */
function generateCategoryHTML(category) {
    // @TODO : Implémenter cette fonction.
    return ``;
}

/**
 * Fonction permettant de filtrer les projets par catégorie.$
 * @param {Object} category Object représentant une catégorie (avec laquelle on veut filtrer).
 */
function filterWorksByCategory(category) {
    // @TODO : Compléter cette fonction.
    // Précisions : Bien penser au cas où on ne filtre pas (soit la catégorie "Tous").
    const works = data.works.filter();
    renderWorks(works);
}


/**
 * Fonction permettant de récupérer les projets.
 * @returns {Array} Tableau de projets
 */
async function getWorks() {
    try {
        return await getData("/works");
    } catch (error) {
        console.error(error);
        throw Error("Une erreur est survenue lors de la récupération des projets.");
    }
}

/**
 * Fonction permettant de récupérer les catégories.
 * @returns {Array} Tableau de catégories
 */
async function getCategories() {
    try {
        return await getData("/categories");
    } catch (error) {
        console.error(error);
        throw Error("Une erreur est survenue lors de la récupération des catégories.");
    }
}

/**
 * Fonction permettant de supprimer un projet.
 * @param {number} id Identifiant du projet
 */
async function deleteWork(id) {
    try {
        await deleteElement(`/works/${id}`)
    } catch (error) {
        console.error(error);
        throw Error("Une erreur est survenue lors de la suppression d'un projet.")
    }
}