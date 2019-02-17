var Close_full_screen, Full_screen, Lang_togle, allSlides, allSlidesLength, autoHover, back, block_full_screen, button_rewind, clearIntervalMini, closeFullScreen, fullScreen, i_b_r, key, next, numberNextSlide, parse_col, parse_row, parse_slide, pause, rewind, rewind_pause, rewind_play, run, setI, slider, time, val;

allSlides = language_HTML;

allSlidesLength = Object.keys(allSlides).length;

slider = id('body');

numberNextSlide = 1;

time = 14;

rewind = id('rewind');

rewind_pause = id('rewind_pause');

rewind_play = id('rewind_play');

setI = setInterval(function() {
  return run();
}, time);

//#####################################
parse_slide = function(obj) {
  var DOM_slide, key, key_slice, val;
  slider.innerHTML = '';
  for (key in obj) {
    val = obj[key];
    key_slice = key.slice(0, 3);
    DOM_slide = document.createElement('div');
    DOM_slide.setAttribute('class', 'row');
    if (key_slice === 'col') {
      slider.appendChild(parse_col(val, DOM_slide));
    }
    if (key_slice === 'row') {
      slider.appendChild(parse_row(val, DOM_slide));
    }
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

// parse_slide allSlides.slide1.see
//#####################################
clearIntervalMini = function() {
  clearInterval(setI);
  return setI = setInterval(function() {
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
      time = allSlides["slide" + numberNextSlide].time;
      clearIntervalMini();
      parse_slide(allSlides["slide" + numberNextSlide].see);
      return autoHover(numberNextSlide);
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

autoHover = function(number) {
  var i_rewind;
  number--;
  i_rewind = 0;
  for (val in allSlides) {
    rewind.childNodes[i_rewind].classList.remove("rewind_active");
    i_rewind++;
  }
  return rewind.childNodes[number].classList.add("rewind_active");
};

block_full_screen = id('full_screen');

fullScreen = id('fullScreen');

closeFullScreen = id('closeFullScreen');

Full_screen = function() {
  fullScreen.style.display = 'none';
  closeFullScreen.style.display = 'block';
  if (block_full_screen.requestFullscreen) {
    return block_full_screen.requestFullscreen();
  } else {
    if (block_full_screen.mozRequestFullScreen) {
      return block_full_screen.mozRequestFullScreen();
    } else {
      if (block_full_screen.webkitRequestFullscreen) {
        return block_full_screen.webkitRequestFullscreen();
      } else {
        if (block_full_screen.msRequestFullscreen) {
          return block_full_screen.msRequestFullscreen();
        }
      }
    }
  }
};

Close_full_screen = function() {
  closeFullScreen.style.display = 'none';
  fullScreen.style.display = 'block';
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  } else {
    if (document.mozCancelFullScreen) {
      return document.mozCancelFullScreen();
    } else {
      if (document.webkitExitFullscreen) {
        return document.webkitExitFullscreen();
      } else {
        if (document.msExitFullscreen) {
          return document.msExitFullscreen();
        }
      }
    }
  }
};

Lang_togle = function(Lang) {
  var EN, Lang_active, Lang_apply, RU, SPA, ZHO;
  console.log(Lang);
  EN = {
    Language: 'Language',
    Theme: 'Theme',
    Font_size: 'Font size',
    Support: 'Support',
    Author: 'Author',
    Light: 'Light',
    Dark: 'Dark'
  };
  RU = {
    Language: 'Язык',
    Theme: 'Тема',
    Font_size: 'Размер шрифта',
    Support: 'Поддержка',
    Author: 'Автор',
    Light: 'Светлая',
    Dark: 'Темная'
  };
  SPA = {
    Language: 'Idioma',
    Theme: 'Tema',
    Font_size: 'Tamaño de fuente',
    Support: 'Apoyo',
    Author: 'Autor',
    Light: 'Ligero',
    Dark: 'Oscuro'
  };
  ZHO = {
    Language: '语言',
    Theme: '主题',
    Font_size: '字体大小',
    Support: '支持',
    Author: '作者',
    Light: '光',
    Dark: '黑'
  };
  Lang_apply = function(obj) {
    var results;
    results = [];
    for (key in obj) {
      val = obj[key];
      results.push(id(key).innerHTML = val);
    }
    return results;
  };
  Lang_active = function(lang) {
    // Lang_items = $ '.Lang_item'
    $('.Lang_item')[0].classList.remove('menu_item_active');
    $('.Lang_item')[1].classList.remove('menu_item_active');
    $('.Lang_item')[2].classList.remove('menu_item_active');
    $('.Lang_item')[3].classList.remove('menu_item_active');
    return id(lang).classList.add('menu_item_active');
  };
  if (Lang === 'RU') {
    Lang_apply(RU);
    Lang_active('RU');
  }
  if (Lang === 'EN') {
    Lang_apply(EN);
    Lang_active('EN');
  }
  if (Lang === 'SPA') {
    Lang_apply(SPA);
    Lang_active('SPA');
  }
  if (Lang === 'ZHO') {
    Lang_apply(ZHO);
    return Lang_active('ZHO');
  }
};

if (navigator.language === 'ru-RU') {
  //  || 'ua-UA' || 'ru-UA' || 'ru' || 'ua' || 'uk'
  Lang_togle("RU");
}

if (navigator.language === 'en-EN') {
  //  || 'EN' || "en" || "en-US" || "en-EG" || "en-AU" || "en-GB" || "en-CA" || "en-NZ" || "en-IE" || "en-ZA" || "en-JM" || "en-BZ" || "en-TT"
  Lang_togle("EN");
}

if (navigator.language === 'zh-CN') {
  //  || 'zh' || "zh-TW" || "zh-HK" || "zh-SG" || 'zh-ZH'
  Lang_togle("ZHO");
}

if (navigator.language === 'es-ES') {
  //  || 'es' || "es-AR" || "es-GT" || "es-CR" || "es-PA" || "es-DO" || "es-MX" || "es-VE" || "es-CO" || "es-PE" || "es-EC" || "es-CL" || "es-UY" || "es-PY" || "es-BO" || "es-SV" || "es-HN" || "es-NI" || "es-PR"
  Lang_togle("SPA");
}
