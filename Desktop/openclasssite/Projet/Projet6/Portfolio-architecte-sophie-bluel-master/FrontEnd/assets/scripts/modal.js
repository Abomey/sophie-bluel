import { deleteElement } from "./api.js";
import { data, getWorks, renderWorks } from "./index.js";

/**
 * 
 */
function openModal() {
    document.querySelector("#edition-modal").style.display = "flex";
    // Blocage du scroll (à retirer lors de la fermeture de la modale)
    document.body.style.overflow = "hidden";
    
    // Assurez-vous d'avoir les travaux avant de les afficher
    renderWorksInModal(data.works);
    addDeleteEvents();
}

/**
 * 
 */
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

/**
 * 
 */
function generateWorkHTMLInModal(work) {
    return `<figure>
        <img src="${work.imageUrl}" alt="${work.title}">
        <i class="fa-solid fa-trash-can" data-id=${work.id}></i>
    </figure>`;
}

/**
 * Fonction permettant d'ajouter les évènements de suppression sur les icones de corbeilles.
 */
function addDeleteEvents() {
    const trashes = document.querySelectorAll(".fa-trash-can");
    trashes.forEach(trash => {
        trash.addEventListener("click", async () => {
            const id = trash.dataset.id;
            try {
                await deleteWork(id);
                refreshWorks(data.works);
            } catch (error) {
                alert(error.message);
            }
          
        })
    })
}

/**
 * Fonction permettant de supprimer un projet.
 * @param {number} id Identifiant du projet
 */
async function deleteWork(id) {
    try {
        await deleteElement(`/works/${id}`)
        data.works = data.works.filter(work => work.id !== id);
    } catch (error) {
        console.error(error);
        throw Error("Une erreur est survenue lors de la suppression d'un projet.")
    }
}

/**
 * Fonction permettant de rafraichir la liste des projets (dans la gallerie et la modale).
 * @param {Array} works Tableau de projet à afficher
 */
function refreshWorks(works) {
    renderWorks(works);
    renderWorksInModal(works);
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

