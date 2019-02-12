var menu, menu_off, menu_toggle, options;

menu = id('menu');

options = id('options');

menu_toggle = function() {
  console.log('toggle');
  menu.classList.toggle('see');
};

menu_off = function() {
  return menu.classList.remove('see');
};

// options.onclick = menu_toggle
console.log(options);

console.log(menu);
