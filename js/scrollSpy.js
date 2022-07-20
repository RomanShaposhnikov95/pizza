(function() {
    const headerBottom = document.querySelector('.header-bottom');
    const ScrollEl = document.querySelectorAll('.scroll-list');
    const infoBlock = document.querySelector('.info');

    const infoBlockHeight = infoBlock ? infoBlock.offsetHeight : 0;
    let fixedHeaderHeight = headerBottom.offsetHeight + infoBlockHeight;

    window.addEventListener('load', () => {
        fixedHeaderHeight = headerBottom.offsetHeight + infoBlockHeight;
        scrollFunc();
    });

    window.addEventListener('scroll', () => {
        fixedHeaderHeight = headerBottom.offsetHeight + infoBlockHeight;
        scrollFunc();
    });

    function scrollFunc() {
        let scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#scroll-content',
            offset: 100
        })

        ScrollEl.forEach(el => {
            const anchors = el.querySelectorAll('a[href*="#"]');

            for ( let anchor of anchors ) {
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
        });
    }

})();