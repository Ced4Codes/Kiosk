document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupVideo = document.getElementById('popup-video');
    const popupVideos = document.querySelectorAll('.popup-video');
  
    popupVideos.forEach(video => {
      video.addEventListener('click', (event) => {
        event.preventDefault();
        popup.style.display = 'flex'; // Initially display the popup
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
      popup.classList.remove('show'); // Remove the show class to trigger hide transitions
      popupVideo.pause();
      popupVideo.src = '';
      setTimeout(() => {
        popup.style.display = 'none'; // Hide the popup after transition completes
      }, 300); // Match the duration of the CSS transition
    }
  });
  
  