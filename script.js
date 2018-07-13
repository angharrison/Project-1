const tower1 = document.querySelector('#first')
const tower2 = document.querySelector('#second')
const tower3 = document.querySelector('#third')
const diskSelector = 3
const diskRule = []

//DOM Elements
    for (i = 1; i <= diskSelector; i++) {
      let diskDiv = document.createElement('div')
      diskDiv.id = "disk" + i
      diskDiv.className = 'disk'
      tower1.appendChild(diskDiv)
      diskRule.push(diskDiv.id)
    }


//Highlighting
let active = false

let actions = function(){
  if(active === false && this.childElementCount === 0){
    return
  }else if (active === this.lastChild){
    this.lastChild.style.borderWidth = '1px'
    active = false
  }else if (active === false){
    this.lastChild.style.borderWith = '5px'
    active = this.lastChild
  }else if (active.offsetWidth < this.lastChild.offsetWidth || this.childElementCount === 0){
    active.style.borderWidth = '1px'
    this.appendChild(active)
    winner()
    active = false
  }else{
    active.style.borderWith = '1px'
    active = false}
    }


  tower1.addEventListener('click', actions)
  tower2.addEventListener('click', actions)
  tower3.addEventListener('click', actions)












  var para = document.createElement("P");
  var t = document.createTextNode("Game Rules");
  para.appendChild(t);
  document.getElementById("button1").appendChild(para);
  id="button1"





//Hidden Button
/*

var text = document.getElementById("text");

var button = document.getElementById("button1");

button.onclick = function () {
  text.style.display = "inline";

  function myFunction() {
    document.getElementById("button2").innerHTML = "Restart game";
  }
*/
