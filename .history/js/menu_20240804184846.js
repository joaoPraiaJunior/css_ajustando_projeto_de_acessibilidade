function menu() {

    const elementos = {
        itensDeMenu: '[data-js="item-menu"]',
        submenus: '[data-js="submenu"]',
        popup: '[data-js="popup"]',
        icone: '[data-js="icone"]',
    }

    const itensDeMenu = document.querySelectorAll(elementos.itensDeMenu);

    itensDeMenu.forEach(item => {

        item.addEventListener('mouseover', () => alternaSubmenu(item, true));
        item.addEventListener('mouseout', () => alternaSubmenu(item, false));

        item.addEventListener('click', function () {
            const submenu = item.querySelector(elementos.submenus);
            const mostraSubmenu = submenu.style.display === 'none';
            alternaSubmenu(item, mostraSubmenu);
        });

    });

    function alternaSubmenu(item, mostraSubmenu) {
        const submenu = item.querySelector(elementos.submenus);
        const popup = item.querySelector(elementos.popup);
        const icone = item.querySelector(elementos.icone);

        if(submenu) {
            submenu.style.display = !mostraSubmenu ? 'none' : 'block';
            popup.setAttribute('aria-expanded', !mostraSubmenu ? 'false' : 'true');
            icone.classList.toggle('active');
        }
    }

}


export default menu;