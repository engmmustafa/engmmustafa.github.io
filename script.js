function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });
}
