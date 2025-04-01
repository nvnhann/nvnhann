const menuItems = [
    {
        label: "Japanese",
        icon: "fas fa-language",
        show: true,
        submenu: [
            { label: "FlashCard", href: "/pages/japanese/flashcard.html", icon: "fas fa-clone" },
            { label: "Marugoto", href: "/pages/japanese/marugoto.html", icon: "fas fa-journal-whills" },
        ],
    },
    {
        label: "English",
        icon: "fas fa-language",
    },
];

const sidebar = document.getElementById("sidebar");

const menuWrapper = document.createElement("div");
menuWrapper.className = "sidebar-menu-items";

menuItems.forEach((item, index) => {
    if (!item.submenu) {
        const link = document.createElement("a");
        link.href = item.href || "#";
        link.className = "sidebar-item";
        link.innerHTML = `<i class="${item.icon}"></i> ${item.label}`;
        menuWrapper.appendChild(link);
    } else {
        const dropdownId = `submenu-${index}`;

        const dropdownToggle = document.createElement("div");
        dropdownToggle.className = "sidebar-item dropdown-toggle";
        dropdownToggle.setAttribute("data-bs-toggle", "collapse");
        dropdownToggle.setAttribute("data-bs-target", `#${dropdownId}`);
        dropdownToggle.setAttribute("aria-expanded", item.show);
        dropdownToggle.setAttribute("aria-controls", dropdownId);
        dropdownToggle.style.cursor = "pointer";
        dropdownToggle.innerHTML = `<i class="${item.icon}"></i> ${item.label}`;

        const submenu = document.createElement("div");
        submenu.className = "collapse ms-3" + `${item.show ? ' show' : ''}`;
        submenu.id = dropdownId;

        item.submenu.forEach((sub) => {
            const sublink = document.createElement("a");
            sublink.href = sub.href || "#";
            sublink.className = "sidebar-item";
            sublink.innerHTML = `<i class="${sub.icon} me-2"></i> ${sub.label}`;
            submenu.appendChild(sublink);
        });

        menuWrapper.appendChild(dropdownToggle);
        menuWrapper.appendChild(submenu);
    }
});

// Clear & append to sidebar
sidebar.querySelectorAll(".sidebar-item").forEach(e => e.remove());
sidebar.appendChild(menuWrapper);

const mainContent = document.getElementById("main-content");
const toggleBtn = document.getElementById("toggleSidebarBtn");
const closeBtn = document.getElementById("closeSidebarBtn");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    mainContent.classList.add("shifted");
    toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    mainContent.classList.remove("shifted");
    toggleBtn.style.display = "inline-block";
});