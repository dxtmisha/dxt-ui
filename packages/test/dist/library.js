import { defineComponent as a, createElementBlock as n, openBlock as i, createElementVNode as u, createCommentVNode as p, renderSlot as d, toDisplayString as r, computed as c, normalizeClass as b, createBlock as x, createTextVNode as P, inject as D, unref as C, createVNode as _, withCtx as w, resolveDynamicComponent as F, normalizeProps as z, guardReactiveProps as L, Fragment as V, renderList as j, provide as y, createSlots as q } from "vue";
import { writeClipboardData as G } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
import { forEach as H, encodeAttribute as M } from "@dxtmisha/functional-basic";
const O = { class: "dxt-test-block" }, A = { class: "dxt-test-block__title" }, R = {
  key: 0,
  class: "dxt-test-block__description"
}, B = /* @__PURE__ */ a({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, s) => (i(), n("div", O, [
      u("h3", A, r(t.title), 1),
      t.description ? (i(), n("div", R, r(t.description), 1)) : p("", !0),
      d(e.$slots, "default")
    ]));
  }
}), J = { class: "dxt-test-page" }, K = { class: "dxt-test-page__title" }, Q = {
  key: 0,
  class: "dxt-test-page__description"
}, X = /* @__PURE__ */ a({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, s) => (i(), n("main", J, [
      u("h1", K, r(t.title), 1),
      t.description ? (i(), n("div", Q, r(t.description), 1)) : p("", !0),
      d(e.$slots, "default")
    ]));
  }
}), Y = { class: "ui-test-button" }, Z = /* @__PURE__ */ a({
  __name: "UiTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, s) => (i(), n("button", Y, r(t.label), 1));
  }
}), tt = {
  key: 0,
  class: "ui-test-container__label"
}, et = {
  key: 1,
  class: "ui-test-container__description"
}, st = { class: "ui-test-container__context" }, it = /* @__PURE__ */ a({
  name: "C2TestContainer",
  __name: "UiTestContainer",
  props: {
    label: {},
    description: {},
    isDark: { type: Boolean }
  },
  setup(t) {
    const e = t, s = c(() => ({
      "ui-test-container--dark": e.isDark
    }));
    return (o, l) => (i(), n("div", {
      class: b([s.value, "ui-test-container"])
    }, [
      t.label ? (i(), n("div", tt, r(t.label), 1)) : p("", !0),
      t.description ? (i(), n("div", et, r(t.description), 1)) : p("", !0),
      u("div", st, [
        d(o.$slots, "default")
      ])
    ], 2));
  }
}), nt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [o, l] of e)
    s[o] = l;
  return s;
}, ot = {}, ct = { class: "ui-test-group" };
function lt(t, e) {
  return i(), n("div", ct, [
    d(t.$slots, "default")
  ]);
}
const at = /* @__PURE__ */ nt(ot, [["render", lt]]), W = /* @__PURE__ */ a({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(t) {
    const e = t, s = () => G(String(e.label)).then();
    return (o, l) => (i(), n("div", {
      class: "ui-test-label",
      onClick: s
    }, r(t.label), 1));
  }
}), rt = /* @__PURE__ */ a({
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
    const e = t, s = c(() => ({
      "ui-test-item-full--flex": e.isFlex,
      "ui-test-item-full--padding": e.isPadding,
      "ui-test-item-full--background": e.background,
      "ui-test-item-full--rounded": e.rounded,
      "ui-test-item-full--inverse": e.inverse
    }));
    return (o, l) => (i(), n("div", {
      class: b([s.value, "ui-test-item-full"])
    }, [
      t.label ? (i(), x(W, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : p("", !0),
      d(o.$slots, "default")
    ], 2));
  }
}), ut = /* @__PURE__ */ a({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(t) {
    const e = t, s = c(() => ({
      [`ui-test-item-squared--size--${e.size}`]: e.size
    }));
    return (o, l) => (i(), n("div", {
      class: b([s.value, "ui-test-item-squared"])
    }, [
      t.label ? (i(), x(W, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : p("", !0),
      d(o.$slots, "default")
    ], 2));
  }
}), dt = { class: "ui-test-title" }, _t = /* @__PURE__ */ a({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, s) => (i(), n("div", dt, r(t.title), 1));
  }
}), pt = { class: "dxt-test-wiki-code" }, h = /* @__PURE__ */ a({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, s) => (i(), n("code", pt, [
      P(r(t.code) + " ", 1),
      d(e.$slots, "default")
    ]));
  }
}), mt = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, kt = ["innerHTML"], xt = { class: "dxt-test-wiki-demo__content" }, N = /* @__PURE__ */ a({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(t) {
    const e = t, s = D("name"), o = D("component"), l = D("values"), $ = {
      item: "dxt-test-wiki-demo__item"
    }, m = c(() => ({
      ...l == null ? void 0 : l.value,
      ...e.args
    })), g = c(() => {
      const k = [];
      return H(m.value, (T, f) => {
        k.push(`&nbsp;&nbsp;${f}="${M(T)}"<br/>`);
      }), `
&lt;${s.value}<br/>
${k.join("")}
/&gt;
  `.trim();
    });
    return (k, T) => C(o) ? (i(), n("div", mt, [
      _(h, null, {
        default: w(() => [
          u("div", { innerHTML: g.value }, null, 8, kt)
        ]),
        _: 1
      }),
      u("div", xt, [
        d(k.$slots, "render", {
          args: m.value,
          classDemo: $
        }, () => [
          u("div", {
            class: b($.item)
          }, [
            (i(), x(F(C(o)), z(L(m.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : p("", !0);
  }
}), $t = { class: "dxt-test-wiki-prop-item" }, vt = { class: "dxt-test-wiki-prop-item__tilte" }, Tt = { class: "dxt-test-wiki-prop-item__name" }, ft = { class: "dxt-test-wiki-prop-item__description" }, U = /* @__PURE__ */ a({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, s = c(() => e.item.getName()), o = c(() => e.item.getDescription()), l = c(() => e.item.getType());
    return ($, m) => (i(), n("div", $t, [
      u("div", vt, [
        u("span", Tt, r(s.value) + ":", 1),
        _(h, { code: l.value }, null, 8, ["code"])
      ]),
      u("div", ft, r(o.value), 1)
    ]));
  }
}), I = /* @__PURE__ */ a({
  name: "DxtTestWikiProps",
  __name: "DxtTestWikiProps",
  props: {
    list: {}
  },
  setup(t) {
    return (e, s) => (i(!0), n(V, null, j(t.list, (o, l) => (i(), x(U, {
      key: l,
      item: o
    }, null, 8, ["item"]))), 128));
  }
}), bt = { class: "dxt-test-wiki-title" }, v = /* @__PURE__ */ a({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(t) {
    return (e, s) => (i(), n("h4", bt, [
      P(r(t.label) + " ", 1),
      t.type ? (i(), x(h, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : p("", !0)
    ]));
  }
}), ht = /* @__PURE__ */ a({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(t) {
    const e = t, s = c(() => `${e.design}${e.wiki.getName()}`), o = c(() => `interface ${e.wiki.getName()}Props`), l = c(() => `type ${e.wiki.getName()}Emits`), $ = c(() => `interface ${e.wiki.getName()}Expose`), m = c(() => `interface ${e.wiki.getName()}Slots`), g = c(() => e.wiki.getDescription()), k = c(() => e.wiki.getWikiObject()), T = c(() => e.wiki.getFilteredValues());
    return y("name", s), y("component", e.component), y("values", T), (f, gt) => (i(), x(B, {
      title: s.value,
      description: g.value,
      class: "dxt-test-wiki"
    }, {
      default: w(() => [
        u("div", null, [
          _(N, null, q({ _: 2 }, [
            "render" in f.$slots ? {
              name: "render",
              fn: w(({ args: S, classDemo: E }) => [
                d(f.$slots, "render", {
                  args: S,
                  classDemo: E
                })
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        _(v, {
          type: o.value,
          label: "Props"
        }, null, 8, ["type"]),
        _(I, { list: k.value }, null, 8, ["list"]),
        _(v, {
          type: l.value,
          label: "Emits"
        }, null, 8, ["type"]),
        _(v, {
          type: $.value,
          label: "Expose"
        }, null, 8, ["type"]),
        _(v, {
          type: m.value,
          label: "Slots"
        }, null, 8, ["type"])
      ]),
      _: 3
    }, 8, ["title", "description"]));
  }
}), Ct = B, Pt = X, Bt = Z, Nt = it, Ut = at, It = rt, St = ut, Et = W, Ft = _t, zt = ht, Lt = h, Vt = N, jt = U, qt = I, Gt = v;
export {
  Ct as DxtTestBlock,
  Pt as DxtTestPage,
  zt as DxtTestWiki,
  Lt as DxtTestWikiCode,
  Vt as DxtTestWikiDemo,
  jt as DxtTestWikiPropItem,
  qt as DxtTestWikiProps,
  Gt as DxtTestWikiTitle,
  Bt as UiTestButton,
  Nt as UiTestContainer,
  Ut as UiTestGroup,
  It as UiTestItemFull,
  St as UiTestItemSquared,
  Et as UiTestLabel,
  Ft as UiTestTitle
};
