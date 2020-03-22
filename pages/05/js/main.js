const leftClose = "M-6.10352e-05 4.83198C-6.10352e-05 22.0628 46.452 36.0312 103.754 36.0312C139.842 36.0312 166.007 27.1049 184.595 18.6983C188.744 16.8219 193.532 15.6307 196.267 13.4984C199.366 11.0826 210.185 19.391 210.845 16.0562C211.136 14.5832 210.289 11.3374 207.507 4.83198C207.507 -12.3989 147.802 23.5 90.5 23.5C33.1984 23.5 -6.10352e-05 -12.3989 -6.10352e-05 4.83198Z";

const leftOpen = "M-6.10352e-05 49.8321C-6.10352e-05 67.063 46.452 81.0313 103.754 81.0313C139.842 81.0313 166.007 72.105 184.595 63.6984C188.744 61.822 193.532 60.6308 196.267 58.4985C199.366 56.0827 210.185 64.3911 210.845 61.0563C211.136 59.5833 210.289 56.3375 207.507 49.8321C207.507 32.6012 149.383 0 92.0814 0C34.7798 0 -6.10352e-05 32.6012 -6.10352e-05 49.8321Z";

const rightClose = "M212 4.83214C212 22.063 165.439 36.0314 108.002 36.0314C71.8292 36.0314 45.6026 27.1051 26.9711 18.6985C22.8124 16.822 18.0128 15.6308 15.2713 13.4986C12.1653 11.0827 1.32141 19.3912 0.659993 16.0564C0.367829 14.5833 1.21697 11.3376 4.00499 4.83214C4.00499 -12.3987 61.0637 23 118.5 23C175.936 23 212 -12.3987 212 4.83214Z";

const rightOpen = "M214 49.8321C214 67.0629 167.439 81.0313 110.003 81.0313C73.8293 81.0313 47.6028 72.105 28.9713 63.6984C24.8126 61.822 20.013 60.6308 17.2715 58.4985C14.1654 56.0827 3.32158 64.3911 2.66016 61.0563C2.36799 59.5833 3.21713 56.3375 6.00515 49.8321C6.00515 32.6012 64.2661 0 121.702 0C179.138 0 214 32.6012 214 49.8321Z";

const leftClose2 = "M-6.10352e-05 4.83198C-6.10352e-05 22.0628 46.452 36.0312 103.754 36.0312C139.842 36.0312 166.007 27.1049 184.595 18.6983C188.744 16.8219 193.532 15.6307 196.267 13.4984C199.366 11.0826 210.185 19.391 210.845 16.0562C211.136 14.5832 210.289 11.3374 207.507 4.83198C207.507 -12.3989 147.802 23.5 90.5 23.5C33.1984 23.5 -6.10352e-05 -12.3989 -6.10352e-05 4.83198Z";

const leftOpen2 = "M-6.10352e-05 49.8321C-6.10352e-05 67.063 46.452 81.0313 103.754 81.0313C139.842 81.0313 166.007 72.105 184.595 63.6984C188.744 61.822 193.532 60.6308 196.267 58.4985C199.366 56.0827 210.185 64.3911 210.845 61.0563C211.136 59.5833 210.289 56.3375 207.507 49.8321C207.507 32.6012 149.383 0 92.0814 0C34.7798 0 -6.10352e-05 32.6012 -6.10352e-05 49.8321Z";

const rightClose2 = "M212 4.83214C212 22.063 165.439 36.0314 108.002 36.0314C71.8292 36.0314 45.6026 27.1051 26.9711 18.6985C22.8124 16.822 18.0128 15.6308 15.2713 13.4986C12.1653 11.0827 1.32141 19.3912 0.659993 16.0564C0.367829 14.5833 1.21697 11.3376 4.00499 4.83214C4.00499 -12.3987 61.0637 23 118.5 23C175.936 23 212 -12.3987 212 4.83214Z";

