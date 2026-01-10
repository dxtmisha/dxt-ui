import { defineComponent as a, createElementBlock as n, openBlock as i, createElementVNode as u, createCommentVNode as d, renderSlot as _, toDisplayString as c, computed as r, Fragment as $, renderList as v, createBlock as p, withCtx as g, createVNode as D, normalizeClass as m } from "vue";
import "@dxtmisha/wiki";
import { writeClipboardData as y } from "@dxtmisha/functional";
const B = { class: "dxt-test-block" }, U = { class: "dxt-test-block__title" }, w = {
  key: 0,
  class: "dxt-test-block__description"
}, x = /* @__PURE__ */ a({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, s) => (i(), n("div", B, [
      u("h3", U, c(t.title), 1),
      t.description ? (i(), n("div", w, c(t.description), 1)) : d("", !0),
      _(e.$slots, "default")
    ]));
  }
}), C = { class: "dxt-test-page" }, P = { class: "dxt-test-page__title" }, W = {
  key: 0,
  class: "dxt-test-page__description"
}, I = /* @__PURE__ */ a({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, s) => (i(), n("main", C, [
      u("h1", P, c(t.title), 1),
      t.description ? (i(), n("div", W, c(t.description), 1)) : d("", !0),
      _(e.$slots, "default")
    ]));
  }
}), z = { class: "dxt-test-wiki-prop-item" }, F = { class: "dxt-test-wiki-prop-item__tilte" }, N = { class: "dxt-test-wiki-prop-item__name" }, S = { class: "dxt-test-wiki-prop-item__type" }, q = { class: "dxt-test-wiki-prop-item__description" }, f = /* @__PURE__ */ a({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, s = r(() => e.item.getName()), o = r(() => e.item.getDescription()), l = r(() => e.item.getType());
    return (b, h) => (i(), n("div", z, [
      u("div", F, [
        u("span", N, c(s.value) + ":", 1),
        u("span", S, c(l.value), 1)
      ]),
      u("div", q, c(o.value), 1)
    ]));
  }
}), T = /* @__PURE__ */ a({
  name: "DxtTestWikiProps",
  __name: "DxtTestWikiProps",
  props: {
    list: {}
  },
  setup(t) {
    return (e, s) => (i(!0), n($, null, v(t.list, (o, l) => (i(), p(f, {
      key: l,
      item: o
    }, null, 8, ["item"]))), 128));
  }
}), L = /* @__PURE__ */ a({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {}
  },
  setup(t) {
    const e = t, s = r(() => `${e.design}${e.wiki.getName()}`), o = r(() => e.wiki.getDescription()), l = r(() => e.wiki.getWikiObject());
    return (b, h) => (i(), p(x, {
      title: s.value,
      description: o.value,
      class: "dxt-test-wiki"
    }, {
      default: g(() => [
        D(T, { list: l.value }, null, 8, ["list"])
      ]),
      _: 1
    }, 8, ["title", "description"]));
  }
}), V = { class: "ui-test-button" }, E = /* @__PURE__ */ a({
  __name: "UiTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, s) => (i(), n("button", V, c(t.label), 1));
  }
}), G = {
  key: 0,
  class: "ui-test-container__label"
}, O = {
  key: 1,
  class: "ui-test-container__description"
}, j = { class: "ui-test-container__context" }, A = /* @__PURE__ */ a({
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
    return (o, l) => (i(), n("div", {
      class: m([s.value, "ui-test-container"])
    }, [
      t.label ? (i(), n("div", G, c(t.label), 1)) : d("", !0),
      t.description ? (i(), n("div", O, c(t.description), 1)) : d("", !0),
      u("div", j, [
        _(o.$slots, "default")
      ])
    ], 2));
  }
}), H = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [o, l] of e)
    s[o] = l;
  return s;
}, J = {}, K = { class: "ui-test-group" };
function M(t, e) {
  return i(), n("div", K, [
    _(t.$slots, "default")
  ]);
}
const Q = /* @__PURE__ */ H(J, [["render", M]]), k = /* @__PURE__ */ a({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(t) {
    const e = t, s = () => y(String(e.label)).then();
    return (o, l) => (i(), n("div", {
      class: "ui-test-label",
      onClick: s
    }, c(t.label), 1));
  }
}), R = /* @__PURE__ */ a({
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
    return (o, l) => (i(), n("div", {
      class: m([s.value, "ui-test-item-full"])
    }, [
      t.label ? (i(), p(k, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      _(o.$slots, "default")
    ], 2));
  }
}), X = /* @__PURE__ */ a({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(t) {
    const e = t, s = r(() => ({
      [`ui-test-item-squared--size--${e.size}`]: e.size
    }));
    return (o, l) => (i(), n("div", {
      class: m([s.value, "ui-test-item-squared"])
    }, [
      t.label ? (i(), p(k, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      _(o.$slots, "default")
    ], 2));
  }
}), Y = { class: "ui-test-title" }, Z = /* @__PURE__ */ a({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, s) => (i(), n("div", Y, c(t.title), 1));
  }
}), it = x, nt = I, ot = L, ct = f, lt = T, at = E, rt = A, ut = Q, dt = R, _t = X, pt = k, mt = Z;
export {
  it as DxtTestBlock,
  nt as DxtTestPage,
  ot as DxtTestWiki,
  ct as DxtTestWikiPropItem,
  lt as DxtTestWikiProps,
  at as UiTestButton,
  rt as UiTestContainer,
  ut as UiTestGroup,
  dt as UiTestItemFull,
  _t as UiTestItemSquared,
  pt as UiTestLabel,
  mt as UiTestTitle
};
