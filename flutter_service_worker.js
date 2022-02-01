'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f933979b5bbf67478c8f84a2389e7420",
"index.html": "06ed8eb00596e433819630e1b97ab7ce",
"/": "06ed8eb00596e433819630e1b97ab7ce",
"main.dart.js": "857e50e0ddc5077ad90385ece40b11dc",
"favicon.png": "bd5056a1cfed736dbebf2544bb0a6004",
"icons/Icon-192.png": "38266b503dd9fcc40cc141a1836d6c65",
"icons/Icon-maskable-192.png": "38266b503dd9fcc40cc141a1836d6c65",
"icons/Icon-maskable-512.png": "bd5056a1cfed736dbebf2544bb0a6004",
"icons/Icon-512.png": "bd5056a1cfed736dbebf2544bb0a6004",
"manifest.json": "90d8a104d0bed319c4752ba536b5033a",
".git/config": "418b669d81e20508418cff2e9bfa57ab",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/03/9068ed2569babec0513c9e5f6cf22a7c1fcb97": "01860f3b0511b582892d9702f7d6f7cb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/0b/2952cc9265aeef5991eebf4a34bdafe2e57b0a": "9b61589c8ac0682fd8f5afbc6ed75219",
".git/objects/33/346526d55e867c183f36cbebac5bb65fbd6288": "4aa5b1a7a8df529e61af1d8c3e98d135",
".git/objects/9c/7a9f6994eebfdb881ef22841c468851728fe52": "70d4babe1ad4ebf991494f421a453909",
".git/objects/d6/23ae6fbf541121c20aae186fef4b751c3c89c1": "5597fa918931d3041194e1166227e913",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/3bb64a743d3028f75b06b94da171d86aba5d15": "bbe25fae75dbee112efbe4892ba3a538",
".git/objects/e3/e445398135ca26d337911850138775ab5c750e": "513b2c9b3a645c04c152a2f8f82d5713",
".git/objects/c1/53526959ba390b282f844e60005cfe8b8468a2": "c36cc7edd94dfdc65c75ccd60152b340",
".git/objects/27/3bc9cc90ea7474b8b2adad4bbd8ec75af2c4c0": "a0f43462e9257913374ac4ab45b958d4",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/19/5bc2d7d8f0b0d74c33911ff68fa416bb7d1d00": "e488b6a89e7f839daabfae8bee3fed0c",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/75/76fa80dde70753cd7be832ebf31828f2183645": "24937a8f25ee8fb08110d89aa0f9de59",
".git/objects/86/24cfd61729b19860f0ab82e70c0e53fb36af6b": "0ee78509453a853004f7deb148567d1b",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/62/ebc488665af30088fddd80f8efef59ac3b8888": "73e8b7b90dd70803bb94737a2fe3c3c6",
".git/objects/54/91fba61577a7b75572030ae7681eccf59f765f": "803e6f2ecffd0bbe8c97e55787da94d1",
".git/objects/30/0730b9b5a05c6b1011dec00ac024c244067e69": "b8104cad0f368800f9d349377869f409",
".git/objects/06/50d71edf7c9eb1da551dcc0756e8c794f60c52": "4a44cc6ca9c0286467b76d9f298e9e06",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/b7/8df48d481725139c69d258482d064b00f2bda6": "4f9b28cbd58b9c43b64101c5c99f694b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/79/40f3c7db884750c80b29a286c1edec394b786e": "eb5d3edf0afe3bfc9a2f228153c14c42",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8c/c4f4e348499feb6efdd686eea33f8cdb11d4ad": "ac26f9171aff165df3ec867feabbcf8c",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/1d/d59eeec1048cb3e61f51f3def6e81d365c5ed3": "cfc3b51e27e8b93577111f3712da6560",
".git/objects/40/f83cb09f71ea1f148766e7966fe6aed6990cb5": "8393a6d5f53a5ea9f0f2973f677ea2ee",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/7f/d77bb66186157d51631d339279d2a6c97cff56": "4fed7a270bece693c4c27831d4e74dac",
".git/objects/25/26f6b94cad17cb238f434e0ef81c7cd9c5a9ec": "2e61324a8d656f0e9ae1e4ab55170bdc",
".git/objects/25/0e7c598020a1799ae2f53dcd194d399f785d60": "024cf5356f4984b8c4d625db86a975b6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c8b0b125dd7d91eab0fa54d0fde6bee",
".git/logs/refs/heads/master": "2c8b0b125dd7d91eab0fa54d0fde6bee",
".git/logs/refs/remotes/origin/master": "f2e7c3b17e9f4087755b78f52513dfc6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2694ad4bcf4cdbe75a7e0bc95ca3468d",
".git/refs/remotes/origin/master": "2694ad4bcf4cdbe75a7e0bc95ca3468d",
".git/index": "ddf5fca9e57d16dcef0db818fd0bda27",
".git/COMMIT_EDITMSG": "c422ec06693c82dc724301b88d91d48a",
"assets/AssetManifest.json": "92e3df326f04ed7f5634291fc68111a8",
"assets/NOTICES": "4a3664fc68cb4727d67401020ca28767",
"assets/FontManifest.json": "e63e9c7555d50d71cd1796521ad79701",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/svg/underline.svg": "69f2b1f13b417be1164d18f4330baa03",
"assets/assets/svg/arc.svg": "46b0b4091c26917d605a9ab0056ee625",
"assets/assets/font/ApfelGrotezk-Regular.otf": "834c6fa209959452ab642d3509ab1cf3",
"assets/assets/font/ApfelGrotezk-Fett.otf": "a2473bbe08f9b0784ced705c783360e7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
