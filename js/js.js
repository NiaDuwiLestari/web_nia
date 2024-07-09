// function burger responsive first
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav__active");
    burger.classList.toggle("toggle__burger");
  });
};
navSlide();
// function burger responsive end

// function efek mengetik first
const txtElement = ["Freelancer", "Web Developer", "Software Dev"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function mengetik() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];
  words = currentTxt.slice(0, ++txtIndex);
  const mengetikElement = document.querySelector(".mengetik");
  if (mengetikElement) {
    mengetikElement.textContent = words;
    if (words.length == currentTxt.length) {
      count++;
      txtIndex = 0;
    }
  }

  setTimeout(mengetik, 500);
})();
// function efek mengetik end

// accordion first
let accordions = document.querySelectorAll(
  ".body__formulir .accordion-wrapper .accordion"
);

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subcontent) => {
      subcontent.classList.remove("active");
    });
    acco.classList.add("active");
  };
});
// accordion end
