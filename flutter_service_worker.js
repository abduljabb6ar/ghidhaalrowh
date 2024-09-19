'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2006918f21753531e965f91407720771",
"assets/AssetManifest.bin.json": "7590824e4490dcf4b395b1f12fb00f68",
"assets/AssetManifest.json": "ebc2b8a36da6ccf7e67d0b4227e8a2ba",
"assets/assets/anime/anime1.json": "cb5f4e85236eaf22c89fd0dd4288007d",
"assets/assets/anime/anime10.json": "473c20690bfb7e5b5163684b2b2b3242",
"assets/assets/anime/anime2.json": "3ce247b24b719c788c6050564c467936",
"assets/assets/anime/anime3.json": "bed12b41894dfdc3d9a82c594a5a6ada",
"assets/assets/anime/anime4.json": "806f0633f13ab0462d3a491cf1216b9e",
"assets/assets/anime/anime5.json": "41456816319c1da8cd7f6bd9c59c8df4",
"assets/assets/anime/anime6.json": "eb2badb028a2b3494bb1db371b72adb9",
"assets/assets/anime/anime7.json": "dd8418196afa787058f547e2bd1644e5",
"assets/assets/anime/anime8.json": "2e45ab9ef14e0ca3df155fce9acf8394",
"assets/assets/anime/anime9.json": "6c8793e7fadc9c9744cca516e7336dd0",
"assets/assets/anime/hellow.json": "aca12dd544e5d24de6dcb4b03fd4d6ca",
"assets/assets/anime/loganime.json": "275eb46199e30e7bf5c62407a8bbe577",
"assets/assets/anime2/lottieflow-background-12-fc930a-easey.json": "5630848fd6b683a1cf6a452c03ce433c",
"assets/assets/anime2/lottieflow-background-14-fc930a-easey.json": "4aeb28c4b4ef68356416ffc2e2912e9b",
"assets/assets/anime2/lottieflow-ecommerce-14-1-fc930a-easey.json": "a69ec1f9bd531c165a0bcc5b2623ff5a",
"assets/assets/anime2/lottieflow-ecommerce-14-13-fc930a-easey.json": "20521df74fe3f936dd00efde78b91237",
"assets/assets/anime2/lottieflow-ecommerce-14-4-fc930a-easey.json": "0ce28416eb78b61b47a61d33c06cfc9c",
"assets/assets/anime2/lottieflow-ecommerce-14-5-fc930a-easey.json": "05b7cc73bf0e4745120d756e8732bba0",
"assets/assets/anime2/lottieflow-ecommerce-14-7-fc930a-easey.json": "9b863c462ac9f5979f1f0d9ca5d51c17",
"assets/assets/anime2/lottieflow-menu-nav-03-fc930a-easey.json": "03453a3e4d953a8a1b2a58a9d0d95ada",
"assets/assets/fonts/arial.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/assets/fonts/ARIALNB.TTF": "6debd7b47fbf196d9aea1dc4235439bb",
"assets/assets/fonts/fr13631638_alvatan_gfiles.ir.ttf": "7f48206d5d4877730a9b9dbb3c8d6165",
"assets/assets/fonts/HelveticaNeueLT-Arabic-75-Bold.ttf": "5e72186f2671cdfad7e0ca56b85262ef",
"assets/assets/fonts2/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/imagehoney/%25D8%25A7%25D9%2584%25D8%25B4%25D8%25B9%25D8%25A7%25D8%25B1%2520%25D9%2585%25D9%2581%25D8%25B1%25D8%25BA%2520png-01.png": "d57c99a775ce7c26d85739b3038c36b1",
"assets/assets/imagehoney/DSC_5517.jpg": "dbff10337fd2dbc9d1637ec36c8f8173",
"assets/assets/imagehoney/DSC_5522.jpg": "db2a8004a9389676a8d4a30e7588158d",
"assets/assets/imagehoney/DSC_5555.jpg": "8ebbd6cbdfd91742531caffac31c339e",
"assets/assets/imagehoney/DSC_5594.jpg": "7d7fd2fee7cb29e20ee4dae0fd431fbc",
"assets/assets/imagehoney/DSC_5605%2520copy%25202.png": "03eb9e303ae9f1c1c1540fd1cbfc54f4",
"assets/assets/imagehoney/DSC_5605.JPG": "29c67924e42b3157c0b007bedf825f38",
"assets/assets/imagehoney/DSC_5610.JPG": "577ff60447523c0229f32fecddd7a815",
"assets/assets/imagehoney/DSC_5621.jpg": "09c1f4915a467708f59ceca3eefbd320",
"assets/assets/imagehoney/DSC_5644.jpg": "bb4be69a3f3da64a60c16b29fae07e3f",
"assets/assets/imagehoney/DSC_5647.JPG": "4d838ace353d42d4d38c964073f0095b",
"assets/assets/imagehoney/DSC_5677%2520copy%25202.png": "49eceb577b18dede8629324eed6d8c74",
"assets/assets/imagehoney/DSC_5678.JPG": "e0fef55d759372fc47908f51b39b40ec",
"assets/assets/imagehoney/DSC_5683.jpg": "8cd5b6ec0ab9f648cd79b09a3b39b9d4",
"assets/assets/imagehoney/DSC_5704%2520copy%25202.png": "7bb65b2423eeb080a3abd705630b1108",
"assets/assets/imagehoney/DSC_5713.JPG": "4f36f65028e29801561fc6c5d00ac7af",
"assets/assets/imagehoney/DSC_5731%2520copy%25202.png": "ab8d0a5dabcfc2fdafe3eb9df00411b0",
"assets/assets/imagehoney/DSC_5731.JPG": "8132d6e40127bcfc617a1a8ba32be317",
"assets/assets/imagehoney/icons8-instagram-48.png": "b3c9ce60dd1d75ed3f597202c82c05e7",
"assets/assets/imagehoney/map_LE_auto_x2-removebg-preview.png": "a9689a680e03673e925793ea9565f3fc",
"assets/assets/imagehoney/Screenshot__363_-removebg.png": "95781fa455717c5f5de96a5b830fb0ce",
"assets/assets/imagehoney/Screenshot__365_-removebg-preview.png": "d920aff292eac373756b1db32ca639d3",
"assets/assets/imagehoney/Screenshot__366_-removebg-preview.png": "2cca698555e99280644bcc813ea0af20",
"assets/assets/imagehoney/Screenshot__367_-removebg-preview.png": "9c0547fcca13192afd82779aa470324e",
"assets/assets/imagehoney/Screenshot__368_-removebg-preview__1_-removebg-preview.png": "d89fd58103e6ed1138602698b9e3543e",
"assets/assets/imagehoney/WhatsApp%2520Image%25202024-09-09%2520at%252010.29.23%2520PM.jpeg": "6ee6b94029cda31de9557a934663c301",
"assets/assets/imagehoney/WhatsApp%2520Image%25202024-09-09%2520at%252010.29.41%2520PM.jpeg": "b9db0126869c1bd3e7ec8751a87ee370",
"assets/assets/images/0.1.jpg": "dea975d051bc40c7f0f7038d53b0fc48",
"assets/assets/images/0.1.png": "c2ee13125d926b3d313fe3d3927a12b0",
"assets/assets/images/0.2.jpg": "a68b2319dd381c1bb9626aa6ede8a6b3",
"assets/assets/images/0.2.png": "5a80876c514e46477fd99eb3c3aecd14",
"assets/assets/images/0.3.jpg": "135ac4155fb4461d68669a88645a9b82",
"assets/assets/images/0.3.png": "935ebaafb4811afb53c430a39015bf5d",
"assets/assets/images/0.4.png": "45cfbd284d7124a9827e51662e35b46a",
"assets/assets/images/A.jpg": "56f266681043e62e442ccdc0b0392ff6",
"assets/assets/images/Builder_Tool.jpg": "6bf680f4b93c64045e6b3fe03a30d84f",
"assets/assets/images/CircleAvatar.png": "e7e0071334f9e974b9954f7b2f8c0711",
"assets/assets/images/elec.png": "f5b2cb50427f09aaa646f9c1a71f5773",
"assets/assets/images/electronics.jpg": "448d9f55738583ac7fa161f89b92fb8e",
"assets/assets/images/google.png": "a3643b7bd86ffd29e317344531579bf0",
"assets/assets/images/Home_Tool.jpg": "1d342b987b6dd8f4fc494f9a70f1d4da",
"assets/assets/images/honey.png": "4017b882a0fe110c6b2cd04e249fdf9b",
"assets/assets/images/honeytow.png": "e7378bba90b57d19d6bfbfd014c0f9de",
"assets/assets/images/iconstorhoney.png": "a8a4612733fe430e4e539d66113ad15c",
"assets/assets/images/icosstore2.png": "c7dcabe1d26f3db4e6ddf54857cdeb88",
"assets/assets/images/imgslid.jpeg": "c4a7d7f8d46877ce30da70b2196b7db7",
"assets/assets/images/IMG_0308.jpg": "de8f20ff9695cad1fababb51f22530ac",
"assets/assets/images/loginback.jpg": "5f805a4b0107de59f51812cd285ecb4e",
"assets/assets/images/man.png": "f9209ffe9e0f512dc947185cc5bce337",
"assets/assets/images/Prototyping%2520process-pana.png": "3f371dc1fe5f59798f88874a6791f8ad",
"assets/assets/images/s1.png": "18099a836187486e0dab62f8ac40a26c",
"assets/assets/images/s2.png": "584dabf3fbbeea89f620da9492e697aa",
"assets/assets/images/s3.png": "7381aa80a41565a848cf574ca54598a7",
"assets/assets/images/s4.png": "a7bef46e0866734bb6d640df98995487",
"assets/assets/images/s5.png": "b984840ab293aaf9caadb73d3525a68e",
"assets/assets/images/s6.png": "d930a2e7a94d93594aab0bd214303657",
"assets/assets/images/s7.png": "8ee0cdbcb371d91343fcd7d8ca0775e1",
"assets/assets/images/search.png": "7be115547a2fa73d6281d8774b23f555",
"assets/assets/images/sedrhoney.png": "76013a48af717de25d9b9fc853ecefe4",
"assets/assets/images/shopping.png": "126093738c544c1fe8950747c8f4b4e2",
"assets/assets/images/splashscreen.png": "bf788a244e0394ad956dad27211411a1",
"assets/assets/images/splashscreen2.png": "4b6b0b46dcd46fb274ec7c8307564fbd",
"assets/FontManifest.json": "76668183a176f9903ac543f892334d31",
"assets/fonts/MaterialIcons-Regular.otf": "9932dfa6f2aef76e7629f1d24ba588af",
"assets/images/car.png": "10e3392d267f8bfcd1b729f3f128198a",
"assets/images/fashion.png": "8285d80b9982e2edbd21ca0c2b05430b",
"assets/images/tools.png": "f013225d9d5f0fb0fd63e8ff623cf29d",
"assets/NOTICES": "8ced17ed3a3a991daaca15b9ed41904d",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/dropdown_model_list/assets/radio.png": "98992f795ee1bc8c8a5ae53dce0e285c",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/packages/slide_rating_dialog/assets/images/cancelicon.png": "15612f70e4e8551d12fee6932fd56865",
"assets/packages/slide_rating_dialog/assets/images/i1.png": "ef529081d70a4425bb0a5d14372425fd",
"assets/packages/slide_rating_dialog/assets/images/i2.png": "f031306995e0f4a158c7081c39e9456a",
"assets/packages/slide_rating_dialog/assets/images/i3.png": "e061e8a0222136d4a1bac93b34deba43",
"assets/packages/slide_rating_dialog/assets/images/i4.png": "8b35491e2effbf7ee2ea5a4845eaad95",
"assets/packages/slide_rating_dialog/assets/images/i5.png": "0c45c6b16a94200765538c8b5b44148b",
"assets/packages/slide_rating_dialog/assets/images/star_selected.png": "5499f4b30a5abada04105faefbeb2ac2",
"assets/packages/slide_rating_dialog/assets/images/star_unselected.png": "eeca49d6a8ebc47559cad02cf4fd2d4f",
"assets/packages/status_alert/assets/fonts/SFNS.ttf": "9e14b4e72dec1db9a60d2636bbfe64f2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/stripefolder/index.html": "dcecdf211da47bceed78e60e9060182e",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"cors.json": "45d8e2af46477bb5547fc64625568100",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b71c3932237dd1e3d021f606ba21e9d6",
"iconga.png": "a8a4612733fe430e4e539d66113ad15c",
"icons/iconga.png": "a8a4612733fe430e4e539d66113ad15c",
"index.html": "5266fd22284052872c70a91aa34d3a00",
"/": "5266fd22284052872c70a91aa34d3a00",
"main.dart.js": "6576c671af3182584bf592bed88aa59a",
"manifest.json": "c6222a1f3229d15253c60b9798c8e760",
"stripefolder/index.html": "dcecdf211da47bceed78e60e9060182e",
"version.json": "68f47ed01b5d1a8607be45c89a846449"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
