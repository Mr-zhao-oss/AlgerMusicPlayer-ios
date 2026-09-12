;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var __vitePreload;
    return {
      setters: [module => {
        __vitePreload = module.aT;
      }],
      execute: function () {
        const crossFetch = exports("c", async (url, options = {}) => {
          const isCapacitor = !!window.Capacitor;
          if (isCapacitor) {
            try {
              const {
                CapacitorHttp
              } = await __vitePreload(async () => {
                const {
                  CapacitorHttp
                } = await module.import('./index-legacy-B7mtj-uR.js').then(n => n.eP);
                return {
                  CapacitorHttp
                };
              }, false              ? __VITE_PRELOAD__ : void 0, module.meta.url);
              const requestOptions = {
                url,
                method: options.method || "GET",
                headers: {
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                  ...options.headers
                },
                connectTimeout: options.timeout || 3e4,
                readTimeout: options.timeout || 3e4
              };
              if (options.body) {
                requestOptions.data = options.body;
              }
              console.log("[crossFetch] 使用 Capacitor HTTP 请求:", url);
              const response = await CapacitorHttp.request(requestOptions);
              return {
                ok: response.status >= 200 && response.status < 300,
                status: response.status,
                statusText: response.status.toString(),
                headers: new Headers(response.headers),
                text: async () => typeof response.data === "string" ? response.data : JSON.stringify(response.data),
                json: async () => typeof response.data === "string" ? JSON.parse(response.data) : response.data,
                blob: async () => new Blob([response.data]),
                arrayBuffer: async () => new ArrayBuffer(0),
                // 简化实现
                clone: function () {
                  return {
                    ...this
                  };
                }
              };
            } catch (error) {
              console.error("[crossFetch] Capacitor HTTP 请求失败，尝试回退到 fetch:", error);
            }
          }
          return fetch(url, options);
        });
      }
    };
  });
})();
