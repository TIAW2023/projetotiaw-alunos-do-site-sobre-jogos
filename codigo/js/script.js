var indice = JSON.parse(localStorage.getItem('Logado'));
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}
function clicado(){
    if(indice===null){
        alert("LOGIN NECESSÁRIO!")
        window.location.href = "/codigo/html/login.html";
    }
    else{
        
        window.location.href = "/codigo/html/usuariosJogos.html";
    }
}
function clickjog(){
  if(indice===null){
      alert("LOGIN NECESSÁRIO!")
      window.location.href = "/codigo/html/login.html";
  }
  else{
      
      window.location.href = "/codigo/html/jogadores.html";
  }
}
function clickdisc(){
  if(indice===null){
      alert("LOGIN NECESSÁRIO!")
      window.location.href = "/codigo/html/login.html";
  }
  else{
     
      window.location.href = "#";
  }
}


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/codigo/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/codigo/img/close_white_36dp.svg";
    }
}

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slidePosition = 0;

prevButton.addEventListener('click', () => {
  moveToPrevSlide();
});

nextButton.addEventListener('click', () => {
  moveToNextSlide();
});

function updateSlidePosition() {
  carousel.style.transform = `translateX(${slidePosition}px)`;
}

function moveToPrevSlide() {
  if (slidePosition === 0) return;
  slidePosition += carousel.offsetWidth;
  updateSlidePosition();
}

function moveToNextSlide() {
  if (slidePosition === -(carousel.offsetWidth * (carousel.childElementCount - 1))) return;
  slidePosition -= carousel.offsetWidth;
  updateSlidePosition();
}
document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector(".carousel-container");

  function stopAnimation() {
    container.style.animationPlayState = "paused";
  }

  function startAnimation() {
    container.style.animationPlayState = "running";
  }

  container.addEventListener("mouseenter", stopAnimation);
  container.addEventListener("mouseleave", startAnimation);
});


btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)