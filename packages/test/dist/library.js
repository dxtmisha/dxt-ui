import { defineComponent as c, openBlock as s, createElementBlock as n, createElementVNode as r, toDisplayString as a, createCommentVNode as d, renderSlot as _, computed as o, normalizeClass as B, createBlock as f, createTextVNode as R, inject as S, unref as q, createVNode as k, withCtx as g, resolveDynamicComponent as H, normalizeProps as V, guardReactiveProps as z, Fragment as D, renderList as L, createSlots as P, mergeProps as F, provide as E } from "vue";
import { writeClipboardData as M } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
import { forEach as J, encodeAttribute as K } from "@dxtmisha/functional-basic";
const Q = { class: "dxt-test-block" }, X = { class: "dxt-test-block__title" }, Y = {
  key: 0,
  class: "dxt-test-block__description"
}, A = /* @__PURE__ */ c({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", Q, [
      r("h3", X, a(t.title), 1),
      t.description ? (s(), n("div", Y, a(t.description), 1)) : d("", !0),
      _(e.$slots, "default")
    ]));
  }
}), Z = { class: "dxt-test-page" }, ee = { class: "dxt-test-page__title" }, te = {
  key: 0,
  class: "dxt-test-page__description"
}, se = /* @__PURE__ */ c({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, i) => (s(), n("main", Z, [
      r("h1", ee, a(t.title), 1),
      t.description ? (s(), n("div", te, a(t.description), 1)) : d("", !0),
      _(e.$slots, "default")
    ]));
  }
}), ie = { class: "ui-test-button" }, ne = /* @__PURE__ */ c({
  __name: "UiTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, i) => (s(), n("button", ie, a(t.label), 1));
  }
}), oe = {
  key: 0,
  class: "ui-test-container__label"
}, le = {
  key: 1,
  class: "ui-test-container__description"
}, ae = { class: "ui-test-container__context" }, re = /* @__PURE__ */ c({
  name: "C2TestContainer",
  __name: "UiTestContainer",
  props: {
    label: {},
    description: {},
    isDark: { type: Boolean }
  },
  setup(t) {
    const e = t, i = o(() => ({
      "ui-test-container--dark": e.isDark
    }));
    return (l, u) => (s(), n("div", {
      class: B([i.value, "ui-test-container"])
    }, [
      t.label ? (s(), n("div", oe, a(t.label), 1)) : d("", !0),
      t.description ? (s(), n("div", le, a(t.description), 1)) : d("", !0),
      r("div", ae, [
        _(l.$slots, "default")
      ])
    ], 2));
  }
}), ce = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [l, u] of e)
    i[l] = u;
  return i;
}, ue = {}, de = { class: "ui-test-group" };
function _e(t, e) {
  return s(), n("div", de, [
    _(t.$slots, "default")
  ]);
}
const pe = /* @__PURE__ */ ce(ue, [["render", _e]]), j = /* @__PURE__ */ c({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(t) {
    const e = t, i = () => M(String(e.label)).then();
    return (l, u) => (s(), n("div", {
      class: "ui-test-label",
      onClick: i
    }, a(t.label), 1));
  }
}), me = /* @__PURE__ */ c({
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
    const e = t, i = o(() => ({
      "ui-test-item-full--flex": e.isFlex,
      "ui-test-item-full--padding": e.isPadding,
      "ui-test-item-full--background": e.background,
      "ui-test-item-full--rounded": e.rounded,
      "ui-test-item-full--inverse": e.inverse
    }));
    return (l, u) => (s(), n("div", {
      class: B([i.value, "ui-test-item-full"])
    }, [
      t.label ? (s(), f(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      _(l.$slots, "default")
    ], 2));
  }
}), ke = /* @__PURE__ */ c({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(t) {
    const e = t, i = o(() => ({
      [`ui-test-item-squared--size--${e.size}`]: e.size
    }));
    return (l, u) => (s(), n("div", {
      class: B([i.value, "ui-test-item-squared"])
    }, [
      t.label ? (s(), f(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      _(l.$slots, "default")
    ], 2));
  }
}), ve = { class: "ui-test-title" }, $e = /* @__PURE__ */ c({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", ve, a(t.title), 1));
  }
}), fe = { class: "dxt-test-wiki-code" }, U = /* @__PURE__ */ c({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, i) => (s(), n("code", fe, [
      R(a(t.code) + " ", 1),
      _(e.$slots, "default")
    ]));
  }
}), be = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, xe = ["innerHTML"], ge = { class: "dxt-test-wiki-demo__content" }, C = /* @__PURE__ */ c({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(t) {
    const e = t, i = S("name"), l = S("component"), u = S("values"), T = {
      item: "dxt-test-wiki-demo__item"
    }, v = o(() => ({
      ...u == null ? void 0 : u.value,
      ...e.args
    })), w = o(() => {
      const $ = J(v.value, (m, W) => m === !0 ? `&nbsp;&nbsp;${W}<br/>` : `&nbsp;&nbsp;${W}="${K(m)}"<br/>`);
      return `
&lt;${i.value}<br/>
${$.join("")}
/&gt;
  `.trim();
    });
    return ($, m) => q(l) ? (s(), n("div", be, [
      k(U, null, {
        default: g(() => [
          r("div", { innerHTML: w.value }, null, 8, xe)
        ]),
        _: 1
      }),
      r("div", ge, [
        _($.$slots, "render", {
          args: v.value,
          classDemo: T
        }, () => [
          r("div", {
            class: B(T.item)
          }, [
            (s(), f(H(q(l)), V(z(v.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : d("", !0);
  }
}), Te = { class: "dxt-test-wiki-possibilities" }, he = /* @__PURE__ */ c({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(t) {
    return (e, i) => (s(), n("ul", Te, [
      (s(!0), n(D, null, L(t.possibilities, (l) => (s(), n("li", { key: l }, a(l), 1))), 128))
    ]));
  }
}), ye = { class: "dxt-test-wiki-title" }, x = /* @__PURE__ */ c({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(t) {
    return (e, i) => (s(), n("h4", ye, [
      R(a(t.label) + " ", 1),
      t.type ? (s(), f(U, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : d("", !0)
    ]));
  }
}), De = { class: "dxt-test-wiki-prop-item" }, we = { class: "dxt-test-wiki-prop-item__tilte" }, We = { class: "dxt-test-wiki-prop-item__name" }, Ne = { class: "dxt-test-wiki-prop-item__description" }, Pe = {
  key: 0,
  class: "dxt-test-wiki-prop-item__description"
}, Ce = { class: "dxt-test-wiki-prop-item__demo" }, O = /* @__PURE__ */ c({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, i = o(() => e.item.getName()), l = o(() => e.item.getDefaultValue()), u = o(() => e.item.getDescription()), T = o(() => e.item.getType()), v = o(() => e.item.getOptions()), w = o(() => e.item.isDemo()), $ = o(() => e.item.getDemo());
    return (m, W) => (s(), n("div", De, [
      r("div", we, [
        r("span", We, a(i.value) + ":", 1),
        k(U, { code: T.value }, null, 8, ["code"])
      ]),
      r("div", Ne, a(u.value), 1),
      l.value !== void 0 ? (s(), n("div", Pe, " default value: " + a(l.value), 1)) : d("", !0),
      r("div", Ce, [
        w.value ? (s(), n(D, { key: 0 }, [
          v.value ? (s(!0), n(D, { key: 0 }, L(v.value, (b) => (s(), f(C, {
            key: b,
            args: { [i.value]: b }
          }, P({ _: 2 }, [
            "render" in m.$slots ? {
              name: "render",
              fn: g((N) => [
                _(m.$slots, "render", F({ ref_for: !0 }, N))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : $.value ? (s(), f(C, {
            key: 1,
            args: { [i.value]: $.value }
          }, P({ _: 2 }, [
            "render" in m.$slots ? {
              name: "render",
              fn: g((b) => [
                _(m.$slots, "render", V(z(b)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"])) : d("", !0)
        ], 64)) : d("", !0)
      ])
    ]));
  }
}), Be = { class: "dxt-test-wiki__props" }, Ue = { class: "dxt-test-wiki__pre" }, Ie = { class: "dxt-test-wiki__pre" }, Se = /* @__PURE__ */ c({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(t) {
    const e = t, i = o(() => `${e.design}${e.wiki.getName()}`), l = o(() => `type ${e.wiki.getName()}Props`), u = o(() => `type ${e.wiki.getName()}Emits`), T = o(() => `interface ${e.wiki.getName()}Expose`), v = o(() => `interface ${e.wiki.getName()}Slots`), w = o(() => e.wiki.getDescription()), $ = o(() => e.wiki.getPossibilities()), m = o(() => e.wiki.getWikiObject()), W = o(() => e.wiki.getFilteredValues()), b = o(
      () => {
        var p, h;
        return (h = (p = e.wiki.getAiRender()) == null ? void 0 : p.replace(`<${e.wiki.getName()}`, `<${i.value}`)) == null ? void 0 : h.trim();
      }
    ), N = o(
      () => {
        var p, h;
        return (h = (p = e.wiki.getAiDescription()) == null ? void 0 : p.replace(`<${e.wiki.getName()}`, `<${i.value}`)) == null ? void 0 : h.trim();
      }
    );
    return E("name", i), E("component", e.component), E("values", W), (p, h) => (s(), f(A, {
      title: i.value,
      description: w.value,
      class: "dxt-test-wiki"
    }, {
      default: g(() => [
        k(he, { possibilities: $.value }, null, 8, ["possibilities"]),
        r("div", null, [
          k(C, null, P({ _: 2 }, [
            "render" in p.$slots ? {
              name: "render",
              fn: g((y) => [
                _(p.$slots, "render", V(z(y)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        k(x, {
          type: u.value,
          label: "Emits"
        }, null, 8, ["type"]),
        k(x, {
          type: T.value,
          label: "Expose"
        }, null, 8, ["type"]),
        k(x, {
          type: v.value,
          label: "Slots"
        }, null, 8, ["type"]),
        k(x, {
          type: l.value,
          label: "Props"
        }, null, 8, ["type"]),
        r("div", Be, [
          (s(!0), n(D, null, L(m.value, (y, G) => (s(), f(O, {
            key: G,
            item: y,
            class: "dxt-test-wiki__props__item"
          }, P({ _: 2 }, [
            y.name in p.$slots ? {
              name: y.name,
              fn: g((I) => [
                _(p.$slots, y.name, F({ ref_for: !0 }, I))
              ]),
              key: "0"
            } : "render" in p.$slots ? {
              name: "render",
              fn: g((I) => [
                _(p.$slots, "render", F({ ref_for: !0 }, I))
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["item"]))), 128))
        ]),
        b.value ? (s(), n(D, { key: 0 }, [
          k(x, { label: "Render" }),
          r("pre", Ue, a(b.value), 1)
        ], 64)) : d("", !0),
        N.value ? (s(), n(D, { key: 1 }, [
          k(x, { label: "Description" }),
          r("pre", Ie, a(N.value), 1)
        ], 64)) : d("", !0)
      ]),
      _: 3
    }, 8, ["title", "description"]));
  }
}), Le = A, je = se, qe = ne, Re = re, Ae = pe, Oe = me, Ge = ke, He = j, Me = $e, Je = Se, Ke = U, Qe = C, Xe = O, Ye = x;
export {
  Le as DxtTestBlock,
  je as DxtTestPage,
  Je as DxtTestWiki,
  Ke as DxtTestWikiCode,
  Qe as DxtTestWikiDemo,
  Xe as DxtTestWikiPropItem,
  Ye as DxtTestWikiTitle,
  qe as UiTestButton,
  Re as UiTestContainer,
  Ae as UiTestGroup,
  Oe as UiTestItemFull,
  Ge as UiTestItemSquared,
  He as UiTestLabel,
  Me as UiTestTitle
};
