allSlides = language_HTML
allSlidesLength = Object.keys(allSlides).length
slider = id 'body'
numberNextSlide = 1
time = 14
rewind = id 'rewind'
rewind_pause = id 'rewind_pause'
rewind_play = id 'rewind_play'
setI = setInterval( () =>
	run()
time)
######################################

parse_slide = (obj) ->
	slider.innerHTML = ''
	for key, val of obj
		key_slice = key.slice(0,3)
		DOM_slide = document.createElement 'div'
		DOM_slide.setAttribute 'class', 'row'
		if key_slice == 'col'
			slider.appendChild parse_col val, DOM_slide
		if key_slice == 'row'
			slider.appendChild parse_row val, DOM_slide
	return
parse_col = (obj, DOM_slide) ->
	for key, val of obj
		DOM_col = document.createElement 'div'
		DOM_col.setAttribute 'class', 'col'
		DOM_slide.appendChild parse_row val, DOM_col
	return DOM_slide

parse_row = (arr_obj, DOM_col) ->
	for val in arr_obj
		for key, val of val[0]
			div = document.createElement 'div'
			div.setAttribute 'class', key
			div.textContent = val
			DOM_col.appendChild div
	return DOM_col

# parse_slide allSlides.slide1.see
######################################

clearIntervalMini = () ->
	clearInterval setI
	setI = setInterval(	() =>
		next()
	time)

next = () ->
	numberNextSlide_plus = numberNextSlide
	numberNextSlide_plus++
	if numberNextSlide_plus <= allSlidesLength
		numberNextSlide++
		run()

run = (number) ->
	if number
		numberNextSlide = number
	if numberNextSlide <= allSlidesLength
		if numberNextSlide > 0
			rewind_play.style.display = 'none'
			rewind_pause.style.display = 'block'
			time =  allSlides["slide"+numberNextSlide].time
			clearIntervalMini()
			parse_slide allSlides["slide"+numberNextSlide].see
			autoHover numberNextSlide
back = () ->
	numberNextSlide_minus = numberNextSlide
	numberNextSlide_minus--
	if numberNextSlide_minus > 0
		numberNextSlide--
		run()

pause = () ->
	clearInterval setI
	rewind_pause.style.display = 'none'
	rewind_play.style.display = 'block'


i_b_r = 0
for key, val of allSlides
	i_b_r++
	button_rewind = document.createElement "div"
	button_rewind.classList.add "rewind_item"
	button_rewind.setAttribute "onclick", "run(" + i_b_r + ")"
	rewind.appendChild button_rewind

autoHover = (number) ->
	number--
	i_rewind = 0
	for val of allSlides
		rewind.childNodes[i_rewind].classList.remove("rewind_active")
		i_rewind++
	rewind.childNodes[number].classList.add("rewind_active")

block_full_screen = id 'full_screen'
fullScreen = id 'fullScreen'
closeFullScreen = id 'closeFullScreen'

Full_screen = () ->
	fullScreen.style.display = 'none'
	closeFullScreen.style.display = 'block'
	if block_full_screen.requestFullscreen
		block_full_screen.requestFullscreen()
	else
		if block_full_screen.mozRequestFullScreen
			block_full_screen.mozRequestFullScreen()
		else
			if block_full_screen.webkitRequestFullscreen
				block_full_screen.webkitRequestFullscreen()
			else
				if block_full_screen.msRequestFullscreen
					block_full_screen.msRequestFullscreen()
  
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

Lang_togle = (Lang) ->
	EN =
		Language: 'Language'
		Thems: 'Thems'
		Font_size: 'Font size'
		Support: 'Support'
		Author: 'Author'
	RU =
		Language: 'Язык'
		Thems: 'Тема'
		Font_size: 'Размер шрифта'
		Support: 'Поддержка'
		Author: 'Автор'
	Lang_apply = (obj) ->
		for key, val of obj
			id(key).innerHTML = val

	Lang_active = (lang) ->
		Lang_items = $ '.Lang_item'
		$('.Lang_item')[0].classList.remove('menu_item_active')
		$('.Lang_item')[1].classList.remove('menu_item_active')
		id(lang).classList.add 'menu_item_active'

	if Lang == 'RU'
		Lang_apply RU
		Lang_active 'RU'
	if Lang == 'EN'
		Lang_apply EN
		Lang_active 'EN'

if navigator.language == 'ru-RU'
	Lang_togle "RU"
if navigator.language == 'ua-UA'
	Lang_togle "RU"
if navigator.language == 'ru-UA'
	Lang_togle "RU"