let startY = null,
    startX = null;
const ModalHide = (modalWrapp, action) => {
    let modal = document.querySelector(modalWrapp),
        modalContent = modal.querySelector('.modalContent');

    const modalHide = (eStart, type = 'click', end = false) => {
        if (end) {
            startX = 0, startY = 0;
            return;
        } else {
            startY = eStart.targetTouches[0].pageY,
            startX = eStart.targetTouches[0].pageX;

            let t = eStart.target;

            const hide = (eType, event1) => {
                console.log('move');
                if (eType === 'click') {
                    modalContent.style.transform = "translateY(125%)";
                    setTimeout(() => {
                        action();
                    }, 50);
                } else if (eType === 'move') {
                    if ((event1.changedTouches[0].pageX) > (startX + 75) || (event1.changedTouches[0].pageX) < (startX - 75)) {
                        return;
                    }
                    if ((event1.changedTouches[0].pageY) > (startY + 125)) {
                        modalContent.style.transform = "translateY(125%)";
                        setTimeout(() => {
                            action();
                        }, 50);
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