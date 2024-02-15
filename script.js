document.getElementById('toggleMenu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        setTimeout(function() {
            menu.style.opacity = '1';
            menu.style.transform = 'translateX(-50%) translateY(0)';
        }, 50);
    } else {
        menu.style.opacity = '0';
        menu.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(function() {
            menu.style.display = 'none';
        }, 500);
    }
});

function redirectToPage(page) {
    window.location.href = page;
}
