const links = document.querySelectorAll('.navbar-nav .nav-link');

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
