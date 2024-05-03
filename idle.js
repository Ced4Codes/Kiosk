const idleVideo = document.getElementById('idle__video');
const idleAnimation = document.querySelector('.idle__animation');

// Set the idle time in milliseconds (e.g., 1 minute)
const idleTime = 1 * 60 * 1000; // 1 minute

let timeout;

// Reset the video to the beginning after idle time
const resetIdleVideo = () => {
  // Pause the video if it's playing
  if (!idleVideo.paused) {
    idleVideo.pause();
  }
  // Reset the video to the beginning
  idleVideo.currentTime = 0;
  // Play the video
  idleVideo.play();
  // Scroll back to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Start the idle timer when the document is loaded
const startIdleTimer = () => {
  // Set a timeout to reset the idle video after idle time
  timeout = setTimeout(resetIdleVideo, idleTime);
};

// Start the idle timer when the document is loaded
document.addEventListener('DOMContentLoaded', startIdleTimer);

// Reset the idle timer whenever there's user activity
const resetIdleTimer = () => {
  // Clear the previous timeout
  clearTimeout(timeout);
  // Restart the idle timer
  timeout = setTimeout(resetIdleVideo, idleTime);
};

// Reset the idle timer whenever there's user activity
document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('keypress', resetIdleTimer);