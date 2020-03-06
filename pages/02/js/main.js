let divsNumber = 5

for (let i = 0; i < divsNumber; i+=1) {
   let red = document.createElement('main')
   red.style.cssText =`
    transform:
    translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)
    rotate(${anime.random(0,360)}deg);
    border-radius: ${anime.random(0,360)}px;

    width: ${anime.random(0,500)}px;
    height: ${anime.random(0,500)}px;`
  red.onmouseenter = function (event) {
    event.target.style.transform = `translate(${anime.random(0,90)}vw,${anime.random(0,90)}vh)
     rotate(${anime.random(0,360)}deg)`
    event.target.style.borderRadius = `${anime.random(0,360)}px`
    event.target.style.width = `${anime.random(0,500)}px`
    event.target.style.height = `${anime.random(0,500)}px`
  }
  document.body.append(red)
}

for (let i = 0; i < divsNumber; i+=1) {
   let blue = document.createElement('nav')
   blue.style.cssText =`
    transform:
    translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)
    rotate(${anime.random(0,360)}deg);
    border-radius: ${anime.random(0,360)}px;

    width: ${anime.random(0,500)}px;
    height: ${anime.random(0,500)}px;`
  blue.onmouseenter = function (event) {
    event.target.style.transform = `translate(${anime.random(0,90)}vw,${anime.random(0,90)}vh)
     rotate(${anime.random(0,360)}deg)`
    event.target.style.borderRadius = `${anime.random(0,360)}px`
    event.target.style.width = `${anime.random(0,500)}px`
    event.target.style.height = `${anime.random(0,500)}px`
  }
  document.body.append(blue)
}
for (let i = 0; i < divsNumber; i+=1) {
   let yellow = document.createElement('div')
   yellow.style.cssText =`
    transform:
    translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)
    rotate(${anime.random(0,360)}deg);
    border-radius: ${anime.random(0,360)}px;

    width: ${anime.random(0,500)}px;
    height: ${anime.random(0,500)}px;`
  yellow.onmouseenter = function (event) {
    event.target.style.transform = `translate(${anime.random(0,90)}vw,${anime.random(0,90)}vh)
     rotate(${anime.random(0,360)}deg)`
    event.target.style.borderRadius = `${anime.random(0,360)}px`
    event.target.style.width = `${anime.random(0,500)}px`
    event.target.style.height = `${anime.random(0,500)}px`
  }
  document.body.append(yellow)
}
