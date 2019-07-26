'use strict';

var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'http://nemogrant.com/documents/offline-page.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll([
          'https://raw.githubusercontent.com/nemogrant/media/master/images/offline.svg',
          offlineUrl
      ]);
    })
  );
});