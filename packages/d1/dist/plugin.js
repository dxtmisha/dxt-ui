import { Plugin as i } from "@dxtmisha/constructor/plugin";
import { designName as n, packageName as t, componentsReg as o, styleVarsReg as m, componentsList as r } from "./design.js";
function u(e = {}) {
  return new i(
    n,
    t,
    o,
    m,
    r,
    "vite-plugin-d1-ui",
    e
  ).init();
}
export {
  u as uiD1VitePlugin
};
