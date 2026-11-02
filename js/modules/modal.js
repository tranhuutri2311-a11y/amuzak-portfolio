/**
 * Case Study & Image Lightbox Modals Module
 */
(function() {
    /**
     * Open Case Study Details Modal
     */
    function openModal(id) {
        const lang = window.getCurrentLang ? window.getCurrentLang() : (window.currentLang || 'en');
        const contentDict = window.projectModalContent;
        const visualDict = window.projectVisuals;
        if (!contentDict) return;

        const data = (contentDict[lang] && contentDict[lang][id]) || (contentDict['en'] && contentDict['en'][id]);
        if (!data) return;

        const tagEl = document.getElementById('modal-tag');
        const titleEl = document.getElementById('modal-title');
        const bodyEl = document.getElementById('modal-body');

        if (tagEl) tagEl.innerText = data.tag;
        if (titleEl) titleEl.innerText = data.title;
        
        const visualHtml = (visualDict && visualDict[data.visualKey]) || '';

        if (bodyEl) {
            bodyEl.innerHTML = `
                <div class="space-y-2">
                    ${visualHtml}
                    ${data.imageCaption ? `<div class="p-2 text-[11px] font-mono text-neutral-400 bg-surfaceMuted/60 border border-surfaceBorder rounded-lg text-center flex items-center justify-center gap-1.5"><i data-lucide="eye" class="w-3.5 h-3.5"></i> ${data.imageCaption}</div>` : ''}
                </div>
                <div class="space-y-4 pt-2">${data.content}</div>
            `;
        }
        
        // Reinitialize lucide icons for newly inserted modal content
        if (window.lucide) {
            window.lucide.createIcons();
        }

        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * Close Case Study Details Modal
     */
    function closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
        
        const imageModal = document.getElementById('image-modal');
        if (!imageModal || imageModal.classList.contains('hidden')) {
            document.body.style.overflow = 'auto';
        }
    }

    /**
     * Open Image Lightbox Modal (Full Resolution In-Page Preview)
     */
    function openImageModal(src, caption) {
        const imageModal = document.getElementById('image-modal');
        const img = document.getElementById('lightbox-img');
        const cap = document.getElementById('lightbox-caption');
        if (!imageModal || !img) return;

        img.src = src;
        img.alt = caption || 'Project Screenshot';
        if (cap) cap.innerText = caption || '';

        imageModal.classList.remove('hidden');
        imageModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * Close Image Lightbox Modal
     */
    function closeImageModal() {
        const imageModal = document.getElementById('image-modal');
        if (!imageModal) return;
        
        imageModal.classList.add('hidden');
        imageModal.classList.remove('flex');
        
        const projectModal = document.getElementById('modal');
        if (!projectModal || projectModal.classList.contains('hidden')) {
            document.body.style.overflow = 'auto';
        }
    }

    /**
     * Initialize Modal Key Listeners
     */
    function initModals() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const imageModal = document.getElementById('image-modal');
                if (imageModal && !imageModal.classList.contains('hidden')) {
                    closeImageModal();
                } else {
                    closeModal();
                }
            }
        });
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
    window.openImageModal = openImageModal;
    window.closeImageModal = closeImageModal;
    window.initModals = initModals;
})();
