let a = 
`Slide1:
	see:
		key31: data31
	time: 4000
	voice: HTML_RU_html
Slide2:
	see:
		key231: data231
	time: 8000
	voice: HTML_RU_html2
Slide3:
	see:
		key331: data331
	time: 18000
	voice: HTML_RU_html3
Slide4:
	see:
		key331: data331
	time: 18000
	voice: HTML_RU_html3
SlideEnd`

c = a.split(/\n/)

let Slides = []
let х = false
let obj = {}

function sortGroupSlide(data) {
	if (data[0] == 1) {
		let doubleDot = data[1].indexOf(':')
		obj[data[1].slice(0, doubleDot)] = data[1].slice(doubleDot+2)
	}
	if (data[0] > 1) {
		obj[data[1]] = 'test'
	}
	if (data[0] == 0 && х) {
		Slides.push(obj)
		obj = {}
	}

	if (data[0] == 0 && !х) {
		х = true
	}
}
let i = 0
let ii = 1
for (var x = 0; x < c.length; x++) {
	f(x)
}
function f(n) {
	while(c[n].slice(i, ii) == `	`){
		i++
		ii++
	}
	sortGroupSlide([i, c[n].slice(i, c[n].length)])
	i = 0
	ii = 1
}

	console.log(Slides)



// let numberSlide = 0
		// numberSlide++	// gEval(`Slide${numberSlide}.push([${data[0]}, '${data[1]}'])`)
	// console.log(c[n].slice(i, c[n].length))
	// console.log(i)

// [
// 	{
// 		See: ``,
// 		voice: \`HTML_RU_html\`,
// 		time: 4000
// 	}, {
// 		See: ``,
// 		voice: \`HTML_RU_html\`,
// 		time: 4000
// 	}
// ]