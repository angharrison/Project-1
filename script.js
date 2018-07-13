const tower1 = document.querySelector('#first')
const tower2 = document.querySelector('#second')
const tower3 = document.querySelector('#third')
let diskSelector = 3
const diskRule = []

//DOM Elements
    for (i = 1; i <= diskSelector; i++){
      let diskDiv = document.createElement('div')
      diskDiv.id = "disk" + i
      diskDiv.className = 'disk'
      tower1.appendChild(diskDiv)
      diskRule.push(diskDiv.id)
    }

//Highlighting
let active = false

let actions = function(){
   if (active === false && this.childElementCount === 0){
       return
   }else if (active === this.lastChild){
       this.lastChild.style.borderWidth = '1px'
       active = false
   }else if (active === false){
       this.lastChild.style.borderWidth = '5px'
       active = this.lastChild
   }else if (active.offsetWidth < this.lastChild.offsetWidth || this.childElementCount === 0){
       active.style.borderWidth = '1px'
       this.appendChild(active)
       active = false
   }else{
       active.style.borderWidth = '1px'
       active = false}
}
tower1.addEventListener('click', actions)
tower2.addEventListener('click', actions)
tower3.addEventListener('click', actions)
