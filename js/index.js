
//Boton Leer mas 


// let hideText_btn = document.getElementById('hideText_btn');
//  let hideText = document.getElementById('hideText');

//  hideText_btn.addEventListener('click', toggleText);

//  function toggleText(){
//     hideText.classList.toggle('show');

//     if(hideText.classList.contains('show')){
//         hideText_btn.innerHTML = 'Leer menos';
//     }
//     else{
//         hideText_btn.innerHTML = 'Leer Más';
//     }
//  }

const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});