const posts = [
    { 
        title: "Gościniec Równica - Schronisko", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477794/22_Schronisko_R%C3%B3wnica_arysoy.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "22.04.2025"
    },
    { 
        title: "Dwór Skibówki", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477763/22_R%C3%B3wnica_2_noxidu.jpg", 
        description: "",
        albums: ["Polska"],
        date: "22.04.2025"
    },
    { 
        title: "Równica (884 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477736/22_R%C3%B3wnica_3_aqyc93.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "22.04.2025"
    },
    { 
        title: "Równica (884 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477711/22_R%C3%B3wnica_rmghw6.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "22.04.2025"
    },
    { 
        title: "Schronisko Górskie PTTK Barania Góra - Przysłop", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477667/21_Schronisko_Przys%C5%82op_2_c8coje.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "21.04.2025"
    },
    { 
        title: "Schronisko Górskie PTTK Barania Góra - Przysłop", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477642/21_Schronisko_Przys%C5%82op_inxfhz.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "21.04.2025"
    },
    { 
        title: "Muzeum PTTK Na Baraniej Górze", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477614/21_Muzeum_ouo1fg.jpg", 
        description: "",
        albums: ["Polska"],
        date: "21.04.2025"
    },
    { 
        title: "Karolówka (931 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477585/21_Karol%C3%B3wka_2_mhyrww.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "21.04.2025"
    },
    { 
        title: "Karolówka (931 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477554/21_Karol%C3%B3wka_pbwkfs.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "21.04.2025"
    },
    { 
        title: "Malinowska Skała (1152 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477517/20_Malinowska_Ska%C5%82a_2_aocftl.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "20.04.2025"
    },
    { 
        title: "Malinowska Skała (1152 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477492/20_Malinowska_Ska%C5%82a_3_oplhnz.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "20.04.2025"
    },
    { 
        title: "Malinowska Skała (1152 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477463/20_Malinowska_Ska%C5%82a_xl8skt.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "20.04.2025"
    },
    { 
        title: "Jaskinia Malinowska", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477436/20_Jaskinia_ay5khp.jpg", 
        description: "",
        albums: ["Polska"],
        date: "20.04.2025"
    },
    { 
        title: "Malinów (1117 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477409/20_Malin%C3%B3w_3_goucqf.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "20.04.2025"
    },
    { 
        title: "Malinów (1117 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477385/20_Malin%C3%B3w_2_j8gwf0.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "20.04.2025"
    },
    { 
        title: "Malinów (1117 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745477356/20_Malin%C3%B3w_hs57ez.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "20.04.2025"
    },
    { 
        title: "Schronisko na Soszowie Wielkim", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476328/19_Schronisko_Sosz%C3%B3w_xrzfmh.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Zagroda Lepiarzówka", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476330/19_Lepiarz%C3%B3wka_llzlkv.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Soszów Wielki (886 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476331/19_Sosz%C3%B3w_Wielki_yojjcs.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Cieślar (918 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476299/19_Cie%C5%9Blar_tbwgwc.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Stożek Mały (843 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476266/19_Ma%C5%82y_Sto%C5%BCek_j8sloe.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Stożek Wielki (978 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476218/19_Wielki_Sto%C5%BCek_xyrqb5.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Schronisko PTTK Stożek", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476189/19_Schronisko_Sto%C5%BCek_nw49xg.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Krkavice (978 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476164/19_Krkavice_xriyzc.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Kiczory (990 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476139/19_Kiczory_2_wvda1h.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Kiczory (990 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476113/19_Kiczory_wevyvl.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Szarcula (803 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476088/19_Szarcula_3_vonzyy.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Beskidek (796 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476063/19_Beskidek_nc4ou4.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Schronisko Na Stecówce", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476028/19_Stec%C3%B3wka_mjhq11.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Szarcula (798 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745476004/19_Szarcula_2_npkkyn.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Szarcula (803 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745475975/19_Szarcula_omeuzw.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie", "Wieże Widokowe"],
        date: "19.04.2025"
    },
    { 
        title: "Kubalonka (830 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745475950/19_Kubalonka_3_eughun.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Kubalonka (830 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745475929/19_Kubalonka_2_cqd4em.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "19.04.2025"
    },
    { 
        title: "Kubalonka (830 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745475904/19_Kubalonka_qfundl.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie", "Wieże Widokowe"],
        date: "19.04.2025"
    },
    { 
        title: "Malowanie Jajek", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745475833/19_Malowanie_oez9k2.jpg", 
        description: "",
        albums: [""],
        date: "19.04.2025"
    },
    { 
        title: "Schronisko Telesforówka", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436219/18_Schronisko_Trzy_Kopce_xjtctz.jpg", 
        description: "",
        albums: ["Schroniska Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Trzy Kopce Wiślańskie (810 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436191/18_Trzy_Kopce_u51hii.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Kamienny (790 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436163/18_Kamienny_tj125o.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Skocznia Narciarska Imienia Adama Małysza", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436135/18_Adam_Ma%C5%82ysz_e3j6go.jpg", 
        description: "",
        albums: ["Polska"],
        date: "18.04.2025"
    },
    { 
        title: "Kompleks Skoczni Narciarskich Skalite Szczyrk", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436107/18_Szczyrk_nbwzzk.jpg", 
        description: "",
        albums: ["Polska"],
        date: "18.04.2025"
    },
    { 
        title: "Matyska (609 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436077/18_Matyska_4_suynon.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Matyska (609 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436050/18_Matyska_3_zon7qt.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Matyska (609 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436026/18_Matyska_2_clgtsa.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Matyska (609 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745436000/18_Matyska_mjzucg.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Rachowiec (954 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435973/18_Rachowiec_4_yejdty.jpg", 
        description: "",
        albums: ["Beskid Żywiecki", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Rachowiec (954 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435949/18_Rachowiec_3_shsbdu.jpg", 
        description: "",
        albums: ["Beskid Żywiecki", "Szczyty Górskie", "Wieże Widokowe"],
        date: "18.04.2025"
    },
    { 
        title: "Rachowiec (954 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435921/18_Rachowiec_2_ic4a5l.jpg", 
        description: "",
        albums: ["Beskid Żywiecki", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Rachowiec (954 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435888/18_Rachowiec_arvylk.jpg", 
        description: "",
        albums: ["Beskid Żywiecki", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Ochodzita (895 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435858/18_Ochodzita_4_a6iau9.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Ochodzita (895 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435832/18_Ochodzita_3_yiygba.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Ochodzita (895 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435807/18_Ochodzita_2_wbdors.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Ochodzita (895 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745435780/18_Ochodzita_nrkcer.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "18.04.2025"
    },
    { 
        title: "Tuł (621 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434459/17_Tu%C5%82_lckj1n.jpg", 
        description: "",
        albums: ["Beskid Śląski", "Szczyty Górskie"],
        date: "17.04.2025"
    },
    { 
        title: "Wieża Piastowska Cieszyn", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434431/17_Cieszyn_Wie%C5%BCa_2_lcpsjc.jpg", 
        description: "",
        albums: ["Wieże Widokowe"],
        date: "17.04.2025"
    },
    { 
        title: "Rotunda pw. św. Mikołaja w Cieszynie", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434404/17_Cieszyn_2_hvj9lh.jpg", 
        description: "",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Rotunda pw. św. Mikołaja w Cieszynie", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434376/17_Cieszyn_ppabqy.jpg", 
        description: "",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Wieża Piastowska Cieszyn", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434348/17_Cieszyn_Wie%C5%BCa_ul6iln.jpg", 
        description: "",
        albums: ["Wieże Widokowe"],
        date: "17.04.2025"
    },
    { 
        title: "Jastrzębski Węgiel", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434323/17_Jastrz%C4%99bski_W%C4%99giel_2_fh67ro.jpg", 
        description: "Hala Widowiskowo-Sportowa",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Jastrzębski Węgiel", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434299/17_Jastrz%C4%99bski_W%C4%99giel_imz5wi.jpg", 
        description: "Hala Widowiskowo-Sportowa",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Topola Tekla", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434277/17_Topola_Tekla_gwnuli.jpg", 
        description: "",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Zamek w Chudowie", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434246/17_Chud%C3%B3w_gm5yvj.jpg", 
        description: "",
        albums: ["Zamki"],
        date: "17.04.2025"
    },
    { 
        title: "PreZero Arena Gliwice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434224/17_Arena_Gliwice_dggcrc.jpg", 
        description: "",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Zamek Piastowski w Gliwicach", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434202/17_Zamek_Gliwice_2_o5cbnj.jpg", 
        description: "",
        albums: ["Zamki"],
        date: "17.04.2025"
    },
    { 
        title: "Zamek Piastowski w Gliwicach", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434177/17_Zamek_Gliwice_kme1mf.jpg", 
        description: "",
        albums: ["Zamki"],
        date: "17.04.2025"
    },
    { 
        title: "Kościół Rzymskokatolicki pw. Wszystkich Świętych w Gliwicach", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434151/17_Ko%C5%9Bci%C3%B3%C5%82_xvk0go.jpg", 
        description: "",
        albums: ["Wieże Widokowe"],
        date: "17.04.2025"
    },
    { 
        title: "Piast Gliwice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434098/17_Stadion_2_wkesqx.jpg", 
        description: "Stadion Miejski w Gliwicach im. Piotra Wieczorka",
        albums: ["Stadiony"],
        date: "17.04.2025"
    },
    { 
        title: "Piast Gliwice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434098/17_Stadion_eevjox.jpg", 
        description: "Stadion Miejski w Gliwicach im. Piotra Wieczorka",
        albums: ["Stadiony"],
        date: "17.04.2025"
    },
    { 
        title: "Radiostacja Gliwice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434069/17_Radiostacja_2_nmddtu.jpg", 
        description: "",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Radiostacja Gliwice", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1745434048/17_Radiostacja_bjdf0s.jpg", 
        description: "",
        albums: ["Polska"],
        date: "17.04.2025"
    },
    { 
        title: "Sokół Chwaliszew", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744575087/13_Sokol_bkm5gc.jpg", 
        description: "",
        albums: ["Piłka Nożna"],
        date: "13.04.2025"
    },
    { 
        title: "Półfinały Mistrzostw Wielkopolski Strefa Południowa", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744575059/12_Szachy_2_ljgst4.jpg", 
        description: "3 miejsce",
        albums: ["Szachy"],
        date: "12.04.2025"
    },
    { 
        title: "Półfinały Mistrzostw Wielkopolski Strefa Południowa", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744575033/12_Szachy_1_yd5xuu.jpg", 
        description: "Szachy",
        albums: ["Szachy"],
        date: "12.04.2025"
    },
    { 
        title: "Grodziszcze (114 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744379106/10_Grodziszcze_rrc6du.jpg", 
        description: "",
        albums: ["Szczyty Górskie"],
        date: "10.04.2025"
    },
    { 
        title: "Grodzisko Jelików", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744379074/10_Grodzisko_Jelik%C3%B3w_r9c0rn.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Barycz", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744379046/10_Barycz_y8ndxa.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Dąb Pamięci Ludwika Singera", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744379020/10_D%C4%85b_Pami%C4%99ci_hevlyy.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Jaz Bolko", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744378960/10_Jaz_Bolko_xk5xgi.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Specjalny Obszar Ochrony Siedlisk Natura 2000 Ostoja Nad Baryczą", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744378754/10_Ostoja_Nad_Barycz%C4%85_y6ytje.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Jankowa", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744378726/10_Jankowa_x5khwz.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Kościół pw. św. Macieja Apostoła w Trzebicku", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744378696/10_Trzebicko_2_ap0tgy.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Trzebicko", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744378625/10_Trzebicko_1_rkogih.jpg", 
        description: "",
        albums: ["Polska"],
        date: "10.04.2025"
    },
    { 
        title: "Winna Góra (178 m)", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744378599/10_Winna_G%C3%B3ra_femqsx.jpg", 
        description: "",
        albums: ["Szczyty Górskie"],
        date: "10.04.2025"
    },
    { 
        title: "Mistrzostwa Powiatu w Drużynowych Biegach Przełajowych", 
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744378288/10_Zduny_rhoctq.jpg", 
        description: "",
        albums: ["Bieganie"],
        date: "10.04.2025"
    },
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
        albums: ["Powiat Krotoszyński"],
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
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Pomnik Powstania Wlkp.",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691233/14_Szlak_Lesnych_Stawow_06_uqzcdi.jpg",
        description: "Zduny",
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Kościół pw. św. Jana Chrzciciela w Zdunach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691258/14_Szlak_Lesnych_Stawow_05_xbboxi.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
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
        albums: ["Powiat Krotoszyński"],
        date: "14.03.2025"
    },
    {
        title: "Ratusz w Zdunach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1743691351/14_Szlak_Lesnych_Stawow_01_kj3wmc.jpg",
        description: "Szlak Leśnych Stawów",
        albums: ["Powiat Krotoszyński"],
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
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Ołowiana (658 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211393/02_O%C5%82owiana_1_s5qs2z.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Różanka (628 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211435/02_R%C3%B3%C5%BCanka_3_jiyscc.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Różanka (628 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211456/02_R%C3%B3%C5%BCanka_2_ifkrtt.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "02.02.2025"
    },
    {
        title: "Różanka (628 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211483/02_R%C3%B3%C5%BCanka_1_jrjhvn.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
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
        albums: ["Góry Izerskie", "Szczyty Górskie"],
        date: "01.02.2025"
    },
    {
        title: "Stój Izerski (1107 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211621/01_St%C3%B3g_Izerski_1_mkpvyh.jpg",
        description: "",
        albums: ["Góry Izerskie", "Szczyty Górskie"],
        date: "01.02.2025"
    },
    {
        title: "Świeradów-Zdrój",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211664/31_%C5%9Awierad%C3%B3w_2_ciiiz9.jpg",
        description: "",
        albums: ["Polska"],
        date: "31.01.2025"
    },
    {
        title: "Świeradów-Zdrój",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211691/31_%C5%9Awierad%C3%B3w_1_pco9po.jpg",
        description: "",
        albums: ["Polska"],
        date: "31.01.2025"
    },
    {
        title: "Świeradów-Zdrój",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211726/30_%C5%9Awierad%C3%B3w_kn8rzl.jpg",
        description: "",
        albums: ["Polska"],
        date: "30.01.2025"
    },
    {
        title: "Skopiec (724 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211761/30_Skopiec_hxirk0.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Baraniec (720 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211792/30_Baraniec_nqnmka.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Ziemski Kopczyk (672 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211827/30_Ziemski_Kopczyk_2_pbpehv.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Ziemski Kopczyk (672 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211856/30_Ziemski_Kopczyk_1_jvyer7.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Leszczyniec (615 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211887/30_Leszczyniec_s5hpnq.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Dudziarz (652 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211915/30_Dudziarz_roz4xa.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Żeleźniak (664 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744211941/30_%C5%BBele%C5%BAniak_ozvlek.jpg",
        description: "",
        albums: ["Góry Kaczawskie", "Szczyty Górskie"],
        date: "30.01.2025"
    },
    {
        title: "Feryjny Turniej Szachowy Dla Dzieci i Młodzieży",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744212003/22_Zduny_nsjvn5.jpg",
        description: "Zduny",
        albums: ["Szachy"],
        date: "22.01.2025"
    },
    {
        title: "Świątynia File",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574652/01_File_aashri.jpg",
        description: "",
        albums: ["Egipt"],
        date: "01.01.2025"
    },
    {
        title: "Krokodyl - Wioska Nubijska",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574593/31_Krokodyl_pjd95v.jpg",
        description: "",
        albums: ["Egipt"],
        date: "31.12.2024"
    },
    {
        title: "Jezioro Nasera",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574570/31_Nasera_i1t5qd.jpg",
        description: "",
        albums: ["Egipt"],
        date: "31.12.2024"
    },
    {
        title: "Wysoka Tama Asuan",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574542/31_Tama_irhwce.jpg",
        description: "",
        albums: ["Egipt"],
        date: "31.12.2024"
    },
    {
        title: "Nil",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574518/31_Nil_g02bpl.jpg",
        description: "",
        albums: ["Egipt"],
        date: "31.12.2024"
    },
    {
        title: "Kolosy Memnona",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574469/29_Kolosy_bohmtt.jpg",
        description: "",
        albums: ["Egipt"],
        date: "29.12.2024"
    },
    {
        title: "Dolina Królów",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574492/29_Valley_z2mtyd.jpg",
        description: "",
        albums: ["Egipt"],
        date: "29.12.2024"
    },
    {
        title: "Egipt",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574433/29_Hatshepsut_2_ktv0ij.jpg",
        description: "",
        albums: ["Egipt"],
        date: "29.12.2024"
    },
    {
        title: "Świątynia Hatszepsut",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574411/29_Hatshepsut_1_ubz9bc.jpg",
        description: "",
        albums: ["Egipt"],
        date: "29.12.2024"
    },
    {
        title: "Lot Balonem Nad Luksorem",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574389/29_Balon_nzqxws.jpg",
        description: "",
        albums: ["Egipt"],
        date: "29.12.2024"
    },
    {
        title: "Świątynia Luksorska",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574368/28_Luksor_xek2f6.jpg",
        description: "",
        albums: ["Egipt"],
        date: "28.12.2024"
    },
    {
        title: "Wielki Sfinks",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574346/27_Sfinks_m8ornn.jpg",
        description: "",
        albums: ["Egipt"],
        date: "27.12.2024"
    },
    {
        title: "Piramidy w Gizie",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574326/27_Piramidy_4_myi1c8.jpg",
        description: "",
        albums: ["Egipt"],
        date: "27.12.2024"
    },
    {
        title: "Piramida Cheopsa",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574305/27_Piramidy_3_qgy9zn.jpg",
        description: "",
        albums: ["Egipt"],
        date: "27.12.2024"
    },
    {
        title: "Piramidy w Gizie",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574281/27_Piramidy_2_ubwvkh.jpg",
        description: "",
        albums: ["Egipt"],
        date: "27.12.2024"
    },
    {
        title: "Piramidy w Gizie",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574254/27_Piramidy_1_d9kcyf.jpg",
        description: "",
        albums: ["Egipt"],
        date: "27.12.2024"
    },
    {
        title: "Port Lotniczy Poznań-Ławica",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744574226/26_Pozna%C5%84_psalry.jpg",
        description: "",
        albums: ["Polska"],
        date: "26.12.2024"
    },
    {
        title: "Praga",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819177/18_Praga_jln27o.jpg",
        description: "",
        albums: ["Czechy"],
        date: "18.12.2024"
    },
    {
        title: "Mikołajkowy Turniej Szachowy Rozdrażew 2024",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819199/08_Rozdra%C5%BCew_3_iex80g.jpg",
        description: "",
        albums: ["Szachy"],
        date: "08.12.2024"
    },
    {
        title: "Mikołajkowy Turniej Szachowy Rozdrażew 2024",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819230/08_Rozdra%C5%BCew_2_p94f6b.jpg",
        description: "3 miejsce",
        albums: ["Szachy"],
        date: "08.12.2024"
    },
    {
        title: "Mikołajkowy Turniej Szachowy Rozdrażew 2024",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819254/08_Rozdra%C5%BCew_1_rnffh3.jpg",
        description: "",
        albums: ["Szachy"],
        date: "08.12.2024"
    },
    {
        title: "13 Bieg w Poszukiwaniu Św. Mikołaja w Prusicach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819276/07_Prusice_tmqmjs.jpg",
        description: "5km w 19 min i 17 sek",
        albums: ["Bieganie"],
        date: "07.12.2024"
    },
    {
        title: "The Mystery Of Banksy",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819306/03_Banksy_juflux.jpg",
        description: "Wycieczka Szkolna, Poznań",
        albums: ["Polska"],
        date: "03.12.2024"
    },
    {
        title: "Mistrzostwa Powiatu w Drużynowych Szachach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819356/14_Smolice_2_cwuqmx.jpg",
        description: "Smolice",
        albums: ["Szachy"],
        date: "14.11.2024"
    },
    {
        title: "Mistrzostwa Powiatu w Drużynowych Szachach",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819386/14_Smolice_1_kkx1pc.jpg",
        description: "Smolice",
        albums: ["Szachy"],
        date: "14.11.2024"
    },
    {
        title: "Kościół Rzymskokatolicki pw. Narodzenia NMP Grzmiąca",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819425/11_Grzmi%C4%85ca_zx6ybg.jpg",
        description: "",
        albums: ["Polska"],
        date: "11.11.2024"
    },
    {
        title: "Jeleniec Mały (741 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819460/11_Jeleniec_Ma%C5%82y_tgexrn.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Rogowiec (870 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819493/11_Rogowiec_sdyan1.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Rogowiec (870 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819518/11_Rogowiec_2_d82lze.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Jeleniec (902 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819546/11_Jeleniec_2_ciozrv.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Jeleniec (902 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819576/11_Jeleniec_emavu6.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Warzęcha (793 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819607/11_Warzecha_nok8ra.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Gomólnik Mały (809 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819637/11_Gom%C3%B3lnik_2_x7ybju.jpg",
        description: "",
        albums: ["Góry Kamienne", "Wieże Widokowe", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Gomólnik Mały (809 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819665/11_Gom%C3%B3lnik_k4dtcr.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "11.11.2024"
    },
    {
        title: "Mniszek (704 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819696/10_Mniszek_vyxabb.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Boreczna (710 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819728/10_Boreczna_j047nz.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Dzikowiec Mały (695 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819762/10_Dzikowiec_Ma%C5%82y_xawop0.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Łyse Drzewo (757 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819795/10_Drzewo_nefvrh.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Sokółka (800 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819825/10_Sok%C3%B3%C5%82ka_hcs0ej.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Wysoka (808 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819856/10_Wysoka_yy1vkf.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Stachoń (808 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819886/10_Stacho%C5%84_ck2xjw.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Stachonik (687 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819923/10_Stachonik_sgdw1f.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Brzozówka (765 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744819953/10_Brzoz%C3%B3wka_kwyygu.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Dzikowiec Wielki (836 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820000/10_Dzikowiec_5_uwmsot.jpg",
        description: "",
        albums: ["Góry Kamienne", "Wieże Widokowe", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Dzikowiec Wielki (836 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820028/10_Dzikowiec_4_lbbdwo.jpg",
        description: "",
        albums: ["Góry Kamienne", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Dzikowiec Wielki (836 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820061/10_Dzikowiec_3_jm6mto.jpg",
        description: "",
        albums: ["Góry Kamienne", "Wieże Widokowe", "Szczyty Górskie"],
        date: "10.11.2024"
    },
    {
        title: "Wieża Widokowa Dzikowiec",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820095/10_Dzikowiec_2_hvvqmq.jpg",
        description: "",
        albums: ["Wieże Widokowe"],
        date: "10.11.2024"
    },
    {
        title: "Stok Narciarski Dzikowiec",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820130/10_Dzikowiec_kacnyd.jpg",
        description: "",
        albums: ["Polska"],
        date: "10.11.2024"
    },
    {
        title: "Ośrodek Sportowo-Rekreacyjny Dzikowiec",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820158/10_Dzikowiec_6_kfyueg.jpg",
        description: "",
        albums: ["Polska"],
        date: "10.11.2024"
    },
    {
        title: "Zamkowa Góra (618 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820198/09_Zamkowa_2_poistv.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Zamek Nowy Dwór",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820230/09_Zamkowa_bkebtt.jpg",
        description: "",
        albums: ["Zamki"],
        date: "09.11.2024"
    },
    {
        title: "Góra Parkowa (508 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820263/09_Parkowa_4_fl9eyn.jpg",
        description: "",
        albums: ["Wieże Widokowe", "Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Góra Parkowa (508 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820296/09_Parkowa_3_moqebh.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Schronisko Harcówka",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820330/09_Harc%C3%B3wka_2_anip4g.jpg",
        description: "",
        albums: ["Schroniska Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Schronisko Harcówka",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820364/09_Harc%C3%B3wka_tz4ehb.jpg",
        description: "",
        albums: ["Schroniska Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Wieża Widokowa Na Górze Parkowej",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820402/09_Parkowa_2_ot2hjn.jpg",
        description: "",
        albums: ["Wieże Widokowe"],
        date: "09.11.2024"
    },
    {
        title: "Wieża Widokowa Na Górze Parkowej",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820447/09_Parkowa_tgrza2.jpg",
        description: "",
        albums: ["Wieże Widokowe"],
        date: "09.11.2024"
    },
    {
        title: "Ptasia Kopa (590 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820480/09_Ptasia_Kopa_rioak3.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Lisi Kamień (600 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820518/09_Lisi_Kamie%C5%84_xgn8jp.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Czarnuszka (530 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820552/09_Czarnuszka_qbifaa.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Stróżek (517 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820582/09_Str%C3%B3%C5%BCek_pnedzn.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Wzgórze Gedymina (532 m)",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820615/09_Gedymin_iewysm.jpg",
        description: "",
        albums: ["Góry Wałbrzyskie", "Wieże Widokowe", "Szczyty Górskie"],
        date: "09.11.2024"
    },
    {
        title: "Urząd Miejski w Szczawnie-Zdroju",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820649/09_Szczawno_2_l7h94a.jpg",
        description: "",
        albums: ["Polska"],
        date: "09.11.2024"
    },
    {
        title: "Uzdrowisko Szczawno-Jedlina",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820680/09_Szczawno_1_lumf7d.jpg",
        description: "",
        albums: ["Polska"],
        date: "09.11.2024"
    },
    {
        title: "Wieża Anny",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820712/09_Anna_ek2i1d.jpg",
        description: "Szczawno-Zdrój",
        albums: ["Wieże Widokowe"],
        date: "09.11.2024"
    },
    {
        title: "Rynek z Figura Św. Jana Nepomucenta w Rozdrażewie",
        img: "https://res.cloudinary.com/diljpkw9f/image/upload/v1744820750/01_Rozdra%C5%BCew_gdwhpy.jpg",
        description: "",
        albums: ["Powiat Krotoszyński"],
        date: "01.11.2024"
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
