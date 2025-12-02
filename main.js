window.onload = function() {
    // Parallax effect prototype
    document.querySelector('.hero').onmousemove = function(e) {
        this.style.backgroundPositionX = 50 + (e.clientX/40) + '%';
    };
    // Mobile nav toggle, etc.
};