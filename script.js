const navSlide = () => {
    const burguer = document.querySelector('.nav_toggle');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');


    burguer.addEventListener('click', () => {
        //togle burguer
        nav.classList.toggle('burguer_active');
        //animate links
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.35}s`

            }
        });
        // to the x
    });
}

//navSlide();

/* for css
.burguer_active {
    transform: translatex(0%);
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
*/