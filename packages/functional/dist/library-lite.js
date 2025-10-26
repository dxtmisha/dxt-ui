import { a as f, j as o, r as u, f as c, h as s } from "./isSelected-CHrvJ7iu.js";
import { g as j, e as w, i as O, b as x, d as I, m as k, c as B, l as D, k as F, n as N } from "./isSelected-CHrvJ7iu.js";
function g(e, r, t) {
  var i, n;
  return (n = (i = f(e)) == null ? void 0 : i[r]) != null ? n : t;
}
function l(e) {
  return Array.isArray(e);
}
function d(e, r = "ig", t = ":value") {
  const i = e.replace(/([[\]\\^$.?*+()/])/g, "\\$1");
  return new RegExp(t.replace(/:value/g, i), r);
}
let a = u(1e5, 9e5);
function y(e, r) {
  const t = f(e);
  return t ? (o(t.id) || t.setAttribute("id", `id-${a++}`), r ? `#${t.id}${r}`.trim() : t.id) : `id-${a++}`;
}
function b(e, r) {
  let t = Object.keys(e).length !== Object.keys(r).length;
  return t || c(e, (i, n) => {
    i !== (r == null ? void 0 : r[n]) && (t = !0);
  }), t;
}
function p(e) {
  switch (typeof e) {
    case "number":
      return !0;
    case "string":
      return !!e.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function h(e, r) {
  const t = Math.floor(r);
  return e >= t && e < t + 1;
}
function A(e, r) {
  return Array.isArray(e) ? e.every((t) => s(t, r)) : s(e, r);
}
export {
  c as forEach,
  f as getElement,
  y as getElementId,
  g as getElementItem,
  j as getElementOrWindow,
  d as getExp,
  l as isArray,
  b as isDifferent,
  w as isDomRuntime,
  o as isFilled,
  p as isFloat,
  O as isFunction,
  x as isInDom,
  h as isIntegerBetween,
  I as isNull,
  k as isNumber,
  B as isObject,
  D as isObjectNotArray,
  s as isSelected,
  A as isSelectedByList,
  F as isString,
  N as isWindow
};
