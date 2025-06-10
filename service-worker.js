self.addEventListener('install', (e) => {
  console.log('Service Worker 설치 완료');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});