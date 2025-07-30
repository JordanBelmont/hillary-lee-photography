// CREATE LIGHTBOX
let lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
let images = document.querySelectorAll('.image-wrapper')

// Add tabindex for keyboard accessibility
images.forEach(image => {
   image.setAttribute('tabindex', '0');
});

// LIGHTBOX ON MOUSE-CLICK
images.forEach(image => {
   image.addEventListener('click', () => {
      lightbox.classList.add('active')
      // Clear existing content
      while (lightbox.firstChild) {
         lightbox.removeChild(lightbox.firstChild)
      }
      // Create image container
      let imgContainer = document.createElement('div')
      imgContainer.className = 'lightbox-image-container'
      let img = document.createElement('img')
      img.src = image.querySelector('img').src
      imgContainer.appendChild(img)
      // Create text container
      let textContainer = document.createElement('div')
      textContainer.className = 'lightbox-text-container'
      // Add title
      let title = document.createElement('h2')
      title.className = 'lightbox-title'
      title.textContent = image.querySelector('.image-title').textContent || 'Image Title'
      // Add description
      let description = document.createElement('p')
      description.className = 'lightbox-description'
      description.textContent = image.getAttribute('data-description') || 'Image Description'
      // Add coordinates
      let coordinates = document.createElement('p')
      coordinates.className = 'lightbox-coordinates'
      coordinates.textContent = image.querySelector('.image-coordinates').textContent || 'Image Coordinates'
      // Append title and description to text container
      textContainer.appendChild(title)
      textContainer.appendChild(description)
      textContainer.appendChild(coordinates)
      // Append both to lightbox
      lightbox.appendChild(imgContainer)
      lightbox.appendChild(textContainer)
   })
});

// LIGHTBOX ON ENTER
images.forEach(image => {
   image.addEventListener('keyup', e => {
      if (e.key === "Enter") {
         lightbox.classList.add('active')
         // Clear existing content
         while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
         }
         // Create image container
         let imgContainer = document.createElement('div')
         imgContainer.className = 'lightbox-image-container'
         let img = document.createElement('img')
         img.src = image.querySelector('img').src
         imgContainer.appendChild(img)
         // Create text container
         let textContainer = document.createElement('div')
         textContainer.className = 'lightbox-text-container'
         // Add title
         let title = document.createElement('h2')
         title.className = 'lightbox-title'
         title.textContent = image.querySelector('.image-title').textContent || 'Image Title'
         // Add description
         let description = document.createElement('p')
         description.className = 'lightbox-description'
         description.textContent = image.getAttribute('data-description') || 'Image Description'
         // Add coordinates
         let coordinates = document.createElement('p')
         coordinates.className = 'lightbox-coordinates'
         coordinates.textContent = image.querySelector('.image-coordinates').textContent || 'Image Coordinates'
         // Append title and description to text container
         textContainer.appendChild(title)
         textContainer.appendChild(description)
         textContainer.appendChild(coordinates)
         // Append both to lightbox
         lightbox.appendChild(imgContainer)
         lightbox.appendChild(textContainer)
      }
   })
});

// LIGHTBOX OFF MOUSE-CLICK
lightbox.addEventListener('click', () => {
   lightbox.classList.remove('active');
});

// LIGHTBOX OFF ESC
window.addEventListener('keyup', e => {
   if (e.key === 'Escape') {
      lightbox.classList.remove('active');
   }
});