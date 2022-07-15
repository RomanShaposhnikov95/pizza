(function() {
    const headerBottom = document.querySelector('.header-bottom');
    const mobileMenu = document.querySelector('.header-bottom-menu');
    const openBtn = document.querySelector('.menuOpen-btn');
    const openSvg = document.querySelector('.open-svg');
    const closeSvg = document.querySelector('.close-svg');

    let topPos = Math.round(headerBottom.getBoundingClientRect().top + document.body.scrollTop);
    let open = false;

    window.addEventListener('scroll', () => {
        topPos = Math.round(headerBottom.getBoundingClientRect().top + document.body.scrollTop);
    })

    openBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('d-none');
        open = !open;
        setOpen();
    })

    const setOpen = () => {
        if (open) {
            document.body.style.overflow = 'hidden';
            openSvg.classList.add('d-none');
            closeSvg.classList.remove('d-none');
            mobileMenu.scrollTo(0,0);
            mobileMenu.style.minHeight = `calc(100vh - ( 50px + ${topPos}px))`;
        } else {
            document.body.style.overflow = 'auto';
            openSvg.classList.remove('d-none');
            closeSvg.classList.add('d-none');
        }
    }

})();
