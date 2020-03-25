
document.onmousemove = function (event) {
  let x = event.x - 960;
  let y = event.y - 540;

  document.querySelector('.eye').style.transform = 'rotate('+ 57.2958*arcctg(x, y)+'deg)';

  function arcctg(x, y) {

    if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y < 0) return Math.PI +  Math.atan(x / y);
    if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));


  }
}
//if(window.matchMedia('(max-width: 1680px)').matches){
  //x = event.x - 840;
  //y = event.y - 525;
//}
const leftEye = document.querySelector('.eye');


leftEye.onmouseenter = function (event) {

  event.target.style.backgroundColor = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}
document.body.append(leftEye)
const fon = document.querySelector('body');


fon.onmouseenter = function (event) {

  event.target.style.backgroundColor = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}
document.body.append(fon)
