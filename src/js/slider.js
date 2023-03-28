const slider = (slides, prev, next) => {
    let slideIndex = 1;
    const items = document.querySelectorAll(slides);
    const count = document.querySelector('.carousel_navi_count span');

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }
        count.textContent = slideIndex;
        items.forEach((item) => {
            item.classList.add('animate__animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'flex';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);
        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('animate__fadeIn');
            items[slideIndex - 1].classList.add('animate__fadeIn');
        });
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('animate__fadeIn');
            items[slideIndex - 1].classList.add('animate__fadeIn');
        });
    } catch (e) {}
};

export default slider;
