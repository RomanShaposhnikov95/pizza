(function() {
    const headerBottom = document.querySelector('.header-bottom');
    const pizzaSizeBlock = document.querySelector('.pizza-size');
    const infoBlock = document.querySelector('.info');
    const workTimeBlockWrap = document.querySelector('.wrap');
    const workTimeBlock = document.querySelector('.work-time');

    let workResult = 0;
    let result = 0;
    const infoBlockHeight = infoBlock ? infoBlock.offsetHeight : 0;


    window.addEventListener('load', () => {
         workTimeBlockWrap.style.height = `${workTimeBlock.clientHeight - infoBlock.clientHeight}px`;
         workResult = Math.round(workTimeBlock.getBoundingClientRect().bottom);
         result = Math.round(pizzaSizeBlock.getBoundingClientRect().top - headerBottom.offsetHeight);
    })

    window.addEventListener('scroll', () => {
         result = Math.round(pizzaSizeBlock.getBoundingClientRect().top - headerBottom.offsetHeight);
         workResult = Math.round(workTimeBlock.getBoundingClientRect().bottom);

         pizzaSizeBlock.style.top = `${headerBottom.offsetHeight + infoBlockHeight}px`;

         if (result - infoBlockHeight <= 0 ) {
            pizzaSizeBlock.classList.add('scrollActive');
         } else {
            pizzaSizeBlock.classList.remove('scrollActive');
         }

         if (workResult <= headerBottom.offsetHeight) {
            infoBlock.style.top = `${headerBottom.offsetHeight}px`;
         } else {
            infoBlock.style.top = `-${headerBottom.offsetHeight}px`;
         }
    });
})();




