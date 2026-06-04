const slider = document.querySelector('html');

let isDown = false;
let startY;
let scrollTop;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging');

    startY = e.pageY;
    scrollTop = slider.scrollTop;
});

window.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    e.preventDefault();

    const walk = e.pageY - startY;
    slider.scrollTop = scrollTop - walk;
});

slider.addEventListener('touchstart', (e) => {
    startY = e.touches[0].pageY;
    scrollTop = slider.scrollTop;
});

slider.addEventListener('touchmove', (e) => {
    const walk = e.touches[0].pageY - startY;
    slider.scrollTop = scrollTop - walk;
});