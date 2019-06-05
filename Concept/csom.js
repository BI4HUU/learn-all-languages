function SlidesParser(SlidesStr) {
	let a = SlidesStr
	c = a.split(/\n/)

	let Slides = []
	let х = false
	let obj = {}
	let strLineVar = ''

	function sortGroupSlide(data) {
		if (data[0] == 1) {
			let doubleDot = data[1].indexOf(':')
			obj[data[1].slice(0, doubleDot)] = data[1].slice(doubleDot+2)
		}
		if (data[0] > 1) {
			for (var i = 2; i < data[0]; i++) {
				strLineVar += `	`
			}
			strLineVar += data[1]
			strLineVar += `\n`
		}
		if (data[0] == 0 && х) {
			strLineVar = strLineVar.substr(0, strLineVar.length - 1)
			obj['see'] = seeTooObj(strLineVar)
			Slides.push(obj)
			obj['time'] = parseInt(obj['time'])
			obj = {}
			strLineVar = ''
		}

		if (data[0] == 0 && !х) {х = true}
	}
	let i = 0
	let ii = 1
	for (var x = 0; x < c.length; x++) {
		function f(n) {
			while(c[n].slice(i, ii) == `	`){
				i++
				ii++
			}
			sortGroupSlide([i, c[n].slice(i, c[n].length)])
			i = 0
			ii = 1
		}
		f(x)
	}
	function seeTooObj(str) {
		let SlideObj = []
		let strArrAll = []
		strArr = str.split(/\n/)
		for (var xx = 0; xx < strArr.length; xx++) {
			function ff(n) {
				while(strArr[n].slice(i, ii) == `	`){
					i++
					ii++
				}
				let strArrSec = [i, strArr[n].slice(i, strArr[n].length)]
				strArrAll.push(strArrSec)
				i = 0
				ii = 1
			}
			ff(xx)
		}
		for (var i3 = 0; i3 < strArrAll.length; i3++) {
			if (strArrAll[i3][0] == 0) {
				let doubleDot = strArrAll[i3][1].indexOf(':')
				let strLine0 = {}
				strLine0[strArrAll[i3][1].slice(0, doubleDot)] = strArrAll[i3][1].slice(doubleDot+2)

				let arrVarLvl2 = []
				let strLineVarLvl2 = {}

				if (i3+1 < strArrAll.length) {
					let koef = 1
					while(strArrAll[i3+koef][0] == 1){
						let doubleDotLvl2 = strArrAll[i3+koef][1].indexOf(':')
						let strLineLvl2 = {}
						strLineLvl2[strArrAll[i3+koef][1].slice(0, doubleDotLvl2)] = strArrAll[i3+koef][1].slice(doubleDotLvl2+2)
						console.log(strLineLvl2)
						arrVarLvl2.push(strLineLvl2)
						if (i3+koef+1 < strArrAll.length) {
							if (strArrAll[i3+koef+1][0] == 1) {
								koef++
							} else {
								break
							}
						} else {
							break
						}
						if (i3+koef == strArrAll.length) {break}
					}
					strLine0[strArrAll[i3][1].slice(0, doubleDot)] = arrVarLvl2
				}
				SlideObj.push(strLine0)

			}

		}
		return SlideObj
	}
	// console.log(Slides)
	return Slides
}
SlidesParser(`Slide1:
	see:
		key1:
			key12: data331
			key21: data331
			key31: data331
		key2:
			key1331: data331
			key213: data31
	time: 4000
	voice: HTML_RU_html
Slide2:
	see:
		key4: data231
	time: 8000
	voice: HTML_RU_html2
SlideEnd`)