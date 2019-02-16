menu = id 'menu'
options = id 'options'
menu_toggle = () ->
	menu.classList.toggle 'see'
	return
menu_off = () ->
	menu.classList.remove 'see'