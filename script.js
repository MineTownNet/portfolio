const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelector('.slider-items');
const sliderItem = document.querySelectorAll('.slider-item');
const sliderButtons = document.querySelectorAll('.slider-button');
const sliderControlLeft = document.querySelector('.slider-control-left');
const sliderControlRight = document.querySelector('.slider-control-right');

const itemWidth = sliderItem[0].clientWidth;
const itemsPerPage = 3;
let activeIndex = 0;

sliderItems.style.transform = `translateX(${-itemWidth * activeIndex}px)`;

function setActiveIndex(index) {
  if (index < 0) {
    activeIndex = 0;
  } else if (index > sliderItem.length - itemsPerPage) {
    activeIndex = sliderItem.length - itemsPerPage;
  } else {
    activeIndex = index;
  }
  sliderItems.style.transform = `translateX(${-itemWidth * activeIndex}px)`;
}


function slideItems(direction) {
  if (direction === "left") {
    setActiveIndex(activeIndex - 1);
  } else if (direction === "right") {
    setActiveIndex(activeIndex + 1);
  }
}

sliderContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('slider-control-left')) {
    slideItems("left");
  } else if (event.target.classList.contains('slider-control-right')) {
    slideItems("right");
  }
});




function redirectToMinecraftServer() {
  window.location = "minecraft://?addExternalServer=UDC-Studios|udc-studios.com:19132";
  setTimeout(() => {
    alert("Minecraft Bedrock Edition should now have been opened on your device. However, in case if you haven't installed it or it is not getting detected, please manually add the server with this IP and the Port: \nudc-studios.com\n19132.");
  }, 500);
}