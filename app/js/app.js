const menuButton = document.querySelector('.header__show-button');
let menu = document.querySelector('.menu');

menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleMenu();
});
function handleMenu() {
    const display = window.getComputedStyle(menu, null).getPropertyValue("display");
    if (display === "flex") menu.style.display = '';
    if (display === 'none') menu.style.display  = 'flex';
}
