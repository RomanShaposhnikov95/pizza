 const headerTop = document.querySelector('.header-top');
 const headerBottom = document.querySelector('.header-bottom');
 const mobileMenu = document.querySelector('.header-bottom-menu');
 const openBtn = document.querySelector('.menuOpen-btn');




 window.onscroll = function () {
     if (document.body.scrollTop > headerTop.offsetHeight || document.documentElement.scrollTop > headerTop.offsetHeight) {
         headerBottom.style.position = 'fixed'
         document.body.style.top = `${headerBottom.offsetHeight + 'px'}`
     }
     else {
         headerBottom.style.position = 'static'
         document.body.style.top = '0'
     }
 };


 let open = false

 openBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('showMenu')
     open = !open
     setOpen()
 })

 const setOpen = () => {
     if(open) {
         document.body.style.overflow = 'hidden'
     } else {
         document.body.style.overflow = 'auto'
     }
 }