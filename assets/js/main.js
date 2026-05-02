/**
 * =========================================================================
 * ARTHI TAMU HARVEST — Main JavaScript
 * Premium Organic Wellness Brand
 * =========================================================================
 *
 * HOW TO UPDATE:
 * - WhatsApp number: Change WHATSAPP_NUMBER below
 * - WhatsApp messages: Edit the MESSAGES object below
 * - Field Notes: Edit the FIELD_NOTES array below (see instructions)
 * - Social links: Update the href attributes directly in index.html
 *
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // CONFIGURATION — Edit these values to update the site
    // =====================================================================

    /**
     * UPDATE WHATSAPP NUMBER HERE
     * Format: Country code + number, no spaces or dashes
     * Kenya example: 254 + 0704609504 (drop the leading 0) = 254704609504
     */
    const WHATSAPP_NUMBER = '254704609504';

    /**
     * UPDATE WHATSAPP PREFILLED MESSAGES HERE
     * Each key corresponds to a data-message attribute in the HTML
     */
    const MESSAGES = {
        general: "Hello Arthi Tamu Harvest, I would like to learn more about your purple sweet potatoes.",
        wholesale: "Hello Arthi Tamu Harvest, I am interested in wholesale purple sweet potato orders.",
        partner: "Hello Arthi Tamu Harvest, I would like to discuss a partnership opportunity.",
        retail: "Hello Arthi Tamu Harvest, I would like to order purple sweet potatoes.",
        restaurant: "Hello Arthi Tamu Harvest, I represent a restaurant and would like to discuss supply."
    };


    // =====================================================================
    // WHATSAPP LINKS — Opens WhatsApp with prefilled message
    // =====================================================================
    const setupWhatsAppLinks = () => {
        // Select all WhatsApp buttons and links
        const waLinks = document.querySelectorAll('.btn-whatsapp, .whatsapp-link, .inquiry-link');

        waLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const msgKey = link.getAttribute('data-message') || 'general';
                const message = MESSAGES[msgKey] || MESSAGES.general;
                const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            });
        });
    };


    // =====================================================================
    // NAVBAR — Scroll effect (transparent → solid)
    // =====================================================================
    const setupNavbar = () => {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    };


    // =====================================================================
    // MOBILE MENU — Toggle open/close
    // =====================================================================
    const setupMobileMenu = () => {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const closeBtn = document.querySelector('.mobile-close-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileOverlay = document.querySelector('.mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

        if (!menuBtn || !mobileMenu || !mobileOverlay) return;

        const toggleMenu = () => {
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
        };

        menuBtn.addEventListener('click', toggleMenu);
        mobileOverlay.addEventListener('click', toggleMenu);
        if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
            });
        });
    };


    // =====================================================================
    // SCROLL REVEAL — Animate elements into view on scroll
    // =====================================================================
    const setupScrollReveals = () => {
        const reveals = document.querySelectorAll('.reveal');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            reveals.forEach(el => {
                if (el.getBoundingClientRect().top < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Trigger once on load
    };



    // =====================================================================
    // DYNAMIC YEAR — Footer copyright
    // =====================================================================
    const setYear = () => {
        const el = document.getElementById('year');
        if (el) el.textContent = new Date().getFullYear();
    };


    // =====================================================================
    // INITIALIZE EVERYTHING
    // =====================================================================
    setupWhatsAppLinks();
    setupNavbar();
    setupMobileMenu();
    setupScrollReveals();
    setYear();

});
