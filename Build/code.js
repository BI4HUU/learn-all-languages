const code1 = `<!-- comment -->
<div class= "className" > tag content </div>
Where
< div ></div > - tag
class="className" - attribute
tag content - content
< !-- --> - comment(invisible on the web site)`
const code2 = `<div onclick="run(1)" class="text a">Basics</div>
<div onclick = "run(2)" class="text a" >Practice</div>
<div onclick="run(2)" class="text a">Test</div>
<style></style>`

var acousticGuitar = new Pizzicato.Sound('./audio/ukradu.mp3', function () {
  // Sound loaded!
  acousticGuitar.play();
});








































