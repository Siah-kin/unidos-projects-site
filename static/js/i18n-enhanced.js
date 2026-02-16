/**
 * Unidos Enhanced Multilingual i18n System
 * Supports: English, Swahili, Kinyarwanda, French, Kirundi, Somali
 * Enhanced with REGESOIL and Women's Circle translations
 */

const TRANSLATIONS = {
    // Navigation
    nav: {
        about: { en: "About Us", sw: "Kuhusu Sisi", rw: "Abo turi", fr: "À Propos", rn: "Abo turi", so: "Naga" },
        initiatives: { en: "Initiatives", sw: "Miradi", rw: "Imishinga", fr: "Initiatives", rn: "Imishinga", so: "Hindisaha" },
        programs: { en: "Programs", sw: "Programu", rw: "Porogaramu", fr: "Programmes", rn: "Porogaramu", so: "Barnaamijyada" },
        awards: { en: "Awards", sw: "Tuzo", rw: "Ibihembo", fr: "Prix", rn: "Ibihembo", so: "Abaalmarino" },
        blog: { en: "Blog", sw: "Blogu", rw: "Blogu", fr: "Blog", rn: "Blogu", so: "Blog" },
        history: { en: "History", sw: "Historia", rw: "Amateka", fr: "Histoire", rn: "Amateka", so: "Taariikh" },
        stories: { en: "Stories", sw: "Hadithi", rw: "Inkuru", fr: "Histoires", rn: "Inkuru", so: "Sheekooyinka" },
        diary: { en: "Diary", sw: "Kumbukumbu", rw: "Inyandiko", fr: "Journal", rn: "Inyandiko", so: "Xusuusta" },
        research: { en: "Research", sw: "Utafiti", rw: "Ubushakashatsi", fr: "Recherche", rn: "Ubushakashatsi", so: "Cilmi-baaris" },
        contact: { en: "Contact", sw: "Wasiliana", rw: "Twandikire", fr: "Contact", rn: "Twandikire", so: "Xiriir" },
        donate: { en: "Donate", sw: "Changia", rw: "Tanga", fr: "Faire un Don", rn: "Tanga", so: "Deeq bixi" }
    },

    // REGESOIL Initiative
    regesoil: {
        name: { en: "REGESOIL", sw: "REGESOIL", rw: "REGESOIL", fr: "REGESOIL", rn: "REGESOIL", so: "REGESOIL" },
        tagline: { en: "Regenerate the Soil", sw: "Fufua Udongo", rw: "Gusubiza Ubutaka", fr: "Régénérer le Sol", rn: "Gusubiza Ubutaka", so: "Soo Nooleeyo Ciidda" },
        description: {
            en: "Award-winning soil regeneration program",
            sw: "Mpango wa kufufua udongo unaopata tuzo",
            rw: "Porogaramu yatsindiye ibihembo yo gusubiza ubutaka",
            fr: "Programme primé de régénération des sols",
            rn: "Porogaramu yatsindiye ibihembo yo gusubiza ubutaka",
            so: "Barnaamij abaal-marin ah oo soo nooleeynaya ciidda"
        },
        overview_link: { en: "REGESOIL Overview", sw: "Muhtasari wa REGESOIL", rw: "Incamake ya REGESOIL", fr: "Aperçu REGESOIL", rn: "Incamake ya REGESOIL", so: "Dulmar REGESOIL" },

        // Programs
        vermicomposting: {
            en: "Permaculture & Vermicomposting",
            sw: "Permakulcha na Mbolea ya Minyoo",
            rw: "Permakulture n'Ifumbire ry'Inzoka",
            fr: "Permaculture & Vermicompostage",
            rn: "Permakulture n'Ifumbire ry'Inzoka",
            so: "Permakulchar & Digir-dirxi"
        },
        biochar: {
            en: "Biochar Production",
            sw: "Uzalishaji wa Biochar",
            rw: "Gukora Biochar",
            fr: "Production de Biochar",
            rn: "Gukora Biochar",
            so: "Soo Saaris Biochar"
        },
        food_forests: {
            en: "Food Forest Design",
            sw: "Kubuni Misitu ya Chakula",
            rw: "Gushushanya Amashyamba y'Ibiribwa",
            fr: "Conception de Forêts Comestibles",
            rn: "Gushushanya Amashyamba y'Ibiribwa",
            so: "Naqshadeynta Kaymaha Cuntada"
        },
        arborloo: {
            en: "Arborloo Toilets",
            sw: "Vyoo vya Arborloo",
            rw: "Ubwiherero bwa Arborloo",
            fr: "Toilettes Arborloo",
            rn: "Ubwiherero bwa Arborloo",
            so: "Musqulaha Arborloo"
        },
        training: {
            en: "Farmer Training",
            sw: "Mafunzo ya Wakulima",
            rw: "Amahugurwa y'Abahinzi",
            fr: "Formation des Agriculteurs",
            rn: "Amahugurwa y'Abahinzi",
            so: "Tababarka Beeralayda"
        },

        // Stats
        farmers_trained: { en: "Farmers Trained", sw: "Wakulima Waliofunzwa", rw: "Abahinzi Batojwe", fr: "Agriculteurs Formés", rn: "Abahinzi Batojwe", so: "Beeralay la Tababaray" },
        compost_produced: { en: "Worm Compost/Year", sw: "Mbolea ya Minyoo/Mwaka", rw: "Ifumbire ry'Inzoka/Umwaka", fr: "Compost de Vers/An", rn: "Ifumbire ry'Inzoka/Umwaka", so: "Digir-dirxi/Sannad" },
        food_forests: { en: "Food Forests", sw: "Misitu ya Chakula", rw: "Amashyamba y'Ibiribwa", fr: "Forêts Comestibles", rn: "Amashyamba y'Ibiribwa", so: "Kaymaha Cuntada" },

        // Awards
        award_winner: { en: "Award Winner", sw: "Mshindi wa Tuzo", rw: "Watsindiye Igihembo", fr: "Lauréat de Prix", rn: "Watsindiye Igihembo", so: "Ku Guuleystay Abaalmarinta" },
        awards_count: { en: "4-Time Award Winner", sw: "Mshindi wa Tuzo Mara 4", rw: "Yatsindiye Ibihembo 4", fr: "4× Lauréat de Prix", rn: "Yatsindiye Ibihembo 4", so: "4-Jeer Abaalmarinta Guuleystay" }
    },

    // Women's Circle Initiative
    womens_circle: {
        name: { en: "Women's Circle", sw: "Duara ya Wanawake", rw: "Uruziga rw'Abagore", fr: "Cercle des Femmes", rn: "Uruziga rw'Abagore", so: "Goobtada Haweenka" },
        tagline: { en: "Health, Income, Independence", sw: "Afya, Kipato, Uhuru", rw: "Ubuzima, Amafaranga, Ubwigenge", fr: "Santé, Revenu, Indépendance", rn: "Ubuzima, Amafaranga, Ubwigenge", so: "Caafimaad, Dakhli, Madax-banaan" },
        description: {
            en: "Empowering women through health & income",
            sw: "Kuwapa wanawake nguvu kupitia afya na kipato",
            rw: "Guha abagore imbaraga binyuze mu buzima n'amafaranga",
            fr: "Autonomiser les femmes par la santé et le revenu",
            rn: "Guha abagore imbaraga binyuze mu buzima n'amafaranga",
            so: "Xoojinta haweenka caafimaadka iyo dakhliga"
        },
        overview_link: { en: "Women's Circle Overview", sw: "Muhtasari wa Duara ya Wanawake", rw: "Incamake y'Uruziga rw'Abagore", fr: "Aperçu Cercle des Femmes", rn: "Incamake y'Uruziga rw'Abagore", so: "Dulmar Goobtada Haweenka" },

        // Programs
        health_education: {
            en: "Women's Health Education",
            sw: "Elimu ya Afya ya Wanawake",
            rw: "Uburezi bw'Ubuzima bw'Abagore",
            fr: "Éducation Sanitaire des Femmes",
            rn: "Uburezi bw'Ubuzima bw'Abagore",
            so: "Waxbarashada Caafimaadka Haweenka"
        },
        mushroom_lab: {
            en: "Mushroom Cultivation",
            sw: "Uzalishaji wa Uyoga",
            rw: "Gutera Ibihumyo",
            fr: "Culture de Champignons",
            rn: "Gutera Ibihumyo",
            so: "Korinta Boqoshada"
        },
        empowerment: {
            en: "Economic Empowerment",
            sw: "Uwezeshaji wa Kiuchumi",
            rw: "Guha Imbaraga mu Bukungu",
            fr: "Autonomisation Économique",
            rn: "Guha Imbaraga mu Bukungu",
            so: "Xoojinta Dhaqaalaha"
        },
        soap_making: {
            en: "Organic Soap Making",
            sw: "Kutengeneza Sabuni Asilia",
            rw: "Gukora Isabune Kama",
            fr: "Fabrication de Savon Biologique",
            rn: "Gukora Isabune Kama",
            so: "Sameynta Saabuunta Dabiiciga ah"
        },

        // Stats
        women_empowered: { en: "Women Empowered", sw: "Wanawake Waliopata Nguvu", rw: "Abagore Bahawe Imbaraga", fr: "Femmes Autonomisées", rn: "Abagore Bahawe Imbaraga", so: "Haween la Xoojiyay" },
        women_trained: { en: "Trained in Mushroom Farming", sw: "Waliofunzwa Uzalishaji wa Uyoga", rw: "Batojwe Gutera Ibihumyo", fr: "Formées en Culture de Champignons", rn: "Batojwe Gutera Ibihumyo", so: "La Tababaray Korinta Boqoshada" },
        support_groups: { en: "Monthly Support Groups", sw: "Vikundi vya Msaada vya Kila Mwezi", rw: "Amatsinda yo Gufasha ya Buri Kwezi", fr: "Groupes de Soutien Mensuels", rn: "Amatsinda yo Gufasha ya Buri Kwezi", so: "Kooxaha Taageerada Bisha" }
    },

    // Homepage
    home: {
        hero_title: {
            en: "Unidos Social Innovation Center",
            sw: "Kituo cha Uvumbuzi wa Kijamii cha Unidos",
            rw: "Ikigo cy'Ubuhanga Nyarubanza bwa Unidos",
            fr: "Centre d'Innovation Sociale Unidos",
            rn: "Ikigo c'Ubuhanga Nyarubanza bwa Unidos",
            so: "Xarunta Hal-abuurka Bulshada Unidos"
        },
        hero_subtitle: {
            en: "Award-winning refugee-led organization in Nakivale, Uganda. Since 2018: trained 3,000+ farmers in food forest design, processed 800 kg food waste weekly into worm compost, taught 700 women to grow oyster mushrooms and make organic soap.",
            sw: "Shirika linalopata tuzo linaloongoziwa na wakimbizi huko Nakivale, Uganda. Tangu 2018: tumefunza wakulima 3,000+ katika kubuni misitu ya chakula, kusindika taka za chakula 800 kg kwa wiki kuwa mbolea ya minyoo, kufundisha wanawake 700 kuotesha uyoga wa koakoa na kutengeneza sabuni asilia.",
            rw: "Umuryango uyobowe n'impunzi watsindiye ibihembo muri Nakivale, Ubugande. Kuva 2018: twatoje abahinzi 3,000+ mu gushushanya amashyamba y'ibiribwa, gukora imyanda y'ibiribwa 800 kg ku cyumweru tuyihindura ifumbire ry'inzoka, kwigisha abagore 700 guhinga ibihumyo n'isabune kama.",
            fr: "Organisation primée dirigée par des réfugiés à Nakivale, Ouganda. Depuis 2018: formé 3 000+ agriculteurs en conception de forêts comestibles, traité 800 kg de déchets alimentaires par semaine en compost de vers, enseigné à 700 femmes à cultiver des pleurotes et à fabriquer du savon biologique.",
            rn: "Umuryango uyobowe n'impunzi watsindiye ibihembo muri Nakivale, Ubugande. Kuva 2018: twatoje abahinzi 3,000+ mu gushushanya amashyamba y'ibiribwa, gukora imyanda y'ibiribwa 800 kg ku cyumweru tuyihindura ifumbire ry'inzoka, kwigisha abagore 700 guhinga ibihumyo n'isabune kama.",
            so: "Hay'ad qaxooti-hogaamisa oo abaal-marin ah Nakivale, Uganda. Laga bilaabay 2018: tababaray 3,000+ beeralay naqshadeynta kaymaha cuntada, habeeyay 800 kg qashinka cuntada toddobaad kasta oo loo beddelo digir-dirxi, baray 700 haween inay korinayaan boqoshada iyo sameynta saabuunta dabiiciga ah."
        },
        our_programs: { en: "Our Programs", sw: "Programu Zetu", rw: "Porogaramu Zacu", fr: "Nos Programmes", rn: "Porogaramu Zacu", so: "Barnaamijyadayada" },
        support_mission: { en: "Support Our Mission", sw: "Unga Mkono Dhamira Yetu", rw: "Dushyigikire", fr: "Soutenez Notre Mission", rn: "Dushyigikire", so: "Taageer Ujeeddadayada" },

        // Initiatives Showcase
        our_initiatives: { en: "Our Initiatives", sw: "Miradi Yetu", rw: "Imishinga Yacu", fr: "Nos Initiatives", rn: "Imishinga Yacu", so: "Hindisahayaga" },
        initiatives_intro: {
            en: "Unidos operates through two major initiatives that work together to transform lives in Nakivale Refugee Settlement",
            sw: "Unidos inafanya kazi kupitia miradi miwili mikubwa inayofanya kazi pamoja kubadilisha maisha katika Kambi ya Wakimbizi wa Nakivale",
            rw: "Unidos ikorera binyuze mu mishinga ibiri y'ingenzi ikorana kugira ngo ihindure ubuzima mu kambi y'impunzi ya Nakivale",
            fr: "Unidos opère à travers deux initiatives majeures qui travaillent ensemble pour transformer les vies dans le camp de réfugiés de Nakivale",
            rn: "Unidos ikorera binyuze mu mishinga ibiri y'ingenzi ikorana kugira ngo ihindure ubuzima mu kambi y'impunzi ya Nakivale",
            so: "Unidos waxay ka shaqeysaa laba hindisoood oo waaweyn oo si wadajir ah u shaqeeya si ay u beddelaan nolosha Xerada Qaxootiga Nakivale"
        },
        explore_initiative: { en: "Explore", sw: "Chunguza", rw: "Reba", fr: "Explorer", rn: "Reba", so: "Baadh" },
        learn_more: { en: "Learn More", sw: "Jifunze Zaidi", rw: "Soma Ibirenzeho", fr: "En Savoir Plus", rn: "Soma Ibirenzeho", so: "Wax badan Baro" }
    },

    // Programs
    programs: {
        page_title: { en: "Our Programs", sw: "Programu Zetu", rw: "Porogaramu Zacu", fr: "Nos Programmes", rn: "Porogaramu Zacu", so: "Barnaamijyadayada" },
        page_subtitle: {
            en: "Training programs in agriculture, health education, and income generation for refugees in Nakivale.",
            sw: "Programu za mafunzo katika kilimo, elimu ya afya, na kuzalisha kipato kwa wakimbizi huko Nakivale.",
            rw: "Porogaramu z'amahugurwa mu buhinzi, uburezi bw'ubuzima, n'umusaruro w'amafaranga ku mpunzi i Nakivale.",
            fr: "Programmes de formation en agriculture, éducation sanitaire et génération de revenus pour les réfugiés à Nakivale.",
            rn: "Porogaramu z'amahugurwa mu buhinzi, uburezi bw'ubuzima, n'umusaruro w'amafaranga ku mpunzi i Nakivale.",
            so: "Barnaamijyada tababarka ah ee beeraha, waxbarashada caafimaadka, iyo dakhliga qaxootiga Nakivale."
        }
    },

    // About
    about: {
        page_title: { en: "About Unidos", sw: "Kuhusu Unidos", rw: "Abo Unidos turi", fr: "À Propos d'Unidos", rn: "Abo Unidos turi", so: "Ku saabsan Unidos" },
        who_we_are: { en: "Who We Are", sw: "Sisi Ni Nani", rw: "Abo turi", fr: "Qui Sommes-Nous", rn: "Abo turi", so: "Wax aan nahay" },
        our_story: { en: "Our Story", sw: "Hadithi Yetu", rw: "Inkuru Yacu", fr: "Notre Histoire", rn: "Inkuru Yacu", so: "Sheekooyinkayaga" },
        our_team: { en: "Our Team", sw: "Timu Yetu", rw: "Itsinda Ryacu", fr: "Notre Équipe", rn: "Itsinda Ryacu", so: "Kooxdayada" },
        founders: { en: "Founders", sw: "Waanzilishi", rw: "Abashinze", fr: "Fondateurs", rn: "Abashinze", so: "Aasaasayaal" }
    },

    // Awards
    awards: {
        page_title: { en: "Awards & Recognition", sw: "Tuzo na Utambuzi", rw: "Ibihembo n'Icyubahiro", fr: "Prix & Reconnaissance", rn: "Ibihembo n'Icyubahiro", so: "Abaalmarino & Aqoonsiga" },
        page_subtitle: {
            en: "Honored by international organizations for refugee-led innovation in soil regeneration, women's empowerment, and sustainable agriculture.",
            sw: "Kuthaminiwa na mashirika ya kimataifa kwa uvumbuzi unaoongoziwa na wakimbizi katika ufufuaji wa udongo, uwezeshaji wa wanawake, na kilimo endelevu.",
            rw: "Guhabwa icyubahiro n'imiryango mpuzamahanga ku buhanga nyarubanza buyoboye n'impunzi mu gusubiza ubutaka, guha abagore imbaraga, n'ubuhinzi burambye.",
            fr: "Honoré par des organisations internationales pour l'innovation dirigée par les réfugiés en régénération des sols, autonomisation des femmes et agriculture durable.",
            rn: "Guhabwa icyubahiro n'imiryango mpuzamahanga ku buhanga nyarubanza buyoboye n'impunzi mu gusubiza ubutaka, guha abagore imbaraga, n'ubuhinzi burambye.",
            so: "Waxaa sharfay uruuro caalami ah oo abaal-marinaya hal-abuurka qaxootiga-hoggaaminaya ee ku saabsan soo-nooleeynta ciidda, xoojinta haweenka, iyo beeraha waara."
        },
        recognition: { en: "Recognition", sw: "Utambuzi", rw: "Icyubahiro", fr: "Reconnaissance", rn: "Icyubahiro", so: "Aqoonsiga" },
        award_year: { en: "Year", sw: "Mwaka", rw: "Umwaka", fr: "Année", rn: "Umwaka", so: "Sanadka" },
        award_amount: { en: "Amount", sw: "Kiasi", rw: "Amafaranga", fr: "Montant", rn: "Amafaranga", so: "Qaddarka" }
    },

    // Contact
    contact: {
        page_title: { en: "Contact Us", sw: "Wasiliana Nasi", rw: "Twandikire", fr: "Contactez-nous", rn: "Twandikire", so: "Nala Xiriir" },
        location: {
            en: "Nakivale Refugee Settlement<br>Isingiro District, Uganda",
            sw: "Makazi ya Wakimbizi wa Nakivale<br>Wilaya ya Isingiro, Uganda",
            rw: "Ikambi y'Impunzi ya Nakivale<br>Akarere ka Isingiro, Ubugande",
            fr: "Camp de Réfugiés de Nakivale<br>District d'Isingiro, Ouganda",
            rn: "Ikambi y'Impunzi ya Nakivale<br>Akarere ka Isingiro, Ubugande",
            so: "Xero Qaxooti Nakivale<br>Degmada Isingiro, Uganda"
        },
        email_label: { en: "Email", sw: "Barua pepe", rw: "Imeyili", fr: "Email", rn: "Imeyili", so: "Iimaylka" },
        name_label: { en: "Your Name", sw: "Jina Lako", rw: "Izina Ryawe", fr: "Votre Nom", rn: "Izina Ryanyu", so: "Magacaaga" },
        message_label: { en: "Message", sw: "Ujumbe", rw: "Ubutumwa", fr: "Message", rn: "Ubutumwa", so: "Fariin" },
        send_button: { en: "Send Message", sw: "Tuma Ujumbe", rw: "Ohereza Ubutumwa", fr: "Envoyer le Message", rn: "Ohereza Ubutumwa", so: "Dir Fariinta" }
    },

    // Footer
    footer: {
        about_text: {
            en: "Refugee-led organization in Nakivale, Uganda. Since 2018: agricultural training, mushroom cultivation, women's health education, biochar production, and sanitation projects.",
            sw: "Shirika linaloongoziwa na wakimbizi huko Nakivale, Uganda. Tangu 2018: mafunzo ya kilimo, uzalishaji wa uyoga, elimu ya afya ya wanawake, uzalishaji wa biochar, na miradi ya usafi.",
            rw: "Umuryango uyobowe n'impunzi muri Nakivale, Ubugande. Kuva 2018: amahugurwa y'ubuhinzi, gutera ibihumyo, uburezi bw'ubuzima bw'abagore, gukora biochar, n'imishinga y'isuku.",
            fr: "Organisation dirigée par des réfugiés à Nakivale, Ouganda. Depuis 2018: formation agricole, culture de champignons, éducation sanitaire des femmes, production de biochar et projets d'assainissement.",
            rn: "Umuryango uyobowe n'impunzi muri Nakivale, Ubugande. Kuva 2018: amahugurwa y'ubuhinzi, gutera ibihumyo, uburezi bw'ubuzima bw'abagore, gukora biochar, n'imishinga y'isuku.",
            so: "Hay'ad qaxooti-hogaamisa Nakivale, Uganda. Laga bilaabay 2018: tababarka beeraha, korinta boqoshada, waxbarashada caafimaadka haweenka, soo saarista biochar, iyo mashruucyada nadaafadda."
        },
        quick_links: { en: "Quick Links", sw: "Viungo vya Haraka", rw: "Amahuza Yihuse", fr: "Liens Rapides", rn: "Amahuza Yihuse", so: "Xiriiriyeyaasha Degdegga ah" },
        copyright: { en: "© 2026 Unidos Projects. All rights reserved.", sw: "© 2026 Unidos Projects. Haki zote zimehifadhiwa.", rw: "© 2026 Unidos Projects. Uburenganzira bwose burabitswe.", fr: "© 2026 Unidos Projects. Tous droits réservés.", rn: "© 2026 Unidos Projects. Uburenganzira bwose burabitswe.", so: "© 2026 Unidos Projects. Xuquuqda oo dhan way xifdhan yihiin." }
    },

    // Common
    common: {
        select_language: { en: "Language", sw: "Lugha", rw: "Ururimi", fr: "Langue", rn: "Ururimi", so: "Luuqadda" },
        loading: { en: "Loading...", sw: "Inapakia...", rw: "Birimo kwakira...", fr: "Chargement...", rn: "Birimo kwakira...", so: "Soo raraya..." },
        read_more: { en: "Read More", sw: "Soma Zaidi", rw: "Soma Byinshi", fr: "Lire Plus", rn: "Soma Byinshi", so: "Akhri Wax Dheeraad ah" },
        view_all: { en: "View All", sw: "Ona Zote", rw: "Reba Byose", fr: "Voir Tout", rn: "Reba Byose", so: "Arag Dhammaan" },
        back: { en: "Back", sw: "Rudi", rw: "Subira", fr: "Retour", rn: "Subira", so: "Dib u noqo" }
    }
};

