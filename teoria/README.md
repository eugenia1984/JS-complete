#  PWA

### Requisitio

Que mi sitio sea  **https**

### Meta etiquetas

Lo recomendable es tener estas etiquetas en el head del html, yo voy a copiar las que use como ejemplo, arriba de caa una en un comentario aclaro para que son. <br>

```
  <meta name="description" content="Bienvenidos a la web de pratica de JavaScript">
  <!--Color para barra de navegacion-->
  <meta name="theme-color" content="#F0DB4F">
  <!--Sitio optimizdo para movil-->
  <meta name="MobileOptimizer" content="width">
  <!--Sitio amistoso para movil-->
  <meta name="HandheldFriendly" content="true">
  <!--Meta etiquetas para los dispositivos de Apple-->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <!--Favicon-->
  <link rel="shortcut icon" href="./image/js.png" type="image/png">
  <!--Manifest-->
  <link rel="manifest" href="./manifest.json">
  <!--Icono para pantalla en dispositivos-->
  <link rel="apple-touch-icon" href="./img/js.png">
  <link rel="apple-touch-startup-image" href="./img/js.png">
```

---

### Manifiest JSON

Lo que va a llevar mi archivo son parámetros, en este caso como valor de parametro indico que es loq ue se debe incluir, pero en mi aplicación ya tengo los parámetros reales. <br>
Aca lo dejo a modod e ejemplo para saber que hay que completar. <br>

```
{
  "name": "Practica JS",
  "short_name": "Practica JS",
  "description": "Bienvenidos a la web de pratica de JavaScript",
  "background_color": "#2B2B2B",
  "theme_color": "#F0DB4F",
  "orientation": "portrait",
  "display": "standalone",
  "start_url": "./?utm_source=web_app_manifest",
  "scope": "./",
  "lang": "es",
  "icons": [
    {
      "src": "./image/js_512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "./image/js_256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "./image/js_128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./image/js_64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "./image/js_32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "./image/js_24.png",
      "sizes": "24x24",
      "type": "image/png"
    },
    {
      "src": "./image/js_16.png",
      "sizes": "16x16",
      "type": "image/png"
    }
  ]
}
```
Los icons son los iconos que se van a ver, lo ideal es tener la major cantidad posible, para que sea adaptable a más tamaños: 1024x1024, 512x512, 256x256, 128x128, 96x96 , 64x64 ,32x32 , 16x16.

---

 
