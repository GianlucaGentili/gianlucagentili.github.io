let img = document.querySelectorAll('img');
console.log(img);

let btnMagic = document.querySelector('#btnMagic');
console.log(btnMagic);

// DISPLAY NONE
btnMagic.addEventListener('click',() => {
    img.forEach((paragraph) => {
        paragraph.classList.toggle('d-none')
    })
})