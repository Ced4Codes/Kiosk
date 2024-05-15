document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonials');
    let startX, endX;

    slider.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const checkedRadio = document.querySelector('.slider input:checked');
        let nextRadio;

        if (startX > endX + 50) {
            // Swiped left
            nextRadio = checkedRadio.nextElementSibling;
            if (nextRadio && nextRadio.name === 'testimonial') {
                nextRadio.checked = true;
            }
        } else if (startX < endX - 50) {
            // Swiped right
            nextRadio = checkedRadio.previousElementSibling;
            if (nextRadio && nextRadio.name === 'testimonial') {
                nextRadio.checked = true;
            }
        }
    }
});

