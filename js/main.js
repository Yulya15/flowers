$(document).ready(function() {
  const flowersSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // настройки адаптивной вернии
  breakpoints: {
    // если браузер >= 320px
    320: {
      slidesPerView: 2,
    },
    // если браузер >= 480px
    480: {
      slidesPerView: 3,
    },
    // если браузер >= 992px
    992: {
      slidesPerView: 6,
    }
  }

});


const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  $("#review-1").on('click', function () {

  $.fancybox.open([
    {
      src  : 'https://cdn3.flowwow.com/data/flowers/1000x1000/55/1563737568_27698655.jpg',
    },
    {
      src  : 'https://floristcenter.ru/image/catalog/Newphoto/Buket-iz-101-krasnoy-roz.jpg',
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
  });

  $("#review-2").on('click', function () {

  $.fancybox.open([
    {
      src  : 'https://цветыонлайн.com/wp-content/uploads/2017/06/45-tulips.png',
    },
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
  });

});

// Все цветы (показать скрытые блоки)
const more = document.querySelector(".more");
let hiddens = document.querySelectorAll(".hidden");

function btnClick() {
  console.log(hiddens.classList);

  for(let i = 0; i < hiddens.length; i++){
  if(hiddens[i].style.display == "block"){
    hiddens[i].style.display = "none";
    more.innerText = more.getAttribute('data-text-hide');
  }
  else{
    hiddens[i].style.display = "block";
    more.innerText = more.getAttribute('data-text-show');
    more.style.backgroundImage = "none";
  }
  }
}

// Плюс/минус 
let countBlocks = document.querySelectorAll('.counter-group');

for(let i=0; i<countBlocks.length; i++){
  countBlocks[i].onclick=function(){

  let countPlus = this.querySelector('.plus');
  let countMinus = this.querySelector('.minus');
  let inputValue = this.querySelector('.counter-input');

  countPlus.onclick=function(){
    inputValue.value++;
  }
  countMinus.onclick=function(){
    if(inputValue.value==0){
      return false;
    }
    else
    inputValue.value--;
  }
}
}


