// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

// const prev = document.querySelector(".prev");
// const forward = document.querySelector(".forward");
// const dots = document.querySelectorAll(".dot");
// const slides = document.querySelectorAll(".mySlides");
// let slide = 0;
// prev.addEventListener("click", () => {
//     slide--;
//     if (slide < 0) {
//         slide = slides.length - 1;
//     }
//     showSlide(slide);
// });

// forward.addEventListener("click", () => {
//     slide++;
//     if (slide >= slides.length) {
//         slide = 0;
//     }
//     showSlide(slide);
// });

// function showSlide(n) {
//     slides.forEach((slide, index) => {
//         slide.style.display = (index === n) ? "block" : "none";
//     });

//     dots.forEach((dot, index) => {
//         dot.className = dot.className.replace(" active", "");
//         if (index === n) {
//             dot.className += " active";
//         }
//     });
// }

// showSlide(slide);

// function autoShowSlides() {
//     slide++;
//     if (slide >= slides.length) {
//         slide = 0;
//     }
//     showSlide(slide);
// }
// setInterval(autoShowSlides, 5000);
// const burger = document.querySelector(".hamburger");
// const nav = document.querySelector(".nav-content");

// burger.addEventListener("click", openContent);

// function openContent() {
//     replaceIcon();
//     nav.style.visibility = nav.style.visibility === "visible" ? "hidden" : "visible";
// }
// function replaceIcon() {
//     if (burger.innerHTML === '✖') {
//         burger.innerHTML = '☰'
//     }
//     else {
//         burger.innerHTML = '✖';
//     }
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

// const prev = document.querySelector(".prev");
// const forward = document.querySelector(".forward");
// const dots = document.querySelectorAll(".dot");
// const slides = document.querySelectorAll(".mySlides");
// let slide = 0;
// prev.addEventListener("click", () => {
//     slide--;
//     if (slide < 0) {
//         slide = slides.length - 1;
//     }
//     showSlide(slide);
// });

// forward.addEventListener("click", () => {
//     slide++;
//     if (slide >= slides.length) {
//         slide = 0;
//     }
//     showSlide(slide);
// });

// function showSlide(n) {
//     slides.forEach((slide, index) => {
//         slide.style.display = (index === n) ? "block" : "none";
//     });

//     dots.forEach((dot, index) => {
//         dot.className = dot.className.replace(" active", "");
//         if (index === n) {
//             dot.className += " active";
//         }
//     });
// }

// showSlide(slide);

// function autoShowSlides() {
//     slide++;
//     if (slide >= slides.length) {
//         slide = 0;
//     }
//     showSlide(slide);
// }
// setInterval(autoShowSlides, 5000);
// Toggle navigation menu
const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-content");

burger.addEventListener("click", openContent);

function openContent() {
    replaceIcon();
    nav.style.visibility = nav.style.visibility === "visible" ? "hidden" : "visible";
}

function replaceIcon() {
    if (burger.innerHTML === '✖') {
        burger.innerHTML = '☰';
    } else {
        burger.innerHTML = '✖';
    }
}

// Slide controls
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Arrow controls
const prev = document.querySelector(".prev");
const forward = document.querySelector(".forward");
const dotElements = document.querySelectorAll(".dot");
const slideElements = document.querySelectorAll(".mySlides");
let slide = 0;

prev.addEventListener("click", () => {
    slide--;
    if (slide < 0) {
        slide = slideElements.length - 1;
    }
    showSlide(slide);
});

forward.addEventListener("click", () => {
    slide++;
    if (slide >= slideElements.length) {
        slide = 0;
    }
    showSlide(slide);
});

function showSlide(n) {
    slideElements.forEach((slide, index) => {
        slide.style.display = (index === n) ? "block" : "none";
    });

    dotElements.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
        if (index === n) {
            dot.className += " active";
        }
    });
}

showSlide(slide);

function autoShowSlides() {
    slide++;
    if (slide >= slideElements.length) {
        slide = 0;
    }
    showSlide(slide);
}

setInterval(autoShowSlides, 5000);
