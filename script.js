for (i = 0; i <= 1700 ; i++) {
  let square = document.createElement('div')
  square.className = 'square'
  document.body.appendChild(square)
  }




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

function showText(){
  var text = document.getElementById("text");

}

  function myFunction() {
    document.getElementById("demo").innerHTML = "Restart game";
  }
