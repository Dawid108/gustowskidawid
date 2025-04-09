const posts = [
    { 
        title: "I Turniej Szachowy O Puchar UKS Dragon Smolice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212195/05_Smolice_3_mpragh.jpg", 
        description: "2 miejsce do lat 18",
        albums: ["Szachy"],
        date: "05.04.2025"
    },
    { 
        title: "I Turniej Szachowy O Puchar UKS Dragon Smolice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212219/05_Smolice_2_ooynoa.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "05.04.2025"
    },
    { 
        title: "I Turniej Szachowy O Puchar UKS Dragon Smolice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212242/05_Smolice_1_ij1am5.jpg", 
        description: "",
        albums: ["Szachy"],
        date: "05.04.2025"
    },
    { 
        title: "Stadion CKS Zduny", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212270/04_CKS_Zduny_shiesj.jpg", 
        description: "",
        albums: ["Powiat Krotoszyński"],
        date: "04.04.2025"
    },
    { 
        title: "Wydmy (159 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212303/04_Wydmy_t7afyx.jpg", 
        description: "",
        albums: ["Szczyty Górskie"],
        date: "04.04.2025"
    },
    { 
        title: "Pozostałości Zapory Granicznej", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212333/04_Zapora_bdxcgj.jpg", 
        description: "",
        albums: ["Polska"],
        date: "04.04.2025"
    },
    { 
        title: "Ścinka Drzew", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212366/04_%C5%9Acinka_r30cuk.jpg", 
        description: "",
        albums: ["Powiat Krotoszyński"],
        date: "04.04.2025"
    },
    { 
        title: "Chachalnia", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212393/04_Chachalnia_btqisp.jpg", 
        description: "",
        albums: ["Powiat Krotoszyński"],
        date: "04.04.2025"
    },
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
    },
    {
        title: "Zimowa Zabawa Biegowa",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744210741/23_Walerian%C3%B3w_1_fakulh.jpg",
        description: "",
        albums: ["Bieganie"],
        date: "23.02.2025"
    },
    {
        title: "IV Wielkopolska Liga Juniorów",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211177/16_Szachy_hezqkd.jpg",
        description: "Szachy",
        albums: ["Szachy"],
        date: "16.02.2025"
    },
    {
        title: "Powiatowy Turniej Szachowy",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211227/11_Szachy_2_ghz1ri.jpg",
        description: "1 miejsce",
        albums: ["Szachy"],
        date: "11.02.2025"
    },
    {
        title: "Powiatowy Turniej Szachowy",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211253/11_Szachy_1_ym7jry.jpg",
        description: "",
        albums: ["Szachy"],
        date: "11.02.2025"
    },
    {
        title: "Moje 17 Urodziny",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211300/07_Urodziny_2_yll2pi.jpg",
        description: "",
        albums: [""],
        date: "07.02.2025"
    },
    {
        title: "Moje 17 Urodziny",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211324/07_Urodziny_1_cmkq7p.jpg",
        description: "",
        albums: [""],
        date: "07.02.2025"
    },
    {
        title: "Ołowiana (658 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211361/02_O%C5%82owiana_2_gprvip.jpg",
        description: "",
        albums: ["Korona Gór Kaczawskich", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Ołowiana (658 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211393/02_O%C5%82owiana_1_s5qs2z.jpg",
        description: "",
        albums: ["Korona Gór Kaczawskich", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Różanka (628 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211435/02_R%C3%B3%C5%BCanka_3_jiyscc.jpg",
        description: "",
        albums: ["Korona Kaczawska", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Różanka (628 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211456/02_R%C3%B3%C5%BCanka_2_ifkrtt.jpg",
        description: "",
        albums: ["Korona Kaczawska", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Różanka (628 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211483/02_R%C3%B3%C5%BCanka_1_jrjhvn.jpg",
        description: "",
        albums: ["Korona Kaczawska", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Świeradów-Zdrój",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211535/01_%C5%9Awierad%C3%B3w_tjmffo.jpg",
        description: "",
        albums: ["Polska"],
        date: "01.02.2025"
    },
    {
        title: "Stój Izerski (1107 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211588/01_St%C3%B3g_Izerski_2_bkgzfu.jpg",
        description: "",
        albums: ["Korona Gór Izerskich", "Sudeckie Tysięczniki", "Szczyty Górskie","Turysta Polskich Izerów"],
        date: "01.02.2025"
    },
    {
        title: "Stój Izerski (1107 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211621/01_St%C3%B3g_Izerski_1_mkpvyh.jpg",
        description: "",
        albums: ["Korona Gór Izerskich", "Sudeckie Tysięczniki", "Szczyty Górskie","Turysta Polskich Izerów", "Tysięczniki Polskich Gór"],
        date: "01.02.2025"
    },
    {
        title: "Świeradów-Zdrój",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211664/31_%C5%9Awierad%C3%B3w_2_ciiiz9.jpg",
        description: "",
        albums: [""],
        date: "31.01.2025"
    },
    {
        title: "Świeradów-Zdrój",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211691/31_%C5%9Awierad%C3%B3w_1_pco9po.jpg",
        description: "",
        albums: [""],
        date: "31.01.2025"
    },
    {
        title: "Świeradów-Zdrój",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211726/30_%C5%9Awierad%C3%B3w_kn8rzl.jpg",
        description: "",
        albums: [""],
        date: "30.01.2025"
    },
    {
        title: "Skopiec (724 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211761/30_Skopiec_hxirk0.jpg",
        description: "",
        albums: ["Diadem Polskich Gór", "Korona Gór Kaczawskich", "Korona Gór Polski","Korona Kaczawska", "Korona Sudetów", "Korona Sudetów Polskich", "Szczyty Górskie", "Tiara Polskich Gór"],
        date: "30.01.2025"
    },
    {
        title: "Baraniec (720 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211792/30_Baraniec_nqnmka.jpg",
        description: "",
        albums: ["Diadem Polskich Gór", "Korona Gór Kaczawskich", "Korona Najwybitniejszych Szczytów Sudetów Polskich", "Małe Szczyty Polski", "Szczyty Górskie", "Tiara Polskich Gór"],
        date: "30.01.2025"
    },
    {
        title: "Ziemski Kopczyk (672 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211827/30_Ziemski_Kopczyk_2_pbpehv.jpg",
        description: "",
        albums: ["Korona Gór Kaczawskich", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Ziemski Kopczyk (672 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211856/30_Ziemski_Kopczyk_1_jvyer7.jpg",
        description: "",
        albums: ["Korona Gór Kaczawskich", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Leszczyniec (615 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211887/30_Leszczyniec_s5hpnq.jpg",
        description: "",
        albums: ["Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Dudziarz (652 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211915/30_Dudziarz_roz4xa.jpg",
        description: "",
        albums: ["Korona Gór Kaczawskich", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Żeleźniak (664 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211941/30_%C5%BBele%C5%BAniak_ozvlek.jpg",
        description: "",
        albums: ["Korona Kaczawska", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Feryjny Turniej Szachowy Dla Dzieci i Młodzieży",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212003/22_Zduny_nsjvn5.jpg",
        description: "Zduny",
        albums: ["Szachy"],
        date: "22.01.2025"
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
