
const HTML_EN_code1 = `<div onclick="run(1)" class="text a pointer">Basics</div>
<div onclick="run(6)" class="text a pointer">Test</div>
<div onclick = "run(2)" class="text a pointer" >Practice</div>`
const HTML_RU_code1 = `<div onclick="run(1)" class="text a pointer">Основы</div>
<div onclick="run(6)" class="text a pointer">Тести</div>
<div onclick = "run(6)" class="text a pointer" >Практика</div>`
const HTML_RU_code2 = `<html>
    <head>
        <title>title</title>
    </head>
    <body>
        <div>Привет мир</div>
    </body>
</html>`
const HTML_RU_code3 = `<html>
	<head>
		<title>Практика</title>
	</head>
	<body>
		<nav>
			<a href="#">Главна</a>	
			<a href="#">Продукты</a>	
			<a href="#">О нас</a>	
		</nav>
		<hr>
		<h1>Ну очень простой сайт</h1>
		<p>Для более красивого дизайна нужно изучить CSS.</p>
		<p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.</p>
		<a href="#">Ссылка на другую страницу</a>	
	</body>
</html>`
const supportSlide = [{'html m-auto': `<div class="mt-5 h-50" id="supportHistory">Sorry support, authorization in development...</div>
    <input type="text" class="form-control mt-2" id="supportInput" placeholder="Your question">
    <style>.Theme_dark #supportInput { background: #000; color: #fff; }#supportInput, #supportHistory{margin: auto}<style>`}]
const accountSlide = [{'html m-auto mt-5': `Sorry account in development...`}]
const downloadSlide = [{'html m-auto mt-5': `Sorry download in development...<br><a href="https://github.com/BI4HUU/learn-all-languages">github</a>`}]
const authorSlide = [{'html m-auto mt-5': `BI4HUU`}]
var language = false
var lang_name = false
var gEval = eval;

function load_voice(name_voice) {
	gEval(`if(typeof ${name_voice} == "undefined") {var ${name_voice} = new Pizzicato.Sound('./audio/${name_voice}.mp3')}`)
}

function play_voice (name_voice) {
	gEval(`${name_voice}.play()`)
}
var this_voice = false

function load_lang(lang_name_noMod) {
    lang_name = `${lang_name_noMod}_${lang_name_mod_var}`
    gEval(`if (typeof ${lang_name} == "undefined") {load_lang2 ("${lang_name}")}`)
}

function load_lang2 (lang_name) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gEval(`var ${lang_name} = ${xhttp.responseText}`)
            gEval(`run_language (${lang_name})`)
            print ` ${lang_name}`
        }
    };
    xhttp.open("GET", `${lang_name}.js`, true);
    xhttp.send();
}
function correctly_func(block) {
    block.target.style.backgroundColor = 'rgba(50, 205, 50, .3)'
}
function wrong_func(block2) {
    block2.target.style.backgroundColor = 'rgba(205, 50, 50, .3)'
}
// correctly wrong

function Test() {
    setTimeout(function() {
        Test2()
    },200)
}
function copyCode() {
    navigator.clipboard.writeText(allSlides[numberNextSlide].slide.copyCode)
 }

let fontInput = document.getElementById('FontInput');
fontInput.oninput = function() {
    slider.style.fontFamily = fontInput.value
    print(fontInput.value)
}



























