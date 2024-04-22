document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const playpause = document.getElementById('playpause');
    const seek = document.getElementById('seek');
    
    playpause.addEventListener('click', function() {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    });
  
    video.addEventListener('play', function() {
      playpause.textContent = 'Pause';
    });
  
    video.addEventListener('pause', function() {
      playpause.textContent = 'Play';
    });
  
    video.addEventListener('timeupdate', function() {
      seek.value = video.currentTime;
    });
    
    seek.addEventListener('input', function() {
      video.currentTime = seek.value;
    });
  });
