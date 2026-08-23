const firstPage = () => {
    let x = document.getElementById('home__menu');
    x.classList.remove("hide__menu");
    let y = document.getElementById('recommended');
    y.classList.remove("active");
    let z = document.getElementById('backBtn');
    z.classList.remove("active");
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

btn__home.onclick = () => { firstPage(); }
backBtn.onclick = () => { firstPage(); }

// Зберегти обрані товари в Session Storage
function saveSelectedItemsToSessionStorage(selectedItems) {
    sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
}
  
// Отримати обрані товари з Session Storage
function getSelectedItemsFromSessionStorage() {
    const selectedItemsString = sessionStorage.getItem('selectedItems');
    return selectedItemsString ? JSON.parse(selectedItemsString) : [];
}

const sectionCenter = document.querySelector('.recommended');
const filterBtns = document.querySelectorAll('.main__link');
const filterBtnsBaner = document.querySelectorAll('.nav__link');

// Глобальні змінні
let menu = [];
let sections = [];
let mainCategories = [];

// 1. Логіка завантаження при відкритті сторінки
window.addEventListener("DOMContentLoaded", () => {
    const v = new Date().getTime(); // Антикеш
    
    Promise.all([
        fetch('mainCategories.json?v=' + v).then(response => {
            if (!response.ok) throw new Error("Помилка завантаження головних категорій");
            return response.json();
        }),
        fetch('categories.json?v=' + v).then(response => {
            if (!response.ok) throw new Error("Помилка завантаження підкатегорій");
            return response.json();
        }),
        fetch('database.json?v=' + v).then(response => {
            if (!response.ok) throw new Error("Помилка завантаження меню");
            return response.json();
        })
    ])
    .then(([mainCategoriesData, categoriesData, menuData]) => {
        mainCategories = mainCategoriesData.items || mainCategoriesData || [];
        sections = categoriesData.items || categoriesData || [];
        menu = menuData.items || menuData || [];

        if (!Array.isArray(mainCategories)) mainCategories = [];
        if (!Array.isArray(sections)) sections = [];
        if (!Array.isArray(menu)) menu = [];

        // Відновлюємо обрані товари
        const selectedItems = getSelectedItemsFromSessionStorage();
        menu.forEach(item => {
            item.selected = selectedItems.some(selectedItem => String(selectedItem.id) === String(item.id));
        });

        // Відмальовуємо категорії та меню на сайті (старий виклик)
        displayMenusItem(sections, menu);
    })
    .catch(error => {
        console.error("Сталася помилка при завантаженні даних:", error);
    });
});

filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let x = document.getElementById('recommended');
        x.className += " active";
        let y = document.getElementById('home__menu');
        y.className += " hide__menu";
        let z = document.getElementById('backBtn');
        z.className += " active";
        
        const targetMainCategory = String(e.currentTarget.dataset.id);
        
        // Фільтруємо підкатегорії (Нова логіка)
        const sectionCategory = sections.filter((sectionItem) => {
            return String(sectionItem.mainCategoryIndex) === targetMainCategory || 
                   String(sectionItem.mainCategory) === targetMainCategory;
        });
        const sectionCategoryIndexes = sectionCategory.map(category => String(category.id));

        const menuCategory = menu.filter(menuItem => sectionCategoryIndexes.includes(String(menuItem.categoryIndex)));
        
        displayMenusItem(sectionCategory, menuCategory);
       
        const elementPosition = document.getElementById('recommended').getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + elementPosition - 150,
            behavior: 'smooth'
        });
    })
})

liked__products.onclick = () => {
    let x = document.getElementById('recommended');
    x.className += " active";
    let y = document.getElementById('home__menu');
    y.className += " hide__menu";
    let z = document.getElementById('backBtn');
    z.className += " active";
    
    const menuCategory = menu.filter((menuItem) => menuItem.selected);
    displaySelectedItem(menuCategory);
    
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

filterBtnsBaner.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let x = document.getElementById('burg__menu');
        x.className += " collapsed";
        x.ariaExpanded = "false";
        let y = document.getElementById('responsive');
        y.classList.remove("show");
    })
})

