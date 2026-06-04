const cards = document.querySelector('.cards');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let scrollAmount = 0;

rightBtn.addEventListener('click', () => {
    cards.scrollBy({ left: 320, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
    cards.scrollBy({ left: -320, behavior: 'smooth' });
});
