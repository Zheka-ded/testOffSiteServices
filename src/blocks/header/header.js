const headerNavBtn = document.querySelector('.header__nav-mobile');
const headerNavList = document.querySelector('.header__nav-ul');
const headerNavLink = document.querySelectorAll('.header__nav-link');
const openMenu = '&#9776;';

headerNavBtn.onclick = function() {
    headerNavList.classList.toggle('mobile__flex')
    this.textContent !== 'X' ? this.textContent = 'X' : this.innerHTML = openMenu;
    
    headerNavLink.forEach(item => item.onclick = () => {

        if(headerNavList.classList.contains('mobile__flex')){
            headerNavList.classList.remove('mobile__flex');
            headerNavBtn.innerHTML = openMenu;
        }

    })

}
