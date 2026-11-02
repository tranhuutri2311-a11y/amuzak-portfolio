/**
 * Internationalization (i18n) Module
 */
(function() {
    let currentLang = 'en';

    function getCurrentLang() {
        return currentLang;
    }

    function setLanguage(lang) {
        currentLang = lang;
        window.currentLang = lang;

        const data = window.i18n || window.i18nData;
        if (!data) return;

        const indicator = document.getElementById('lang-indicator');
        if (indicator) {
            indicator.innerText = lang.toUpperCase();
        }

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[lang] && data[lang][key]) {
                el.innerHTML = data[lang][key];
            }
        });

        // Update close button in modal if present
        const closeBtn = document.getElementById('modal-close-btn');
        if (closeBtn && data[lang] && data[lang]["modal.close"]) {
            closeBtn.innerText = data[lang]["modal.close"];
        }
    }

    function toggleLanguage() {
        setLanguage(currentLang === 'en' ? 'vi' : 'en');
    }

    function initI18n() {
        setLanguage('en');
    }

    window.getCurrentLang = getCurrentLang;
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;
    window.initI18n = initI18n;
})();
