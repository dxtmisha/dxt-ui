import { componentsList as e, componentsReg as t, packageName as n, styleVarsReg as r } from "./design.js";
import { Plugin as i } from "@dxtmisha/constructor/plugin";
//#region src/library/plugin.ts
function a(a = {}) {
	return new i("d1", n, t, r, e, "vite-plugin-d1-ui", a).init();
}
//#endregion
export { a as uiD1VitePlugin };
