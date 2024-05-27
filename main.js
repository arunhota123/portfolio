window.onscroll = function() {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= windowHeight &&
            rect.right <= windowWidth
        );
    }

    function isPartiallyInViewport(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        return (
            rect.top < windowHeight &&
            rect.left < windowWidth &&
            rect.bottom > 0 &&
            rect.right > 0
        );
    }

    var elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(function(element) {
        if (isPartiallyInViewport(element)) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    });

    // Show "back to top" button
    var topButton = document.querySelector('.top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Back to top functionality
document.querySelector('.top').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
