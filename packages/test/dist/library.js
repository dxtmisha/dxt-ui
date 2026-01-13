import { defineComponent as r, createElementBlock as n, openBlock as s, createElementVNode as d, createCommentVNode as _, renderSlot as u, toDisplayString as a, computed as o, normalizeClass as P, createBlock as v, createTextVNode as V, inject as N, unref as L, createVNode as $, withCtx as x, resolveDynamicComponent as G, normalizeProps as S, guardReactiveProps as E, Fragment as D, renderList as F, createSlots as w, mergeProps as I, provide as U } from "vue";
import { writeClipboardData as H } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
import { forEach as M, encodeAttribute as A } from "@dxtmisha/functional-basic";
const R = { class: "dxt-test-block" }, J = { class: "dxt-test-block__title" }, K = {
  key: 0,
  class: "dxt-test-block__description"
}, j = /* @__PURE__ */ r({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {}
  },
  setup(e) {
    return (t, i) => (s(), n("div", R, [
      d("h3", J, a(e.title), 1),
      e.description ? (s(), n("div", K, a(e.description), 1)) : _("", !0),
      u(t.$slots, "default")
    ]));
  }
}), Q = { class: "dxt-test-page" }, X = { class: "dxt-test-page__title" }, Y = {
  key: 0,
  class: "dxt-test-page__description"
}, Z = /* @__PURE__ */ r({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(e) {
    return (t, i) => (s(), n("main", Q, [
      d("h1", X, a(e.title), 1),
      e.description ? (s(), n("div", Y, a(e.description), 1)) : _("", !0),
      u(t.$slots, "default")
    ]));
  }
}), ee = { class: "ui-test-button" }, te = /* @__PURE__ */ r({
  __name: "UiTestButton",
  props: {
    label: {}
  },
  setup(e) {
    return (t, i) => (s(), n("button", ee, a(e.label), 1));
  }
}), se = {
  key: 0,
  class: "ui-test-container__label"
}, ie = {
  key: 1,
  class: "ui-test-container__description"
}, ne = { class: "ui-test-container__context" }, oe = /* @__PURE__ */ r({
  name: "C2TestContainer",
  __name: "UiTestContainer",
  props: {
    label: {},
    description: {},
    isDark: { type: Boolean }
  },
  setup(e) {
    const t = e, i = o(() => ({
      "ui-test-container--dark": t.isDark
    }));
    return (l, c) => (s(), n("div", {
      class: P([i.value, "ui-test-container"])
    }, [
      e.label ? (s(), n("div", se, a(e.label), 1)) : _("", !0),
      e.description ? (s(), n("div", ie, a(e.description), 1)) : _("", !0),
      d("div", ne, [
        u(l.$slots, "default")
      ])
    ], 2));
  }
}), le = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [l, c] of t)
    i[l] = c;
  return i;
}, ae = {}, re = { class: "ui-test-group" };
function ce(e, t) {
  return s(), n("div", re, [
    u(e.$slots, "default")
  ]);
}
const ue = /* @__PURE__ */ le(ae, [["render", ce]]), z = /* @__PURE__ */ r({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(e) {
    const t = e, i = () => H(String(t.label)).then();
    return (l, c) => (s(), n("div", {
      class: "ui-test-label",
      onClick: i
    }, a(e.label), 1));
  }
}), de = /* @__PURE__ */ r({
  __name: "UiTestItemFull",
  props: {
    label: {},
    isFlex: { type: Boolean, default: !0 },
    isPadding: { type: Boolean },
    background: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !0 },
    inverse: { type: Boolean }
  },
  setup(e) {
    const t = e, i = o(() => ({
      "ui-test-item-full--flex": t.isFlex,
      "ui-test-item-full--padding": t.isPadding,
      "ui-test-item-full--background": t.background,
      "ui-test-item-full--rounded": t.rounded,
      "ui-test-item-full--inverse": t.inverse
    }));
    return (l, c) => (s(), n("div", {
      class: P([i.value, "ui-test-item-full"])
    }, [
      e.label ? (s(), v(z, {
        key: 0,
        label: e.label
      }, null, 8, ["label"])) : _("", !0),
      u(l.$slots, "default")
    ], 2));
  }
}), me = /* @__PURE__ */ r({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(e) {
    const t = e, i = o(() => ({
      [`ui-test-item-squared--size--${t.size}`]: t.size
    }));
    return (l, c) => (s(), n("div", {
      class: P([i.value, "ui-test-item-squared"])
    }, [
      e.label ? (s(), v(z, {
        key: 0,
        label: e.label
      }, null, 8, ["label"])) : _("", !0),
      u(l.$slots, "default")
    ], 2));
  }
}), _e = { class: "ui-test-title" }, pe = /* @__PURE__ */ r({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(e) {
    return (t, i) => (s(), n("div", _e, a(e.title), 1));
  }
}), ke = { class: "dxt-test-wiki-code" }, C = /* @__PURE__ */ r({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(e) {
    return (t, i) => (s(), n("code", ke, [
      V(a(e.code) + " ", 1),
      u(t.$slots, "default")
    ]));
  }
}), $e = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, ve = ["innerHTML"], fe = { class: "dxt-test-wiki-demo__content" }, W = /* @__PURE__ */ r({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(e) {
    const t = e, i = N("name"), l = N("component"), c = N("values"), f = {
      item: "dxt-test-wiki-demo__item"
    }, b = o(() => ({
      ...c == null ? void 0 : c.value,
      ...t.args
    })), T = o(() => {
      const m = M(b.value, (g, p) => g === !0 ? `&nbsp;&nbsp;${p}<br/>` : `&nbsp;&nbsp;${p}="${A(g)}"<br/>`);
      return `
&lt;${i.value}<br/>
${m.join("")}
/&gt;
  `.trim();
    });
    return (m, g) => L(l) ? (s(), n("div", $e, [
      $(C, null, {
        default: x(() => [
          d("div", { innerHTML: T.value }, null, 8, ve)
        ]),
        _: 1
      }),
      d("div", fe, [
        u(m.$slots, "render", {
          args: b.value,
          classDemo: f
        }, () => [
          d("div", {
            class: P(f.item)
          }, [
            (s(), v(G(L(l)), S(E(b.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : _("", !0);
  }
}), be = { class: "dxt-test-wiki-possibilities" }, xe = /* @__PURE__ */ r({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(e) {
    return (t, i) => (s(), n("ul", be, [
      (s(!0), n(D, null, F(e.possibilities, (l) => (s(), n("li", { key: l }, a(l), 1))), 128))
    ]));
  }
}), Te = { class: "dxt-test-wiki-title" }, y = /* @__PURE__ */ r({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(e) {
    return (t, i) => (s(), n("h4", Te, [
      V(a(e.label) + " ", 1),
      e.type ? (s(), v(C, {
        key: 0,
        code: e.type
      }, null, 8, ["code"])) : _("", !0)
    ]));
  }
}), ge = { class: "dxt-test-wiki-prop-item" }, he = { class: "dxt-test-wiki-prop-item__tilte" }, ye = { class: "dxt-test-wiki-prop-item__name" }, De = { class: "dxt-test-wiki-prop-item__description" }, we = { class: "dxt-test-wiki-prop-item__demo" }, q = /* @__PURE__ */ r({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, i = o(() => t.item.getName()), l = o(() => t.item.getDescription()), c = o(() => t.item.getType()), f = o(() => t.item.getOptions()), b = o(() => t.item.isDemo()), T = o(() => t.item.getDemo());
    return (m, g) => (s(), n("div", ge, [
      d("div", he, [
        d("span", ye, a(i.value) + ":", 1),
        $(C, { code: c.value }, null, 8, ["code"])
      ]),
      d("div", De, a(l.value), 1),
      d("div", we, [
        b.value ? (s(), n(D, { key: 0 }, [
          f.value ? (s(!0), n(D, { key: 0 }, F(f.value, (p) => (s(), v(W, {
            key: p,
            args: { [i.value]: p }
          }, w({ _: 2 }, [
            "render" in m.$slots ? {
              name: "render",
              fn: x((k) => [
                u(m.$slots, "render", I({ ref_for: !0 }, k))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : T.value ? (s(), v(W, {
            key: 1,
            args: { [i.value]: T.value }
          }, w({ _: 2 }, [
            "render" in m.$slots ? {
              name: "render",
              fn: x((p) => [
                u(m.$slots, "render", S(E(p)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"])) : _("", !0)
        ], 64)) : _("", !0)
      ])
    ]));
  }
}), We = /* @__PURE__ */ r({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(e) {
    const t = e, i = o(() => `${t.design}${t.wiki.getName()}`), l = o(() => `interface ${t.wiki.getName()}Props`), c = o(() => `type ${t.wiki.getName()}Emits`), f = o(() => `interface ${t.wiki.getName()}Expose`), b = o(() => `interface ${t.wiki.getName()}Slots`), T = o(() => t.wiki.getDescription()), m = o(() => t.wiki.getPossibilities()), g = o(() => t.wiki.getWikiObject()), p = o(() => t.wiki.getFilteredValues());
    return U("name", i), U("component", t.component), U("values", p), (k, Pe) => (s(), v(j, {
      title: i.value,
      description: T.value,
      class: "dxt-test-wiki"
    }, {
      default: x(() => [
        $(xe, { possibilities: m.value }, null, 8, ["possibilities"]),
        d("div", null, [
          $(W, null, w({ _: 2 }, [
            "render" in k.$slots ? {
              name: "render",
              fn: x((h) => [
                u(k.$slots, "render", S(E(h)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        $(y, {
          type: c.value,
          label: "Emits"
        }, null, 8, ["type"]),
        $(y, {
          type: f.value,
          label: "Expose"
        }, null, 8, ["type"]),
        $(y, {
          type: b.value,
          label: "Slots"
        }, null, 8, ["type"]),
        $(y, {
          type: l.value,
          label: "Props"
        }, null, 8, ["type"]),
        (s(!0), n(D, null, F(g.value, (h, O) => (s(), v(q, {
          key: O,
          item: h
        }, w({ _: 2 }, [
          h.name in k.$slots ? {
            name: h.name,
            fn: x((B) => [
              u(k.$slots, h.name, I({ ref_for: !0 }, B))
            ]),
            key: "0"
          } : "render" in k.$slots ? {
            name: "render",
            fn: x((B) => [
              u(k.$slots, "render", I({ ref_for: !0 }, B))
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["item"]))), 128))
      ]),
      _: 3
    }, 8, ["title", "description"]));
  }
}), Ie = j, Se = Z, Ee = te, Fe = oe, ze = ue, Le = de, Ve = me, je = z, qe = pe, Oe = We, Ge = C, He = W, Me = q, Ae = y;
export {
  Ie as DxtTestBlock,
  Se as DxtTestPage,
  Oe as DxtTestWiki,
  Ge as DxtTestWikiCode,
  He as DxtTestWikiDemo,
  Me as DxtTestWikiPropItem,
  Ae as DxtTestWikiTitle,
  Ee as UiTestButton,
  Fe as UiTestContainer,
  ze as UiTestGroup,
  Le as UiTestItemFull,
  Ve as UiTestItemSquared,
  je as UiTestLabel,
  qe as UiTestTitle
};
