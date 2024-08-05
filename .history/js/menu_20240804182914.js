function menu() {

    const elementos = {
        itensDeMenu: '[data-js="item-menu"]',
    }

    const itensDeMenu = document.querySelectorAll(elementos.itensDeMenu);

    itensDeMenu.forEach(item => {

        item.addEventListener('mouseover', () => alternaSubmenu(item, true));
        item.addEventListener('mouseout', () => alternaSubmenu(item, false));

        item.addEventListener('click', function () {
            const submenu = item.querySelector('[data-js="submenu"]');
            const mostraSubmenu = submenu.style.display === 'block';
            alternaSubmenu(item, !mostraSubmenu);
        });

    });

    function alternaSubmenu(item, mostraSubmenu) {
        const submenu = item.querySelector('[data-js="submenu"]');
        const popup = item.querySelector('[data-js="popup"]');

        if(submenu) {
            submenu.style.display = mostraSubmenu ? 'block' : 'none';
        }
    }

}


export default menu;