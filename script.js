const posts = [
    { 
        title: "XI Ostrowski Ice Mat Półmaraton", 
        img: "https://drive.google.com/file/d/11fYcOPBkbV1Qt0mY96x5-_X6YAApNSOX/view", 
        description: "",
        albums: ["Bieganie"],
        date: "30.03.2025"
    },
    { 
        title: "XI Ostrowski Ice Mat Półmaraton", 
        img: "https://drive.google.com/file/d/1lIYp9pLZPz6PlEFxBaY_bnYhENMz0YqZ/view", 
        description: "",
        albums: ["Bieganie"],
        date: "30.03.2025"
    },
    { 
        title: "XI Ostrowski Ice Mat Półmaraton", 
        img: "https://drive.google.com/file/d/1jaoV1DiwlKojSymw1yoJGHhISiXGNcu1/view", 
        description: "",
        albums: ["Bieganie"],
        date: "30.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "img/2025/03_Marzec/28_Szachy_7.jpg", 
        description: "1 miejsce dla najlepszej klasy turnieju",
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
        description: "1 miejsce indywidualnie",
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
    },
    {
        title: "4 Krotoszyński Cross",
        img: "img/2025/03_Marzec/23_Cross_Krotoszynski_5.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "img/2025/03_Marzec/23_Cross_Krotoszynski_4.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "img/2025/03_Marzec/23_Cross_Krotoszynski_3.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "img/2025/03_Marzec/23_Cross_Krotoszynski_2.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "img/2025/03_Marzec/23_Cross_Krotoszynski_1.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "Biadki-Paprotki - staw III Wiórki",
        img: "img/2025/03_Marzec/18_Szlak_Mickiewiczowski_3.jpg",
        description: "Szlak Mickiewiczowski",
        albums: ["Powiat Krotoszyński"],
        date: "18.03.2025"
    },
    {
        title: "Biadki-Paprotki - staw III Wiórki",
        img: "img/2025/03_Marzec/18_Szlak_Mickiewiczowski_2.jpg",
        description: "Szlak Mickiewiczowski",
        albums: ["Powiat Krotoszyński"],
        date: "18.03.2025"
    },
    {
        title: "Biadki-Paprotki - staw III Wiórki",
        img: "img/2025/03_Marzec/18_Szlak_Mickiewiczowski_1.jpg",
        description: "Szlak Mickiewiczowski",
        albums: ["Powiat Krotoszyński"],
        date: "18.03.2025"
    },
    {
        title: "Sankturium Matki Bożej Pocieszenia",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_16.jpg",
        description: "Lutogniew",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Dzierżanów - kapliczka z 1911 r.",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_15.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Figura św. Wawrzyńca",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_14.jpg",
        description: "Dzierżanów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Pałac Mielżyńskich",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_13.jpg",
        description: "Baszków",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Pałacyk Myśliwski",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_12.jpg",
        description: "Baszków",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Hadrianów - Staw Praczków",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_11.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Staw Węgielnik",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_10.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Staw Węgielnik",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_09.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Grodzisko Piaski",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_08.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Grodzisko pierścieniowe",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_07.jpg",
        description: "Zduny",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Pomnik Powstania Wlkp.",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_06.jpg",
        description: "Zduny",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Kościół pw. św. Jana Chrzciciela w Zdunach",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_05.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Plac 700-lecia Zdun",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_04.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Kościół poewangelicki w Zdunach",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_03.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Izba Muzealna w Zdunach",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_02.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Ratusz w Zdunach",
        img: "img/2025/03_Marzec/14_Szlak_Lesnych_Stawow_01.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Las",
        img: "img/2025/03_Marzec/09_Las.jpg",
        description: "",
        albums: ["Powiat Krotoszyński"],
        date: "09.03.2025"
    },
    {
        title: "Tropem Wilczym 25 Bieg Pamięci Żołnierzy Wyklętych",
        img: "img/2025/03_Marzec/02_Bieg_Zolnierzy_Wykletych_2.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "02.03.2025"
    },
    {
        title: "Tropem Wilczym 25 Bieg Pamięci Żołnierzy Wyklętych",
        img: "img/2025/03_Marzec/02_Bieg_Zolnierzy_Wykletych_1.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "02.03.2025"
    }
];

function convertToISO(date) {
    const [day, month, year] = date.split(".");
    return `${year}-${month}-${day}`;
}

function displayPosts(filter) {
    const container = document.getElementById("posts-container");
    container.innerHTML = "";

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

function initializeAlbumSelect() {
    const select = document.getElementById("album");
    let uniqueAlbums = new Set();

    posts.forEach(post => post.albums.forEach(album => {
        if (album) uniqueAlbums.add(album);
    }));

    const sortedAlbums = [...uniqueAlbums].sort();

    select.innerHTML = `<option value="all">Wszystkie</option>` + 
        sortedAlbums.map(album => `<option value="${album}">${album}</option>`).join("");
}

function showAlbum(album) {
    displayPosts(album);
}

initializeAlbumSelect();
displayPosts("all");
