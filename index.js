// burger=document.querySelector('.burger')
// navbvar=document.querySelector('.js')
// ul=document.querySelector('.vvres')
let burger=document.getElementsByClassName('buger');
let navbvar=document.getElementsByClassName('nav-elements');
let ul=document.getElementsByClassName('vvres');


burger.addEventListener('click',()=>{
     ul.classList.toggle('.vres');
     navbvar.classList.toggle('.vvres');
})

  