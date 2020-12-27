let startY = null,
    startX = null;
const ModalHide = (modalWrapp, action) => {
    let modal = document.querySelector(modalWrapp);

    const modalHide = (eStart, type = 'click', end = false) => {
        if (end) {
            startX = 0, startY = 0;
            return;
        } else {
            startY = eStart.targetTouches[0].pageY,
            startX = eStart.targetTouches[0].pageX;

            let t = eStart.target;

            const hide = (eType, event1) => {
                if (eType === 'click') {
                    console.log('test');
                    action();
                } else if (eType === 'move') {
                    if ((event1.changedTouches[0].pageX) > (startX + 75) || (event1.changedTouches[0].pageX) < (startX - 75)) {
                        return;
                    }
                    if ((event1.changedTouches[0].pageY) > (startY + 125)) {
                        action();
                        modal.removeEventListener('touchmove', (e) => hide('move', e));
                        return;
                    }
                }
                modal.removeEventListener('touchmove', (e) => hide('move', e));
            };

            if (t.classList.contains('modal') || t.classList.contains('modalWrapp') || t.classList.contains('modalClose') && type === 'click') {
                hide('click');
            } else {
                modal.addEventListener('touchmove', (e) => hide('move', e));
            }
        }
    };

    modal.addEventListener('touchstart', modalHide);
    modal.addEventListener('touchend', () => {
        startY = null,
        startX = null;
    });

    modal.addEventListener('touchend', (e) => {
        modalHide(e, 'click', true);
    });
};

export default ModalHide;