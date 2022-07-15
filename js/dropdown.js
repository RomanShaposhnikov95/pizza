(function() {

const dropDown = document.querySelectorAll('.cart-item-dropdown');


dropDown.forEach(el => {
    const btn = el.querySelector('.dd-toggle');
    const content = el.querySelector('.cart-item-dropdown-content');

    btn.addEventListener('click', () => {
        content.classList.toggle('d-none');
        btn.classList.toggle('dd-toggle-active');
    })


    const check = el.querySelectorAll('.check');
    const container = el.querySelector('.counter');
    check.forEach(elCheck => {
        elCheck.addEventListener('change', () => {
            checkboxes(el,container);
        })
    })
})


function checkboxes(elWrap, container) {
    let inputs = elWrap.getElementsByTagName("input");
    let inputObj;
    let selectedCount = 0;
    for(let count1 = 0; count1 < inputs.length; count1++) {
        inputObj = inputs[count1];
        const type = inputObj.getAttribute("type");
        if (type === 'checkbox' && inputObj.checked) {
            selectedCount++;
        }
    }
    createCounter(container,selectedCount);
}

const createCounter = (container,count) => {
    let counter = container.querySelector('.filter-counter');

    if (count === 0) {
        return container.innerHTML = '';
    }

    if (count === 1 && !counter) {
        counter = document.createElement('span');
        counter.classList.add('filter-counter');
        container.appendChild(counter);
    }

    if (counter) {
        counter.innerHTML = count;
    }
}

})();


