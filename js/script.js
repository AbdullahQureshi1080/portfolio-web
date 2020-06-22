
//
// var slideIndex = 0;
// showSlides();
// var slides,dots;
//
// function plusSlides(position) {
//     slideIndex += position;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     else if(slideIndex < 1){slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//
//       }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//     }
//
// function currentSlide(index) {
//     if (index > slides.length) {index = 1}
//     else if(index < 1){index = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//         slides[index-1].style.display = "block";
//         dots[index-1].className += " active";
//     }
//
// function showSlides() {
//     var i;
//     slides = document.getElementsByClassName("mywork-card");
//     dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1}
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 4000); // Change image every 3 seconds
// }
//
// function span(){
//   var getSkill = document.getElementsByClassName("work-skill");
//   var getspan = document.getElementsByTagName("span");
//   for (var i=0; i<getSkill.length; i++){
//     // getspan[i].style.color="#ca3e47";
//     getSkill[i].style.hover
//   }
// }

/* Find all slideshow containers */
var slideshowContainers = document.getElementsByClassName("mywork-section-card");
// var dots = document.getElementsByClassName("dot");
/* For each container get starting variables */
for(let s = 0; s < slideshowContainers.length; s++) {
    /* Read the new data attribute */
    var cycle = slideshowContainers[s].dataset.cycle;
    /* Find all the child nodes with class mySlides */
    var slides = slideshowContainers[s].querySelectorAll('.mywork-card');
    var slideIndex = 0;
    /* Now we can cycle slides, but this recursive function must have parameters */
    /* slides and cycle never change, those are unique for each slide container */
    /* slideIndex will increase during each iteration */
    showSlides(slides, slideIndex, cycle);
};

/* Function is alsmost same, but now it uses 3 new parameters */
function showSlides(slides, slideIndex, cycle) {
  // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    // for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    /* Calling same function, but with new parameters and cycle time */
    setTimeout(function() {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};


// function currentSlide(index) {
//     if (index > slides.length) {index = 1}
//     else if(index < 1){index = slides.length}
//     // for (i = 0; i < slides.length; i++) {
//     //    slides[i].style.display = "none";
//     // }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//         // slides[index-1].style.display = "block";
//         dots[index-1].className += " active";
//     }


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav-container") {
    x.className += " responsive";
  } else {
    x.className = "nav-container";
  }
}
