document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDeafult();

        DocumentFragment.querySelector(this.getAttribute('href')).scrollintoView({
            behavior: 'smooth'
        });
    });
});