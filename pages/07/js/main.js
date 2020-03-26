
document.onmousemove = function (event) {
  let x = event.x;
  let box1 = anime({
    targets: '#left',
    translateX: -x,
    easing: 'linear'
  })
  let box2 = anime({
    targets: '#right',
    translateX: x,
    easing: 'linear'
  })
  let shaikingBox2 =
    document.querySelector('#right')


  let shaikingBox1 =
    document.querySelector('#left')

}
