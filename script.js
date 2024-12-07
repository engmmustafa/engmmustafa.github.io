window.onload = function() {
    const profileImage = document.getElementById('profileImage');
    profileImage.addEventListener('mouseover', function() {
        profileImage.style.transform = 'scale(1.1)';
    });
    profileImage.addEventListener('mouseout', function() {
        profileImage.style.transform = 'scale(1)';
    });
}
