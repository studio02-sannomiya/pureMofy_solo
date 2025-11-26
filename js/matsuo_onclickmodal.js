(function () {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.getElementById('closeBtn');
    const images = document.querySelectorAll('.click-image');
    let lastFocused;

    function openModal(title, text, trigger) {
        lastFocused = trigger;
        modalTitle.textContent = title;
        modalBody.textContent = text;
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        modal.focus();
        document.documentElement.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = '';
        if (lastFocused) lastFocused.focus();
    }

    images.forEach(img => {
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.addEventListener('click', () => {
            openModal(img.dataset.title, img.dataset.text, img);
        });
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') openModal(img.dataset.title, img.dataset.text, img);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusable = modal.querySelectorAll('a[href],button,textarea,input,select,[tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });
})();