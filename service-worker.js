self.addEventListener('install', function(event) {
    console.log('Установлен сервисный работник');
});

self.addEventListener('activate', function(event) {
    console.log('Активирован сервисный работник');
});

self.addEventListener('push', function(event) {
    console.log('Получено уведомление push');
    var options = {
        body: event.data.text(),
        icon: 'img/planet32.png', // Путь к вашей иконке
        badge: 'img/public547coding.jpg' // Путь к вашему бейджу
    };
    event.waitUntil(self.registration.showNotification('Новое уведомление', options));
});
