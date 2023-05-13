//Galeria img 
 
 const fulImgBox = document.getElementById("fulImgBox"),
 fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

function openFulImg2(references){
    fulImgBox.style.display = "flex";
    fulImg.src = references
}

 function closeImg(){
     fulImgBox.style.display = "none";
}



// const btnCart = document.querySelector('.container-icon')
// const containerCartProducts = document.querySelector('.container-cart-products')

// btnCart.addEventListener('click', () => {
//     containerCartProducts.classList.toggle('hidden-cart')
// })