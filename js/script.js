document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const headerNav = document.getElementById('header-nav');

    hamburger.addEventListener('click', () => {
        // Переключаем класс .open у меню
        headerNav.classList.toggle('open');
    });
});
