const container = document.getElementsByClassName('music-sound')[0];
const btn = document.getElementsByClassName('settings')[0];
let flag = true;

btn.addEventListener('click', () => {
    if (flag) {
        btn.classList.add('open');
        container.classList.add('add');
        flag = false;
    }
    else {
        btn.classList.remove('open');
        container.classList.remove('add');
        flag = true;
    }
});