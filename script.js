const tower1 = document.querySelector('#first')                                           //identify and constant each tower
const tower2 = document.querySelector('#second')
const tower3 = document.querySelector('#third')
let diskSelector = 4

//DOM Elements
    for (i = 1; i <= diskSelector; i++){                                                     //for loop for disks
      let diskDiv = document.createElement('div')                                            //create diskDiv to hold all disks
      diskDiv.id = "disk" + i                                                                  //touch css elements and ability to add one disk to diskdiv
      diskDiv.className = 'disk'                                                                //touch html element with individual disks
      tower1.appendChild(diskDiv)                                                          //attach children disks to tower 1
    }

//Highlighting
let active = false                                                                       //highlighting is off to start

let actions = function(){                                                            //create function to enable movement for towers
   if (active === false && this.childElementCount === 0){                            //if highlighting is off and there are no disks in the tower, no reaction
       return
   }else if (active === false){                                                   //if highlighting is off
       this.lastChild.style.borderWidth = '5px'                                      //the border of lastChild(last disk selected) is highlighted by clicking on tower
       active = this.lastChild                                                               //last clicked disk becomes active
   }else if (this.childElementCount === 0 || active.offsetWidth < this.lastChild.offsetWidth) { //if tower is empty of disks or width of active (selected) disk is less than width of uppermost disk on tower, no movement. offsetWidth is the size of the visual box w/o borders so it doesn't include highlighted border/margin/scroll tab. keeps the rule bigger disks aren't put on top of smaller disks
       active.style.borderWidth = '1px'                                                     //active is last disk and border is unhighlighted to enable movement
       this.appendChild(active)                                                           //active(last selected disk) is moved and attached to element tower clicked on
       active = false                                                                 //unhighlight border of disk once moved to another tower
       winner()
   }else{
       active.style.borderWidth = '1px'                                                   //if all else, active disk is unhighlighted 
       active = false
     }
}

tower1.addEventListener('click', actions)                                                   //click for each tower
tower2.addEventListener('click', actions)
tower3.addEventListener('click', actions)



  let btnr = document.querySelector("#button2")                                                    //clear button to reset game
  btnr.addEventListener('click', () => {
    location.reload()
  })
