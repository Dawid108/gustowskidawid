// Lista postów z datami (format: DD.MM.RRRR)
const posts = [
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_7.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_6.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_5.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_4.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_3.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_2.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_1.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    }
];

// Funkcja konwertująca datę z DD.MM.RRRR na RRRR-MM-DD dla poprawnego sortowania
function convertToISO(date) {
    const [day, month, year] = date.split(".");
    return `${year}-${month}-${day}`;
}

// Funkcja dodająca posty do strony i sortująca je od najnowszych do najstarszych
function displayPosts(filter) {
    const container = document.getElementById("posts-container");
    container.innerHTML = ""; // Czyszczenie postów

    // Sortowanie postów według daty (najnowsze pierwsze)
    const sortedPosts = posts.slice().sort((a, b) => 
        new Date(convertToISO(b.date)) - new Date(convertToISO(a.date))
    );

    sortedPosts.forEach(post => {
        if (filter === "all" || post.albums.includes(filter)) {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <img src="${post.img}" alt="${post.title}">
                <p>${post.description}</p>
                <small>${post.date}</small>
            `;

            container.appendChild(postDiv);
        }
    });
}

// Funkcja do inicjalizacji rozwijanej listy albumów
function initializeAlbumSelect() {
    const select = document.getElementById("album");
    let uniqueAlbums = new Set();

    // Zbieranie unikalnych nazw albumów
    posts.forEach(post => post.albums.forEach(album => {
        if (album) uniqueAlbums.add(album);
    }));

    // Sortowanie albumów alfabetycznie
    const sortedAlbums = [...uniqueAlbums].sort();

    // Dodanie opcji "Wszystkie" na początek
    select.innerHTML = `<option value="all">Wszystkie</option>` + 
        sortedAlbums.map(album => `<option value="${album}">${album}</option>`).join("");
}

// Obsługa filtrowania albumów
function showAlbum(album) {
    displayPosts(album);
}

// Inicjalizacja strony
initializeAlbumSelect();
displayPosts("all");
