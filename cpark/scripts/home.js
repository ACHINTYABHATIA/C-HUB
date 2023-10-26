const carouselContainer = document.querySelector("main .carousel");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

rightBtn.addEventListener("click", (e) => {
  const scrLeft = carouselContainer.scrollLeft;
  const scrWidth = carouselContainer.scrollWidth;
  const scrollAmt = scrWidth / carouselContainer.childElementCount;
  if (scrLeft !== scrWidth - scrollAmt) {
    carouselContainer.scrollTo(scrLeft + scrollAmt, 0);
  } else {
    carouselContainer.scrollTo(0, 0);
  }
});

leftBtn.addEventListener("click", (e) => {
  const scrLeft = carouselContainer.scrollLeft;
  const scrWidth = carouselContainer.scrollWidth;
  const scrollAmt = scrWidth / carouselContainer.childElementCount;
  if (scrLeft > 0) {
    carouselContainer.scrollTo(scrLeft - scrollAmt, 0);
  } else {
    carouselContainer.scrollTo(scrWidth - scrollAmt, 0);
  }
});

const submitForm = () => {
  event.preventDefault();
  window.location.href = "./pages/success.html";
};
