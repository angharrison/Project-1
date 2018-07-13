
const tower = document.querySelectorAll('.tower')
const diskSelector = 3
const diskRule = []
//DOM Elements
    for (i = 1; i <= diskSelector; i++) {
      let diskDiv = document.createElement('div')
      diskDiv.id = "disk" + [i]
      diskDiv.className = 'disk'
      tower[0].appendChild(diskDiv)
      diskRule.push(diskDiv.id)
    }



//Hidden Button
var text = document.getElementById("text");

var button = document.getElementById("reveal");

button.onclick = function () {
  text.style.display = "inline";
  //you can write another function or toggle between two behaviors
}

//document on debugger console will display whole document
//button = variable button (info) container
// text refers to variable we created in line 1
// text.style.display (we are changing the style of the text element tot go in-line)


  function myFunction() {
    document.getElementById("demo").innerHTML = "Restart game";
  }
