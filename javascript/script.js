// CREATE LIGHTBOX

let lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
let images = document.querySelectorAll('.image-wrapper')

// LIGHTBOX ON MOUSE-CLICK

images.forEach(image => {
   image.addEventListener('click', () => {
      lightbox.classList.add('active')
      let img = document.createElement('img')
      img.src = image.querySelector('img').src;
      while (lightbox.firstChild) {
         lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
   })
});

// LIGHTBOX ON ENTER

images.forEach(image => {
   image.addEventListener('keyup', e => {
      if (e.key === "Enter") {
         lightbox.classList.add('active')
         let img = document.createElement('img')
         img.src = image.querySelector('img').src;
         while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
         }
         lightbox.appendChild(img)
      }
   }
   )
});

// LIGHTBOX OFF MOUSE-CLICK

lightbox.addEventListener('click', e => {
   if (e.target !== e.currentTarget && e.target === e.currentTarget)
      return;
   lightbox.classList.remove('active');
});

// LIGHTBOX OFF ESC

window.addEventListener('keyup', e => {
   if (e.key === 'Escape') {
      lightbox.classList.remove('active');
   }
});