btn__home.onclick=()=>{
    let x =document.getElementById('home__menu');
    
    x.classList.remove("hide__menu");
    let y=document.getElementById('recommended');
        y.classList.remove("active");
    let z=document.getElementById('backBtn');
    z.classList.remove("active");
}
backBtn.onclick=()=>{
    let x =document.getElementById('home__menu');
    
    x.classList.remove("hide__menu");
    let y=document.getElementById('recommended');
        y.classList.remove("active");
    
    let z=document.getElementById('backBtn');
    z.classList.remove("active");
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}
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

filterBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let x=document.getElementById('recommended');
        x.className += " active";
        let y = document.getElementById('home__menu');
        y.className += " hide__menu";
        let z=document.getElementById('backBtn');
        z.className +=" active";
        const Category=e.currentTarget.dataset.id;
        const sectionCategory = sections.filter((sectionItem)=>Category.includes(sectionItem.mainCategory));
        const sectionCategoryIndexes = sectionCategory.map(category => category.id);

       const menuCategory = menu.filter(menuItem => sectionCategoryIndexes.includes(menuItem.categoryIndex));

        
        displayMenusItem(sectionCategory, menuCategory);
       
        const elementPosition = document.getElementById('recommended').getBoundingClientRect().top;
        
        // Проводимо прокрутку до певної відстані вище від початку елемента
        window.scrollTo({
            top: window.scrollY + elementPosition - 150, // Встановлюємо відстань у 150 пікселів вище від верхнього краю елемента
            behavior: 'smooth'
        });
            //document.getElementById('recommended').scrollIntoView();
        })
})
liked__products.onclick=()=>{
    let x=document.getElementById('recommended');
    x.className += " active";
    let y = document.getElementById('home__menu');
    y.className += " hide__menu";
    let z=document.getElementById('backBtn');
    z.className +=" active";
    const menuCategory = menu.filter((menuItem) => {
        if(menuItem.selected){
            return menuItem;
        }});
    displaySelectedItem(menuCategory);
    
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
        
}
filterBtnsBaner.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let x=document.getElementById('burg__menu');
        x.className += " collapsed";
        x.ariaExpanded = "false";
        let y = document.getElementById('responsive');
        y.classList.remove("show");
        
    })
})
const menu = [
    {
        id: 1,
        title:"Аморе",
        Category: "pizza",
        article: "Піца",
        description: "Салямі, шинка, курка, помідор, сир, яйце (може бути без) ",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/amore.png",
    },
    {
        id: 2,
        title:"Монтана",
        Category: "pizza",
        article: "Піца",
        description: "Помідор, салямі, печериці, перець, кукурудза, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/montana.png",
    },
    {
        id: 3,
        title:"Тачіно",
        Category: "pizza",
        article: "Піца",
        description: "Курка, печериці, кукурудза, перець, цибуля, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/tachino.png",
    },
    {
        id: 4,
        title:"Капріча",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/capricha.png"
    },
    {
        id: 5,
        title:"Паза",
        Category: "pizza",
        article: "Піца",
        description: "Курка, креветки, болгарський перець, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 290UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/paza.png"
    },
    {
        id: 6,
        title:"IV сири (з грушею)",
        Category: "pizza",
        article: "Піца",
        description: "Моцарела, ементаль, горгонзола, пармезан, спеції",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 290UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/fourCheese.png"
    },
    {
        id: 7,
        title:"Полло",
        Category: "pizza",
        article: "Піца",
        description: "Курочка, моцарела, помідор, кукурудза",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/polo.png"
    },
    {
        id: 8,
        title:"Мексиканська",
        Category: "pizza",
        article: "Піца",
        description: "Курка, ананас, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/mexykanska.png"
    },
    {
        id: 9,
        title:"Домашня",
        Category: "pizza",
        article: "Піца",
        description: "Курка, печериці, помідор, цибуля, пекінська капуста, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/domashnia.png"
    },
    {
        id: 10,
        title:"Карбонара",
        Category: "pizza",
        article: "Піца",
        description: "Сир, бекон, печериці, яйце, пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/carbonara.png"
    },
    {
        id: 11,
        title:"Салямі",
        Category: "pizza",
        article: "Піца",
        description: "Салямі, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 140UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/saliami.png"
    },
    {
        id: 12,
        title:"Маджоре",
        Category: "pizza",
        article: "Піца",
        description: "Філе лосося, перець, соус вершковий, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/majore.png"
    },
    {
        id: 13,
        title:"Тунець",
        Category: "pizza",
        article: "Піца",
        description: "Тунець, цибуля, болгарський перець, кукурудза, сир",
        price: "Діаметр 32см - 180UAH <br> Діаметр 50см - 270UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/tune.png"
    },
    {
        id: 14,
        title:"Лігурія",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, болгарський перець, цибуля, сир + вершковий соус",
        price: "Діаметр 32см - 150UAH ",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/liguriia.png"
    },
    {
        id: 15,
        title:"Кальцоне (закрита піца)",
        Category: "pizza",
        article: "Піца",
        description: "Курка, шинка, печериці, болгарський перець, сир + пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH ",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/calcone.jpg"
    },
    {
        id: 16,
        title:"Морський коктейль",
        Category: "pizza",
        article: "Піца",
        description: "Морепродукти, лимон, перець, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 180UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/seaCocktail.png"
    },
    {
        id: 17,
        title:"Прошутто",
        Category: "pizza",
        article: "Піца",
        description: "Вершкова основа, печериці, оливки, прошутто, помідор, сир, пармезан",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 300UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/proshuto.png"
    },
    {
        id: 18,
        title:"Подих дракона <strong style='color: red;'>(ГОСТРА)</strong>",
        Category: "pizza",
        article: "Піца",
        description: "Чілі, салямі, оливки, помідор, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 160UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/podyhDragon.png"
    },
    {
        id: 19,
        title:"Прімавера",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, квашений огірок, цибуля, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/primavera.png"
    },
    {
        id: 20,
        title:"Грибна",
        Category: "pizza",
        article: "Піца",
        description: "Олія, печериці, часник, сир, пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/mashroom.png"
    },
    {
        id: 21,
        title:"Чікен",
        Category: "pizza",
        article: "Піца",
        description: "Курка, шинка, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
    },
    {
        id: 22,
        title:"Сальса",
        Category: "pizza",
        article: "Піца",
        description: "Мисливські ковбаски, курка, в'ялені помідори, оливки зелені, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/salsa.png"
    },
    {
        id: 23,
        title:"Полермо",
        Category: "pizza",
        article: "Піца",
        description: "Курка, салямі, помідор, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
    },
    {
        id: 24,
        title:"М'ясна",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, курка, салямі, бочок, мисливська ковбаска, часник, помідор, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 180UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        weight: "",
    },
    {
        id: 25,
        title:"Асорті",
        Category: "pizza",
        article: "Піца",
        description: "Грибна/Салямі/Капріча/Домашня",
        price: "Діаметр 50см - 270UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/asorti.png"
    },
    {
        id: 26,
        title:"Маргарита",
        Category: "pizza",
        article: "Піца",
        description: "Соус, подвійний сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 130UAH",
        categoryIndex: 5,
        weight: "",
    },
    {
        id: 27,
        title:"Б'янка",
        Category: "pizza",
        article: "Піца",
        description: "Вершковий соус, курка, печериці, дор Блю, моцарела, кукурудза, помідор",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 180UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/bianka.png"
    },
    {
        id: 28,
        title:"Мисливська",
        Category: "pizza",
        article: "Піца",
        description: "Вершковий соус, мисливська ковбаска, часник, печериці, моцарела, квашений огірок",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 160UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        weight: "",
        img: "img/products/pizza/myslyvska.png"
    },
    {
        id: 29,
        title:"Упаковка для піци",
        Category: "pizza",
        article: "Піца",
        description:"",
        price: "Діаметр 32см - 15UAH <br>Діаметр 50см - 20UAH",
        categoryIndex: 5,
        weight: "",
    },
    {
        id: 30,
        title:"Паляниця",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "",
        weight: "",
        categoryIndex: 6
    },
    {
        id: 31,
        title:"Соус помідорний",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "45/60UAH",
        categoryIndex: 6,
        weight: "",
    },
    {
        id: 32,
        title:"Соус вершковий",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "60/75UAH",
        categoryIndex: 6,
        weight: "",
    },
    {
        id: 33,
        title:"Шинка",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "40UAH",
        categoryIndex: 6,
        weight: "50 грам",
    },
    {
        id: 34,
        title:"Куряче м'ясо",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "40UAH",
        categoryIndex: 6,
        weight: "50 грам",
    },
    {
        id: 35,
        title:"Мисливська ковбаса",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "40UAH",
        categoryIndex: 6,
        weight: "50 грам",
    },
    {
        id: 36,
        title:"Бочок",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "40UAH",
        categoryIndex: 6,
        weight: "50 грам",
    },
    {
        id: 37,
        title:"Салямі",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "40UAH",
        categoryIndex: 6,
        weight: "50 грам",
    },
    {
        id: 38,
        title:"Креветки",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "60UAH",
        categoryIndex: 6,
        weight: "40 грам",
    },
    {
        id: 39,
        title:"Сир",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "45UAH",
        categoryIndex: 6,
        weight: "100 грам",
    },
    {
        id: 40,
        title:"Оливки",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "15UAH",
        categoryIndex: 6,
        weight: "20 грам",
    },
    {
        id: 41,
        title:"Перець",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "10UAH",
        categoryIndex: 6,
        weight: "20 грам",
    },
    {
        id: 42,
        title:"Помідори",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "15UAH",
        categoryIndex: 6,
        weight: "50 грам",
    },
    {
        id: 43,
        title:"Кукурудза",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "8UAH",
        categoryIndex: 6,
        weight: "30 грам",
    },
    {
        id: 44,
        title:"Цибуля",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "3UAH",
        categoryIndex: 6,
        weight: "30 грам",
    },
    {
        id: 45,
        title:"Тунець",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "60UAH",
        categoryIndex: 6,
        weight: "80 грам",
    },
    {
        id: 46,
        title:"Сир пармезан",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "25UAH",
        categoryIndex: 6,
        weight: "30 грам",
    },
    {
        id: 47,
        title:"Ананас",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "20UAH",
        categoryIndex: 6,
        weight: "50 грам",
    },
    {
        id:  48,
        title:"Печериці",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "10UAH",
        categoryIndex: 6,
        weight: "30 грам",
    },
    {
        id: 49,
        title:"Часник",
        Category: "pizza",
        article: "Склади свою піцу",
        description:"",
        price: "5UAH",
        categoryIndex: 6,
        weight: "10 грам",
    },
    {
        id: 50,
        title:"Філадельфія",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, авокадо, огірок, сир Філадельфія",
        price: "160UAH",
        categoryIndex: 1,
        weight: "260г",
        img: "img/products/sushi/filadelfia.png"
    },
    {
        id: 51,
        title:"Філадельфія з креветкою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, сир Філадельфія, креветки",
        price: "180UAH",
        categoryIndex: 1,
        weight: "250г",
        img: "img/products/sushi/filadelfia_shrimp.png"
    },
    {
        id: 52,
        title:"Black Філадельфія",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, сир Філадельфія, огірок, ікра Масаго",
        price: "180UAH",
        categoryIndex: 1,
        weight: "270г",
        img: ""
    },
    {
        id: 53,
        title:"Філадельфія вега",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, кунжут, соус Унагі",
        price: "130UAH",
        categoryIndex: 1,
        weight: "250г",
        img: ""
    },
    {
        id: 54,
        title:"Філадельфія з Вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, вугор, авокадо, кунжут",
        price: "180UAH",
        categoryIndex: 1,
        weight: "240г",
        img: "img/products/sushi/filadelfia_eel.png"
    },
    {
        id: 55,
        title:"Філадельфія Масаго",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, сир Філадельфія, огірок, ікра Масаго",
        price: "140UAH",
        categoryIndex: 1,
        weight: "220г",
        img: "img/products/sushi/filadelfia_masaho.png"
    },
    {
        id: 56,
        title:"Каліфорнія",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, креветки, ікра Масаго",
        price: "170UAH",
        categoryIndex: 1,
        weight: "240г",
    },
    {
        id: 57,
        title:"Каліфорнія з Вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, вугор, креветки, ікра Масаго",
        price: "190UAH",
        categoryIndex: 1,
        weight: "220г",
        img: "img/products/sushi/californiia_eel.jpg"
    },
    {
        id: 59,
        title:"Рожевий Фламінго",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, мідії",
        price: "130UAH",
        categoryIndex: 1,
        weight: "180г",
        img: "img/products/sushi/pink_flamingo.png"
    },
    {
        id: 60,
        title:"Зелений дракон з вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, вугор, авокадо, соус Унагі, кунжут",
        price: "200UAH",
        categoryIndex: 1,
        weight: "250г",
        img: "img/products/sushi/green_dragon.png"
    },
    {
        id: 61,
        title:"Зелений дракон з креветкою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, креветки, соус Унагі, кунжут",
        price: "170UAH",
        categoryIndex: 1,
        weight: "260г",
        img: "img/products/sushi/green_dragon_shrimp.png"
    },
    {
        id: 62,
        title:"Білий дракон",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, лосось, тостерний сир, кунжут, соус Унагі",
        price: "160UAH",
        categoryIndex: 1,
        weight: "260г",
        img: "img/products/sushi/white_dragon.png"
    },
    {
        id: 63,
        title:"Червоний дракон",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, лосось, огірок, ікра Масаго",
        price: "200UAH",
        categoryIndex: 1,
        weight: "250г",
        img: "img/products/sushi/red_dragon.png"
    },
    {
        id: 64,
        title:"Чорний дракон",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, креветки, кунжут",
        price: "160UAH",
        categoryIndex: 1,
        weight: "230г",
    },
    {
        id: 65,
        title:"Рол сирний",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, сир Чеддер, кунжут",
        price: "110UAH",
        categoryIndex: 1,
        weight: "260г",
        img: "img/products/sushi/cheese.png"
    },
    {
        id: 66,
        title:"Сирний з вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, вугор, сир Чедер, соус Унагі, кунжут",
        price: "160UAH",
        categoryIndex: 1,
        weight: "260г",
        img: "img/products/sushi/cheese_eel.png"
    },
    {
        id: 67,
        title:"Сирний з креветкою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, огірок, креветки, сир Філадельфія, тостерний сир, пармезан, соус Унагі",
        price: "150UAH",
        categoryIndex: 1,
        weight: "260г",
        img: "img/products/sushi/cheese_shrimp.png"
    },
    {
        id: 68,
        title:"Боніто",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, лосось, груша, кунжут",
        price: "150UAH",
        categoryIndex: 1,
        weight: "240г",
        img: "img/products/sushi/bonito.png"
    },
    {
        id: 69,
        title:"Футумакі",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, огірок, лосось, ікра Масаго",
        price: "150UAH",
        categoryIndex: 1,
        weight: "220г",
    },
    {
        id: 70,
        title:"Футумакі з крабом сурімі",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, салат, сурімі, соус Унагі, кунжут",
        price: "120UAH",
        categoryIndex: 1,
        weight: "240г",
    },
    {
        id: 71,
        title:"Футумакі з куркою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, салат, куряче філе, соус Унагі, кунжут",
        price: "130UAH",
        categoryIndex: 1,
        weight: "250г",
    },
    {
        id: 72,
        title:"Мон рол",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, лосось, авокадо, кунжут",
        price: "140UAH",
        categoryIndex: 1,
        weight: "200г",
        img: "img/products/sushi/mon_rol.png"
    },
    {
        id: 73,
        title:"Городина кунжут",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, кунжут, салат",
        price: "80UAH",
        categoryIndex: 1,
        weight: "190г",
    },
    {
        id: 74,
        title:"Сурімі в кунжуті",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, Сурімі, кунжут",
        price: "100UAH",
        categoryIndex: 1,
        weight: "210г",
        img: "img/products/sushi/surimi_sesame.png"
    },
    {
        id: 75,
        title:"Рол з куркою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, курка, огірок, салат, ікра Масаго",
        price: "130UAH",
        categoryIndex: 1,
        weight: "230г",
        img: "img/products/sushi/chicken_rol.png"
    },
    {
        id: 76,
        title:"Норі макі",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось",
        price: "80UAH",
        categoryIndex: 1,
        weight: "150г",
    },
    {
        id: 77,
        title:"Макі з огірком",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, огірок, кунжут",
        price: "60UAH",
        categoryIndex: 1,
        weight: "180г",
        img: "img/products/sushi/maky_cucumber.png"
    },
    {
        id: 78,
        title:"Макі з Вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, вугор, соус Унагі",
        price: "80UAH",
        categoryIndex: 1,
        weight: "170г",
    },
    {
        id: 79,
        title:"Макі з тигровими креветками",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, тигрові креветки",
        price: "80UAH",
        categoryIndex: 1,
        weight: "190г",
    },
    {
        id: 80,
        title:"Макі з Сурімі",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, Сурімі",
        price: "65UAH",
        categoryIndex: 1,
        weight: "200г",
        img: "img/products/sushi/maky_surimi.png"
    },
    {
        id: 81,
        title:"Запечений рол з лососем",
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, лосось, соус Унагі, соус для запікання, кунжут",
        price: "160UAH",
        categoryIndex: 2,
        weight: "350г",
        img: "img/products/sushi/warm_role_salmon.png"
    },
    {
        id: 82,
        title:'Запечений "Цезар"',
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, копчена курка, салата, соус Унагі, соус для запікання, кунжут",
        price: "150UAH",
        categoryIndex: 2,
        weight: "300г",
    },
    {
        id: 83,
        title:"Запечений рол з креветкою",
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, креветки, соус для запікання",
        price: "180UAH",
        categoryIndex: 2,
        weight: "350г",
    },
    {
        id: 84,
        title:"Запечена мідія",
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, мідії, соус для запікання",
        price: "120UAH",
        categoryIndex: 2,
        weight: "300г",
        img: "img/products/sushi/warm_midia.png"
    },
    {
        id: 85,
        title:"Сет Асорті",
        Category: "roly",
        article: "Сети",
        description: "Рол Філадельфія/Філадельфія з креветками/Каліфорнія/Чікен/Боніто/Сирний/Норі макі/Макі Сурімі/Городина кунжут/Макі з огірком",
        price: "600UAH",
        categoryIndex: 3,
        weight: "1.2кг (40 шматків)",
        img: "img/products/sushi/set_asorti.jpg"
    },
    {
        id: 86,
        title:'Сет "Філадельфія"',
        Category: "roly",
        article: "Сети",
        description: "Філадельфія з лососем/Філадельфія з креветкою/Філадельфія вега/Філадельфія масаго",
        price: "550UAH",
        categoryIndex: 3,
        weight: "980г (32 шматки)",
        img: "img/products/sushi/set_filadelfiia.jpg"
    },
    {
        id: 87,
        title:"Сет Торт",
        Category: "roly",
        article: "Сети",
        description: "Рол Філадельфія/рол Філадельфія з вугрем у кунжуті/рол Боніто/рол Каліфорнія/рол Норі макі",
        price: "630UAH",
        categoryIndex: 3,
        weight: "1.18кг (40 шматків)",
        img: "img/products/sushi/set_cake.jpg"
    },
    {
        id: 88,
        title:"Сет міні Мікс",
        Category: "roly",
        article: "Сети",
        description: "Рол Філадельфія/рол Філадельфія з вугрем/Філадельфія Масаго/Мон рол/Білий дракон/рол Боніто",
        price: "450UAH",
        categoryIndex: 3,
        weight: "720г (24 шматки)",
    },
    {
        id: 89,
        title:'Сет "Гарячий"',
        Category: "roly",
        article: "Сети",
        description: 'Запечений з лососем/Запечений з креветкою/Запечений "Цезар"',
        price: "400UAH",
        categoryIndex: 3,
        weight: "1.1кг (24 шматки)",
    },
    {
        id: 90,
        title:"Сет Мікс",
        Category: "roly",
        article: "Сети",
        description: "Рол Філадельфія/рол Городина кунжут/рол Рожевий Фламінго/рол Боніто",
        price: "470UAH",
        categoryIndex: 3,
        weight: "900г (32 шматки)",
    },
    {
        id: 91,
        title:"Сет Асорті Лайт",
        Category: "roly",
        article: "Сети",
        description: "Рол Чікен/рол Сурімі в кунжуті/рол Макі з огірком",
        price: "270UAH",
        categoryIndex: 3,
        weight: "640г (24 шматки)",
        img: "img/products/sushi/set_asorti_lite.jpg"
    },
    {
        id: 92,
        title:"Сет Фіш макі",
        Category: "roly",
        article: "Сети",
        description: "Макі з лососем/Макі з вугрем/Макі з тигровою креветкою/Макі з мідіями",
        price: "320UAH",
        categoryIndex: 3,
        weight: "710г (32 шматки)",
    },
    {
        id: 93,
        title:"Сет Футомакі",
        Category: "roly",
        article: "Сети",
        description: "Футумакі з лососем/Футумакі з куркою/Футумакі з крабом",
        price: "360UAH",
        categoryIndex: 3,
        weight: "710г (24 шматки)",
    },
    {
        id: 94,
        title:"Сет з Лососем",
        Category: "roly",
        article: "Сети",
        description: "Рол Філадельфія з лососем/рол Каліфорнія з лососем/рол Фотумакі з лососем",
        price: "420UAH",
        categoryIndex: 3,
        weight: "730г (24 шматки)",
    },
    {
        id: 95,
        title:"Сет 4 Дракони",
        Category: "roly",
        article: "Сети",
        description: "Рол Зелений дракон/рол Білий дракон/рол Червоний дракон/рол Чорний дракон",
        price: "600UAH",
        categoryIndex: 3,
        weight: "1кг (32 шматки)",
    },
    {
        id: 96,
        title:"Чотири сири з грушею",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, груша, сир Філадельфія, горгонзола, тостерний сир, пармезан, соус Унагі",
        price: "130UAH",
        categoryIndex: 1,
        weight: "260г",
    },
    {
        id: 98,
        title:"Сирний з мідією",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, мідія, сир Філадельфія, тостерний сир, пармезан, соус Унагі",
        price: "120UAH",
        categoryIndex: 1,
        weight: "260г",
        img: "img/products/sushi/cheese_midia.png"

    },
    {
        id: 99,
        title:"Філадельфія з лососем в кунжуті",
        Category: "roly",
        article: "Роли",
        description: "Рис, чорнило каракатиці, норі, огірок, сир Філадельфія, лосось, кунжут",
        price: "150UAH",
        categoryIndex: 1,
        weight: "250г",
        img: "img/products/sushi/filadelfia_salmon.png"
    },
    {
        id: 100,
        title:"Рол Орігамі",
        Category: "roly",
        article: "Роли",
        description: "Рис, соєвий папір, лосось, сир Філадельфія, огірок, ікра масаго, авокадо",
        price: "200UAH",
        categoryIndex: 1,
        weight: "250г",
        img: "img/products/sushi/origami.png"
    },
    {
        id: 101,
        title:"Спрінг рол з лососем",
        Category: "roly",
        article: "Спрінг роли",
        description: "Рисовий папір, лосось, сир Філадельфія, зелень, огірок, ікра тобіко, соус Теріякі",
        price: "150UAH",
        categoryIndex: 4,
        weight: "120г",
    },
    {
        id: 102,
        title:"Спрінг рол з креветкою",
        Category: "roly",
        article: "Спрінг роли",
        description: "Рисовий папір, креветка, сир Філадельфія, зелень, огірок, ікра тобіко, соус Теріякі",
        price: "150UAH",
        categoryIndex: 4,
        weight: "120г",
    },
    {
        id: 103,
        title:"Спрінг рол з куркою",
        Category: "roly",
        article: "Спрінг роли",
        description: "Рисовий папір, перець, курка, сир Філадельфія, зелень, огірок, кунжут, соус Теріякі",
        price: "130UAH",
        categoryIndex: 4,
        weight: "120г",
    },
    {
        id: 120,
        title:'Чай фруктовий <p class="small">(на 1 персону)</p>',
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Подається з апельсином або лимоном',
        price: "30UAH",
        categoryIndex: 8,
        weight: "300 мл",
    },
    {
        id: 121,
        title:"Чай листковий <p class='small'>(на 2 персони)</p>",
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Чорний/зелений/каркаде',
        price: "30UAH",
        categoryIndex: 8,
        weight: "400 мл",
    },
    {
        id: 122,
        title:"Кава еспресо",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "30UAH",
        categoryIndex: 8,
        weight: "50 мл",
    },
    {
        id: 123,
        title:"Кава американо",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "30UAH",
        categoryIndex: 8,
        weight: "120 мл",
    },
    {
        id: 124,
        title:"Кава Флет Вайт",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "45UAH",
        categoryIndex: 8,
        weight: "200 мл",
    },
    {
        id: 125,
        title:"Капучино натуральне",
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Кава, молоко, сироп за бажанням',
        price: "40UAH",
        categoryIndex: 8,
        weight: "180 мл",
    },
    {
        id: 126,
        title:"Лате",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "45UAH",
        categoryIndex: 8,
        weight: "300 мл",
    },
    {
        id: 127,
        title:"Лате <p class='text-danger'>XXL</p>",
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Подвійне еспресо, молоко',
        price: "60UAH",
        categoryIndex: 8,
        weight: "400 мл",
    },
    
    {
        id: 129,
        title:"Снікерс Лате",
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Еспресо, снікерс, молоко',
        price: "60UAH",
        categoryIndex: 8,
        weight: "250 мл",
    },
    {
        id: 130,
        title:"Орео Айс",
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Еспресо, молоко, морозиво, печиво "Орео", аерозольні вершки',
        price: "60UAH",
        categoryIndex: 8,
        weight: "350 мл",
        img: "img/products/drinks/oreo_ice.png"
    },
    {
        id: 131,
        title:"Глясе",
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Кава еспресо, морозиво',
        price: "50UAH",
        categoryIndex: 8,
        weight: "200 мл",
    },
    
    {
        id: 133,
        title:"Гарячий шоколад <p class='text-danger'>Lafesta</p>",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "30UAH",
        categoryIndex: 8,
        weight: "120 мл",
    },
    {
        id: 134,
        title:"Какао з вершками та маршмелоу",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "40UAH",
        categoryIndex: 8,
        weight: "200 мл",
        img: "img/products/drinks/cacao.png"
    },
    {
        id: 135,
        title:"Вершки до кави",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "5UAH",
        categoryIndex: 8,
        weight: "10 мл",
    },
    {
        id: 136,
        title:"Лимон",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "5UAH/20UAH",
        categoryIndex: 8,
        weight: "5г/50г",
    },
    {
        id: 137,
        title:"Сироп",
        Category: "drinks",
        article: "Гарячі напої",
        description: '',
        price: "5UAH",
        categoryIndex: 8,
        weight: "",
    },
    {
        id: 138,
        title:"Піна Колада",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: 'Кокосовий сироп, ром, ананасовий сік, лід, вершки',
        price: "100UAH",
        categoryIndex: 12,
        weight: "250 мл",
    },
    {
        id: 139,
        title:"Апероль Шприц",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: '7up, APERATIVO, шампанське, апельсин, грейпфрутовий сік',
        price: "100UAH",
        categoryIndex: 12,
        weight: "300 мл",
    },
    {
        id: 140,
        title:"Мохіто",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: "Ром, лимон, 7up, сироп, м'ята",
        price: "85UAH",
        categoryIndex: 12,
        weight: "300 мл",
        img: "img/products/drinks/mohito.png"
    },
    {
        id: 141,
        title:"Блакитна лагуна",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: 'Горілка, BLU CURACAO, лимонний сік, 7up, лід, лимон',
        price: "85UAH",
        categoryIndex: 12,
        weight: "300 мл",
    },
    {
        id: 142,
        title:"ENJOY",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: 'Джин, н/с шампанське, спрайт, сироп полуничний, солодка вата',
        price: "110UAH",
        categoryIndex: 12,
        weight: "250 мл",
        img: "img/products/drinks/enjoy.png"
    },
    {
        id: 143,
        title:"Violet aperol",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: 'Джин, н/с шампанське, спрайт, сироп Лаванда та чорниця, лимонний сік, лід',
        price: "110UAH",
        categoryIndex: 12,
        weight: "300 мл",
        img: "img/products/drinks/violet_aperol.png"
    },
    {
        id: 144,
        title:"Лимонад Яблучний",
        Category: "drinks",
        article: "Безалкогольні коктейлі",
        description: 'Яблучний сік, яблучний сироп, лимонний сік, спрайт, лід',
        price: "50UAH",
        categoryIndex: 9,
        weight: "300 мл",
    },
    {
        id: 145,
        title:"Мохіто",
        Category: "drinks",
        article: "Безалкогольні коктейлі",
        description: "7up, лимон, сироп, м'ята, лимонний сік, лід",
        price: "50UAH",
        categoryIndex: 9,
        weight: "300 мл",
        img: "img/products/drinks/mohito.png"
    },
    {
        id: 146,
        title:"Блакитна лагуна",
        Category: "drinks",
        article: "Безалкогольні коктейлі",
        description: "7up, лимонний сік, лід, лимон",
        price: "60UAH",
        categoryIndex: 9,
        weight: "300 мл",
    },
    {
        id: 147,
        title:"Барбі",
        Category: "drinks",
        article: "Безалкогольні коктейлі",
        description: "Ананасовий, гранатовий сік, сироп гренадин, лід, вершки",
        price: "60UAH",
        categoryIndex: 9,
        weight: "300 мл",
        img: "img/products/drinks/barbie.png"
    },
    {
        id: 148,
        title:"Шоколадний",
        Category: "drinks",
        article: "Молочні коктейлі",
        description: "",
        price: "60UAH",
        categoryIndex: 10,
        weight: "",
    },
    {
        id: 149,
        title:"Банановий",
        Category: "drinks",
        article: "Молочні коктейлі",
        description: "",
        price: "60UAH",
        categoryIndex: 10,
        weight: "",
    },
    {
        id: 150,
        title:"Персиковий",
        Category: "drinks",
        article: "Молочні коктейлі",
        description: "",
        price: "60UAH",
        categoryIndex: 10,
        weight: "",
    },
    {
        id: 151,
        title:"Вишневий",
        Category: "drinks",
        article: "Молочні коктейлі",
        description: "",
        price: "60UAH",
        categoryIndex: 10,
        weight: "",
    },
    {
        id: 152,
        title:"Ананасовий",
        Category: "drinks",
        article: "Молочні коктейлі",
        description: "",
        price: "60UAH",
        categoryIndex: 10,
        weight: "",
    },
    {
        id: 153,
        title:"Pepsi <p class='small text-muted '>(скло)</p>",
        Category: "drinks",
        article: "Напої",
        description: "",
        price: "40UAH",
        categoryIndex: 7,
        weight: "0.3л",
    },
    {
        id: 154,
        title:"Pepsi",
        Category: "drinks",
        article: "Напої",
        description: "",
        price: "40UAH",
        categoryIndex: 7,
        weight: "0.5л",
    },
    {
        id: 155,
        title:"Pepsi",
        Category: "drinks",
        article: "Напої",
        description: "",
        price: "50UAH",
        categoryIndex: 7,
        weight: "1л",
    },
    {
        id: 156,
        title:"Вода негазована",
        Category: "drinks",
        article: "Напої",
        description: "",
        price: "25UAH",
        categoryIndex: 7,
        weight: "0.5л",
    },
    {
        id: 157,
        title:"Вода Микулинецька",
        Category: "drinks",
        article: "Напої",
        description: "",
        price: "25UAH",
        categoryIndex: 7,
        weight: "0.5л",
    },
    {
        id: 158,
        title:"Сік в асортименті",
        Category: "drinks",
        article: "Напої",
        description: "Яблучний/мультифруктовий/томатний/апельсиновий/персиковий",
        price: "25UAH",
        categoryIndex: 7,
        weight: "200мл",
    },
    {
        id: 159,
        title:"Сік в асортименті",
        Category: "drinks",
        article: "Напої",
        description: "Яблучний/мультифруктовий/томатний/апельсиновий/персиковий",
        price: "90UAH",
        categoryIndex: 7,
        weight: "1л",
    },
    {
        id: 160,
        title:"Пиво безалкогольне",
        Category: "drinks",
        article: "Холодні напої",
        description: "",
        price: "45UAH",
        categoryIndex: 13,
        weight: "0.5л",
    },
    {
        id: 161,
        title:'Квас "Микулинецький"',
        Category: "drinks",
        article: "Холодні напої",
        description: "",
        price: "20UAH/30UAH",
        categoryIndex: 13,
        weight: "0.3л/0.5л",
    },
    {
        id: 162,
        title:"Пиво Карсберг",
        Category: "drinks",
        article: "Холодні напої",
        description: "",
        price: "35UAH/45UAH",
        categoryIndex: 13,
        weight: "0.3л/0.5л",
    },
    {
        id: 163,
        title:"Пиво Kronenbourg",
        Category: "drinks",
        article: "Холодні напої",
        description: "",
        price: "35UAH/45UAH",
        categoryIndex: 13,
        weight: "0.3л/0.5л",
    },
    {
        id: 164,
        title:"Вино на розлив <p class='small text-muted '>(в асортименті)</p>",
        Category: "drinks",
        article: "Алкогольні напої",
        description: "",
        price: "25UAH",
        categoryIndex: 11,
        weight: "100мл",
    },
    {
        id: 165,
        title:"Глінтвейн",
        Category: "drinks",
        article: "Алкогольні напої",
        description: "",
        price: "60UAH",
        categoryIndex: 11,
        weight: "300мл",
    },
    {
        id: 166,
        title:"Коньяк",
        Category: "drinks",
        article: "Алкогольні напої",
        description: "",
        price: "40UAH",
        categoryIndex: 11,
        weight: "50мл",
    },
    {
        id: 167,
        title:"Ром Captain Morgan",
        Category: "drinks",
        article: "Алкогольні напої",
        description: "",
        price: "50UAH",
        categoryIndex: 11,
        weight: "50мл",
    },
    {
        id: 168,
        title:"Боул з лососем",
        Category: "sushi-bowl",
        article: "Суші боул",
        description: "Рис, лосось, сир Філадельфія, авокадо, ананас, огірок, салат, імбир, соєвий соус",
        price: "150UAH",
        categoryIndex: 14,
        weight: "300г",
    },
    {
        id: 169,
        title:"Боул з креветкою",
        Category: "sushi-bowl",
        article: "Суші боул",
        description: "Рис, креветка, сир Філадельфія, авокадо, ананас, огірок, кукурудза, салат, імбир, соєвий соус",
        price: "150UAH",
        categoryIndex: 14,
        weight: "300г",
        img: "img/products/bowls/bowl_shrimp.png"
    },
    {
        id: 170,
        title:"Грецький",
        Category: "salads",
        article: "Салати",
        description: "Помідор, огірок, перець, оливки, сир Фета, оливкова олія",
        price: "130UAH",
        categoryIndex: 15,
        weight: "300г",
    },
    {
        id: 171,
        title:"З лососем",
        Category: "salads",
        article: "Салати",
        description: 'Лосось, мікс салату, огірок, помідор, сир пармезан, авокадо, заправляється соусом "Ранч" та соусом Унагі',
        price: "170UAH",
        categoryIndex: 15,
        weight: "350г",
    },
    {
        id: 172,
        title:"Кармен",
        Category: "salads",
        article: "Салати",
        description: "Філе курки, шинка, помідор, огірок, сухарики, майонез, часник",
        price: "150UAH",
        categoryIndex: 15,
        weight: "250г",
    },
    {
        id: 173,
        title:"Запечений лосось",
        Category: "salads",
        article: "Салати",
        description: "Лосось, салат, помідор, сир Філадельфія",
        price: "270UAH",
        categoryIndex: 15,
        weight: "250г",
    },
    {
        id: 174,
        title:"Морозиво з соусом",
        Category: "ice-cream",
        article: "Морозиво",
        description: "Вишневий/шоколадний/персиковий/банан/ананас/карамель",
        price: "60UAH",
        categoryIndex: 16,
        weight: "150г",
    },
    {
        id: 175,
        title:"Корн-твіст",
        Category: "ice-cream",
        article: "Морозиво",
        description: "Морозиво, крихти пісочного печива, сироп та поп-корн",
        price: "70UAH",
        categoryIndex: 16,
        weight: "200г",
    },
    {
        id: 176,
        title:"Морозиво Мікс",
        Category: "ice-cream",
        article: "Морозиво",
        description: "Шоколадне, вершкове",
        price: "70UAH",
        categoryIndex: 16,
        weight: "150г",
    },
    {
        id: 177,
        title:"Горішки",
        Category: "beer-menu",
        article: "До пива",
        description: "",
        price: "35UAH",
        categoryIndex: 17,
        weight: "100г",
    },
    {
        id: 178,
        title:'Сухарики "Хруст team"',
        Category: "beer-menu",
        article: "До пива",
        description: "",
        price: "25UAH",
        categoryIndex: 17,
        weight: "60г",
    },
    {
        id: 179,
        title:'Чипси "Lays"',
        Category: "beer-menu",
        article: "До пива",
        description: "",
        price: "45UAH",
        categoryIndex: 17,
        weight: "71г",
    },
    {
        id: 180,
        title:'Тунець сушений',
        Category: "beer-menu",
        article: "До пива",
        description: "",
        price: "50UAH",
        categoryIndex: 17,
        weight: "50г",
    },
    {
        id: 181,
        title:'Кальмар копчений',
        Category: "beer-menu",
        article: "До пива",
        description: "",
        price: "50UAH",
        categoryIndex: 17,
        weight: "50г",
    },
    {
        id: 182,
        title:'Сет до вина',
        Category: "beer-menu",
        article: "До пива",
        description: "Мікс італійських сирів: дор Блю, камамбер, пармезан, салямі, мікс оливок, грецький горіх, груша, солодкий соус",
        price: "270UAH",
        categoryIndex: 17,
        weight: "300г",
    },
    {
        id: 183,
        title:"Салат Цезар",
        Category: "salads",
        article: "Салати",
        description: 'Айзберг, крутони, курка, помідор, яйце, соус "Цезар", пармезан',
        price: "180UAH",
        categoryIndex: 15,
        weight: "390г",
        img: "img/products/salads/cezar.png"
    },
    {
        id: 183,
        title:"Салат з хамоном",
        Category: "salads",
        article: "Салати",
        description: 'Зелень, груша, хамон, помідор, сир дор-Блю, соус гірчично-медовий',
        price: "240UAH",
        categoryIndex: 15,
        weight: "350г",
        img: "img/products/salads/hamon.png"
    },
    {
        id: 184,
        title:"Патріот",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: 'Сік манго, 7up, горілка, Blue Curacao, лід',
        price: "85UAH",
        categoryIndex: 12,
        weight: "300 мл",
    },
    {
        id: 185,
        title:'Бургер "РАНЧО" + Фрі',
        Category: "burgers",
        article: "Бургери",
        description: "М'яка булочка з грилю, зелень, котлета яловича, бекон, цибулеві кільця, сир Чеддер, моцарела, маринована цибуля, помідор, квашений огірок",
        price: "200UAH",
        categoryIndex: 18,
        weight: "",
        img: "img/products/burgers/burger_rancho.png"
    },
    {
        id: 186,
        title:'Бургер "КУРЯЧИЙ" + Фрі',
        Category: "burgers",
        article: "Бургери",
        description: "М'яка булочка з грилю, зелень, котлета куряча, сир Чеддер, моцарела, маринована цибуля, помідор, квашений огірок",
        price: "190UAH",
        categoryIndex: 18,
        weight: "",
        img: "img/products/burgers/burger_chicken.png"
    },
    {
        id: 187,
        title:'Бургер "ДИТЯЧИЙ" + Фрі',
        Category: "burgers",
        article: "Бургери",
        description: "М'яка булочка з грилю, зелень, котлета куряча, сир Чеддер, помідор",
        price: "160UAH",
        categoryIndex: 18,
        weight: "",
        img: "img/products/burgers/burger_kid.png"
    },
    {
        id: 188,
        title:'Бургер "ГАВАЙСЬКИЙ" + Фрі',
        Category: "burgers",
        article: "Бургери",
        description: "М'яка булочка з грилю, зелень, котлета куряча, ананас, сир Чеддер, помідор, соус Унагі",
        price: "190UAH",
        categoryIndex: 18,
        weight: "",
    },
    {
        id: 189,
        title:'Бургер "КАМАМБЕР" + Фрі',
        Category: "burgers",
        article: "Бургери",
        description: "М'яка булочка з грилю, зелень, котлета яловича, камамбер, маринована цибуля, соус Унагі, соус бальзамік",
        price: "240UAH",
        categoryIndex: 18,
        weight: "",
        img: "img/products/burgers/burger_camamber.png"
    },
    {
        id: 190,
        title:'Запечений "КАМАМБЕР"',
        Category: "burgers",
        article: "Бургери",
        description: "Запікається з помідопами, оливками, часником, подається з Фокачою та зеленню",
        price: "190UAH",
        categoryIndex: 18,
        weight: "",
        img: "img/products/burgers/warm_camamber.png"
    },
    {
        id: 191,
        title:'Сирна ванна',
        Category: "burgers",
        article: "Бургери",
        description: "Подається до бургера",
        price: "70UAH",
        categoryIndex: 18,
        weight: "",
    },
    {
        id: 192,
        title:'Упаковка',
        Category: "burgers",
        article: "Бургери",
        description: "",
        price: "20UAH",
        categoryIndex: 18,
        weight: "",
    },
    {
        id: 193,
        title:'Фрі',
        Category: "frytur",
        article: "Фритюр",
        description: "Подається з кетчупом",
        price: "60UAH",
        categoryIndex: 19,
        weight: "200г",
        img: "img/products/frytur/fri.png"
    },
    {
        id: 194,
        title:'Нагетси',
        Category: "frytur",
        article: "Фритюр",
        description: "Подається з кетчупом",
        price: "70UAH",
        categoryIndex: 19,
        weight: "8шт",
        img: "img/products/frytur/nagetsy.png"
    },
    {
        id: 195,
        title:'Сирні палички',
        Category: "frytur",
        article: "Фритюр",
        description: "Подається з солодким соусом",
        price: "70UAH",
        categoryIndex: 19,
        weight: "6шт",
        img: "img/products/frytur/cheese_sticks.png"
    },
    {
        id: 196,
        title:'Цибулеві кільця',
        Category: "frytur",
        article: "Фритюр",
        description: "Подається з кетчупом",
        price: "70UAH",
        categoryIndex: 19,
        weight: "10шт",
        img: "img/products/frytur/onion_rings.png"
    },
    {
        id: 197,
        title:'Картопля по-селянськи',
        Category: "frytur",
        article: "Фритюр",
        description: "З ковбаскою, часником, солінням та кетчупом",
        price: "150UAH",
        categoryIndex: 19,
        weight: "450г",
        img: "img/products/frytur/potato-po-seliansky.png"
    },
    {
        id: 198,
        title:'Гомілки "CRISPY"',
        Category: "frytur",
        article: "Фритюр",
        description: "Гомілки 5 шт. подаються з соусом Айолі",
        price: "150UAH",
        categoryIndex: 19,
        weight: "400г",
        img: "img/products/frytur/homilky_crispy.png"
    },
    {
        id: 199,
        title:'Сет Фрі',
        Category: "frytur",
        article: "Фритюр",
        description: 'Ковбаски гриль 4 шт., цибулеві кільця 5 шт., нагетси 8 шт., картопля по-селянськи, гомілки "Crispy" 5 шт., соус "Айолі", соління, маринована цибуля, соус гірчичний, кетчуп',
        price: "600UAH",
        categoryIndex: 19,
        weight: "1400г",
        img: "img/products/frytur/set-fri-1.png"
    },
    {
        id: 200,
        title:'Сет Фрі №2',
        Category: "frytur",
        article: "Фритюр",
        description: 'Фрі, сирні палички 6 шт., цибулеві кільця 6 шт., нагетси 6 шт., соус "Айолі", соління, кетчуп',
        price: "450UAH",
        categoryIndex: 19,
        weight: "1000г",
    },
    {
        id: 201,
        title:'Послуга відкоркуй',
        Category: "drinks",
        article: "Послуга відкоркуй",
        description: 'За вашу пляшку та наші склянки',
        price: "70UAH",
        categoryIndex: 20,
        weight: "",
    },
    {
        id: 202,
        title:'Упаковка сет',
        Category: "rolys",
        article: "Упаковка",
        description: '',
        price: "20UAH",
        categoryIndex: 21,
        weight: "",
    },
    {
        id: 203,
        title:'Упаковка мала',
        Category: "rolys",
        article: "Упаковка",
        description: '',
        price: "15UAH",
        categoryIndex: 21,
        weight: "",
    },
    
]
const sections =[
    {
        id: 1,
        title: "Роли",
        category: "roly",
        mainCategory: "rolys"

    },
    {
        id: 2,
        title: "Теплі роли",
        category: "warm-roly",
        mainCategory: "rolys"

    },
    {
        id: 3,
        title: "Сети",
        category: "sety",
        mainCategory: "rolys"

    },
    {
        id: 4,
        title: "Спрінг роли",
        category: "spring-roly",
        mainCategory: "rolys"

    },
    {
        id: 5,
        title: "Піца",
        category: "pizza",
        mainCategory:"pizza"

    },
    {
        id: 6,
        title: "Склади свою піцу",
        category: "own-pizza",
        mainCategory: "pizza"

    },
    {
        id: 7,
        title: "Безалкогольні напої",
        category: "free-alcohol-drinks",
        mainCategory: "drinks"

    },
    {
        id: 8,
        title: "Гарячі напої",
        category: "warm-drinks",
        mainCategory: "drinks"

    },
    {
        id: 9,
        title: "Безалкогольні коктейлі",
        category: "free-alcohol-cocteils",
        mainCategory: "drinks"

    },
    {
        id: 10,
        title: "Молочні коктейлі",
        category: "milk-cocteils",
        mainCategory: "drinks"

    },
    {
        id: 11,
        title: "Алкогольні напої",
        category: "alcohol-drinks",
        mainCategory: "drinks"

    },
    {
        id: 12,
        title: "Алкогольні коктейлі",
        category: "alcohol-cocteils",
        mainCategory: "drinks"

    },
    {
        id: 13,
        title: "Холодні напої",
        category: "cold-drinks",
        mainCategory: "drinks"

    },
    {
        id: 14,
        title: "Sushi bowl",
        category: "sushi-bowl",
        mainCategory: "sushi-bowl"

    },
    {
        id: 15,
        title: "Салати",
        category: "salads",
        mainCategory: "salads"

    },
    {
        id: 16,
        title: "Морозиво",
        category: "ice-cream",
        mainCategory: "ice-cream"

    },
    {
        id: 17,
        title: "До пива",
        category: "beer-menu",
        mainCategory: "beer-menu"

    },
    {
        id: 18,
        title: "Бургери",
        category: "burgers",
        mainCategory: "burgers"

    },
    {
        id: 19,
        title: "Фритюр",
        category: "frytur",
        mainCategory: "frytur"

    },
    {
        id: 20,
        title: "Послуга відкоркуй",
        category: "open-service",
        mainCategory: "drinks"

    },
    {
        id: 21,
        title: "Упаковка",
        category: "sushi-pack",
        mainCategory: "rolys"

    },
]

