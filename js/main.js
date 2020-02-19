let box1 = anime({
  targets: '.box1',
  translateX: 20,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
})
let shaikingBox1 =
  document.querySelector('.box1')

let box2 = anime({
  targets: '.box2',
  translateX: -10,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
})
let shaikingBox2 =
  document.querySelector('.box2')

let box3 = anime({
  targets: '.box3',
  translateX: 30,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
})
let shaikingBox3 =
  document.querySelector('.box3')

let box4 = anime({
  targets: '.box4',
  translateX: 10,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
})
let shaikingBox4 =
  document.querySelector('.box4')

let box5 = anime({
  targets: '.box5',
  translateX: -15,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
})
let shaikingBox5 =
  document.querySelector('.box5')

let box6 = anime({
  targets: '.box6',
  translateX: 15,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
})
let shaikingBox6 =
  document.querySelector('.box6')

let box7 = anime({
targets: '.box7',
  translateX: 35,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
})
let shaikingBox7 =
  document.querySelector('.box7')

let box8 = anime({
  targets: '.box8',
  translateY: -2500,
  easing: 'linear',
  loop: true,
  duration: 5000,
});
let goBox8 =
  document.querySelector('.box8')

let glitch2 = anime({
  targets: '.glitch2',
  keyframes: [
    {translateY: -10},
    {translateX: 10},
    {translateY: 10},
    {translateX: 10},
    {translateY: 10}
  ],
  duration: 3000,
  easing: 'linear',
  loop: true
});
let goGlitch2 =
  document.querySelector('.glitch2')

let glitch3 = anime({
  targets: '.glitch3',
  keyframes: [
    {translateY: 10},
    {translateX: -10},
    {translateY: -10},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 3000,
  easing: 'linear',
  loop: true
});
let goGlitch3 =
  document.querySelector('.glitch3')

let glitch1 = anime({
  targets: '.glitch1',
  keyframes: [
    {translateY: 1},
    {translateX: -1},
    {translateY: 1},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 5000,
  easing: 'linear',
  loop: true
});
let goGlitch1 =
  document.querySelector('.glitch1')

let glitch4 = anime({
  targets: '.glitch4',
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
  document.querySelector('.glitch4')
