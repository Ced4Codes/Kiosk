document.addEventListener('DOMContentLoaded', () => {
  const idleTimeoutDuration = 60000; // 1 minute
  let idleTimeout;

  const resetIdleTimeout = () => {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      if (!document.querySelector('.popup.show')) {
        window.location.href = '#page1';
      }
    }, idleTimeoutDuration);
  };

  // Reset idle timer on user interactions
  ['touchstart', 'touchmove', 'mousemove', 'keypress'].forEach(event => {
    document.addEventListener(event, resetIdleTimeout);
  });

  // Reset idle timer when popup video is played or ended
  const popupVideo = document.getElementById('popup-video');
  if (popupVideo) {
    popupVideo.addEventListener('play', resetIdleTimeout);
    popupVideo.addEventListener('ended', resetIdleTimeout);
  }

  // Initial idle timeout setup
  resetIdleTimeout();
});

function scrollToPage2() {
  // Scroll to #page2
  document.querySelector("#page2").scrollIntoView({ behavior: "smooth" });
}