/* ========================================= Toggle style switcher ========================================= */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggle');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open')
})