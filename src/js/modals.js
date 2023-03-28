const modals = () => {
    document.querySelectorAll('[data-modal="consultation"]').forEach((item) => {
        item.addEventListener('click', (e) => {
            document
                .querySelector('.modal')
                .classList.add(
                    'modal_show',
                    'animate__animated',
                    'animate__fadeIn'
                );
            document
                .querySelector('.page_overlay')
                .classList.add('page_overlay_show');
            document.body.classList.toggle('overflow');
        });
    });
    function closeModal() {
        document
            .querySelector('.modal')
            .classList.remove(
                'modal_show',
                'animate__animated',
                'animate__fadeIn'
            );
        document
            .querySelector('.page_overlay')
            .classList.remove('page_overlay_show');
        document.body.classList.toggle('overflow');
        document.querySelectorAll('.feed-form').forEach((item) => {
            item.reset();
        });
    }
    document.querySelectorAll('.modal_close').forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault;
            closeModal();
        });
    });

    document.querySelector('.page_overlay').addEventListener('click', (e) => {
        e.preventDefault;
        if (e.target === document.querySelector('.page_overlay')) {
            closeModal();
        }
    });
};

export default modals;
