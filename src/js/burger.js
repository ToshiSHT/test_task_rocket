const burger = () => {
    const burgerButton = document.querySelector('.header_hamburger_menu');
    const mobileMenu = document.querySelector('.mobile_menu');
    const burgerLinks = document.querySelectorAll('.sidemenu ul li a');
    function toggleMobileMenu(btn, menu, links) {
        btn.addEventListener('click', function () {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('overflow');
        });
        links.forEach((closeBtn) => {
            closeBtn.addEventListener('click', () => {
                btn.classList.remove('active');
                menu.classList.remove('active');
                document.body.classList.remove('overflow');
            });
        });
    }
    toggleMobileMenu(burgerButton, mobileMenu, burgerLinks);
};
export default burger;
