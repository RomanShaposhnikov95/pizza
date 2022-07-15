(function() {
    const control = document.querySelectorAll('.control');

    control.forEach(el => {
        const input = el.querySelector('.quantity');
        const result = el.querySelector('.quantity-value');
        const minus = el.querySelector('.decrement');
        const plus = el.querySelector('.increment');

        let counter = 0;

        minus.addEventListener('click', () => {
            --counter;
            if(counter <= 0) {
                counter = 0;
                minus.classList.add('d-none');
            }
            input.value = counter;
            result.innerHTML = counter;
        });

        plus.addEventListener('click', () => {
            ++counter;
            input.value = counter;
            result.innerHTML = counter;
            minus.classList.remove('d-none');
        });
    });

})();
