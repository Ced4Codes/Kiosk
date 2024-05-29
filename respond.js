function checkResolution() {
    const video = document.getElementById('idle__video');
    const source = document.getElementById('videoSource');

    if (window.innerWidth < window.innerHeight) {
      // Portrait mode
      source.setAttribute('src', 'Asset/idle_portrait.mp4');
      video.classList.add('portrait');
    } else {
      // Landscape mode
      source.setAttribute('src', 'Asset/idle new.mp4');
      video.classList.remove('portrait');
    }

    video.load();  // Reload the video element to apply the new source

    console.log(`Video source set to: ${source.getAttribute('src')}`);  // Debugging information
  }

  // Check resolution on load
  window.addEventListener('load', checkResolution);

  // Check resolution on resize
  window.addEventListener('resize', checkResolution);

  // Forcing initial check after short delay to ensure proper load
  setTimeout(checkResolution, 100);