var Theme_dark, Theme_lite, full_screen, menu, menu_off, menu_toggle, options;

menu = id('menu');

full_screen = id('full_screen');

options = id('options');

menu_toggle = function() {
  menu.classList.toggle('see');
};

menu_off = function() {
  return menu.classList.remove('see');
};

Theme_dark = function() {
  full_screen.classList.remove('Theme_lite');
  full_screen.classList.add('Theme_dark');
  id('Light').classList.remove('menu_item_active');
  return id('Dark').classList.add('menu_item_active');
};

Theme_lite = function() {
  full_screen.classList.remove('Theme_dark');
  full_screen.classList.add('Theme_lite');
  id('Dark').classList.remove('menu_item_active');
  return id('Light').classList.add('menu_item_active');
};

Theme_dark();

//menu_item_active
