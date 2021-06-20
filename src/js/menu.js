import cardTemplate from '../templates/card-product.hbs';
import menuCards from '../menu.json'

const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('beforeend', cardTemplate(menuCards));