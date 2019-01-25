var slideIndex=1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var dots = document.getElementsByClassName("dot");
for (let dotId = 0; dotId < dots.length; dotId++) {
    dots[dotId].addEventListener("click", function(){
        showSlides(dotId+1);
    });
}
console.log(Object.keys(dots));
console.log(dots);
function showSlides(n) {
console.log('hi')
  var i;
  var slides = document.getElementsByClassName("content__quote");
  var dots = document.getElementsByClassName("dot");
  console.log(slides)
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  slideIndex = n;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1} 
//   slides[slideIndex-1].style.display = "block"; 
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }