
   
    document.querySelectorAll('.down').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetId = this.getAttribute('href');
          const targetPosition = document.querySelector(targetId).offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; // Adjust scroll duration as needed
          let start = null;
  
          function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          }
  
          window.requestAnimationFrame(step);

          
        });
      });
  
      // Easing function
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;

        
      };
  