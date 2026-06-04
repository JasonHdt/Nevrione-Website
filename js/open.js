const CLOSE = ["map"];

document.addEventListener("click", async (e) => {
    const target = e.target.closest("[data-page]");
    if (!target) return;

    const page = target.dataset.page;

    document.querySelectorAll("[data-page]").forEach(btn => {
        btn.classList.remove("active");
    });

    target.classList.add("active");

    const rulesSubmenu = document.getElementById("hidden-rules");

    if (page.includes("rules")) {
        rulesSubmenu.classList.add("show");
    } else {
        rulesSubmenu.classList.remove("show");
    }

    if (CLOSE.includes(page)) {
        rulesSubmenu.classList.add("hidden");
    }

    let pageToLoad = page.includes("_main")
        ? page.replace("_main", "")
        : page;

    const container = document.querySelector(".mainpage_container");

    const response = await fetch(`./pages/${pageToLoad}.html`);
    container.innerHTML = await response.text();

    if (pageToLoad === "map") {
        initMap();
    }
});

const COLLAPSE = document.getElementById("collapse")
const SUBMENU = document.getElementById("submenu")

COLLAPSE.addEventListener("click", () => {
    SUBMENU.classList.toggle("hidden");
});
// const MENU_BTN = document.getElementById("burger");
// const MENU = document.querySelector(".mobile-menu");
// const HIDDEN = document.getElementById("submenu")

// MENU_BTN.addEventListener("click", () => {
//     MENU.classList.toggle("open");
//     HIDDEN.classList.toggle("hidden")

// });