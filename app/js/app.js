const menuButton = document.querySelector('.header__show-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', (e) => {
    handleMenu();
    e.preventDefault();
});
function handleMenu() {
    const display = window.getComputedStyle(menu, null).getPropertyValue("display");
    if (display === "flex") menu.style.display = '';
    if (display === 'none') menu.style.display  = 'flex';
}
