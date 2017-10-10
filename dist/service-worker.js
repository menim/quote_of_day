/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["css/myown.css","d0f0c9f7f52b7f655fb9c0fcaede76ec"],["fonts/Arno Pro 14.25.22.ttf","3eb0e73bb2c59a52a0968acd55424186"],["fonts/Arno Pro.ttf","3eb0e73bb2c59a52a0968acd55424186"],["fonts/arno_pro-webfont 14.25.22 14.25.22 14.25.22.svg","cc1cf73b0c78255a69a80adf963a1f3a"],["fonts/arno_pro-webfont 14.25.22.ttf","1e6a2ca5c7afde611bf050d5fa0ceefa"],["fonts/arno_pro-webfont.eot","989ab320767dcbd4d39d50f0fcde9073"],["fonts/arno_pro-webfont.svg","cc1cf73b0c78255a69a80adf963a1f3a"],["fonts/arno_pro-webfont.ttf","1e6a2ca5c7afde611bf050d5fa0ceefa"],["fonts/arno_pro-webfont.woff","e0cb13c4ca3d8638ddf9f334ab74c7a6"],["fonts/arnopro-italic.eot","0dd730fffdf062a6e05b16115d23d901"],["fonts/arnopro-italic.woff","d677a0724536cbc8967ed69ecedc5f86"],["js/myown.js","215eacc7c55bd8ae3de4625c5d633c55"],["pictures/A_Avgustin.jpg","fbef25f3e11f9c190ec8d73ba420af21"],["pictures/A_Batskiy.jpg","411a0123734e65b4cd0b7e2fcc1c6b9d"],["pictures/A_Bebel.jpg","3423461cd55f4a3160c685cf1ab58127"],["pictures/A_Bebel2.jpg","b6872b51fa16c16f2d5916b82f50c525"],["pictures/A_Bennet.jpg","e4811691d3113e4bd126bc9ba3523246"],["pictures/A_Bergson.jpg","947f71f3ed4e6bb4d490a8d9de2d4abf"],["pictures/A_Birs.jpg","a1dae6b538f28971395be42d6c35592a"],["pictures/A_Birs2.jpg","69c24710575ccf96b9386c15ac62b804"],["pictures/A_Bloc.jpg","71a12e0fcedd938e2538cc252f636c0b"],["pictures/Antisfen.jpg","747eee3d0a5b2f08fecc837759597a96"],["pictures/Ap_Pavel.jpg","03a7dcd831b74daac8f0ed7ad5511e19"],["pictures/Aristotel.jpg","82b1601a94f4099dcb8dec3a130b54f5"],["pictures/Br_Bardo.jpg","e52d9b5a2895c9d7f45ee641b0bb4330"],["pictures/Bulver-liton.jpg","90a14367a46436778e61c6bf29583e1b"],["pictures/Bunincover.jpg","b3cd1f4d5556b963715bff69618e58e8"],["pictures/Dg_Addison.jpg","aa9d6d3a735167692b7a8674692b9ba1"],["pictures/Dg_Blekki.jpg","f16505b9f02a50efce1b106e8a8d20a2"],["pictures/Dg_Bruno.jpg","378a630f2e933ce334040fa7618de6ed"],["pictures/Dg_G_Bayron.jpg","11bf7634369859f60df5485829bc7284"],["pictures/Dg_Galifaks.jpg","db0c781557307bdb3e3c963065073604"],["pictures/Dg_Gr_Uells.jpg","a71c263fac3f5b98bdb5b1190ead62d2"],["pictures/Dru_Berimor.jpg","3b907698a6e27dfc49040cd4c1ba5469"],["pictures/Erve_Bazen.jpg","ab7392e6965d0e5f1d52b120b1a654fd"],["pictures/F_Gegel.jpg","52a9721191e061f8d9586776910e6ba5"],["pictures/Fr_Becon.jpg","01cdfad01467f9e0d2ab1b64b670be40"],["pictures/Fr_Begbeder.jpg","d62ed5e17a8184052e8c6730c5268ed8"],["pictures/Fr_Begbeder2.jpg","ae0cf85b5789454b037ccb2f1b051485"],["pictures/G_A_de_Baif.jpg","f6e99294b60a54c5682a4e1d0bb308c9"],["pictures/G_P_Belmondo.jpg","9c58455fafbebd85aa075aa7649c916c"],["pictures/Gr_Bogoslov.jpg","c9d05c4d9d53fe4121d2c6c7a291101b"],["pictures/Gr_Effeskiy.jpg","9e7386538abf9feca69524f986d41f3d"],["pictures/Greta_Garbo.jpg","37a4e3c279ffded2d04a48fb5d039138"],["pictures/I_Bergman.jpg","8e036bd1f98d9d20b19d506ebe63ec7f"],["pictures/I_Berlin.jpg","453efaea97e7646de2e918f835221772"],["pictures/Ivlin_Vo.jpg","7afff4b3fdbeab69d3b027eb0920c067"],["pictures/K_Bouvi.jpg","06a046020803c53457d32ea1bc20c5ef"],["pictures/K_Gelveckiy.jpg","f6e99294b60a54c5682a4e1d0bb308c9"],["pictures/K_Hopkins.jpg","c2d15a9643b8cc53b031a5afb5b2ba13"],["pictures/K_L_Berne.jpg","6853d4a7b50fe6103d27a476f2b7a1a5"],["pictures/K_L_Berne2.jpg","010135d65cf200bf38382a007f488055"],["pictures/L_Aragon.jpg","4587069125590eb5a6ba614049cd0fd7"],["pictures/L_Bernnet.jpg","de84fca00050718b022ae0e1754908f2"],["pictures/M_Avreliy.jpg","dc0c3a9118653b53d6fdee0fc54a3bb6"],["pictures/M_Avreliy2.jpg","5cd691f3796310c1842380710ec6a721"],["pictures/M_Avreliy3.jpg","f6358a9dcc0ad87a63ad71287148931d"],["pictures/M_Bashkirceva.jpg","7b6279dc000c32dc1346cc29cde77908"],["pictures/N_Berdyaev.jpg","f5ddac69396f89631ec8be9ce4792d12"],["pictures/N_Bogoslovskiy.jpg","2cd949dfc8658cc3fb3271f544fb4c7f"],["pictures/O_Balzak.jpg","83ec882b854702b1e892421a946898a6"],["pictures/P_Buast.jpg","f6e99294b60a54c5682a4e1d0bb308c9"],["pictures/P_Buast2.jpg","31f248c621c74caa7c02ec3d57e41162"],["pictures/P_Valery.jpg","f53ea8d63cc6439a5a3ccfd2cf80006d"],["pictures/P_Vyazemskiy.jpg","881b4556b210741ebbffdbb6eefd0689"],["pictures/Pier_de_Bomarshe.jpg","a7b1171d5e808188271c325493421b3c"],["pictures/Pier_de_Bomarshe2.jpg","276648f50a630fd57c6ef6396e9bc689"],["pictures/Queen_Victoriya.jpg","2ad55d359a85b4f802114624967cf994"],["pictures/S_Batler.jpg","03e731682f6e4750b1de81d29c9ffc5c"],["pictures/S_de_Bovuar.jpg","beee70c4ca8df2935abad43bc4fb5f2e"],["pictures/Sh_Aznavur.jpg","5d0ae9415804f016b8a8645e00ec57ff"],["pictures/Sharl_Bodler.jpg","218b8eeaaa9d95dea4f63aba1eaeb387"],["pictures/Sharl_Bodler2.jpg","29d6f8b232eb7a065cbdcbfdb326d49a"],["pictures/T_Bichem.jpg","93312b849ac4c8ffb964679b11f8bff3"],["pictures/Ul_Brinner.jpg","1f63eff48ca71779f428219b156f0a91"],["pictures/Uolter_Badget.jpg","b58bab36e46af5db5850f8af78ba0d4d"],["pictures/Vergiliy.jpg","78b0e2cb55990279ff239df15e3a7d9a"],["pictures/Virdg_Vulf.jpg","a52b0eeef2339e480c8ac691e524195c"],["pictures/Volter.jpg","40b13e418800d5379c2c141a14760a92"],["pictures/W_Brayan.jpg","e7b3233bea4bef161d76c89f637c1b91"],["pictures/Wil_Bleyk.jpg","2148c0b5c02e82f06e8d4663e9ce959d"],["pictures/Will_Bernbah.jpg","7ed2e36b4309b6987a6a090ba97b8c93"],["pictures/american_proverb.jpg","40d34b9513dcc4d60a0ab8cab37d759f"],["pictures/american_proverb2.jpg","5b6576219079b1cdaf1ebafbec3a751f"],["pictures/antich_aforizm.jpg","fde05041d7c77ec8aa2ba9c6ce70d7f8"],["pictures/apple-touch-favicon.png","37eb47d8ba6b7cbf8abe9a2f92ad3d5a"],["pictures/arabic_proverb.jpg","8e7118d71988de2d8f71bf197d2ce55f"],["pictures/arrows.png","aae95cb413954b4de9091bb2a72e7d16"],["pictures/background.png","9d3ce25626df696a1576d978e863b78a"],["pictures/bismarkcover.jpg","ddd183f3194627a0c4be9b5814b4bf19"],["pictures/bismarkcover2.jpg","6bddc364dc723f84431063bd9321746d"],["pictures/book-sad.jpg","9a2ab2e9f7e232640f00183be5af0a4b"],["pictures/devid_ogilvi.jpg","2fc532eb710355f54d366bd1ccfcbc14"],["pictures/devid_ogilvi2.jpg","1b72e9cd30f36f115eeff73dd694873b"],["pictures/favicon.png","465264f8e991a9f17b46249f98e77991"],["pictures/gen_geyne.jpg","fbff702f9a3774a209e755a33860fb93"],["pictures/gen_geyne2.jpg","1529f87f2a49ccba73660380463b7fa0"],["pictures/head.png","ab903845ec64fd866d1eb8475014ebfd"],["pictures/head_@2x.png","465b49dd4a2e988cc177d6c4ad477a35"],["pictures/l_r_button.png","2e357af61070c964f49267ceae4d00c1"],["pictures/m_Gandy.jpg","0a069dbca9201482f976cec6e22b0803"],["pictures/marciz_de_Vovenarg.jpg","2622ad49e444ff9c318bfcf09f32235b"],["pictures/marciz_de_Vovenarg2.jpg","08d10b2e7749c35bef36311f4f40ad51"],["pictures/pol_burge.jpg","4a7a10e051e95795440646ebea397d63"],
["https://spreadsheets.google.com/feeds/list/17T8jqTsiOdfGXKhAg21cpJAfV6zSHzuMF-nXbk0ltHs/od6/public/values?alt=json","47d93fa30b628a2357c2aa61f7167c27"],["pictures/r_l_button.png","47d93fa30b628a2357c2aa61f7167c26"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-quote-of-day-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


/* @preserve Tue, 10 Oct 2017 15:44:00 GMT */