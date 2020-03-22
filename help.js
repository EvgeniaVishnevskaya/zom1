window.onmousemove = function (event) {

}


document.onmousemove = function (event) {
  let x = event.x - 100;
  let y = event.y - 100;
  console.log(x+' '+y);
  document.querySelector('#cl').style.transform = 'rotate(' + 100*arcctg(x, y) + 'deg)';

  function arcctg(x, y) {

    if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y < 0) return Math.PI +  Math.atan(x / y);
    if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));


  }
}
