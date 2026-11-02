/**
 * Contact Form & Clipboard Module
 */
(function() {
    const WEB3FORMS_ACCESS_KEY = "6452d4cb-1614-4d71-a975-1c8ec7400538";
    const RECIPIENT_EMAIL = "tranhuutri2311@gmail.com";

    /**
     * Handle Contact Form Submission to Web3Forms
     */
    async function handleContactSubmit(e) {
        e.preventDefault();
        const currentLang = window.getCurrentLang ? window.getCurrentLang() : (window.currentLang || 'en');
        const btn = document.getElementById('submit-btn');
        const feedback = document.getElementById('form-feedback');
        const nameInput = document.getElementById('sender-name');
        const emailInput = document.getElementById('sender-email');
        const messageInput = document.getElementById('sender-message');

        if (!btn || !nameInput || !emailInput || !messageInput) return;

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        btn.disabled = true;
        btn.innerHTML = `<span class="inline-block animate-spin mr-2">◌</span> ${currentLang === 'vi' ? 'Đang gửi...' : 'Sending...'}`;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: name,
                    email: email,
                    message: message,
                    subject: `New Portfolio Message from ${name}`,
                    from_name: "Portfolio Contact Form"
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                btn.innerHTML = `<span>✓ ${currentLang === 'vi' ? 'Đã gửi thành công' : 'Sent Successfully'}</span>`;
                if (feedback) {
                    feedback.innerText = currentLang === 'vi' 
                        ? `Tin nhắn đã gửi trực tiếp đến ${RECIPIENT_EMAIL}! Tôi sẽ phản hồi sớm.`
                        : `Message sent directly to ${RECIPIENT_EMAIL}! I will reply shortly.`;
                    feedback.classList.remove('hidden');
                }
                e.target.reset();
            } else {
                throw new Error(result.message || 'API returned error');
            }
        } catch (err) {
            btn.disabled = false;
            btn.innerHTML = `<span>${currentLang === 'vi' ? 'Gửi Tin nhắn' : 'Send Message'}</span>`;
            window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
        }
    }

    /**
     * Copy Email to Clipboard Action
     */
    function copyEmail() {
        const currentLang = window.getCurrentLang ? window.getCurrentLang() : (window.currentLang || 'en');
        try {
            navigator.clipboard.writeText(RECIPIENT_EMAIL);
        } catch (err) {
            const tempInput = document.createElement("input");
            tempInput.value = RECIPIENT_EMAIL;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }

        const copyText = document.getElementById("copy-text");
        if (copyText) {
            copyText.innerText = currentLang === 'vi' ? "Đã chép Email!" : "Email Copied!";
            setTimeout(() => {
                copyText.innerText = currentLang === 'vi' ? "Sao chép Email" : "Copy Email";
            }, 2500);
        }
    }

    /**
     * Direct Email Action (copies to clipboard and opens web compose/client)
     */
    function openDirectEmail(e) {
        if (e) e.preventDefault();
        const currentLang = window.getCurrentLang ? window.getCurrentLang() : (window.currentLang || 'en');

        // 1. Copy to clipboard
        try {
            navigator.clipboard.writeText(RECIPIENT_EMAIL);
        } catch (err) {
            const tempInput = document.createElement("input");
            tempInput.value = RECIPIENT_EMAIL;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }

        // 2. Show tooltip on email button
        const tip = document.getElementById("email-tooltip");
        if (tip) {
            tip.innerText = currentLang === 'vi' ? "Đã chép: tranhuutri2311@gmail.com" : "Copied: tranhuutri2311@gmail.com";
            tip.classList.remove("opacity-0", "pointer-events-none");
            tip.classList.add("opacity-100");
            setTimeout(() => {
                tip.classList.add("opacity-0", "pointer-events-none");
                tip.classList.remove("opacity-100");
            }, 3000);
        }

        // 3. Open Gmail in web compose, with fallback to mailto
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=Portfolio%20Inquiry`;
        const win = window.open(gmailUrl, "_blank");
        if (!win || win.closed || typeof win.closed === 'undefined') {
            window.location.href = `mailto:${RECIPIENT_EMAIL}`;
        }
    }

    function initContact() {}

    window.handleContactSubmit = handleContactSubmit;
    window.copyEmail = copyEmail;
    window.openDirectEmail = openDirectEmail;
    window.initContact = initContact;
})();
