const createCards = (response) => {
    console.log(response);
    response.reverse().forEach((item) => {
        let card = document.createElement('div');
        card.classList.add('carousel_card');

        card.innerHTML = `
            <div class="carousel_card_descr">
                        <div class="carousel_card_descr_title">Check-UP</div>
                        <div class="carousel_card_descr_subtitle">
                            ${item.gender}
                        </div>
                        <ul>
                            <li class="carousel_card_descr_li">
                               ${item.prop1}
                            </li>
                            <li class="carousel_card_descr_li">${item.prop2}</li>
                            <li class="carousel_card_descr_li">
                                ${item.prop3}
                            </li>
                            <li class="carousel_card_descr_li">
                                 ${item.prop4}
                            </li>
                        </ul>
                        <div class="carousel_card_descr_price">
                            <span>Всего</span
                            ><span class="newprice">${item.price}</span>
                            <span class="oldprice">${item.oldPrice}</span>
                        </div>
                        <div class="carousel_card_descr_buttons">
                            <button data-modal="consultation" class="button">Записаться</button>
                            <button class="button button_second">
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div class="carousel_card_img">
                        <img
                            src=${item.img}
                            alt=${item.imgName}
                        />
                    </div>
            `;

        document.querySelector('.carousel .container').prepend(card);
    });
};

export default createCards;
