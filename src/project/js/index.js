// var switchEl = document.querySelector('.switch')
// switchEl.addEventListener('click', () => {
//   if(switchEl.classList.contains('untoggled')) {
//     switchEl.classList.remove('untoggled')
//     switchEl.classList.add('toggled')
//   }
//   else {
//     switchEl.classList.remove('toggled')
//     switchEl.classList.add('untoggled')
//   }
// })
document.addEventListener('DOMContentLoaded', () => {

})
var items = document.querySelectorAll('.background-item')

document.addEventListener('mousemove', (e) => {
  mouseMoveParallax(e, items)
  //mouseParallax(e, document.querySelector('.c2'), 10)
})
//document.addEventListener('mousemove', mouseMoveParallax3)

function mouseMoveParallax(e, items) {
  items.forEach((item) => {
    var itemCoords = item.getBoundingClientRect()
    var Xoffset = (window.screen.width/2 - itemCoords.x)/2
    var Yoffset = (e.clientY - itemCoords.y)/2
    console.log(Xoffset, Yoffset)

    item.style.transform = 'translate('+e.clientX/Xoffset+'px, '+e.clientY/Yoffset+'px)'
    //item.style.transform = 'translate('+e.clientX+'px, '+e.clientY+'px)'

  })
  //window.requestAnimationFrame(mouseMoveParallax(e, items))
}

function mouseParallax(e, item, layer) {
  var itemCoords = item.getBoundingClientRect()
  var Xoffset = (window.screen.width/2 - itemCoords.x)/layer
  var Yoffset = (window.screen.height/2 - itemCoords.y)/layer

  //console.log(itemCoords, window.screen.width)
  item.style.transform = 'translate('+e.clientX/Xoffset+'px, '+e.clientY/Yoffset+'px)'
  //item.style.transform = 'translateX('+e.clientX/50+'px)'
}
