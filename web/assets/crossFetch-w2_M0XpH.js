const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BMNXZoHW.js","./index-DFoib_22.css"])))=>i.map(i=>d[i]);
import { aT as __vitePreload } from "./index-BMNXZoHW.js";
const crossFetch = async (url, options = {}) => {
  const isCapacitor = !!window.Capacitor;
  if (isCapacitor) {
    try {
      const { CapacitorHttp } = await __vitePreload(async () => {
        const { CapacitorHttp: CapacitorHttp2 } = await import("./index-BMNXZoHW.js").then((n) => n.eP);
        return { CapacitorHttp: CapacitorHttp2 };
      }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
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
        clone: function() {
          return { ...this };
        }
      };
    } catch (error) {
      console.error("[crossFetch] Capacitor HTTP 请求失败，尝试回退到 fetch:", error);
    }
  }
  return fetch(url, options);
};
export {
  crossFetch as c
};
