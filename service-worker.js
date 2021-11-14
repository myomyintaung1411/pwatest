importScripts("/pwatest/precache-manifest.9b9cdf43fe19618fb249119f6ea2088e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


/* eslint-disable */
// self.addEventListener('fetch', function (event) {
//   event.respondWith(fetch(event.request));
// });

// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// // install new service worker when ok, then reload page.
// self.addEventListener("message", msg=>{
//     if (msg.data.action=='skipWaiting'){
//         self.skipWaiting()
//     }
// })


console.log('Started', self);
self.addEventListener('install', function (event) {
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function (event) {
  console.log('Activated', event);
});
self.addEventListener('push', function (event) {
  console.log('Push message received', event);
});

