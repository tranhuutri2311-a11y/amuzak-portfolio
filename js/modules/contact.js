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
        const tempInput = document.createElement("input");
        tempInput.value = RECIPIENT_EMAIL;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        const copyText = document.getElementById("copy-text");
        if (copyText) {
            copyText.innerText = currentLang === 'vi' ? "Đã chép Email!" : "Email Copied!";
            setTimeout(() => {
                copyText.innerText = currentLang === 'vi' ? "Sao chép Email" : "Copy Email";
            }, 2500);
        }
    }

    function initContact() {}

    window.handleContactSubmit = handleContactSubmit;
    window.copyEmail = copyEmail;
    window.initContact = initContact;
})();
