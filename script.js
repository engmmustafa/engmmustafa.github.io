// Adding interactivity to photo hover
window.onload = function () {
    const overlayPhoto = document.querySelector('.overlay-photo');
    overlayPhoto.addEventListener('mouseover', () => {
        overlayPhoto.style.transform = 'scale(1.2) translate(-50%, -50%)';
    });
    overlayPhoto.addEventListener('mouseout', () => {
        overlayPhoto.style.transform = 'scale(1) translate(-50%, -50%)';
    });
};
