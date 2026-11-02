/**
 * Application Entry Point & Bootstrapper
 * Orchestrates modules and UI lifecycle
 */
(function() {
    function initApp() {
        // 1. Initialize Lucide Icons
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // 2. Initialize Core Subsystems
        if (window.initSpotlight) window.initSpotlight();
        if (window.initI18n) window.initI18n();
        if (window.initModals) window.initModals();
        if (window.initFilter) window.initFilter();
        if (window.initContact) window.initContact();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();
