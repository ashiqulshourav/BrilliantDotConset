// Number Counter javascript code
const counters = document.querySelectorAll('.number');
const speed = 100;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});

// Owl Carousel
$(document).ready(function() {
    $(".partners-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        dots: false,
        navText: ["<i class='fas fa-angle-double-right'></i>", "<i class='fas fa-angle-double-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $(".portfolio-items").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        dots: false,
        navText: ["<i class='fas fa-angle-double-right'></i>", "<i class='fas fa-angle-double-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});


// Testimonial section js
const tab = document.querySelectorAll('.tab');

function active(i) {
    tab.forEach((client) => {
        client.style.display = "none";
    });
    tab[i].style.display = "block";
}
active(1)

// On scroll Navbar fixed & Back to top button
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar-main').classList.add('fixed-top');
            document.querySelector('.back-to-top').style.visibility = 'visible';
            document.querySelector('.back-to-top').style.opacity = '1';
        } else {
            document.querySelector('.navbar-main').classList.remove('fixed-top');
            document.querySelector('.back-to-top').style.visibility = 'hidden';
            document.querySelector('.back-to-top').style.opacity = '0';
        }
    });

    const toTop = document.querySelector('.back-to-top');
    toTop.addEventListener('click', function() {
        window.scrollTo(0, 0)
    })
});


// How to go to dedicated part in a website with smooth scrolling
const contactBtn = document.querySelector('#contactNow');
const reqACall = document.querySelector('#reqACall');
const navBar = document.querySelector('#navBar');

contactBtn.addEventListener('click', function() {
    var elementOffsetTop = reqACall.offsetTop;
    var navHeight = navBar.scrollHeight;
    var height = elementOffsetTop - navHeight;

    window.scrollTo(0, height);
})