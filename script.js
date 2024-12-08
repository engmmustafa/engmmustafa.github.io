window.addEventListener('scroll', () => {
    const photo = document.querySelector('.profile-photo');
    const scrollY = window.scrollY;
    const scale = 1 + (scrollY * 0.001); // Makes the photo grow slightly as you scroll down
    photo.style.transform = `scale(${scale})`;
});
