/**
 * Interactive Mouse Spotlight Tracker Module
 */
(function() {
    function initSpotlight() {
        const spotlight = document.getElementById('mouse-spotlight');
        if (!spotlight || !window.matchMedia('(pointer: fine)').matches) return;

        window.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        });
    }

    window.initSpotlight = initSpotlight;
})();