const rightOpen2 = "M214 49.8321C214 67.0629 167.439 81.0313 110.003 81.0313C73.8293 81.0313 47.6028 72.105 28.9713 63.6984C24.8126 61.822 20.013 60.6308 17.2715 58.4985C14.1654 56.0827 3.32158 64.3911 2.66016 61.0563C2.36799 59.5833 3.21713 56.3375 6.00515 49.8321C6.00515 32.6012 64.2661 0 121.702 0C179.138 0 214 32.6012 214 49.8321Z";


let toggle = false;
const leftEye = document.querySelector('#leftEye');
const rightEye = document.querySelector('#rightEye');


leftEye.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openleft",
      d: [
        {value: toggle ? leftOpen : leftClose}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#FF0000' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cl",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})

rightEye.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openright",
      d: [
        {value: toggle ? rightOpen : rightClose}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#0500FF' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cr",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})


const leftEye2 = document.querySelector('#leftEye2');
const rightEye2 = document.querySelector('#rightEye2');


leftEye2.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openleft2",
      d: [
        {value: toggle ? leftOpen2 : leftClose2}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#FFF735' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cl2",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})

rightEye2.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openright2",
      d: [
        {value: toggle ? rightOpen2 : rightClose2}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#00FF19' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cr2",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})


const leftClose3 = "M-6.10352e-05 4.83198C-6.10352e-05 22.0628 46.452 36.0312 103.754 36.0312C139.842 36.0312 166.007 27.1049 184.595 18.6983C188.744 16.8219 193.532 15.6307 196.267 13.4984C199.366 11.0826 210.185 19.391 210.845 16.0562C211.136 14.5832 210.289 11.3374 207.507 4.83198C207.507 -12.3989 147.802 23.5 90.5 23.5C33.1984 23.5 -6.10352e-05 -12.3989 -6.10352e-05 4.83198Z";

const leftOpen3 = "M-6.10352e-05 49.8321C-6.10352e-05 67.063 46.452 81.0313 103.754 81.0313C139.842 81.0313 166.007 72.105 184.595 63.6984C188.744 61.822 193.532 60.6308 196.267 58.4985C199.366 56.0827 210.185 64.3911 210.845 61.0563C211.136 59.5833 210.289 56.3375 207.507 49.8321C207.507 32.6012 149.383 0 92.0814 0C34.7798 0 -6.10352e-05 32.6012 -6.10352e-05 49.8321Z";

const rightClose3 = "M212 4.83214C212 22.063 165.439 36.0314 108.002 36.0314C71.8292 36.0314 45.6026 27.1051 26.9711 18.6985C22.8124 16.822 18.0128 15.6308 15.2713 13.4986C12.1653 11.0827 1.32141 19.3912 0.659993 16.0564C0.367829 14.5833 1.21697 11.3376 4.00499 4.83214C4.00499 -12.3987 61.0637 23 118.5 23C175.936 23 212 -12.3987 212 4.83214Z";

const rightOpen3 = "M214 49.8321C214 67.0629 167.439 81.0313 110.003 81.0313C73.8293 81.0313 47.6028 72.105 28.9713 63.6984C24.8126 61.822 20.013 60.6308 17.2715 58.4985C14.1654 56.0827 3.32158 64.3911 2.66016 61.0563C2.36799 59.5833 3.21713 56.3375 6.00515 49.8321C6.00515 32.6012 64.2661 0 121.702 0C179.138 0 214 32.6012 214 49.8321Z";

const leftEye3 = document.querySelector('#leftEye3');
const rightEye3 = document.querySelector('#rightEye3');


leftEye3.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openleft3",
      d: [
        {value: toggle ? leftOpen3 : leftClose3}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#00FF19' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cl3",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})

rightEye3.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openright3",
      d: [
        {value: toggle ? rightOpen3 : rightClose3}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#BD00F' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cr3",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})





const leftClose4 = "M-6.10352e-05 4.83198C-6.10352e-05 22.0628 46.452 36.0312 103.754 36.0312C139.842 36.0312 166.007 27.1049 184.595 18.6983C188.744 16.8219 193.532 15.6307 196.267 13.4984C199.366 11.0826 210.185 19.391 210.845 16.0562C211.136 14.5832 210.289 11.3374 207.507 4.83198C207.507 -12.3989 147.802 23.5 90.5 23.5C33.1984 23.5 -6.10352e-05 -12.3989 -6.10352e-05 4.83198Z";

const leftOpen4 = "M-6.10352e-05 49.8321C-6.10352e-05 67.063 46.452 81.0313 103.754 81.0313C139.842 81.0313 166.007 72.105 184.595 63.6984C188.744 61.822 193.532 60.6308 196.267 58.4985C199.366 56.0827 210.185 64.3911 210.845 61.0563C211.136 59.5833 210.289 56.3375 207.507 49.8321C207.507 32.6012 149.383 0 92.0814 0C34.7798 0 -6.10352e-05 32.6012 -6.10352e-05 49.8321Z";

const rightClose4 = "M212 4.83214C212 22.063 165.439 36.0314 108.002 36.0314C71.8292 36.0314 45.6026 27.1051 26.9711 18.6985C22.8124 16.822 18.0128 15.6308 15.2713 13.4986C12.1653 11.0827 1.32141 19.3912 0.659993 16.0564C0.367829 14.5833 1.21697 11.3376 4.00499 4.83214C4.00499 -12.3987 61.0637 23 118.5 23C175.936 23 212 -12.3987 212 4.83214Z";

const rightOpen4 = "M214 49.8321C214 67.0629 167.439 81.0313 110.003 81.0313C73.8293 81.0313 47.6028 72.105 28.9713 63.6984C24.8126 61.822 20.013 60.6308 17.2715 58.4985C14.1654 56.0827 3.32158 64.3911 2.66016 61.0563C2.36799 59.5833 3.21713 56.3375 6.00515 49.8321C6.00515 32.6012 64.2661 0 121.702 0C179.138 0 214 32.6012 214 49.8321Z";

const leftEye4 = document.querySelector('#leftEye4');
const rightEye4 = document.querySelector('#rightEye4');


leftEye4.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openleft4",
      d: [
        {value: toggle ? leftOpen4 : leftClose4}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#BD00FF' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cl4",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})

rightEye4.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openright4",
      d: [
        {value: toggle ? rightOpen4 : rightClose4}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#FF0000' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cr4",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})


const leftClose5 = "M-6.10352e-05 4.83198C-6.10352e-05 22.0628 46.452 36.0312 103.754 36.0312C139.842 36.0312 166.007 27.1049 184.595 18.6983C188.744 16.8219 193.532 15.6307 196.267 13.4984C199.366 11.0826 210.185 19.391 210.845 16.0562C211.136 14.5832 210.289 11.3374 207.507 4.83198C207.507 -12.3989 147.802 23.5 90.5 23.5C33.1984 23.5 -6.10352e-05 -12.3989 -6.10352e-05 4.83198Z";

const leftOpen5 = "M-6.10352e-05 49.8321C-6.10352e-05 67.063 46.452 81.0313 103.754 81.0313C139.842 81.0313 166.007 72.105 184.595 63.6984C188.744 61.822 193.532 60.6308 196.267 58.4985C199.366 56.0827 210.185 64.3911 210.845 61.0563C211.136 59.5833 210.289 56.3375 207.507 49.8321C207.507 32.6012 149.383 0 92.0814 0C34.7798 0 -6.10352e-05 32.6012 -6.10352e-05 49.8321Z";

const rightClose5 = "M212 4.83214C212 22.063 165.439 36.0314 108.002 36.0314C71.8292 36.0314 45.6026 27.1051 26.9711 18.6985C22.8124 16.822 18.0128 15.6308 15.2713 13.4986C12.1653 11.0827 1.32141 19.3912 0.659993 16.0564C0.367829 14.5833 1.21697 11.3376 4.00499 4.83214C4.00499 -12.3987 61.0637 23 118.5 23C175.936 23 212 -12.3987 212 4.83214Z";

const rightOpen5 = "M214 49.8321C214 67.0629 167.439 81.0313 110.003 81.0313C73.8293 81.0313 47.6028 72.105 28.9713 63.6984C24.8126 61.822 20.013 60.6308 17.2715 58.4985C14.1654 56.0827 3.32158 64.3911 2.66016 61.0563C2.36799 59.5833 3.21713 56.3375 6.00515 49.8321C6.00515 32.6012 64.2661 0 121.702 0C179.138 0 214 32.6012 214 49.8321Z";

const leftEye5 = document.querySelector('#leftEye5');
const rightEye5 = document.querySelector('#rightEye5');


leftEye5.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openleft5",
      d: [
        {value: toggle ? leftOpen5 : leftClose5}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#FF0000' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cl5",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})

rightEye5.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openright5",
      d: [
        {value: toggle ? rightOpen5 : rightClose5}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#00FFF0' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cr5",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})




const leftClose6 = "M-6.10352e-05 4.83198C-6.10352e-05 22.0628 46.452 36.0312 103.754 36.0312C139.842 36.0312 166.007 27.1049 184.595 18.6983C188.744 16.8219 193.532 15.6307 196.267 13.4984C199.366 11.0826 210.185 19.391 210.845 16.0562C211.136 14.5832 210.289 11.3374 207.507 4.83198C207.507 -12.3989 147.802 23.5 90.5 23.5C33.1984 23.5 -6.10352e-05 -12.3989 -6.10352e-05 4.83198Z";

const leftOpen6 = "M-6.10352e-05 49.8321C-6.10352e-05 67.063 46.452 81.0313 103.754 81.0313C139.842 81.0313 166.007 72.105 184.595 63.6984C188.744 61.822 193.532 60.6308 196.267 58.4985C199.366 56.0827 210.185 64.3911 210.845 61.0563C211.136 59.5833 210.289 56.3375 207.507 49.8321C207.507 32.6012 149.383 0 92.0814 0C34.7798 0 -6.10352e-05 32.6012 -6.10352e-05 49.8321Z";

const rightClose6 = "M212 4.83214C212 22.063 165.439 36.0314 108.002 36.0314C71.8292 36.0314 45.6026 27.1051 26.9711 18.6985C22.8124 16.822 18.0128 15.6308 15.2713 13.4986C12.1653 11.0827 1.32141 19.3912 0.659993 16.0564C0.367829 14.5833 1.21697 11.3376 4.00499 4.83214C4.00499 -12.3987 61.0637 23 118.5 23C175.936 23 212 -12.3987 212 4.83214Z";

const rightOpen6 = "M214 49.8321C214 67.0629 167.439 81.0313 110.003 81.0313C73.8293 81.0313 47.6028 72.105 28.9713 63.6984C24.8126 61.822 20.013 60.6308 17.2715 58.4985C14.1654 56.0827 3.32158 64.3911 2.66016 61.0563C2.36799 59.5833 3.21713 56.3375 6.00515 49.8321C6.00515 32.6012 64.2661 0 121.702 0C179.138 0 214 32.6012 214 49.8321Z";

const leftEye6 = document.querySelector('#leftEye6');
const rightEye6 = document.querySelector('#rightEye6');


leftEye6.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openleft6",
      d: [
        {value: toggle ? leftOpen6 : leftClose6}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#FFF735' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cl6",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})

rightEye6.addEventListener("click", () =>{

  const timeLine = anime.timeline({
    duration: 2000,
    easing: "easeOutExpo"
  });
  timeLine
    .add({
      targets: ".openright6",
      d: [
        {value: toggle ? rightOpen6 : rightClose6}
      ]
    })
    .add({
      targets: "body",
      backgroundColor: toggle ? '#00FFF0' : "#000000",
      duration: 0,
      easing: "easeOutExpo"
    })
    .add({
      targets: "#cr6",
      opacity: toggle ? 1 : 0,
      duration: 0,
      easing: "easeOutExpo"
    })
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }

})
