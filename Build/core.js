var allSlides, allSlidesLength, clearIntervalMini, next, numberBackSlide, numberNextSlide, parse_col, parse_row, parse_slide, setI, slider, time;

allSlides = language_HTML;

allSlidesLength = Object.keys(allSlides).length;

slider = id('body');

numberNextSlide = 1;

numberBackSlide = 1;

time = 4000;

setI = setInterval(() => {
  return next();
}, time);

// console.log language_HTML
// console.log Object.keys(language_HTML).length
//#####################################
parse_slide = function(obj) {
  var DOM_slide, key, val;
  slider.innerHTML = '';
  for (key in obj) {
    val = obj[key];
    DOM_slide = document.createElement('div');
    DOM_slide.setAttribute('class', 'row');
    slider.appendChild(parse_col(val, DOM_slide));
  }
};

// console.log 'slider'
// console.log slider
parse_col = function(obj, DOM_slide) {
  var DOM_col, key, val;
  for (key in obj) {
    val = obj[key];
    DOM_col = document.createElement('div');
    DOM_col.setAttribute('class', 'col');
    DOM_slide.appendChild(parse_row(val, DOM_col));
  }
  // console.log parse_row val
  return DOM_slide;
};

// slider.appendChild
parse_row = function(arr_obj, DOM_col) {
  var div, i, key, len, ref, val;
  for (i = 0, len = arr_obj.length; i < len; i++) {
    val = arr_obj[i];
    ref = val[0];
    // console.log val[0]
    for (key in ref) {
      val = ref[key];
      div = document.createElement('div');
      div.setAttribute('class', key);
      div.textContent = val;
      DOM_col.appendChild(div);
    }
  }
  // console.log DOM_col
  return DOM_col;
};

parse_slide(allSlides.slide1.see);

// DOM_Slide = 
// console.log DOM_Slide
// slider.appendChild DOM_Slide

//#####################################
clearIntervalMini = function() {
  clearInterval(setI);
  return setI = setInterval(() => {
    return next;
  }, time);
};

next = function(number) {
  var NextSlide;
  clearIntervalMini();
  numberNextSlide++;
  NextSlide = parse_slide(allSlides["slide" + numberNextSlide].see);
  return console.log(allSlides["slide" + numberNextSlide].see);
};

// function next(number) {
// 	clearIntervalMini();
// 	if (number) {
// 		numberNextSlide = number;
// 		virtualSlideBack = virtualSlideNext;
// 	} else {
// 		numberBackSlide = numberNextSlide;
// 		numberNextSlide++;
// 		if (numberNextSlide > allSlidesLength) {
// 			numberNextSlide = 1;
// 		};
// 		virtualSlideBack = document.getElementsByClassName( `slide${numberBackSlide}` )[0];
// 	};
// 	virtualSlideNext = document.getElementsByClassName(`slide${numberNextSlide}`)[0];
// 	autoHover(numberNextSlide-1);
// 	if( virtualSlideBack == null ) {
// 		virtualSlideBack = document.getElementsByClassName(`slide${1}`)[0];};
// 		virtualSlideBack.style.cssText = `z-index: ${zIndex};`;
// 		zIndex++;
// 		virtualSlideNext.style.cssText = `z-index: ${zIndex};`;
// };

// console.log language_HTML
// for dish, i of language_HTML
// 	console.log dish
// 	console.log i
setInterval;

// let zIndex = 8;

// allSlides[0].style.zIndex = zIndex-1;

// for ( let i = 0; i < allSlidesLength; i++ ) {
// 	allSlides[i].classList.add(`slide`);
// 	allSlides[i].classList.add(`slide${i+1}`);
// 	let buttonNumber = document.createElement(`div`);
// 	buttonNumber.classList.add(`buttonNumber`);
// 	buttonNumber.setAttribute(`onclick`, `next(${i+1})` );
// 	document.getElementsByClassName( `wrapButtonNumber` )[0].appendChild(buttonNumber);
// }
// let allButtonNumber = document.getElementsByClassName( `wrapButtonNumber` )[0].childNodes;
// let virtualSlideNext = document.getElementsByClassName( `slide${numberNextSlide}` )[0];
// let virtualSlideBack = document.getElementsByClassName( `slide${numberBackSlide}` )[0];

// function autoHover(number) {
// 	for ( let i = 0; i < allSlidesLength; i++ ) {
// 		allButtonNumber[i].classList.remove("sliderButtonActive");
// 	};
// 	allButtonNumber[number].classList.add("sliderButtonActive");
// };
// autoHover(numberBackSlide-1);
// setTimeout(() => {
// 	slider.style.height = virtualSlideBack.clientHeight
// }, 100);
// window.onresize = function () {
// 	slider.style.height = virtualSlideBack.clientHeight
// };
