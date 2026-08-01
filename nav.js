(function () {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.querySelector('.primary-navigation');
    if (!toggle || !nav) { return; }

    toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
})();
