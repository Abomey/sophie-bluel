import { getData } from "./api.js";

const data = {
    works: [],
    categories: []
};

function openModal() {
    document.querySelector("#edition-modal").style.display = "flex";
    // Blocage du scroll (à retirer lors de la fermeture de la modale)
    document.body.style.overflow = "hidden";
    
    // Assurez-vous d'avoir les travaux avant de les afficher
    getWorksInModal();
}

async function getWorksInModal() {
    try {
        // Récupérer les travaux depuis l'API
        data.works = await getData("/works");
        // Appeler la fonction pour afficher les travaux dans la modale
        renderWorksInModal(data.works);
    } catch (error) {
        console.error(error);
        // Gérer les erreurs de récupération des travaux depuis l'API
    }
}

function renderWorksInModal(works) {
    const modalGallery = document.querySelector(".modal-gallery");
    // Vidage de la galerie en utilisant une chaîne de caractères vide.
    modalGallery.innerHTML = "";
    for (let work of works) {
        // Génération de l'HTML représentant l'affichage du projet (en cours au sein de la boucle).
        const figure = generateWorkHTMLInModal(work);
        // Ajout de l'HTML à la galerie.
        modalGallery.innerHTML += figure;
    }
}

function generateWorkHTMLInModal(work) {
    return `<figure>
        <img src="${work.imageUrl}" alt="${work.title}">
        <i class="fa-solid fa-trash-can" id="trashcan"></i>
    </figure>`;
}
    
// @TODO: Modifier le HTML pour l'affichage dans la modale, incluant l'icone de suppression.
// @TODO : Compléter la modale d'édition (incluant tout le style) en HTML que l'on affichera quand désiré via JavaScript.
// @TODO : Gérer la suppression d'un projet.
// @TODO : Compléter la modale d'ajout d'un projet.
// @TODO : Gérer l'ajout d'un projet.


/*function deleteWorkHTMLInModal() {
    const worksToDelete = document.querySelectorAll('.delete-project');

    worksToDelete.forEach(work => {
        work.addEventListener('click', () => {
            // Obtenez l'ID du projet à supprimer en fonction de la classe ou de l'attribut personnalisé que vous avez défini
            const workId = work.classList[0]; // Suppose que la classe contient l'ID du projet

            // Effectuez ici votre logique de suppression, par exemple :
            // Supprimer le projet du tableau de travaux ou de la base de données

            // Mettez à jour l'affichage de la galerie modale en appelant la fonction renderWorksInModal avec les travaux mis à jour
            renderWorksInModal(data.works); // Supposons que data.works contient les travaux après suppression
        });
    });
}*/
// @TODO : Compléter la modale d'ajout d'un projet.


// @TODO : Gérer l'ajout d'un projet.


/*function editWorksInModal() {
    // Sélection de la modale d'édition par son ID et affichage en mode flex
    const editionModal = document.querySelector("#add-work-modal");
    editionModal.style.display = "flex";

    // Blocage du scroll (à retirer lors de la fermeture de la modale)
    document.body.style.overflow = "hidden";

    // Appel de la fonction renderWorksInModal pour afficher les projets dans la galerie
    renderWorksInModal(data.works);
}
*/
/**
 * Fonction permettant d'afficher les projets au sein de la galerie de la modale.
  /**@param {Array} works Tableau de projets à afficher
 */
/*function renderWorksInModal(works) {
    const gallery = document.querySelector(".modal-gallery"); 
    // Vidage de la galerie en utilisant une chaîne de caractères vide.
    gallery.innerHTML = "";
    for (let work of works) {
        // Génération de l'HTML représentant l'affichage du projet (en cours dans la boucle).
        const figure = generateWorkHTMLInModal(work);
        // Ajout de l'HTML à la galerie.
        gallery.innerHTML += figure;
    }
}*/

export { openModal };

