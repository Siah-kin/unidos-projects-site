/**
 * Unidos Multilingual i18n System
 * Supports: English, Swahili, Kinyarwanda, French, Kirundi, Somali
 */

const TRANSLATIONS = {
    // Navigation
    nav: {
        about: { en: "About Us", sw: "Kuhusu Sisi", rw: "Abo turi", fr: "À Propos", rn: "Abo turi", so: "Naga" },
        programs: { en: "Programs", sw: "Programu", rw: "Porogaramu", fr: "Programmes", rn: "Porogaramu", so: "Barnaamijyada" },
        stories: { en: "Stories", sw: "Hadithi", rw: "Inkuru", fr: "Histoires", rn: "Inkuru", so: "Sheekooyinka" },
        diary: { en: "Diary", sw: "Kumbukumbu", rw: "Inyandiko", fr: "Journal", rn: "Inyandiko", so: "Xusuusta" },
        research: { en: "Research", sw: "Utafiti", rw: "Ubushakashatsi", fr: "Recherche", rn: "Ubushakashatsi", so: "Cilmi-baaris" },
        contact: { en: "Contact", sw: "Wasiliana", rw: "Twandikire", fr: "Contact", rn: "Twandikire", so: "Xiriir" },
        donate: { en: "Donate", sw: "Changia", rw: "Tanga", fr: "Faire un Don", rn: "Tanga", so: "Deeq bixi" }
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
            rw: "Umuryango uyobowe n'impunzi watsindiye ibihembo muri Nakivale, Ubugande. Kuva 2018: twatoje abahinzi 3,000+ mu gushushanya amashyamba y'ibiribwa, gukora imyanda y'ibiribwa 800 kg ku cyumweru tuyihindura ifumbire ry'inzoka, kwigisha abagore 700 guhinga ibihumyo n'isafune kama.",
            fr: "Organisation primée dirigée par des réfugiés à Nakivale, Ouganda. Depuis 2018: formé 3 000+ agriculteurs en conception de forêts comestibles, traité 800 kg de déchets alimentaires par semaine en compost de vers, enseigné à 700 femmes à cultiver des pleurotes et à fabriquer du savon biologique.",
            rn: "Umuryango uyobowe n'impunzi watsindiye ibihembo muri Nakivale, Ubugande. Kuva 2018: twatoje abahinzi 3,000+ mu gushushanya amashyamba y'ibiribwa, gukora imyanda y'ibiribwa 800 kg ku cyumweru tuyihindura ifumbire ry'inzoka, kwigisha abagore 700 guhinga ibihumyo n'isabune kama.",
            so: "Hay'ad qaxooti-hogaamisa oo abaal-marin ah Nakivale, Uganda. Laga bilaabay 2018: tababaray 3,000+ beeralay naqshadeynta kaymaha cuntada, habeeyay 800 kg qashinka cuntada toddobaad kasta oo loo beddelo digir-dirxi, baray 700 haween inay korinayaan boqoshada iyo sameynta saabuunta dabiiciga ah."
        },
        our_programs: { en: "Our Programs", sw: "Programu Zetu", rw: "Porogaramu Zacu", fr: "Nos Programmes", rn: "Porogaramu Zacu", so: "Barnaamijyadayada" },
        support_mission: { en: "Support Our Mission", sw: "Unga Mkono Dhamira Yetu", rw: "Dushyigikire", fr: "Soutenez Notre Mission", rn: "Dushyigikire", so: "Taageer Ujeeddadayada" }
    },

    // Programs
    programs: {
        page_title: { en: "Our Programs", sw: "Programu Zetu", rw: "Porogaramu Zacu", fr: "Nos Programmes", rn: "Porogaramu Zacu", so: "Barnaamijyadayada" },
        page_subtitle: { en: "Training programs in agriculture, health education, and income generation for refugees in Nakivale.", sw: "Programu za mafunzo katika kilimo, elimu ya afya, na kuzalisha kipato kwa wakimbizi huko Nakivale.", rw: "Porogaramu z'amahugurwa mu buhinzi, uburezi bw'ubuzima, n'umusaruro w'amafaranga ku mpunzi i Nakivale.", fr: "Programmes de formation en agriculture, éducation sanitaire et génération de revenus pour les réfugiés à Nakivale.", rn: "Porogaramu z'amahugurwa mu buhinzi, uburezi bw'ubuzima, n'umusaruro w'amafaranga ku mpunzi i Nakivale.", so: "Barnaamijyada tababarka ah ee beeraha, waxbarashada caafimaadka, iyo dakhliga qaxootiga Nakivale." },
        
        education_title: { en: "Education & Training", sw: "Elimu na Mafunzo", rw: "Uburezi n'Amahugurwa", fr: "Éducation & Formation", rn: "Uburezi n'Amahugurwa", so: "Waxbarasho & Tababar" },
        regesoil_title: { en: "REGESOIL", sw: "REGESOIL", rw: "REGESOIL", fr: "REGESOIL", rn: "REGESOIL", so: "REGESOIL" },
        mushroom_title: { en: "Mushroom Lab", sw: "Maabara ya Uyoga", rw: "Laboratoire y'Ibihumyo", fr: "Laboratoire de Champignons", rn: "Laboratoire y'Ibihumyo", so: "Shaybaarka Boqoshada" },
        biochar_title: { en: "Biochar", sw: "Biochar", rw: "Biochar", fr: "Biochar", rn: "Biochar", so: "Biochar" },
        women_empowerment: { en: "Women's Empowerment", sw: "Uwezeshaji wa Wanawake", rw: "Guha Abagore Imbaraga", fr: "Autonomisation des Femmes", rn: "Guha Abagore Imbaraga", so: "Xoojinta Haweenka" },
        
        learn_more: { en: "Learn More", sw: "Jifunze Zaidi", rw: "Soma Ibirenzeho", fr: "En Savoir Plus", rn: "Soma Ibirenzeho", so: "Wax badan Baro" }
    },

    // Contact
    contact: {
        page_title: { en: "Contact Us", sw: "Wasiliana Nasi", rw: "Twandikire", fr: "Contactez-nous", rn: "Twandikire", so: "Nala Xiriir" },
        location: { en: "Nakivale Refugee Settlement<br>Isingiro District, Uganda", sw: "Makazi ya Wakimbizi wa Nakivale<br>Wilaya ya Isingiro, Uganda", rw: "Ikambi y'Impunzi ya Nakivale<br>Akarere ka Isingiro, Ubugande", fr: "Camp de Réfugiés de Nakivale<br>District d'Isingiro, Ouganda", rn: "Ikambi y'Impunzi ya Nakivale<br>Akarere ka Isingiro, Ubugande", so: "Xero Qaxooti Nakivale<br>Degmada Isingiro, Uganda" },
        email_label: { en: "Email", sw: "Barua pepe", rw: "Imeyili", fr: "Email", rn: "Imeyili", so: "Iimaylka" },
        name_label: { en: "Your Name", sw: "Jina Lako", rw: "Izina Ryawe", fr: "Votre Nom", rn: "Izina Ryanyu", so: "Magacaaga" },
        message_label: { en: "Message", sw: "Ujumbe", rw: "Ubutumwa", fr: "Message", rn: "Ubutumwa", so: "Fariin" },
        send_button: { en: "Send Message", sw: "Tuma Ujumbe", rw: "Ohereza Ubutumwa", fr: "Envoyer le Message", rn: "Ohereza Ubutumwa", so: "Dir Fariinta" }
    },

    // Footer
    footer: {
        about_text: { en: "Refugee-led organization in Nakivale, Uganda. Since 2018: agricultural training, mushroom cultivation, women's health education, biochar production, and sanitation projects.", sw: "Shirika linaloongoziwa na wakimbizi huko Nakivale, Uganda. Tangu 2018: mafunzo ya kilimo, uzalishaji wa uyoga, elimu ya afya ya wanawake, uzalishaji wa biochar, na miradi ya usafi.", rw: "Umuryango uyobowe n'impunzi muri Nakivale, Ubugande. Kuva 2018: amahugurwa y'ubuhinzi, gutera ibihumyo, uburezi bw'ubuzima bw'abagore, gukora biochar, n'imishinga y'isuku.", fr: "Organisation dirigée par des réfugiés à Nakivale, Ouganda. Depuis 2018: formation agricole, culture de champignons, éducation sanitaire des femmes, production de biochar et projets d'assainissement.", rn: "Umuryango uyobowe n'impunzi muri Nakivale, Ubugande. Kuva 2018: amahugurwa y'ubuhinzi, gutera ibihumyo, uburezi bw'ubuzima bw'abagore, gukora biochar, n'imishinga y'isuku.", so: "Hay'ad qaxooti-hogaamisa Nakivale, Uganda. Laga bilaabay 2018: tababarka beeraha, korinta boqoshada, waxbarashada caafimaadka haweenka, soo saarista biochar, iyo mashruucyada nadaafadda." },
        quick_links: { en: "Quick Links", sw: "Viungo vya Haraka", rw: "Amahuza Yihuse", fr: "Liens Rapides", rn: "Amahuza Yihuse", so: "Xiriiriyeyaasha Degdegga ah" },
        copyright: { en: "© 2026 Unidos Projects. All rights reserved.", sw: "© 2026 Unidos Projects. Haki zote zimehifadhiwa.", rw: "© 2026 Unidos Projects. Uburenganzira bwose burabitswe.", fr: "© 2026 Unidos Projects. Tous droits réservés.", rn: "© 2026 Unidos Projects. Uburenganzira bwose burabitswe.", so: "© 2026 Unidos Projects. Xuquuqda oo dhan way xifdhan yihiin." }
    },

    // Common
    common: {
        select_language: { en: "Language", sw: "Lugha", rw: "Ururimi", fr: "Langue", rn: "Ururimi", so: "Luuqadda" },
        loading: { en: "Loading...", sw: "Inapakia...", rw: "Birimo kwakira...", fr: "Chargement...", rn: "Birimo kwakira...", so: "Soo raraya..." }
    }
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
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateLanguageButtons();
});

// Add language switcher to page
function createLanguageSwitcher() {
    return `
        <div class="language-switcher">
            <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">English</button>
            <button class="lang-btn" data-lang="sw" onclick="setLanguage('sw')">Kiswahili</button>
            <button class="lang-btn" data-lang="rw" onclick="setLanguage('rw')">Kinyarwanda</button>
            <button class="lang-btn" data-lang="fr" onclick="setLanguage('fr')">Français</button>
            <button class="lang-btn" data-lang="rn" onclick="setLanguage('rn')">Kirundi</button>
            <button class="lang-btn" data-lang="so" onclick="setLanguage('so')">Soomaali</button>
        </div>
    `;
}
