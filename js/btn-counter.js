(function() {
    const item = document.querySelectorAll('.products-content-item');
    const emptyCart = document.querySelector('.empty-cart');
    const fullCart = document.querySelector('.full-cart');

    item.forEach(el => {
        const total = el.querySelector('.total-quantity');
        const btnWrap = el.querySelectorAll('.button-wrap');

        let result = ''

        btnWrap.forEach(btnEl => {
            const btn = btnEl.querySelector('.btn-one-buy');
            const counter = btnEl.querySelector('.counter-block');

            let count = 0;

            btn.addEventListener('click', () => {
                ++count
                createCounter(counter,count);

                total.innerHTML = ++result + `<span class="x">x</span>` ;

                if(!el.classList.contains('swiper-slide') && window.matchMedia("(max-width: 900px)").matches) {
                    el.classList.add('bord');
                }


                emptyCart.classList.add('d-none');
                fullCart.classList.remove('d-none');
            })
        })
    })

    const createCounter = (block,count) => {
        block.innerHTML = '';

        const counter = document.createElement('span');
        counter.classList.add('counter-circle');
        counter.innerHTML = count;

        block.appendChild(counter);
    }

})();