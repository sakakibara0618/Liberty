const topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
    const scrollValue = document.scrollingElement.scrollTop;
    let width = window.innerWidth

    if (width < 767) {
        if (scrollValue >= 300) {
            topBtn.style.display = 'inline';
        }   else {
            topBtn.style.display = 'none';
        }
    }
});

