import { defineComponent as l, createElementBlock as n, openBlock as i, createElementVNode as u, createCommentVNode as _, renderSlot as d, toDisplayString as c, computed as r, normalizeClass as m, createBlock as p, Fragment as g, renderList as D, withCtx as y, createVNode as x } from "vue";
import { writeClipboardData as B } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
const U = { class: "dxt-test-block" }, w = { class: "dxt-test-block__title" }, W = {
  key: 0,
  class: "dxt-test-block__description"
}, T = /* @__PURE__ */ l({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, s) => (i(), n("div", U, [
      u("h3", w, c(t.title), 1),
      t.description ? (i(), n("div", W, c(t.description), 1)) : _("", !0),
      d(e.$slots, "default")
    ]));
  }
}), P = { class: "dxt-test-page" }, C = { class: "dxt-test-page__title" }, I = {
  key: 0,
  class: "dxt-test-page__description"
}, z = /* @__PURE__ */ l({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, s) => (i(), n("main", P, [
      u("h1", C, c(t.title), 1),
      t.description ? (i(), n("div", I, c(t.description), 1)) : _("", !0),
      d(e.$slots, "default")
    ]));
  }
}), F = { class: "ui-test-button" }, N = /* @__PURE__ */ l({
  __name: "UiTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, s) => (i(), n("button", F, c(t.label), 1));
  }
}), S = {
  key: 0,
  class: "ui-test-container__label"
}, q = {
  key: 1,
  class: "ui-test-container__description"
}, L = { class: "ui-test-container__context" }, V = /* @__PURE__ */ l({
  name: "C2TestContainer",
  __name: "UiTestContainer",
  props: {
    label: {},
    description: {},
    isDark: { type: Boolean }
  },
  setup(t) {
    const e = t, s = r(() => ({
      "ui-test-container--dark": e.isDark
    }));
    return (o, a) => (i(), n("div", {
      class: m([s.value, "ui-test-container"])
    }, [
      t.label ? (i(), n("div", S, c(t.label), 1)) : _("", !0),
      t.description ? (i(), n("div", q, c(t.description), 1)) : _("", !0),
      u("div", L, [
        d(o.$slots, "default")
      ])
    ], 2));
  }
}), E = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [o, a] of e)
    s[o] = a;
  return s;
}, G = {}, O = { class: "ui-test-group" };
function j(t, e) {
  return i(), n("div", O, [
    d(t.$slots, "default")
  ]);
}
const A = /* @__PURE__ */ E(G, [["render", j]]), k = /* @__PURE__ */ l({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(t) {
    const e = t, s = () => B(String(e.label)).then();
    return (o, a) => (i(), n("div", {
      class: "ui-test-label",
      onClick: s
    }, c(t.label), 1));
  }
}), H = /* @__PURE__ */ l({
  __name: "UiTestItemFull",
  props: {
    label: {},
    isFlex: { type: Boolean, default: !0 },
    isPadding: { type: Boolean },
    background: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !0 },
    inverse: { type: Boolean }
  },
  setup(t) {
    const e = t, s = r(() => ({
      "ui-test-item-full--flex": e.isFlex,
      "ui-test-item-full--padding": e.isPadding,
      "ui-test-item-full--background": e.background,
      "ui-test-item-full--rounded": e.rounded,
      "ui-test-item-full--inverse": e.inverse
    }));
    return (o, a) => (i(), n("div", {
      class: m([s.value, "ui-test-item-full"])
    }, [
      t.label ? (i(), p(k, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(o.$slots, "default")
    ], 2));
  }
}), J = /* @__PURE__ */ l({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(t) {
    const e = t, s = r(() => ({
      [`ui-test-item-squared--size--${e.size}`]: e.size
    }));
    return (o, a) => (i(), n("div", {
      class: m([s.value, "ui-test-item-squared"])
    }, [
      t.label ? (i(), p(k, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(o.$slots, "default")
    ], 2));
  }
}), K = { class: "ui-test-title" }, M = /* @__PURE__ */ l({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, s) => (i(), n("div", K, c(t.title), 1));
  }
}), Q = { class: "dxt-test-wiki-prop-item" }, R = { class: "dxt-test-wiki-prop-item__tilte" }, X = { class: "dxt-test-wiki-prop-item__name" }, Y = { class: "dxt-test-wiki-prop-item__type" }, Z = { class: "dxt-test-wiki-prop-item__description" }, f = /* @__PURE__ */ l({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, s = r(() => e.item.getName()), o = r(() => e.item.getDescription()), a = r(() => e.item.getType());
    return ($, v) => (i(), n("div", Q, [
      u("div", R, [
        u("span", X, c(s.value) + ":", 1),
        u("span", Y, c(a.value), 1)
      ]),
      u("div", Z, c(o.value), 1)
    ]));
  }
}), b = /* @__PURE__ */ l({
  name: "DxtTestWikiProps",
  __name: "DxtTestWikiProps",
  props: {
    list: {}
  },
  setup(t) {
    return (e, s) => (i(!0), n(g, null, D(t.list, (o, a) => (i(), p(f, {
      key: a,
      item: o
    }, null, 8, ["item"]))), 128));
  }
}), tt = { class: "dxt-test-wiki-title" }, h = /* @__PURE__ */ l({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {}
  },
  setup(t) {
    return (e, s) => (i(), n("h4", tt, c(t.label), 1));
  }
}), et = /* @__PURE__ */ l({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {}
  },
  setup(t) {
    const e = t, s = r(() => `${e.design}${e.wiki.getName()}`), o = r(() => e.wiki.getDescription()), a = r(() => e.wiki.getWikiObject());
    return ($, v) => (i(), p(T, {
      title: s.value,
      description: o.value,
      class: "dxt-test-wiki"
    }, {
      default: y(() => [
        x(h, { label: "Props" }),
        x(b, { list: a.value }, null, 8, ["list"])
      ]),
      _: 1
    }, 8, ["title", "description"]));
  }
}), ot = T, ct = z, lt = N, at = V, rt = A, ut = H, _t = J, dt = k, pt = M, mt = et, kt = f, xt = b, Tt = h;
export {
  ot as DxtTestBlock,
  ct as DxtTestPage,
  mt as DxtTestWiki,
  kt as DxtTestWikiPropItem,
  xt as DxtTestWikiProps,
  Tt as DxtTestWikiTitle,
  lt as UiTestButton,
  at as UiTestContainer,
  rt as UiTestGroup,
  ut as UiTestItemFull,
  _t as UiTestItemSquared,
  dt as UiTestLabel,
  pt as UiTestTitle
};
