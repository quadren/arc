'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f933979b5bbf67478c8f84a2389e7420",
"index.html": "346772522ea57b327a0f23edff92f1e5",
"/": "346772522ea57b327a0f23edff92f1e5",
"main.dart.js": "5a95da7ad39eb04c067a555093548b23",
"favicon.png": "bd5056a1cfed736dbebf2544bb0a6004",
"icons/Icon-192.png": "38266b503dd9fcc40cc141a1836d6c65",
"icons/Icon-maskable-192.png": "38266b503dd9fcc40cc141a1836d6c65",
"icons/Icon-maskable-512.png": "bd5056a1cfed736dbebf2544bb0a6004",
"icons/Icon-512.png": "bd5056a1cfed736dbebf2544bb0a6004",
"manifest.json": "0fa0179263f01a3cfde70cf667a6e643",
".git/config": "418b669d81e20508418cff2e9bfa57ab",
".git/objects/95/a640ce8635278b2ce6bd6d93f040983c9923b4": "67176f728eda65bf5c4200d8b0bc2d15",
".git/objects/92/ba63aaec663365374eb086dfc3439be9485a4f": "848de855107271ebec52a02219d56ace",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/03/9068ed2569babec0513c9e5f6cf22a7c1fcb97": "01860f3b0511b582892d9702f7d6f7cb",
".git/objects/6a/65589e91336f1b0da450b646eacd32eff0f687": "e762901bfb3f4f428a36424154c46415",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/67/fc2144e07ff5b23b639f975d40f73899e679d6": "ac420dcdd17d6066f9be25c75b3720ee",
".git/objects/0b/2952cc9265aeef5991eebf4a34bdafe2e57b0a": "9b61589c8ac0682fd8f5afbc6ed75219",
".git/objects/93/ac54c7d753b437c50c453f1cea6dba430d14a7": "9722f36d793b3502d79c81d915352067",
".git/objects/0e/c5e1cec87b6e7c8fa30471e8521e8920831c0d": "aadab8240e6aaab51895e9d167c5c66d",
".git/objects/33/346526d55e867c183f36cbebac5bb65fbd6288": "4aa5b1a7a8df529e61af1d8c3e98d135",
".git/objects/9c/7a9f6994eebfdb881ef22841c468851728fe52": "70d4babe1ad4ebf991494f421a453909",
".git/objects/d9/6e5b639849140e585a67abec396597bc4ebe21": "69eed709924dc4135aa024f5e062930a",
".git/objects/ac/abbd5559a21bb3f18ab94aad5f5ad91cb5351b": "8f429bc365654bd694fd1de2e3065996",
".git/objects/be/c0852a6a55588f015d3588c64aaee536c3657b": "5131e41e84e419fa7f1d2384ac89dfaa",
".git/objects/a2/fcd350662804cb1cdbef8892d8e273071680bf": "d3a5de8143f67d9cfb25b42d06200722",
".git/objects/d6/23ae6fbf541121c20aae186fef4b751c3c89c1": "5597fa918931d3041194e1166227e913",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/3bb64a743d3028f75b06b94da171d86aba5d15": "bbe25fae75dbee112efbe4892ba3a538",
".git/objects/f3/774adbd21f54ea2db06f65e5a0e0c8e89e7939": "8b8788ba687248ae60811cd3e3c2ed5f",
".git/objects/eb/b046ff62f00174687c8967fcc1a37559037077": "ce3c103b807b1be18db19d7a84c7244e",
".git/objects/e3/e445398135ca26d337911850138775ab5c750e": "513b2c9b3a645c04c152a2f8f82d5713",
".git/objects/ed/61a94bd89529aef87d5b360a0968b281d617d5": "9d6771d277e1a6f9720af2ac48d3b4f1",
".git/objects/c1/53526959ba390b282f844e60005cfe8b8468a2": "c36cc7edd94dfdc65c75ccd60152b340",
".git/objects/c6/45d4515c5d17eaa47f54d6259fe530cad9f1b8": "9d0ca80c0dfa146c438be5aeaf172d26",
".git/objects/ec/e8252897800c62d6b9b1247459a46b29fd6f92": "b8f0aa13a7e14915b0dc698d49f0f5fc",
".git/objects/27/3bc9cc90ea7474b8b2adad4bbd8ec75af2c4c0": "a0f43462e9257913374ac4ab45b958d4",
".git/objects/4b/e38ed6929b9e1730fac986dd4eb6b525269a59": "018e93dd64bec45a7b60c1e6c8941937",
".git/objects/29/929b8cadb297e08038508929be3490b0af69df": "c8ca46b699d80b64e256dcad4721290a",
".git/objects/73/643fe54e70c0a27958fa1ba7219f4bdd72eb5d": "f6fa92b51b34017a438a8d9d01c79e3b",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/28/1b042968476ae228a001ba4bd2101196237bd4": "2b2ce6b225e1e10fe9827a2fea7b4257",
".git/objects/10/f850cf249e06fe1a1b65cc362237e5b247385d": "c52caa6d6b501512cd9998cdf88e1da1",
".git/objects/19/5bc2d7d8f0b0d74c33911ff68fa416bb7d1d00": "e488b6a89e7f839daabfae8bee3fed0c",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/75/76fa80dde70753cd7be832ebf31828f2183645": "24937a8f25ee8fb08110d89aa0f9de59",
".git/objects/75/c1dfd71eb67a0c3e7e592a4c33749106fb887c": "cc737c500e133bb752d60997490d2cce",
".git/objects/86/24cfd61729b19860f0ab82e70c0e53fb36af6b": "0ee78509453a853004f7deb148567d1b",
".git/objects/88/27d2f91d5dacf28d3422c9914808741ca52934": "41e23ff01baafd1c4d6062906acf87dd",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/00/3fc07bf92b815536fb6e46368c361aef54b095": "beabc259dfbd99fc4ddfe76806818669",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/6e/b7e8745e98e833fd559bfdce43e8ae6d70e44c": "8ed65384dd6e8b61801591afbd4e13d4",
".git/objects/91/2253c70d2f2d2b245957bea32cb6f432be0cfb": "bceda8b1dfd9bf35a4e9389a4937ea5d",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/62/ebc488665af30088fddd80f8efef59ac3b8888": "73e8b7b90dd70803bb94737a2fe3c3c6",
".git/objects/62/18fb95b533f3755e01927e6b3ec1ffd91a353e": "75c3a38fcb9102bbcb7d916a0bdbe3ef",
".git/objects/54/91fba61577a7b75572030ae7681eccf59f765f": "803e6f2ecffd0bbe8c97e55787da94d1",
".git/objects/30/0730b9b5a05c6b1011dec00ac024c244067e69": "b8104cad0f368800f9d349377869f409",
".git/objects/5e/5340d609620ff27485bd559dd42c5907c6bade": "80860834600f0ca382fb129bc2a89df7",
".git/objects/06/50d71edf7c9eb1da551dcc0756e8c794f60c52": "4a44cc6ca9c0286467b76d9f298e9e06",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/0f/d902976d9026ddd621b61fb38fec99831806ce": "1aaaeeb8166e27a41342a617576f978e",
".git/objects/90/9acf59bc2828eab370473996e8112ad664d7fd": "1632beb766f9b73ed7ff3b2e090e1d95",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/d4/6ce07d09eca9c1eb69c1f7353c0c2648c2a23a": "cb9bfd593a203b0a017d2eefe23780dc",
".git/objects/a0/7039d30f49f7809cb023cd1d36000afec7dbb2": "ba8c8b75174654e05233d7819911f03d",
".git/objects/a7/582871231a1f86c3440df8bf2170fe83691366": "48912d3041eb279685d1670226317ff4",
".git/objects/dd/ec7ed4c7abb50d0ee905986fe21b3a1f07a516": "60fde3579410b03c08f94a743da66f47",
".git/objects/aa/24caf6860ca1d789c234cd8b564d68323b2d15": "b82daf6ea02b37ea4732af2fec6fda07",
".git/objects/b7/8df48d481725139c69d258482d064b00f2bda6": "4f9b28cbd58b9c43b64101c5c99f694b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/114fe626601ef4648a816b725d08f7bb4e42e5": "dfdea387782a66ca0eca58be94386928",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/3a60477889d44e5d84318dbed666e68bc17d0c": "afab8265f7822631195e518f96f11a8f",
".git/objects/ef/36f3f92e305f76ba5cd80cf9536b0b8b00d2ba": "82d9cf8d36f0b54b32dd8f3c111a189b",
".git/objects/c4/35417cf23e79b5513c2023e3da07a3646f6d29": "91877c232a4980dd4bddd848ba8bad7f",
".git/objects/e1/50d10241a5e4650e3d4144469132388e6f7d68": "2eae140c055913bb066a1a5160c796d4",
".git/objects/f1/06929ecc48aa6819709d30273c7421039af7bb": "38b91a40aee1dd10186a43eb10acf00a",
".git/objects/e7/8e7628eb4b6f21d125b7e797ceae9b4b76939a": "2fa8e0313137f094f2258c21b37d18c1",
".git/objects/2c/2f7f41d5e783a15d024d26e68aabef4bcaab11": "bcab05a57e3eb386cc5d095e8c50042f",
".git/objects/79/40f3c7db884750c80b29a286c1edec394b786e": "eb5d3edf0afe3bfc9a2f228153c14c42",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/7f78ab78a060d36217a5f5aaadb648949f9a2a": "f57afb91d9410695a6033a6a7cf80fbe",
".git/objects/2d/e019d5913f7ac08251244f7a995f517130d014": "1bad8c5d99c21599e7d00a81530fcd96",
".git/objects/41/5a288db23079920a94c5201ddb9b0add55e956": "884e91429bfd49e58e671fbfe042873b",
".git/objects/41/022eb47a06f641976ecd881bb9607e5253a501": "c2b16339b6ba8a08e6044bb27b1fea86",
".git/objects/70/acf428c62f462ebe11954af913bd05d6a7fbd2": "f67565a2516a13a257fcde944d085936",
".git/objects/1e/f51dfe34050c61fa4dea76fad2252190024290": "ca0daf801c9806372c4e55e95b463a9e",
".git/objects/4a/e3e7aaf596fe32b19c10af1467e9100813fdeb": "1ffd15c7777e82132350d1fa095b3941",
".git/objects/8c/c4f4e348499feb6efdd686eea33f8cdb11d4ad": "ac26f9171aff165df3ec867feabbcf8c",
".git/objects/85/583ef91e73743626bfbb153adb796f810b1e97": "8f6dc44e5e6f61d6c8a61b6323e3dfc8",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/c568d79dfefcd6d6cc808fc47734afe8dc3ffc": "23fe9e1a8156e0142baa80cbafd9fd34",
".git/objects/1d/d59eeec1048cb3e61f51f3def6e81d365c5ed3": "cfc3b51e27e8b93577111f3712da6560",
".git/objects/76/267496061d92f26349eaa4eb8e8238480b4ffb": "4bc6d37ce3a6ef8b3048d28f7a477849",
".git/objects/40/f83cb09f71ea1f148766e7966fe6aed6990cb5": "8393a6d5f53a5ea9f0f2973f677ea2ee",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/7f/d77bb66186157d51631d339279d2a6c97cff56": "4fed7a270bece693c4c27831d4e74dac",
".git/objects/25/26f6b94cad17cb238f434e0ef81c7cd9c5a9ec": "2e61324a8d656f0e9ae1e4ab55170bdc",
".git/objects/25/0e7c598020a1799ae2f53dcd194d399f785d60": "024cf5356f4984b8c4d625db86a975b6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "feb7c744fcd08eafabe1444f7baaafcb",
".git/logs/refs/heads/master": "feb7c744fcd08eafabe1444f7baaafcb",
".git/logs/refs/remotes/origin/master": "8a85666fafda4177596cfdf9277294d9",
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
".git/refs/heads/master": "f28a950c4e2d9382524582c6dd82d9ad",
".git/refs/remotes/origin/master": "f28a950c4e2d9382524582c6dd82d9ad",
".git/index": "54e298d1a2948622ad580472cee0bc71",
".git/COMMIT_EDITMSG": "88fb9908072c7496129fb603c0c33355",
"assets/AssetManifest.json": "bffd584907213ca806298d6d890cd791",
"assets/NOTICES": "48aca96af8bba175610e5c48c0688ecb",
"assets/FontManifest.json": "20a84c3e16a1dc3ecd2176a73812b702",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/assets/images/Arc_greenbg.png": "abfd9a1e053ff0a54abaaf55a64af1b5",
"assets/assets/images/Arc.png": "2e806859bf9406842dcb75afb82c549d",
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