// Language metadata
const LANGUAGES = {
    en: { name: "English", nativeName: "English", flag: "🇬🇧" },
    sw: { name: "Swahili", nativeName: "Kiswahili", flag: "🇹🇿" },
    rw: { name: "Kinyarwanda", nativeName: "Ikinyarwanda", flag: "🇷🇼" },
    fr: { name: "French", nativeName: "Français", flag: "🇫🇷" },
    rn: { name: "Kirundi", nativeName: "Ikirundi", flag: "🇧🇮" },
    so: { name: "Somali", nativeName: "Soomaali", flag: "🇸🇴" }
};

// Current language (default to English)
let currentLang = localStorage.getItem('unidos_language') || 'en';

// Get translation
function t(path, lang = currentLang) {
    const keys = path.split('.');
    let value = TRANSLATIONS;

    for (const key of keys) {
        value = value[key];
        if (!value) return path;
    }

    return value[lang] || value.en || path;
}

// Set language
function setLanguage(lang) {
    if (!['en', 'sw', 'rw', 'fr', 'rn', 'so'].includes(lang)) {
        console.error('Unsupported language:', lang);
        return;
    }

    currentLang = lang;
    localStorage.setItem('unidos_language', lang);
    updatePageContent();
    updateLanguageButtons();

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Update all page content
function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
    });
}

