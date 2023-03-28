import { getResource } from './services/requests';
import slider from './slider';
import mask from './mask';
import modals from './modals';
import createCards from './createCard';
import burger from './burger';
import form from './form';

window.addEventListener('DOMContentLoaded', () => {
    getResource('assets/db.json')
        .then((res) => createCards(res.slides))
        .then(() =>
            slider(
                '.carousel_card',
                '.carousel_navi_prev',
                '.carousel_navi_next'
            )
        )
        .then(() => modals())
        .catch((error) => console.log(error));
    burger();
    form();
    mask('[name="phone"]');
});
