// Adding interactivity to the profile images hover
window.onload = function() {
    const profileImageLeft = document.getElementById('profileImageLeft');
    const profileImageRight = document.getElementById('profileImageRight');

    profileImageLeft.addEventListener('mouseover', function() {
        profileImageLeft.style.transform = 'scale(1.1)';
    });
    profileImageLeft.addEventListener('mouseout', function() {
        profileImageLeft.style.transform = 'scale(1)';
    });

    profileImageRight.addEventListener('mouseover', function() {
        profileImageRight.style.transform = 'scale(1.1)';
    });
    profileImageRight.addEventListener('mouseout', function() {
        profileImageRight.style.transform = 'scale(1)';
    });
}
