self.addEventListener('install', e=>{
    caches.open('cache-v1')
    .then(cache =>{
        cache.addAll([
            './',
            'index.html',
            'css/style.css',
            'app.js',
            'images/1.png',
            'images/2.png',
            'images/3.png',
            'images/facebook.png',
            'images/instagram.png',
            'images/twiter.png',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
            'video1.pm4',
            'video2.mp4',
            'video3.mp4',
        

        ])
    });
    e.waitUntil(cacheProm);
});

self.addEventListener('fetch', e =>{
    //cache-only
    e.respondWith(caches.match(e.request));
})