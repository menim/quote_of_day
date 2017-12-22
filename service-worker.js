"use strict";

function setOfCachedUrls(e) {
    return e.keys().then(function(e) {
        return e.map(function(e) {
            return e.url
        })
    }).then(function(e) {
        return new Set(e)
    })
}
var precacheConfig = [
    ["/index.html", "d0f0c9f7f52b7f655fb9c0fcaede78ec"],
    ["css/myown.css", "d0f0c9f7f52b7f655fb9c0fcaede76ec"],
    ["https://spreadsheets.google.com/feeds/list/17T8jqTsiOdfGXKhAg21cpJAfV6zSHzuMF-nXbk0ltHs/od6/public/values?alt=json", "47d93fa30b628a2357c2aa61f7167c27"],
    ["fonts/arno-pro.woff2", "3eb0e73bb2c59a52a0968acd55424186"],
    ["fonts/arno-pro.woff", "cc1cf73b0c78255a69a80adf963a1f3a"],
    ["fonts/arnopro-italic.woff2", "0dd730fffdf062a6e05b16115d23d901"],
    ["fonts/arnopro-italic.woff", "d677a0724536cbc8967ed69ecedc5f86"],
    ["js/myown.js", "215eacc7c55bd8ae3de4625c5d633c55"],
    ["pictures/apple-touch-favicon.png", "37eb47d8ba6b7cbf8abe9a2f92ad3d5a"],
    ["pictures/arrows.png", "aae95cb413954b4de9091bb2a72e7d16"],
    ["pictures/background.png", "9d3ce25626df696a1576d978e863b78a"],
    ["pictures/favicon.png", "465264f8e991a9f17b46249f98e77991"],
    ["pictures/head.png", "ab903845ec64fd866d1eb8475014ebfd"],
    ["pictures/l_r_button.png", "2e357af61070c964f49267ceae4d00c1"],
    ["pictures/r_l_button.png", "47d93fa30b628a2357c2aa61f7167c26"]
    ],
    cacheName = "sw-precache-v2-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function(e, t) {
        var n = new URL(e);
        return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString()
    },
    cleanResponse = function(e) {
        return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
            return new Response(t, {
                headers: e.headers,
                status: e.status,
                statusText: e.statusText
            })
        }) : Promise.resolve(e)
    },
    createCacheKey = function(e, t, n, r) {
        var a = new URL(e);
        return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), a.toString()
    },
    isPathWhitelisted = function(e, t) {
        if (0 === e.length) return !0;
        var n = new URL(t).pathname;
        return e.some(function(e) {
            return n.match(e)
        })
    },
    stripIgnoredUrlParameters = function(e, t) {
        var n = new URL(e);
        return n.hash = "", n.search = n.search.slice(1).split("&").map(function(e) {
            return e.split("=")
        }).filter(function(e) {
            return t.every(function(t) {
                return !t.test(e[0])
            })
        }).map(function(e) {
            return e.join("=")
        }).join("&"), n.toString()
    },
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function(e) {
        var t = e[0],
            n = e[1],
            r = new URL(t, self.location),
            a = createCacheKey(r, hashParamName, n, /\.\w{8}\./);
        return [r.toString(), a]
    }));
self.addEventListener("install", function(e) {
   e.waitUntil(caches.open(cacheName).then(function(e) {
        return setOfCachedUrls(e).then(function(t) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n) {
                if (!t.has(n)) {
                    var r = new Request(n, {
                        credentials: "same-origin"
                    });
                    return fetch(r).then(function(t) {
                        if (!t.ok) throw new Error("Request for " + n + " returned a response with status " + t.status);
                        return cleanResponse(t).then(function(t) {
                            return e.put(n, t)
                        })
                    })
                }
            }))
        })
    }).then(function() {
        return self.skipWaiting();
    }))
}), 
self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function(e) {
        return e.keys().then(function(n) {
            return Promise.all(n.map(function(n) {
                if (!t.has(n.url)) return e.delete(n)
            }))
        })
    }).then(function(){
        return self.clients.claim()
    }))
}), 
self.addEventListener("fetch", function(e) {
    if ("GET" === e.request.method) {
        var t, n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
        (t = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, "index.html"), t = urlsToCacheKeys.has(n));
        !t && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (n = new URL("./index.html", self.location).toString(), t = urlsToCacheKeys.has(n)), t && e.respondWith(caches.open(cacheName).then(function(e) {
            return e.match(urlsToCacheKeys.get(n)).then(function(e) {
                if (e) return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function(t) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)
        }))
    }
});