document.querySelector('.header__nav-mobile').onclick = function() {
    document.querySelector('.header__nav-ul').classList.toggle('mobile__flex')
    this.textContent !== 'X' ? this.textContent = 'X' : this.innerHTML = '&#9776;';
}