let next = document.getElementById('next');
let prev = document.getElementById('prev');

let carousel = document.querySelector('.carousel');
let Slider = carousel.querySelector('.list');
let thumbnailBorder = document.querySelector('.thumbnail');
let thumbnailItems = thumbnailBorder.querySelectorAll('.item');
let time = document.querySelector('.time');

thumbnailBorder.appendChild(thumbnailItems[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

next.onclick = function () {
   showSlider('next');
};

prev.onclick = function () {
   showSlider('prev');
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
   next.click();
}, timeAutoNext);
function showSlider(type) {
   let SliderItems = Slider.querySelectorAll('.carousel .list .item');
   let thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');

   if (type === 'next') {
      Slider.appendChild(SliderItems[0]);
      thumbnailBorder.appendChild(thumbnailItems[0]);
      carousel.classList.add('next');
   } else {
      Slider.prepend(SliderItems[SliderItems.length - 1]);
      thumbnailBorder.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carousel.classList.add('prev');
   }
   clearTimeout(runTimeOut);
   runTimeOut = setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
   }, timeRunning);

   clearTimeout(runNextAuto);
   runNextAuto = setTimeout(() => {
      next.click();
   }, timeAutoNext);
}
