//  VARIABLES
const RULES_LINK = [
            ["archetype","Archétype Gratuit"],
            ["test","Ceci est un Placeholder"],
            ["test copy","Ceci est un Placeholder 2"],
            ["test copy 2","Ceci est un Placeholder 3"]
        ]
// HELPERS
// CLIQUE SELON DATA-PAGE
document.addEventListener("click", async (e) => {
    const target = e.target.closest("[data-page]");
    if (!target) return;
// Définir la cible par rapport au dataset (data-page)
    const page = target.dataset.page;

    function multilinks(name,tableau,insert) {
        if (page === name){ 
            console.log(`nom de la page : ${name}
                tableau ${tableau}
                insert : ${insert}`);
            
        tableau.forEach(element => {
            element = `
                        <li><button data-page="rules_${element[0]}" class="sidebar_menu" style="padding-left:2rem; color: var(--second-accent-color);">                                ${element[1]}
                            </button></li>`
                                    insert.innerHTML += (element)
        });
        }
    }

    // Pour chaque Datapage remove "Etat Actif" 
    document.querySelectorAll("[data-page]").forEach(btn => {
        btn.classList.remove("active");
    });

        // Pour la cible ajouter "Etat Actif" 

    target.classList.add("active");

    // Display Sous menu
    const rulesSubmenu = document.getElementById("hidden-rules");

    // Si ca inclue "rules" (et pas rules_) alors ajouter/retirer 
    if (page.includes("rules")) {
        rulesSubmenu.classList.add("show");
    } else {
        rulesSubmenu.classList.remove("show");
    }

    // Selectionne le contenaire et met la page dédié à l'intérieur
    const container = document.querySelector(".mainpage_container");
    const response = await fetch(`./pages/${page}.html`);
    container.innerHTML = await response.text();

     const SUBRULE = document.querySelector(".sub-rules")

    if (page === "map") {
        initMap();
    }
    multilinks("rules",RULES_LINK,SUBRULE)
    multilinks("rules",RULES_LINK,rulesSubmenu)


    // if page = rules 
    // alors dans rules.html et dans la classe sub-rules pour chaque rules_ on ajoute <button data-page="rules_archetype" class="sidebar_menu" style="padding-left:2rem; color: var(--second-accent-color);">
    // 

});
// MOBILE
const COLLAPSE = document.getElementById("collapse")
const SUBMENU = document.getElementById("submenu")

COLLAPSE.addEventListener("click", () => {
    SUBMENU.classList.toggle("hidden");

    
});