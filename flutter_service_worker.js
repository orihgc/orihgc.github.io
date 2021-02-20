'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c7b097a552dcec9c72812ed30d8d2b37",
"index.html": "7dfde6d7f237d477c9819c65e0f2eb7c",
"/": "7dfde6d7f237d477c9819c65e0f2eb7c",
"main.dart.js": "4264e52dc74f2905293a1545ac0b85b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5e56dd00a120c658c32a6a10a712cd3f",
"assets/images/korea/buding/%25E5%25B8%2583%25E4%25B8%25817.jpeg": "67ddbd9804b9bbadba4b4e5dceab164f",
"assets/images/korea/buding/%25E5%25B8%2583%25E4%25B8%25816.jpeg": "a869839ea04dd6b830818d3fbe18393c",
"assets/images/korea/buding/%25E5%25B8%2583%25E4%25B8%25811.png": "1b61a704f1b863bd931624a26e5d9bd2",
"assets/images/korea/buding/%25E5%25B8%2583%25E4%25B8%25813.png": "e0f6a92792686a35137558b49ff850cf",
"assets/images/korea/buding/%25E5%25B8%2583%25E4%25B8%25812.png": "1ba32e3bc4d14cf48d9e5eaee8874a16",
"assets/images/korea/buding/%25E5%25B8%2583%25E4%25B8%25815.jpeg": "500723bcc39ceb976f141d2affbb7626",
"assets/images/korea/buding/%25E5%25B8%2583%25E4%25B8%25814.jpeg": "14a6305ba717a90943173d3e284faacb",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB3.png": "763c9e1edce69c82a49cfc7f3962dd44",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB2.png": "44ea5478bc5db0390bddafc2b769b503",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB1.png": "4ad1d9082a1ef1540452b5c63c22561c",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB5.png": "46a801f4e669ade027c9ba08922775d1",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB4.png": "549eba105a2c5017c805e4ffee82fe30",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB6.png": "e38eb1decd391d0a623964c2d0c2f0aa",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB7.png": "a8d6bfc700d57734d0aa269a785cd841",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB9.png": "40ebd1024a98a0011958a3c6190b4245",
"assets/images/korea/timo/%25E6%258F%2590%25E8%258E%25AB8.png": "9fe41fd5f197c7298cfe3aa8c7b97b67",
"assets/images/korea/missedyou/missedyou9.png": "568d08c97234ebdf291237929bc1ac02",
"assets/images/korea/missedyou/missedyou8.png": "8799ea690806f91cda7dbd33f122b1a7",
"assets/images/korea/missedyou/missedyou6.png": "8c86838e8f633636e04666fffd707f4f",
"assets/images/korea/missedyou/missedyou7.png": "43337bd24cea150022afac414efa1f21",
"assets/images/korea/missedyou/missedyou5.png": "5e0d2c7d946f58e2754fd290ab2d3b59",
"assets/images/korea/missedyou/missedyou4.png": "0968efeba202ec8be986ce28ddad7e02",
"assets/images/korea/missedyou/missedyou1.png": "39ae7d8814e9b7ce9cbbf7f32e2abdbf",
"assets/images/korea/missedyou/missedyou3.png": "2f64ea473b003938b7add2a42c641d79",
"assets/images/korea/missedyou/missedyou2.png": "1823f5abf9becae0b7cb7200e6cc525b",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D8.png": "96e7e518a521df09d12ba3cd5c6cd89a",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D9.png": "7922dda6d02f631eb9a4c67106ace42f",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D2.png": "de2d541c8ba2d51d8bfd32aa7fd4f8e2",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D3.png": "d19bb05e8c737bff4b1f1d9ce1bb5110",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D1.png": "de1410f19a713e888d8847760bc10585",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D4.png": "31782686a576fdbf5f9b29c9fcd03c79",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D5.png": "71d86fd5dfe7fc39a6a9424acc3348eb",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D7.png": "1a44e3f90cb9678f181b9bb8492effb5",
"assets/images/korea/hanbaobei/%25E9%259F%25A9%25E5%25AE%259D%25E8%25B4%259D6.png": "7bcc694e485e36c705ba86a766f03e32",
"assets/images/korea/shuangC/%25E5%258F%258CC2.png": "37e340abc1a6d3cb62e8e01f9ae30b12",
"assets/images/korea/shuangC/%25E5%258F%258CC3.png": "b94e387b05a8dc9791a5bca6e97ab3e7",
"assets/images/korea/shuangC/%25E5%258F%258CC1.png": "2b2ce9d59d59e537eff49d4d41caf9e3",
"assets/images/korea/shuangC/%25E5%258F%258CC4.png": "2cbacba7daa99213a13aed5967a0d0da",
"assets/images/korea/shuangC/%25E5%258F%258CC5.png": "7de1cbf36c1a9e01678e0bea85bddd77",
"assets/images/korea/shuangC/%25E5%258F%258CC7.png": "b7bc72f2924d2399bbcce5ae26868007",
"assets/images/korea/shuangC/%25E5%258F%258CC6.png": "62e263a0a5123ba9e96283134868718a",
"assets/images/korea/akfms/akfms1.png": "39208a042585b6bcb80f837ef3fdadd4",
"assets/images/korea/akfms/akfms3.png": "877f8ba14182bb76d71d603db00d12c1",
"assets/images/korea/akfms/akfms2.png": "132ab17051d24b003b73436f68f7720f",
"assets/images/korea/akfms/akfms6.png": "067d2aa2795126bf0550b55fa9074cfa",
"assets/images/korea/akfms/akfms7.png": "d558bc86ad787ec88cbecd7b946c975a",
"assets/images/korea/akfms/akfms5.png": "71430dc934436babd3f3f4e877b3e0f2",
"assets/images/korea/akfms/akfms4.png": "5942e51c7ae2c6d957deae97bde8bc8a",
"assets/images/korea/akfms/akfms9.png": "9c9fb1e95aa8cfc2381dd6133e37ea3c",
"assets/images/korea/akfms/akfms8.png": "fcfde72e7c1d1bb9b3e3ba460bed3707",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B62.png": "438caa1790af3625aba90f81100ddc87",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B63.png": "86fa7e30d71aa54a0b29113eb360cc86",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B61.png": "228c220b6e22fe75ade6fbfa40ced61e",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B64.png": "6b437e6163a395a5185c1b7cb0b9decf",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B65.png": "af87601f8ae9d0a28eed8720a7f59b5c",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B67.png": "ba9207cbd535021decd194bd9a526e19",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B66.png": "9f4f991d86deaac0118686fd0a8d0654",
"assets/images/korea/dounai/%25E8%25B1%2586%25E5%25A5%25B68.png": "838b86f885cf77ef98cb8cabcde18910",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA8.png": "d16a0589df2d797ffda4d85ca406cafe",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA9.png": "fcd2f7f5233b51ca34dd47db0aac8219",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA4.jpeg": "49076afec7ad64de0dcc04f6e3e7e34e",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA5.jpeg": "67252a71e5e9a2e8147db9d2e09518e7",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA7.png": "c6a937fb3c27cfdaa3bc0bc50a1896fa",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA6.png": "d91266481460e03060f5db6a7b50617a",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA1.PNG": "5f281459f0f97ce38fb63d3e8a75e755",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA2.png": "e765fdcab60ae26b7a2f90d8896d4147",
"assets/images/korea/qunlun/%25E7%25BE%25A4%25E8%25AE%25BA3.png": "9048bcb839cb05c986a234d23b77bf57",
"assets/AssetManifest.json": "be0e40a7d646664d88f09e2aa8c1d339",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
