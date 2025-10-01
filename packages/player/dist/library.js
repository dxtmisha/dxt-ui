import { defineComponent as _, createElementBlock as r, openBlock as s } from "vue";
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, c] of t)
    n[o] = c;
  return n;
}, i = {};
function a(e, t) {
  return null;
}
const p = /* @__PURE__ */ m(i, [["render", a]]), f = { class: "ui-demo" }, u = /* @__PURE__ */ _({
  name: "UiDemo",
  __name: "UiDemo",
  setup(e) {
    return (t, n) => (s(), r("div", f));
  }
}), d = u, x = p;
export {
  d as UiDemo,
  x as test
};
