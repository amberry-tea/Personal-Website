var prevPosition;

function openModal(id) {
    prevPosition = window.scrollY;
    document.getElementById(id).style.display = "block";
    disableScroll();
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    window.scrollTo(0, prevPosition);
    enableScroll();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function disableScroll(){
    window.onscroll=function(){window.scrollTo(0, 0);};
}

function enableScroll(){
    window.onscroll=function(){};
}