importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3/dist/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3/dist/uv.sw.js');

// UV Config (must match index.html)
self.__uv$config={
  prefix:'/p/service/',
  bare:'https://tomp.app/',
  encodeUrl:Ultraviolet.codec.xor.encode,
  decodeUrl:Ultraviolet.codec.xor.decode,
  handler:'/uv/uv.handler.js',
  client:'/uv/uv.client.js',
  bundle:'/uv/uv.bundle.js',
  config:'/uv/uv.config.js',
  sw:'/uv/uv.sw.js'
};

const sw = new UVServiceWorker();
self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
