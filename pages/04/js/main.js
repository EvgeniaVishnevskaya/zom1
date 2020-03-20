let mooveDown = anime({
  targets: '#block',
  translateX: -270,
  translateY: 270,

  direction: 'alternate',
  duration: 3000,
  autoplay: false,

  easing: 'easeInOutSine',

});
let turgetsBtn01 =
  document.querySelector('#block')
turgetsBtn01.onclick = mooveDown.play


let mooveDown2 = anime({
  targets: '#block1',
  translateX: 300,
  translateY: -300,

  direction: 'alternate',
  duration: 3000,
  autoplay: false,

  easing: 'easeInOutSine',

});
let turgetsBtn02 =
  document.querySelector('#block1')
turgetsBtn02.onclick = mooveDown2.play


var turnOn = anime({
  targets: '.box1, .box2',
  opacity: 1,

  autoplay: false,
  easing: 'easeInOutSine'
});

let hasClicked = false
window.onclick = function() {
  if (hasClicked === false) {
    turnOn.play()
    hasClicked = true
  }
};


let glitch1 = anime({
  targets: '.yellow',
  keyframes: [
    {translateY: 5},
    {translateX: -10},
    {translateY: -5},
    {translateX: 0},
    {translateY: 10}
  ],
  duration: 3000,
  easing: 'linear',
  loop: true
});
let goGlitch1 =
  document.querySelector('.yellow')

let glitch2 = anime({
  targets: '.blue',
  keyframes: [
    {translateY: -5},
    {translateX: 5},
    {translateY: 3},
    {translateX: 3},
    {translateY: 5}
  ],
  duration: 1000,
  easing: 'linear',
  loop: true
});
let goGlitch2 =
  document.querySelector('.blue')


let glitch3 = anime({
  targets: '.red',
  keyframes: [
    {translateY: 3},
    {translateX: -3},
    {translateY: -5},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 1000,
  easing: 'linear',
  loop: true
});
let goGlitch3 =
  document.querySelector('.red')

let glitch4 = anime({
  targets: '.white',
  keyframes: [
    {translateY: 5},
    {translateX: 7},
    {translateY: -7},
    {translateX: -5},
    {translateY: 5}
  ],
  duration: 5000,
  easing: 'linear',
  loop: true
});
let goGlitch4 =
  document.querySelector('.white')

//window.onmousemove = function (event) {
//  console.log(event);
//}
