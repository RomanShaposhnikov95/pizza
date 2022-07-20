(function() {
    const headerBottom = document.querySelector('.header-bottom');
    const mobileMenu = document.querySelector('.header-bottom-menu');
    const openBtn = document.querySelector('.menuOpen-btn');
    const openSvg = document.querySelector('.open-svg');
    const closeSvg = document.querySelector('.close-svg');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');


    let topPos = Math.round(headerBottom.getBoundingClientRect().top + document.body.scrollTop);
    let open = false;

    window.addEventListener('scroll', () => {
        topPos = Math.round(headerBottom.getBoundingClientRect().top + document.body.scrollTop);
    })

    openBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('d-none');
        open = !open;
        setOpen();
        overlayShow()
    })

    closeBtn.addEventListener('click', () => {
        closeMenu()
    })

    overlay.addEventListener('click', () => {
        closeMenu()
    })

    const closeMenu = () => {
        mobileMenu.classList.add('d-none')
        open = !open;
        setOpen();
        overlayShow()
    }

    const overlayShow = () => {
        if (window.matchMedia("(min-width: 900px)").matches && open) {
            overlay.classList.remove('d-none');
        } else {
            overlay.classList.add('d-none');
        }
    }

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
