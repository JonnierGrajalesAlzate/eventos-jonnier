let boton = document.querySelector('button ')

let boton = document.getElementById("form").reset();


input.addEventListener('keypress', logKey);

boton.addEventListener('click', () =>{
    boton.style.backgroundColor = 'yellow'

})


    const log = document.getElementById('log');
const input = document.querySelector('input');
   function logKey(e) {
  log.textContent += ` ${e.code}`;
} 






var form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "violet";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);




