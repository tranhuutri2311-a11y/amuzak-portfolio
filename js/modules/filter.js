/**
 * Project Category Filter Module
 */
(function() {
    function filterProjects(category) {
        const items = document.querySelectorAll('.project-item');
        const buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(btn => {
            if (btn.dataset.category === category) {
                btn.classList.add('bg-white', 'text-black');
                btn.classList.remove('bg-surfaceMuted', 'text-textMuted');
            } else {
                btn.classList.remove('bg-white', 'text-black');
                btn.classList.add('bg-surfaceMuted', 'text-textMuted');
            }
        });

        items.forEach(item => {
            if (category === 'all' || item.dataset.type === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function initFilter() {}

    window.filterProjects = filterProjects;
    window.initFilter = initFilter;
})();
