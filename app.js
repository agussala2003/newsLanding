let burguer = document.getElementById('burguer');
let closer = document.getElementById('close');
let menu = document.querySelector('.fullMenu')
let value = false;

function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
    
    function enable() {
    window.onscroll = function() {};
}
window.innerWidth > 768 ? document.querySelector('.banner').src = './assets/images/image-web-3-desktop.jpg': ''
burguer.addEventListener('click', () => {
    menu.className = 'fullMenuActive'
    disable()
});
closer.addEventListener('click', () => {
    menu.className = 'fullMenu'
    enable()
});