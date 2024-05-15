document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const popupVideo = document.getElementById('popup-video');
  const popupVideos = document.querySelectorAll('.popup-video');

  popupVideos.forEach(video => {
    video.addEventListener('click', (event) => {
      event.preventDefault();
      popup.style.display = 'flex'; // Initially display the popup
      popup.style.zIndex = '9999'; // Ensure the popup is displayed in front
      setTimeout(() => {
        popup.classList.add('show'); // Add the show class to trigger transitions
      }, 10); // Small timeout to ensure display change is registered
      popupVideo.src = video.querySelector('source').src;
      popupVideo.play();
    });
  });

  popupVideo.addEventListener('ended', () => {
      closePopup();
  });

  popup.addEventListener('click', (event) => {
      if (event.target === popup) {
          closePopup();
      }
  });

  function closePopup() {
      popup.classList.remove('show');
      popupVideo.pause();
      popupVideo.src = '';
      setTimeout(() => {
          popup.style.display = 'none';
      }, 300);
  }
});


  
  