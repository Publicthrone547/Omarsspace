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
    Notification.requestPermission().then(function(result) {
        if (result === 'granted') {
            // Разрешение получено, можно отправлять уведомления
            // Пример отправки уведомления:
            var notification = new Notification('EEEEee Урааааа', {
                body: 'полдяопадодллдпаоыд'
            });
        }
    });
}

function sendNotification() {
    if (Notification.permission === 'granted') {
        var notification = new Notification('Public547', {
            body: 'Это тест отправляется ли сообшение,АУФ'
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                var notification = new Notification('Поч не разрешил', {
                    body: 'Какашка'
                });
            }
        });
    }
}

// Вызываем функцию отправки уведомления каждые 30 секунд
setInterval(sendNotification, 10000); // 30000 миллисекунд = 30 секунд

        function requestNotificationPermission() {
            if (Notification.permission === 'granted') {
                console.log('Уведомления уже разрешены');
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        console.log('Уведомления разрешены');
                    }
                });
            }
        }

        document.getElementById('requestPermissionButton').addEventListener('click', requestNotificationPermission);
