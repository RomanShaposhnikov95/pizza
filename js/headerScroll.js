(function() {
    const headerTop = document.querySelector('.header-top');
    const headerBottom = document.querySelector('.header-bottom');

    let headTopResult = 0;

    window.addEventListener('load', () => {
        headerShow();
    })

    window.addEventListener('scroll', () => {
        headerShow();
    });

    function headerShow() {
        headTopResult = Math.round(headerTop.getBoundingClientRect().bottom);
        if (headTopResult <= 0) {
            headerBottom.classList.add('header-show');
            // headerBottom.style.maxHeight = '58px'
        } else {
            headerBottom.classList.remove('header-show');
            // headerBottom.style.maxHeight = 'unset'
        }
    }
})();