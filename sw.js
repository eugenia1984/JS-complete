//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_practica_JS',
  urlsToCache = [
    './',
    'https://fonts.googleapis.com',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap',
    'https://fonts.gstatic.com',
    './script.js',
    './image/js.png',
    './image/js_128.png'
  ]

//En la fase de instalación se almacena en cache los activos estáticos del sitio
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//Instala el Service Worker, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
      //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
    // Le indica al Service Worker activar el cache actual
      .then(() => self.clients.claim())
  )
})

//Cuando el navegador recupera una url
self.addEventListener('fetch', e => {
//Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
      //recuperar del cache
          return res
        }
      //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})