// === ВАШЕ СТАРЕ ВІДОБРАЖЕННЯ КАРТОК (БЕЗ ЗМІН У ВЕРСТЦІ) ===
function displayMenusItem(sectionItem, menuItems) {
    let subMenuContainer = document.createElement('div');
    if(sectionItem.length > 1) {
        let subMenu = sectionItem.map((item) => {
            return `<a class="btn btn-coffee" href="#${item.category}">${item.title}</a>`;
        }).join(" ");
       
        subMenuContainer.classList.add('sub-menu-container');
        subMenuContainer.innerHTML = subMenu;
    }

    let displayTitle = sectionItem.map((item) => {
        const filteredMenuItems = menuItems.filter((oneItem) => {
            return String(oneItem.categoryIndex) === String(item.id);
        });

        if (filteredMenuItems.length === 0) return ""; // Не малюємо порожні заголовки

        let displayMenusItem = filteredMenuItems.map((menuItem) => {
            return `
            <div class="col-sm-12 col-lg-4 col-md-6">
                <div class="card-menu">
                    <img src="${menuItem.img ? menuItem.img : 'img/icons/logoTab.png'}" class="${menuItem.img ? '' : 'card-img-logo'} mx-auto d-block card-img-top">
                    <div class="card-body flex-grow-1">
                        <div class="card-text">
                            <h3 class="display-6">${menuItem.title}</h3>
                            <p class="small text-muted"><em>${menuItem.weight || ""}</em></p>
                            <p class="Category">${menuItem.description || ""}</p>
                            <p class="price">${menuItem.price || ""}</p>
                        </div>
                        <div class="d-flex justify-content-end align-items-center">
                            <button class="btn" onclick="toggleSelectionMenu('${menuItem.id}')">
                                <i class="${menuItem.selected ? 'fas' : 'far'} fa-heart fa-2x p-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join("");

        return `<div id="${item.category}"></div><h2 class="recommended__title" style="margin-top:50px;">${item.title}</h2>${displayMenusItem}<br>`;
    }).join("");

    sectionCenter.innerHTML = `<nav class="d-flex justify-content-center">${subMenuContainer.outerHTML}</nav><br>${displayTitle}`;
}

// === ЛОГІКА ДОДАВАННЯ В УЛЮБЛЕНЕ ===
function toggleSelectionMenu(itemId) {
    const menuItem = menu.find(item => String(item.id) === String(itemId));
    if (!menuItem) return;
    
    menuItem.selected = !menuItem.selected;
    
    const selectedItems = menu.filter(item => item.selected);
    saveSelectedItemsToSessionStorage(selectedItems);
    
    const menuSection = sections.find(item => String(item.id) === String(menuItem.categoryIndex));
    if(!menuSection) return;

    const targetMainCatId = menuSection.mainCategoryIndex || menuSection.mainCategory;
    
    const sectionCategory = sections.filter((sectionItem) => String(sectionItem.mainCategoryIndex || sectionItem.mainCategory) === String(targetMainCatId));
    const sectionCategoryIndexes = sectionCategory.map(category => String(category.id));

    const menuCategory = menu.filter(m => sectionCategoryIndexes.includes(String(m.categoryIndex)));
    displayMenusItem(sectionCategory, menuCategory);
}

// === ВАШЕ СТАРЕ ВІДОБРАЖЕННЯ ДЛЯ ОБРАНОГО ===
function displaySelectedItem(menuItems){
    let displayMenusItem = menuItems.map((menuItem) => {
        return `      
            <div class="col-sm-12 col-lg-6 col-md-12">
                <div class="selected-item">
                   <div class=" d-flex justify-content-between">
                    <div class="card-body flex-grow-1">
                        <p class="card-text">
                            <p class="display-6">${menuItem.title}</p>
                            <p class="small text-muted"><em>${menuItem.weight || ""}</em></p>
                            <p class="Category">${menuItem.description || ""}</p>
                            <p class="price">${menuItem.price || ""}</p>
                        </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center p-2" style="max-width: 27%;"><img src="${menuItem.img ? menuItem.img : "img/icons/logoTab.png"}" class="card-img-top"></div>
                    </div>
                    <div class="d-flex justify-content-end align-items-center" id="select__btn">
                    <button class="btn" onclick="toggleSelection('${menuItem.id}')">
                    <i class="fas fa-heart fa-2x p-2"></i>
                </button>
            </div>
                </div>
            </div>`;
    }).join("");
    sectionCenter.innerHTML = `<h2 class="recommended__title" style="margin-top:50px;">Обране</h2><br>${displayMenusItem}`;
}

function toggleSelection(itemId) {
    const menuItem = menu.find(item => String(item.id) === String(itemId));
    if (!menuItem) return;

    menuItem.selected = !menuItem.selected;
    const selectedItems = menu.filter(item => item.selected);
    saveSelectedItemsToSessionStorage(selectedItems);
    displaySelectedItem(selectedItems);
}

window.onload = function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
};

// Дні тижня
const currentDay = new Date().getDay();
const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const highlightedDay = document.getElementById(daysOfWeek[currentDay]);
if (highlightedDay) {
    highlightedDay.style.fontSize = '1.2em'; 
    highlightedDay.style.fontWeight = 'bold';
}
