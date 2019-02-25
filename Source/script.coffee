#############################################
# JQuery
#############################################
$ = (selector) ->
	document.querySelectorAll selector
id = (selector) ->
	document.getElementById selector

print = (data) ->
	console.log data
#############################################
# SCRIPT
#############################################
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
#############################################
# CORE
#############################################

slider = id 'body'
numberNextSlide = 0
rewind = id 'rewind'
rewind_pause = id 'rewind_pause'
rewind_play = id 'rewind_play'
allSlides = 0
allSlidesLength = 0
time = 88
setI = 0
######################################
run_language = (language) ->
	time = 88
	numberNextSlide = 0
	allSlides = 0
	allSlidesLength = 0
	allSlides = language
	allSlidesLength = language.length
	setI = setInterval( () ->
			run()
		time)
	i_b_r = -1
	id('rewind').innerHTML = ''
	for key, val of allSlides
		i_b_r++
		button_rewind = document.createElement "div"
		button_rewind.classList.add "rewind_item"
		button_rewind.setAttribute "onclick", "run(" + i_b_r + ")"
		rewind.appendChild button_rewind

parse_slide = (arr) ->
	slider.innerHTML = ''
	for val in arr
		DOM_slide = document.createElement 'div'
		DOM_slide.setAttribute 'class', Object.keys(val)[0]
		if Object.keys(val)[0] == 'html'
			DOM_slide.innerHTML = val.html
			slider.appendChild DOM_slide
		if Object.keys(val)[0] == 'col'
			slider.appendChild parse_col val, DOM_slide
		if Object.keys(val)[0] == 'line'
			slider.appendChild parse_row val, DOM_slide
	return
parse_col = (obj, DOM_slide) ->
	for key, val of obj
		for val2 in val
			DOM_col = document.createElement 'div'
			DOM_col.setAttribute 'class', Object.keys(val2)[0]
			DOM_slide.appendChild parse_row val2, DOM_col
			# console.log DOM_slide
	return DOM_slide

parse_row = (arr_obj, DOM_col) ->
	# for val in arr_obj
	# console.log arr_obj
		# console.log key
	for key0, val2 of arr_obj
		for val3 in val2
			for key, val of val3
				# for key2, val2 of arr_obj
		# console.log key
				# console.log val
				div = document.createElement 'div'
				div.setAttribute 'class', key
				div.textContent = val
				DOM_col.appendChild div
	return DOM_col

######################################

clearIntervalMini = () ->
	clearInterval setI
	setI = setInterval(	() ->
		next()
	time)
	console.log time

next = () ->
	allSlidesLength__ = allSlidesLength
	allSlidesLength__--
	if numberNextSlide < allSlidesLength__
		numberNextSlide++
		run()

run = (number) ->
	console.log number
	number++
	if number
		number--
		# console.log number
		numberNextSlide = number
	if numberNextSlide < allSlidesLength
		if numberNextSlide >= 0
			rewind_play.style.display = 'none'
			rewind_pause.style.display = 'block'
			time = allSlides[numberNextSlide].slide.time 
			clearIntervalMini()
			# console.log allSlides[numberNextSlide].slide.time
			parse_slide allSlides[numberNextSlide].slide.see
			autoHover numberNextSlide
back = () ->
	# console.log numberNextSlide
	# numberNextSlide_minus = numberNextSlide
	# numberNextSlide_minus--
	if numberNextSlide > 0
		numberNextSlide--
		run()

pause = () ->
	clearInterval setI
	rewind_pause.style.display = 'none'
	rewind_play.style.display = 'block'



autoHover = (number) ->
	i_rewind = 0
	for val of allSlides
		rewind.childNodes[i_rewind].classList.remove("rewind_active")
		i_rewind++
	rewind.childNodes[number].classList.add("rewind_active")

fullScreen = id 'fullScreen'
closeFullScreen = id 'closeFullScreen'

Language_active = (lang) ->
	$('.Language_item')[0].classList.remove('menu_item_active')
	$('.Language_item')[1].classList.remove('menu_item_active')
	$('.Language_item')[2].classList.remove('menu_item_active')
	$('.Language_item')[3].classList.remove('menu_item_active')
	$('.Language_item')[4].classList.remove('menu_item_active')
	$('.Language_item')[5].classList.remove('menu_item_active')
	id(lang).classList.add 'menu_item_active'
