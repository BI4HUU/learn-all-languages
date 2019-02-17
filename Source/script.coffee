menu = id 'menu'
full_screen = id 'full_screen'
options = id 'options'
menu_toggle = () ->
	menu.classList.toggle 'see'
	return
menu_off = () ->
	menu.classList.remove 'see'
Theme_dark = () ->
	full_screen.classList.remove 'Theme_lite'
	full_screen.classList.add 'Theme_dark'
	id('Light').classList.remove 'menu_item_active'
	id('Dark').classList.add 'menu_item_active'
Theme_lite = () ->
	full_screen.classList.remove 'Theme_dark'
	full_screen.classList.add 'Theme_lite'
	id('Dark').classList.remove 'menu_item_active'
	id('Light').classList.add 'menu_item_active'
Theme_dark()
#menu_item_active