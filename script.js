const posts = [
    { 
        title: "XI Ostrowski Ice Mat Półmaraton", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743623758/30_Ostrowski_Polmaraton_3_bgushx.jpg", 
        description: "",
        albums: ["Bieganie"],
        date: "30.03.2025"
    },
    { 
        title: "XI Ostrowski Ice Mat Półmaraton", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743623886/30_Ostrowski_Polmaraton_2_phckp9.jpg", 
        description: "",
        albums: ["Bieganie"],
        date: "30.03.2025"
    },
    { 
        title: "XI Ostrowski Ice Mat Półmaraton", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743623394/30_Ostrowski_Polmaraton_1_th9jjd.jpg", 
        description: "",
        albums: ["Bieganie"],
        date: "30.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743690713/28_Szachy_7_cedexn.jpg", 
        description: "1 miejsce dla najlepszej klasy turnieju",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743690655/28_Szachy_5_xnihik.jpg", 
        description: "1 miejsce indywidualnie",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    { 
        title: "Mistrzostwa ZSP2", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743623838/28_Szachy_3_qvsapd.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "28.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743624050/23_Cross_Krotoszynski_5_ggttxs.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743624017/23_Cross_Krotoszynski_3_eifq29.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743623977/23_Cross_Krotoszynski_2_mftnat.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "4 Krotoszyński Cross",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743623941/23_Cross_Krotoszynski_1_zowza7.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.03.2025"
    },
    {
        title: "Biadki-Paprotki - staw III Wiórki",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743690901/18_Szlak_Mickiewiczowski_2_frtdyu.jpg",
        description: "Szlak Mickiewiczowski",
        albums: ["Powiat Krotoszyński"],
        date: "18.03.2025"
    },
    {
        title: "Sankturium Matki Bożej Pocieszenia",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743690936/14_Szlak_Lesnych_Stawow_16_njkucq.jpg",
        description: "Lutogniew",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Dzierżanów - kapliczka z 1911 r.",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743690968/14_Szlak_Lesnych_Stawow_15_aicexk.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Figura św. Wawrzyńca",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743690996/14_Szlak_Lesnych_Stawow_14_avr3np.jpg",
        description: "Dzierżanów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Pałac Mielżyńskich",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691038/14_Szlak_Lesnych_Stawow_13_uglgac.jpg",
        description: "Baszków",
        albums: ["Powiat Krotoszyński", "Krotoszyńska Odznaka Krajoznawcza"],
        date: "14.03.2025"
    },
    {
        title: "Pałacyk Myśliwski",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691064/14_Szlak_Lesnych_Stawow_12_nm9igf.jpg",
        description: "Baszków",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Hadrianów - Staw Praczków",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691090/14_Szlak_Lesnych_Stawow_11_m9pxtr.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Staw Węgielnik",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691116/14_Szlak_Lesnych_Stawow_10_phl7ff.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Staw Węgielnik",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691144/14_Szlak_Lesnych_Stawow_09_xqpuka.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Grodzisko Piaski",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691177/14_Szlak_Lesnych_Stawow_08_qe4qx9.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Grodzisko pierścieniowe",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691203/14_Szlak_Lesnych_Stawow_07_gl73yj.jpg",
        description: "Zduny",
        albums: ["Powiat Krotoszyński", "Krotoszyńska Odznaka Krajoznawcza"],
        date: "14.03.2025"
    },
    {
        title: "Pomnik Powstania Wlkp.",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691233/14_Szlak_Lesnych_Stawow_06_uqzcdi.jpg",
        description: "Zduny",
        albums: ["Powiat Krotoszyński", "Krotoszyńska Odznaka Krajoznawcza"],
        date: "14.03.2025"
    },
    {
        title: "Kościół pw. św. Jana Chrzciciela w Zdunach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691258/14_Szlak_Lesnych_Stawow_05_xbboxi.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński", "Krotoszyńska Odznaka Krajoznawcza"],
        date: "14.03.2025"
    },
    {
        title: "Plac 700-lecia Zdun",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691292/14_Szlak_Lesnych_Stawow_04_u6mcfp.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Kościół poewangelicki w Zdunach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691321/14_Szlak_Lesnych_Stawow_03_jq3ne3.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Izba Muzealna w Zdunach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691419/14_Szlak_Lesnych_Stawow_02_q8yisf.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński", "Krotoszyńska Odznaka Krajoznawcza"],
        date: "14.03.2025"
    },
    {
        title: "Ratusz w Zdunach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691351/14_Szlak_Lesnych_Stawow_01_kj3wmc.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński", "Krotoszyńska Odznaka Krajoznawcza"],
        date: "14.03.2025"
    },
    {
        title: "Tropem Wilczym 25 Bieg Pamięci Żołnierzy Wyklętych",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691456/02_Bieg_Zolnierzy_Wykletych_2_tclkmt.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "02.03.2025"
    },
    {
        title: "Tropem Wilczym 25 Bieg Pamięci Żołnierzy Wyklętych",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691483/02_Bieg_Zolnierzy_Wykletych_1_n0wibt.jpg",
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
