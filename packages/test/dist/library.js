import { defineComponent as r, createElementBlock as n, openBlock as s, createElementVNode as u, createCommentVNode as _, renderSlot as d, toDisplayString as a, computed as o, normalizeClass as C, createBlock as v, createTextVNode as R, inject as I, unref as q, createVNode as k, withCtx as T, resolveDynamicComponent as H, normalizeProps as F, guardReactiveProps as z, Fragment as w, renderList as L, createSlots as N, mergeProps as E, provide as S } from "vue";
import { writeClipboardData as M } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
import { forEach as J, encodeAttribute as K } from "@dxtmisha/functional-basic";
const Q = { class: "dxt-test-block" }, X = { class: "dxt-test-block__title" }, Y = {
  key: 0,
  class: "dxt-test-block__description"
}, A = /* @__PURE__ */ r({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", Q, [
      u("h3", X, a(t.title), 1),
      t.description ? (s(), n("div", Y, a(t.description), 1)) : _("", !0),
      d(e.$slots, "default")
    ]));
  }
}), Z = { class: "dxt-test-page" }, ee = { class: "dxt-test-page__title" }, te = {
  key: 0,
  class: "dxt-test-page__description"
}, se = /* @__PURE__ */ r({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, i) => (s(), n("main", Z, [
      u("h1", ee, a(t.title), 1),
      t.description ? (s(), n("div", te, a(t.description), 1)) : _("", !0),
      d(e.$slots, "default")
    ]));
  }
}), ie = { class: "ui-test-button" }, ne = /* @__PURE__ */ r({
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
}, ae = { class: "ui-test-container__context" }, re = /* @__PURE__ */ r({
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
    return (l, c) => (s(), n("div", {
      class: C([i.value, "ui-test-container"])
    }, [
      t.label ? (s(), n("div", oe, a(t.label), 1)) : _("", !0),
      t.description ? (s(), n("div", le, a(t.description), 1)) : _("", !0),
      u("div", ae, [
        d(l.$slots, "default")
      ])
    ], 2));
  }
}), ce = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [l, c] of e)
    i[l] = c;
  return i;
}, ue = {}, de = { class: "ui-test-group" };
function me(t, e) {
  return s(), n("div", de, [
    d(t.$slots, "default")
  ]);
}
const _e = /* @__PURE__ */ ce(ue, [["render", me]]), V = /* @__PURE__ */ r({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(t) {
    const e = t, i = () => M(String(e.label)).then();
    return (l, c) => (s(), n("div", {
      class: "ui-test-label",
      onClick: i
    }, a(t.label), 1));
  }
}), pe = /* @__PURE__ */ r({
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
    return (l, c) => (s(), n("div", {
      class: C([i.value, "ui-test-item-full"])
    }, [
      t.label ? (s(), v(V, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(l.$slots, "default")
    ], 2));
  }
}), ke = /* @__PURE__ */ r({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(t) {
    const e = t, i = o(() => ({
      [`ui-test-item-squared--size--${e.size}`]: e.size
    }));
    return (l, c) => (s(), n("div", {
      class: C([i.value, "ui-test-item-squared"])
    }, [
      t.label ? (s(), v(V, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(l.$slots, "default")
    ], 2));
  }
}), $e = { class: "ui-test-title" }, ve = /* @__PURE__ */ r({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", $e, a(t.title), 1));
  }
}), fe = { class: "dxt-test-wiki-code" }, B = /* @__PURE__ */ r({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, i) => (s(), n("code", fe, [
      R(a(t.code) + " ", 1),
      d(e.$slots, "default")
    ]));
  }
}), be = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, xe = ["innerHTML"], Te = { class: "dxt-test-wiki-demo__content" }, P = /* @__PURE__ */ r({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(t) {
    const e = t, i = I("name"), l = I("component"), c = I("values"), f = {
      item: "dxt-test-wiki-demo__item"
    }, b = o(() => ({
      ...c == null ? void 0 : c.value,
      ...e.args
    })), g = o(() => {
      const p = J(b.value, (h, $) => h === !0 ? `&nbsp;&nbsp;${$}<br/>` : `&nbsp;&nbsp;${$}="${K(h)}"<br/>`);
      return `
&lt;${i.value}<br/>
${p.join("")}
/&gt;
  `.trim();
    });
    return (p, h) => q(l) ? (s(), n("div", be, [
      k(B, null, {
        default: T(() => [
          u("div", { innerHTML: g.value }, null, 8, xe)
        ]),
        _: 1
      }),
      u("div", Te, [
        d(p.$slots, "render", {
          args: b.value,
          classDemo: f
        }, () => [
          u("div", {
            class: C(f.item)
          }, [
            (s(), v(H(q(l)), F(z(b.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : _("", !0);
  }
}), ge = { class: "dxt-test-wiki-possibilities" }, he = /* @__PURE__ */ r({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(t) {
    return (e, i) => (s(), n("ul", ge, [
      (s(!0), n(w, null, L(t.possibilities, (l) => (s(), n("li", { key: l }, a(l), 1))), 128))
    ]));
  }
}), ye = { class: "dxt-test-wiki-title" }, x = /* @__PURE__ */ r({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(t) {
    return (e, i) => (s(), n("h4", ye, [
      R(a(t.label) + " ", 1),
      t.type ? (s(), v(B, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : _("", !0)
    ]));
  }
}), De = { class: "dxt-test-wiki-prop-item" }, we = { class: "dxt-test-wiki-prop-item__tilte" }, We = { class: "dxt-test-wiki-prop-item__name" }, Ne = { class: "dxt-test-wiki-prop-item__description" }, Pe = { class: "dxt-test-wiki-prop-item__demo" }, O = /* @__PURE__ */ r({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, i = o(() => e.item.getName()), l = o(() => e.item.getDescription()), c = o(() => e.item.getType()), f = o(() => e.item.getOptions()), b = o(() => e.item.isDemo()), g = o(() => e.item.getDemo());
    return (p, h) => (s(), n("div", De, [
      u("div", we, [
        u("span", We, a(i.value) + ":", 1),
        k(B, { code: c.value }, null, 8, ["code"])
      ]),
      u("div", Ne, a(l.value), 1),
      u("div", Pe, [
        b.value ? (s(), n(w, { key: 0 }, [
          f.value ? (s(!0), n(w, { key: 0 }, L(f.value, ($) => (s(), v(P, {
            key: $,
            args: { [i.value]: $ }
          }, N({ _: 2 }, [
            "render" in p.$slots ? {
              name: "render",
              fn: T((W) => [
                d(p.$slots, "render", E({ ref_for: !0 }, W))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : g.value ? (s(), v(P, {
            key: 1,
            args: { [i.value]: g.value }
          }, N({ _: 2 }, [
            "render" in p.$slots ? {
              name: "render",
              fn: T(($) => [
                d(p.$slots, "render", F(z($)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"])) : _("", !0)
        ], 64)) : _("", !0)
      ])
    ]));
  }
}), Ce = { class: "dxt-test-wiki__pre" }, Be = { class: "dxt-test-wiki__pre" }, Ue = /* @__PURE__ */ r({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(t) {
    const e = t, i = o(() => `${e.design}${e.wiki.getName()}`), l = o(() => `interface ${e.wiki.getName()}Props`), c = o(() => `type ${e.wiki.getName()}Emits`), f = o(() => `interface ${e.wiki.getName()}Expose`), b = o(() => `interface ${e.wiki.getName()}Slots`), g = o(() => e.wiki.getDescription()), p = o(() => e.wiki.getPossibilities()), h = o(() => e.wiki.getWikiObject()), $ = o(() => e.wiki.getFilteredValues()), W = o(
      () => {
        var m, y;
        return (y = (m = e.wiki.getAiRender()) == null ? void 0 : m.replace(`<${e.wiki.getName()}`, `<${i.value}`)) == null ? void 0 : y.trim();
      }
    ), j = o(
      () => {
        var m, y;
        return (y = (m = e.wiki.getAiDescription()) == null ? void 0 : m.replace(`<${e.wiki.getName()}`, `<${i.value}`)) == null ? void 0 : y.trim();
      }
    );
    return S("name", i), S("component", e.component), S("values", $), (m, y) => (s(), v(A, {
      title: i.value,
      description: g.value,
      class: "dxt-test-wiki"
    }, {
      default: T(() => [
        k(he, { possibilities: p.value }, null, 8, ["possibilities"]),
        u("div", null, [
          k(P, null, N({ _: 2 }, [
            "render" in m.$slots ? {
              name: "render",
              fn: T((D) => [
                d(m.$slots, "render", F(z(D)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        k(x, {
          type: c.value,
          label: "Emits"
        }, null, 8, ["type"]),
        k(x, {
          type: f.value,
          label: "Expose"
        }, null, 8, ["type"]),
        k(x, {
          type: b.value,
          label: "Slots"
        }, null, 8, ["type"]),
        k(x, {
          type: l.value,
          label: "Props"
        }, null, 8, ["type"]),
        (s(!0), n(w, null, L(h.value, (D, G) => (s(), v(O, {
          key: G,
          item: D
        }, N({ _: 2 }, [
          D.name in m.$slots ? {
            name: D.name,
            fn: T((U) => [
              d(m.$slots, D.name, E({ ref_for: !0 }, U))
            ]),
            key: "0"
          } : "render" in m.$slots ? {
            name: "render",
            fn: T((U) => [
              d(m.$slots, "render", E({ ref_for: !0 }, U))
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["item"]))), 128)),
        W.value ? (s(), n(w, { key: 0 }, [
          k(x, { label: "Render" }),
          u("pre", Ce, a(W.value), 1)
        ], 64)) : _("", !0),
        j.value ? (s(), n(w, { key: 1 }, [
          k(x, { label: "Description" }),
          u("pre", Be, a(j.value), 1)
        ], 64)) : _("", !0)
      ]),
      _: 3
    }, 8, ["title", "description"]));
  }
}), ze = A, Le = se, Ve = ne, je = re, qe = _e, Re = pe, Ae = ke, Oe = V, Ge = ve, He = Ue, Me = B, Je = P, Ke = O, Qe = x;
export {
  ze as DxtTestBlock,
  Le as DxtTestPage,
  He as DxtTestWiki,
  Me as DxtTestWikiCode,
  Je as DxtTestWikiDemo,
  Ke as DxtTestWikiPropItem,
  Qe as DxtTestWikiTitle,
  Ve as UiTestButton,
  je as UiTestContainer,
  qe as UiTestGroup,
  Re as UiTestItemFull,
  Ae as UiTestItemSquared,
  Oe as UiTestLabel,
  Ge as UiTestTitle
};
