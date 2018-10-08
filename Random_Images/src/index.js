import style from './_scss/main.scss';
const body = document.querySelector('body');
let h1 = document.querySelector('h1');
let btn = document.querySelector('.btn');
let img = document.querySelectorAll('img');
let imgClick = document.querySelector('#img-click');

// Reload all images with button click

btn.addEventListener('click', btnClick);

function btnClick() {

  if (btn.classList.contains('btnAnimation') {
    btn.classList.remove('btnAnimation)
      } else {
        btn.classList.add('btnAnimation');
  };

  h1.style.transform = 'scale(1.2)';
  h1.style.color = 'white';
  h1.style.textShadow = '.1rem .1rem black';

  img[0].setAttribute('src', 'https://unsplash.it/300?random' + new Date().valueOf());
  img[1].setAttribute('src', 'https://unsplash.it/301?random' + new Date().valueOf());
  img[2].setAttribute('src', 'https://unsplash.it/302?random' + new Date().valueOf());
  
  setTimeout(function() {
    btn.classList.remove('btnAnimation');
  }, 500);

  setTimeout(function() {
    h1.style.transform = 'scale(1)';
    h1.style.color = 'black';
    h1.style.textShadow = '.05rem .05rem rgba(255, 255, 255, .9)';
  }, 200)

  btnAnimation();

};

function btnAnimation() {

  img[0].classList.add('newImg');
  img[1].classList.add('newImg');
  img[2].classList.add('newImg');

  setTimeout(function() {
    img[0].classList.remove('newImg');  
    img[1].classList.remove('newImg'); 
    img[2].classList.remove('newImg');

    }, 1000);

};

// Reload individual images by clicking on them

for (let i = 0; i < img.length; i++) {

  img[i].onclick = function(e) {
  
    img[i].setAttribute('src', 'https://unsplash.it/300?random' + new Date().valueOf());

    if(e.target == img[0]) {
      img[0].classList.add('imgClick1');
    } else if (e.target == img[1]) {
      img[1].classList.add('imgClick2');
    } else if (e.target == img[2]) {  
    img[2].classList.add('imgClick3');
    };

    setTimeout(function() {

      img[0].classList.remove('imgClick1');
      img[1].classList.remove('imgClick2');
      img[2].classList.remove('imgClick3');

    }, 1000);
  };

};

// Display click images message

btn.onmouseover = function() { 

  imgClick.classList.remove('click');
  imgClick.classList.add('imgClickDisplay');
  imgClick.style.display = 'inlineBlock';

  setTimeout(function() {

  imgClick.classList.add('click');
  imgClick.classList.remove('imgClickDisplay');
  imgClick.style.Display = 'none';

  }, 1000);

};

btn.onmouseleave = function() {

  imgClick.classList.add('click');
  imgClick.classList.remove('imgClickDisplay');
  imgClick.style.Display = 'none';

};
