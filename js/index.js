let sections = document.querySelectorAll('section');

function animateSections() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
}

window.addEventListener('load', animateSections);
window.addEventListener('scroll', animateSections);

