import menuItemsTemplate from '../templates/menu-gallery.hbs';
import menu from '../menu.json';

const markup = menuItemsTemplate(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
