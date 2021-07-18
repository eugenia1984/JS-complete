//Valido que Service Worker exista en el navegador, lo que valida que el navegador sopora los Service Worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(reg=> console.log('Registro de service worker exitoso', reg))
  .catch(err=> console.warn('Error al tratar de registrar el service worker', err))
}