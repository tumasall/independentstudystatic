var wm = document.getElementById("world-map");
wm.addEventListener("load", function() {

	var caption = document.getElementById("map-caption");
	var selectedCountries = document.getElementsByClassName("st1");

	for (var i = 0, length = selectedCountries.length; i < length; i++) {

		// add mouseover event listener on all selected countries
		selectedCountries[i].addEventListener("mouseover", function() {
			var elemId = this.id; // stores current id (=country name)
			elemId = elemId.split('_').join(' '); // remove the default "_" separator from country names
			caption.innerHTML = elemId;

			caption.classList.remove("out");
			caption.classList.add("in");
		});

		// add mouseout event listener on all selected countries
		selectedCountries[i].addEventListener("mouseout", function() {
			caption.classList.remove("in");
			caption.classList.add("out");
		});
	}

}, false);

"use strict";

/*JS from http://thenewcode.com/819/A-Before-And-After-Image-Comparison-Slide-Control-in-HTML5*/
changed = document.getElementById("changed");
slider = document.getElementById("slider");

function moveDivisor() {
  changed.style.width = slider.value + "%";
}

window.onload = function () {
  moveDivisor();
};

/*slideshow*/
var angle = 0;
function galleryspin(sign) {
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

/*voting*/
function g() {
  var colors = ["#0066FF", "#000080", "#000080", "mediumorchid"];
  $.getJSON("https://spreadsheets.google.com/feeds/list/10OPoiA7s3Bjuc3OekRJsEhfDF28I2Sx6GyIG4l90M5A/od6/public/values?alt=json", function(data) {
    for (var i = 0; i < 4; i++) {
      document.getElementsByClassName('bar')[i].style.height = (data.feed.entry[i].gsx$number.$t / data.feed.entry[4].gsx$number.$t * 500) + 'px';
      document.getElementsByClassName('bar')[i].innerHTML = data.feed.entry[i].gsx$option.$t + '<br/><small>' + Math.floor(100 * data.feed.entry[i].gsx$number.$t / data.feed.entry[4].gsx$number.$t) + '%</small>';
      document.getElementsByClassName('bar')[i].style.background = colors[i];
      document.getElementsByClassName('pie')[i].style.background = 'linear-gradient(0deg, transparent 50%, transparent 50%),linear-gradient(' + Math.floor(360 * data.feed.entry[i].gsx$number.$t / data.feed.entry[4].gsx$number.$t) + 'deg, transparent 50%, ' + colors[i] + ' 50%)';
      if (i != 0) {
        document.getElementsByClassName('pie')[i].style.webkitTransform = 'rotate(' + Math.floor(360 * data.feed.entry[i - 1].gsx$number.$t / data.feed.entry[4].gsx$number.$t) + 'deg) ' + document.getElementsByClassName('pie')[i - 1].style.webkitTransform;
      }
    }
  });
}
g();
