 const headerTop = document.querySelector('.header-top');
 const headerBottom = document.querySelector('.header-bottom');
 const header = document.querySelector('.header');
 const info = document.querySelector('.info');
 const mobileMenu = document.querySelector('.header-bottom-menu');
 const openBtn = document.querySelector('.menuOpen-btn');
 const openSvg = document.querySelector('.open-svg');
 const closeSvg = document.querySelector('.close-svg');



 window.onscroll = function () {
     if (document.body.scrollTop > headerTop.offsetHeight || document.documentElement.scrollTop > headerTop.offsetHeight) {
         headerBottom.style.position = 'fixed';
         document.body.style.top = `${headerBottom.offsetHeight + 'px'}`;
         if (info) {
             document.body.style.top = `${headerBottom.offsetHeight + info.offsetHeight + 'px'}`;
             info.style.position = 'fixed';
             info.style.top = `${headerBottom.offsetHeight + 'px'}`;
         }
     }
     else {
         headerBottom.style.position = 'static';
         document.body.style.top = '0';
         if (info) {
             info.style.position = 'static';
         }
     }
 };


 let open = false;

 openBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('d-none');
     open = !open;
     setOpen();
 })

 const setOpen = () => {
     if(open) {
         document.body.style.overflow = 'hidden'
         openSvg.classList.add('d-none')
         closeSvg.classList.remove('d-none')
         mobileMenu.scrollTo(0,0)
     } else {
         document.body.style.overflow = 'auto'
         openSvg.classList.remove('d-none')
         closeSvg.classList.add('d-none')
     }
 }