var allSlides, allSlidesLength, back, button_rewind, clearIntervalMini, fullScreen, i_b_r, key, next, numberBackSlide, numberNextSlide, parse_col, parse_row, parse_slide, pause, rewind, rewind_pause, rewind_play, run, setI, slider, time, val;

allSlides = language_HTML;

allSlidesLength = Object.keys(allSlides).length;

slider = id('body');

numberNextSlide = 1;

numberBackSlide = 1;

time = 4000;

rewind = id('rewind');

rewind_pause = id('rewind_pause');

rewind_play = id('rewind_play');

setI = setInterval(() => {
  return run();
}, time);

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

parse_col = function(obj, DOM_slide) {
  var DOM_col, key, val;
  for (key in obj) {
    val = obj[key];
    DOM_col = document.createElement('div');
    DOM_col.setAttribute('class', 'col');
    DOM_slide.appendChild(parse_row(val, DOM_col));
  }
  return DOM_slide;
};

parse_row = function(arr_obj, DOM_col) {
  var div, i, key, len, ref, val;
  for (i = 0, len = arr_obj.length; i < len; i++) {
    val = arr_obj[i];
    ref = val[0];
    for (key in ref) {
      val = ref[key];
      div = document.createElement('div');
      div.setAttribute('class', key);
      div.textContent = val;
      DOM_col.appendChild(div);
    }
  }
  return DOM_col;
};

parse_slide(allSlides.slide1.see);

//#####################################
clearIntervalMini = function() {
  clearInterval(setI);
  return setI = setInterval(() => {
    return next();
  }, time);
};

next = function() {
  var numberNextSlide_plus;
  numberNextSlide_plus = numberNextSlide;
  numberNextSlide_plus++;
  if (numberNextSlide_plus <= allSlidesLength) {
    numberNextSlide++;
    return run();
  }
};

run = function(number) {
  if (number) {
    numberNextSlide = number;
  }
  if (numberNextSlide <= allSlidesLength) {
    if (numberNextSlide > 0) {
      rewind_play.style.display = 'none';
      rewind_pause.style.display = 'block';
      clearIntervalMini();
      return parse_slide(allSlides["slide" + numberNextSlide].see);
    }
  }
};

back = function() {
  var numberNextSlide_minus;
  numberNextSlide_minus = numberNextSlide;
  numberNextSlide_minus--;
  if (numberNextSlide_minus > 0) {
    numberNextSlide--;
    return run();
  }
};

pause = function() {
  clearInterval(setI);
  rewind_pause.style.display = 'none';
  return rewind_play.style.display = 'block';
};

i_b_r = 0;

for (key in allSlides) {
  val = allSlides[key];
  i_b_r++;
  button_rewind = document.createElement("div");
  button_rewind.classList.add("rewind_item");
  button_rewind.setAttribute("onclick", "run(" + i_b_r + ")");
  rewind.appendChild(button_rewind);
}

fullScreen = function() {
  return slider.mozRequestFullScreen();
};

// 	if slider.mozRequestFullScreen() {} else {document.mozCancelFullScreen()}
// slider.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
// 	if (slider.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)) {} else {document.webkitCancelFullScreen()}

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

// let zIndex = 8;

// allSlides[0].style.zIndex = zIndex-1;

// setTimeout(() => {
// 	slider.style.height = virtualSlideBack.clientHeight
// }, 100);
// window.onresize = function () {
// 	slider.style.height = virtualSlideBack.clientHeight
// };
