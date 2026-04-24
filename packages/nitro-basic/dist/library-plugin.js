import { ApiCache as e, ErrorCenter as t } from "@dxtmisha/functional-basic";
import { useStorage as n } from "nitro/storage";
//#region src/functions/initPluginApiCache.ts
function r(r = "Ui_ApiCache", i) {
	let a = n(r), o = (e) => `Ui_ApiCache_${e}`;
	e.init(async (e) => {
		try {
			var n;
			return (n = await a.getItem(o(e))) == null ? void 0 : n;
		} catch (e) {
			t.on({
				group: "api",
				code: "cacheGet",
				details: e
			});
			return;
		}
	}, async (e, n) => {
		try {
			return await a.setItem(o(e), n), !0;
		} catch (e) {
			return t.on({
				group: "api",
				code: "cacheSet",
				details: e
			}), !1;
		}
	}, async (e) => {
		try {
			return await a.removeItem(o(e)), !0;
		} catch (e) {
			return t.on({
				group: "api",
				code: "cacheRemove",
				details: e
			}), !1;
		}
	}, i);
}
//#endregion
//#region src/functions/initPluginBasic.ts
function i(e, t = {}) {
	var n, i;
	r((n = t.api) == null ? void 0 : n.cacheStorageKey, (i = t.api) == null ? void 0 : i.cacheStepAgeClearOld);
}
//#endregion
export { r as initPluginApiCache, i as initPluginBasic };
