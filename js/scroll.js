(function() {
    const headerBottom = document.querySelector('.header-bottom');
    const pizzaSizeBlock = document.querySelector('.pizza-size');
    const info = document.querySelector('.info');

    let result = Math.round(pizzaSizeBlock.getBoundingClientRect().top - headerBottom.offsetHeight);
    const infoTest = info ? info.offsetHeight : 0;

    window.addEventListener('scroll', () => {
         result = Math.round(pizzaSizeBlock.getBoundingClientRect().top - headerBottom.offsetHeight);
        if (pizzaSizeBlock) {
            pizzaSizeBlock.style.top = `${headerBottom.offsetHeight + infoTest}px`;

            if (result - infoTest <= 0 ) {
                pizzaSizeBlock.classList.add('scrollActive');
            } else {
                pizzaSizeBlock.classList.remove('scrollActive');
            }
        }
    });

    const fixedHeaderHeight = headerBottom.offsetHeight + infoTest;
    let scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#scroll-content',
        offset: fixedHeaderHeight
    })

    const anchors = headerBottom.querySelectorAll('a[href*="#"]');

    for ( let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const blockID = anchor.getAttribute('href');
            const top = document.querySelector('' + blockID).offsetTop - fixedHeaderHeight;

            window.scrollTo({
                top,
                left: 0,
                behavior: "smooth"
            })

        })
    }

})();