// Update language button active state
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });

    // Update dropdown if exists
    const langDropdown = document.getElementById('current-language');
    if (langDropdown) {
        const langData = LANGUAGES[currentLang];
        langDropdown.innerHTML = `${langData.flag} ${langData.nativeName}`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set HTML lang attribute
    document.documentElement.lang = currentLang;

    // Update content
    updatePageContent();
    updateLanguageButtons();

    // Insert language switcher if placeholder exists
    const langSwitcherPlaceholder = document.getElementById('language-switcher-placeholder');
    if (langSwitcherPlaceholder) {
        langSwitcherPlaceholder.innerHTML = createLanguageSwitcher();
    }
});

// Create language switcher dropdown for navigation
function createLanguageSwitcher() {
    return `
        <div class="language-switcher-dropdown">
            <button class="lang-dropdown-btn" id="current-language" onclick="toggleLanguageDropdown()">
                ${LANGUAGES[currentLang].flag} ${LANGUAGES[currentLang].nativeName}
            </button>
            <div class="lang-dropdown-menu" id="lang-dropdown-menu">
                ${Object.keys(LANGUAGES).map(lang => `
                    <button
                        class="lang-option ${lang === currentLang ? 'active' : ''}"
                        data-lang="${lang}"
                        onclick="selectLanguage('${lang}')">
                        ${LANGUAGES[lang].flag} ${LANGUAGES[lang].nativeName}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Toggle language dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown-menu');
    dropdown.classList.toggle('show');

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!e.target.matches('.lang-dropdown-btn') && !e.target.closest('.language-switcher-dropdown')) {
            dropdown.classList.remove('show');
            document.removeEventListener('click', closeDropdown);
        }
    });
}

// Select language from dropdown
function selectLanguage(lang) {
    setLanguage(lang);
    document.getElementById('lang-dropdown-menu').classList.remove('show');
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { t, setLanguage, LANGUAGES, TRANSLATIONS };
}
