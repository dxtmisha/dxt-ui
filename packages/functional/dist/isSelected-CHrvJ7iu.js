function y(r) {
  return r instanceof Function || typeof r == "function";
}
function u(r) {
  return !!(r && typeof r == "object");
}
function h(r, n) {
  if (u(r)) {
    const t = [];
    return r instanceof Map ? r.forEach((e, i) => t.push(n(e, i, r))) : Array.isArray(r) ? r.forEach((e, i) => t.push(n(e, i, r))) : Object.entries(r).forEach(
      ([e, i]) => t.push(n(i, e, r))
    ), t.filter((e) => e !== void 0);
  }
  return [];
}
function f() {
  return typeof window != "undefined" && !!window.document;
}
function c(r) {
  return r == null;
}
function m(r, n) {
  if (r) {
    if (n && r === "0")
      return !0;
    switch (typeof r) {
      case "bigint":
      case "number":
        return r !== 0;
      case "boolean":
        return r;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(r) ? r.length > 0 : Object.values(r).some((t) => !c(t));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(r);
      case "undefined":
        return !1;
      default:
        return !!r;
    }
  }
  return !1;
}
function d(r) {
  return u(r) && !Array.isArray(r);
}
function g(r) {
  return typeof r == "string";
}
function b(r, n) {
  return Math.floor(Math.random() * (n - r + 1) + r);
}
function a(r) {
  return f() && r === window;
}
function p(r) {
  var n;
  if (f())
    return a(r) ? document.body : g(r) ? (n = document.querySelector(r)) != null ? n : void 0 : r;
}
function l(r) {
  return a(r) ? r : p(r);
}
function w(r) {
  var n;
  return !!((n = p(r)) != null && n.closest("html"));
}
function o(r) {
  switch (typeof r) {
    case "number":
      return !0;
    case "string":
      return !!r.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function s(r) {
  if (typeof r == "number")
    return r;
  if (!r)
    return 0;
  let n = r.replace(/[^\d., ]+/ig, "");
  return n.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? n = n.replace(/ /ig, "").replace(/,/ig, ".") : n.match(/,[0-9]{3}[,.]/ig) ? n = n.replace(/,/ig, "") : n.match(/[.][0-9]{3}[,.]/ig) ? n = n.replace(/[.]/ig, "").replace(/,/ig, ".") : n = n.replace(/,/ig, "."), parseFloat(n);
}
function A(r, n) {
  return c(r) ? !1 : Array.isArray(n) ? n.includes(r) : o(r) && o(n) ? s(r) === s(n) : r === n;
}
export {
  p as a,
  w as b,
  u as c,
  c as d,
  f as e,
  h as f,
  l as g,
  A as h,
  y as i,
  m as j,
  g as k,
  d as l,
  o as m,
  a as n,
  b as r,
  s as t
};
