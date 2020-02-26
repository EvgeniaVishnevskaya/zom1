let bigger = new ScrollMagic.Controller()

let $img = document.getElementById('img')
let $box = document.getElementById('box')
let $imgAnim = anime({
  targets: $img,
  autoplay: false,
  duration: 5000,
  translateX: '-15vw',
  zoom: 1.5,
  easing: 'easeInOutQuad'
})
new ScrollMagic.Scene({
  triggerElement: $box,

})
.addTo(bigger)
.on('enter', function () {
  if(!$imgAnim.completed){
    $imgAnim.play()
  }

})
