const count = document.querySelector('.count');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

increase.addEventListener('click', () => {
    count.textContent = parseInt(count.textContent) + 1;
    counterColor();
});

decrease.addEventListener('click', () => {
    count.textContent = parseInt(count.textContent) - 1;
    counterColor();
});

reset.addEventListener('click', () => {
    count.textContent = 0;
    counterColor();
});

const counterColor = () => {
    if (parseInt(count.textContent) > 0) {
        count.style.color = 'green';
    } else if (parseInt(count.textContent) < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
};