Full_screen = () ->
	fullScreen.style.display = 'none'
	closeFullScreen.style.display = 'block'
	if document.documentElement.requestFullscreen
		document.documentElement.requestFullscreen()
	else
		if document.documentElement.mozRequestFullScreen
			document.documentElement.mozRequestFullScreen()
		else
			if document.documentElement.webkitRequestFullscreen
				document.documentElement.webkitRequestFullscreen()
			else
				if document.documentElement.msRequestFullscreen
					document.documentElement.msRequestFullscreen()

Close_full_screen = () ->
	closeFullScreen.style.display = 'none'
	fullScreen.style.display = 'block'
	if document.exitFullscreen
		document.exitFullscreen()
	else
		if document.mozCancelFullScreen
			document.mozCancelFullScreen()
		else
			if document.webkitExitFullscreen
				document.webkitExitFullscreen()
			else
				if document.msExitFullscreen
					document.msExitFullscreen()

Lang_toggle = (Lang) ->
	EN =
		Language: 'Language'
		Theme: 'Theme'
		Font_size: 'Font size'
		Support: 'Support'
		Author: 'Author'
		Light: 'Light'
		Dark: 'Dark'
	RU =
		Language: 'Язык'
		Theme: 'Тема'
		Font_size: 'Размер шрифта'
		Support: 'Поддержка'
		Author: 'Автор'
		Light: 'Светлая'
		Dark: 'Темная'
	SPA =
		Language: 'Idioma'
		Theme: 'Tema'
		Font_size: 'Tamaño de fuente'
		Support: 'Apoyo'
		Author: 'Autor'
		Light: 'Ligero'
		Dark: 'Oscuro'
	ZHO =
		Language: '语言'
		Theme: '主题'
		Font_size: '字体大小'
		Support: '支持'
		Author: '作者'
		Light: '光'
		Dark: '黑'

	Lang_apply = (obj) ->
		for key, val of obj
			id(key).innerHTML = val

	Lang_interface_active = (lang) ->
# Lang_items = $ '.Lang_item'
		$('.Lang_item')[0].classList.remove('menu_item_active')
		$('.Lang_item')[1].classList.remove('menu_item_active')
		$('.Lang_item')[2].classList.remove('menu_item_active')
		$('.Lang_item')[3].classList.remove('menu_item_active')
		id(lang).classList.add 'menu_item_active'

	if Lang == 'RU'
		Lang_apply RU
		Lang_interface_active 'RU'
	if Lang == 'EN'
		Lang_apply EN
		Lang_interface_active 'EN'
	if Lang == 'SPA'
		Lang_apply SPA
		Lang_interface_active 'SPA'
	if Lang == 'ZHO'
		Lang_apply ZHO
		Lang_interface_active 'ZHO'

if navigator.language == 'ru-RU'
#  || 'ua-UA' || 'ru-UA' || 'ru' || 'ua' || 'uk'
	Lang_toggle "RU"
if navigator.language == 'en-EN'
#  || 'EN' || "en" || "en-US" || "en-EG" || "en-AU" || "en-GB" || "en-CA" || "en-NZ" || "en-IE" || "en-ZA" || "en-JM" || "en-BZ" || "en-TT"
	Lang_toggle "EN"
if navigator.language == 'zh-CN'
#  || 'zh' || "zh-TW" || "zh-HK" || "zh-SG" || 'zh-ZH'
	Lang_toggle "ZHO"
if navigator.language == 'es-ES'
#  || 'es' || "es-AR" || "es-GT" || "es-CR" || "es-PA" || "es-DO" || "es-MX" || "es-VE" || "es-CO" || "es-PE" || "es-EC" || "es-CL" || "es-UY" || "es-PY" || "es-BO" || "es-SV" || "es-HN" || "es-NI" || "es-PR"
	Lang_toggle "SPA"



Font_size = (size) ->
	f_size = id('html').style.fontSize
	f_size = f_size.substring(0, 2)
	font_size = +f_size + size
	# console.log +f_size + size
	# console.log size + f_size
	id('html').style.fontSize = font_size+'px'
	id('Font_size_data').innerHTML = id('html').style.fontSize
Font_size()


