let [ menu ] = document.getElementsByClassName('menu');
let [ toggle ] = document.getElementsByClassName('toggle');

toggle.onclick = function (){
    // console.lo}g("click")
    menu.classList.toggle('active');
}