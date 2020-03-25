let glitch1 = anime({
  targets: '.yellow',
  animationDirection: 'alternate',
  keyframes: [
    {translateY: 10},
    {translateX: -10},
    {translateY: 10},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 3000,
  easing: 'linear',
  loop: true
});
let goGlitch1 =
  document.querySelector('.yellow')

let glitch2 = anime({
  targets: '.blue',
  animationDirection: 'alternate',
  keyframes: [
    {translateY: -10},
    {translateX: 10},
    {translateY: 10},
    {translateX: 10},
    {translateY: 10}
  ],
  duration: 1000,
  easing: 'linear',
  loop: true
});
let goGlitch2 =
  document.querySelector('.blue')


let glitch3 = anime({
  targets: '.red',
  animationDirection: 'alternate',
  keyframes: [
    {translateY: 5},
    {translateX: -5},
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
  animationDirection: 'alternate',
  keyframes: [
    {translateY: 0},
    {translateX: -10},
    {translateY: 10},
    {translateX: 10},
    {translateY: 0}
  ],
  duration: 3000,
  easing: 'linear',
  loop: true
});
let goGlitch4 =
  document.querySelector('.white')



let bg = document.getElementById('dontthink')

bg.onmouseenter = function (event) {

  event.target.style.cssText =
  `opacity: 1;`
  this.addEventListener("mouseout", function(){
    event.target.style.cssText =
  `opacity: 0;`;})
}


let kk = document.getElementById('kek')

kk.onmouseenter = function (event) {

  event.target.style.cssText =
  `opacity: 1;`
  this.addEventListener("mouseout", function(){
    event.target.style.cssText =
  `opacity: 0;`;})
}


let st = document.getElementById('stairs')

st.onmouseenter = function (event) {

  event.target.style.cssText =
  `opacity: 1;`
  this.addEventListener("mouseout", function(){
    event.target.style.cssText =
  `opacity: 0;`;})
}

let lil = document.getElementById('lil')

lil.onmouseenter = function (event) {

  event.target.style.cssText =
  `opacity: 1;`
  this.addEventListener("mouseout", function(){
    event.target.style.cssText =
  `opacity: 0;`;})
}


let eye = document.getElementById('eye')

eye.onmouseenter = function (event) {

  event.target.style.cssText =
  `opacity: 1;`
  this.addEventListener("mouseout", function(){
    event.target.style.cssText =
  `opacity: 0;`;})
}

let eye2 = document.getElementById('eye2')

eye2.onmouseenter = function (event) {

  event.target.style.cssText =
  `opacity: 1;`
  this.addEventListener("mouseout", function(){
    event.target.style.cssText =
  `opacity: 0;`;})
}