window.addEventListener("DOMContentLoaded", ()=>{
    displayMenusItem(sections, menu);
});

function displayMenusItem(sectionItem, menuItems) {
    let subMenu;
    
    let subMenuContainer = document.createElement('div');
    if(sectionItem.length > 1) {
        subMenu = sectionItem.map((item) => {
        return `<a class="btn btn-coffee" href="#${item.category}">${item.title}</a>`;
    });
    subMenu = subMenu.join(" ");
   
    subMenuContainer.classList.add('sub-menu-container');
    subMenuContainer.innerHTML = subMenu;
}

    let displayTitle = sectionItem.map((item) => {
        const filteredMenuItems = menuItems.filter((oneItem) => {
            if(oneItem.categoryIndex==item.id){
                return oneItem;
    }
});
        let displayMenusItem = filteredMenuItems.map((menuItem) => {
            return `      
                <div class="col-sm-12 col-lg-4 col-md-6">
                    <div class="card-menu">
                        <img src=${menuItem.img ? menuItem.img : "img/icons/logoTab.png"} class="${menuItem.img ? '' : 'card-img-logo'} mx-auto d-block card-img-top">
                        <div class="card-body flex-grow-1">
                            <p class="card-text">
                                <p class="display-6">${menuItem.title}</p>
                                <p class="small text-muted "><em>${menuItem.weight}</em></p>
                                <p class="Category">${menuItem.description}</p>
                                <p class="price">${menuItem.price}</p>
                            </p>
                            <div class="d-flex justify-content-end align-items-center" id="select__btn">
                            <button class="btn" onclick="toggleSelectionMenu(${menuItem.id})">
                            <i class="${menuItem.selected ? 'fas' : 'far'} fa-heart fa-2x p-2"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        displayMenusItem = displayMenusItem.join("");
        return `<div id="${item.category}"></div><h2 class="recommended__title" style="margin-top:50px;">${item.title}</h2>${displayMenusItem}<br>`;
    });

    displayTitle = displayTitle.join("");
    sectionCenter.innerHTML = `<nav class="d-flex justify-content-center">${subMenuContainer.outerHTML}</nav><br>${displayTitle}`;
    
}
function toggleSelectionMenu(itemId) {
    
    // Знайдіть об'єкт меню за ідентифікатором
    const menuItem = menu.find(item => item.id === itemId);
    // Змініть значення властивості selected
    menuItem.selected = !menuItem.selected;
    
const selectedItems = menu.filter(item => item.selected);
saveSelectedItemsToSessionStorage(selectedItems);
    const menuSection = sections.find(item=>item.id === menuItem.categoryIndex);
    const Category=menuSection.mainCategory;
    const sectionCategory = sections.filter((sectionItem)=>Category.includes(sectionItem.mainCategory));
    const sectionCategoryIndexes = sectionCategory.map(category => category.id);

    const menuCategory = menu.filter(menuItem => sectionCategoryIndexes.includes(menuItem.categoryIndex));
    displayMenusItem(sectionCategory, menuCategory);

       
}
function displaySelectedItem(menuItems){
    let displayMenusItem = menuItems.map((menuItem) => {
        return `      
            <div class="col-sm-12 col-lg-6 col-md-12">
                <div class="selected-item">
                    
                   <div class=" d-flex justify-content-between">
                    <div class="card-body flex-grow-1">
                        <p class="card-text">
                            <p class="display-6">${menuItem.title}</p>
                            <p class="small text-muted"><em>${menuItem.weight}</em></p>
                            <p class="Category">${menuItem.description}</p>
                            <p class="price">${menuItem.price}</p>
                        </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center p-2" style="max-width: 27%;"><img src=${menuItem.img ? menuItem.img : "img/icons/logoTab.png"} class="card-img-top"></div>
                    </div>
                    <div class="d-flex justify-content-end align-items-center" id="select__btn">
                    <button class="btn" onclick="toggleSelection(${menuItem.id})">
                    <i class="fas fa-heart fa-2x p-2"></i>
                </button>
            </div>
                </div>
                
            </div>`;
    });
    displayMenusItem = displayMenusItem.join("");
    sectionCenter.innerHTML = `<h2 class="recommended__title" style="margin-top:50px;">Обране</h2><br>${displayMenusItem}`;
}
function toggleSelection(itemId) {
    
    // Знайдіть об'єкт меню за ідентифікатором
    const menuItem = menu.find(item => item.id === itemId);

    // Змініть значення властивості selected
    menuItem.selected = !menuItem.selected;
    const selectedItems = menu.filter(item => item.selected);
    saveSelectedItemsToSessionStorage(selectedItems);
    displaySelectedItem(selectedItems);
   /* const menuCategory = menu.filter((menuItem) => {
        if(menuItem.selected){
            return menuItem;
        }});
    // Оновіть відображення обраного елемента
    displaySelectedItem(menuCategory);*/
}
window.onload = function () {
    const selectedItems = getSelectedItemsFromSessionStorage();
    menu.forEach(item => {
      item.selected = selectedItems.some(selectedItem => selectedItem.id === item.id);
    });
    
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
  };
// Отримати поточний день тижня (від 0 до 6, де 0 - неділя, 1 - понеділок, і так далі)
const currentDay = new Date().getDay();

// Створити масив днів тижня
const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// Знайти елемент дня тижня за ідентифікатором і підсвітити його
const highlightedDay = document.getElementById(daysOfWeek[currentDay]);
if (highlightedDay) {
    highlightedDay.style.fontSize = '1.2em'; 
    highlightedDay.style.fontWeight = 'bold';

}

/*function displaySubMenusItem(menuItem, subCategory){
    
    let name__article;
    let subCat = subCategory.map((category) => {
        return `<a href="#${category}">${category}</a>`;
    });
    
    subCat = subCat.join(" | ");
    let displaySubMenusItem = menuItem.map((item)=>{
        name__article=item.article;
        
        return `      
        
			<div class="col-sm-12 col-lg-4 col-md-6 id="${subCategory[item.categoryIndex]}" >
				<div class="card-menu">
					<img src=${item.img} class="card-img-top">
					<div class="card-body">
					  <p class="card-text">
                        <h3 class="title">${item.title}</h3>
                        <p class="Category">${item.description}</p>
                        <p class="price">${item.price}</p>
					</p>
					</div>
				  </div>
			</div>`;
    })

    displaySubMenusItem = displaySubMenusItem.join("");
    sectionCenter.innerHTML = `<h2 class="recommended__title">${subCat}<br>${name__article}</h2>${displaySubMenusItem}`;
}
/*<script>
  // Отримайте всі кнопки за класом
  var buttons = document.getElementsByClassName('main__link');

  // Отримайте контейнер для підкатегорій
  var subcategoriesContainer = document.getElementById('subcategories-container');

  // Створіть обробник подій для кожної кнопки
  Array.from(buttons).forEach(function(button) {
    button.addEventListener('click', function() {
      // Очистіть контейнер перед додаванням нового вмісту
      subcategoriesContainer.innerHTML = '';

      // Отримайте data-id з кнопки
      var categoryId = button.getAttribute('data-id');

      // Здійсніть дії відповідно до категорії
      switch (categoryId) {
        case 'roly':
          // Додайте підкатегорії для ролів
          subcategoriesContainer.innerHTML = '<p>Підкатегорії для Ролів</p>';
          break;
        case 'pizza':
          // Додайте підкатегорії для піци
          subcategoriesContainer.innerHTML = '<p>Підкатегорії для Піци</p>';
          break;
        // Додайте інші категорії, якщо потрібно
      }
    });
  });
</script>
*/