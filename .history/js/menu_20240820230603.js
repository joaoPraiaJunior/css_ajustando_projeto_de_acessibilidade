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
            const mostraSubmenu = submenu.style.display === 'block';
            alternaSubmenu(item, !mostraSubmenu);
        });
    });

    document.addEventListener('keydown', function (evento) {
        const tecla = evento.key;
        if (tecla === 'Escape') {
            itensDeMenu.forEach(item => alternaSubmenu(item, false));
        }
    });

    function alternaSubmenu(item, mostraSubmenu) {
        const submenu = item.querySelector(elementos.submenus);
        const popup = item.querySelector(elementos.popup);
        const icone = item.querySelector(elementos.icone);

        if(submenu) {
            submenu.style.display = mostraSubmenu ? 'block' : 'none';
            popup.setAttribute('aria-expanded', mostraSubmenu ? 'true' : 'false');
            // mostraSubmenu ? icone.classList.add('active') : icone.classList.remove('active');
            //O toogle pode passar um segundo parâmetro condicional.
            icone.classList.toggle('active', mostraSubmenu);
        }
    }
}

export default menu;