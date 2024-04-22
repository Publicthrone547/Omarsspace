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
if ('Notification' in window) {
    // Запрашиваем разрешение на отправку уведомлений
    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
            console.log('Уведомления разрешены');
        }
    });
}

function sendNotification() {
    // Проверяем, получено ли разрешение на отправку уведомлений
    if (Notification.permission === 'granted') {
        // Отправляем уведомление
        navigator.serviceWorker.getRegistration().then(function(registration) {
            registration.showNotification('Новое сообщение', {
                body: 'Текст вашего сообщения здесь'
            });
        });
    } else if (Notification.permission !== 'denied') {
        // Если разрешение еще не запрошено, запрашиваем его
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                console.log('Уведомления разрешены');
            }
        });
    }
}

// Вызываем функцию отправки уведомления каждые 30 секунд
setInterval(sendNotification, 30000); // 30000 миллисекунд = 30 секунд
