import { defineComponent as c, createElementBlock as n, openBlock as s, createElementVNode as d, createCommentVNode as m, renderSlot as u, toDisplayString as a, computed as l, normalizeClass as D, createBlock as v, createTextVNode as z, inject as P, unref as E, createVNode as k, withCtx as h, resolveDynamicComponent as G, normalizeProps as L, guardReactiveProps as V, Fragment as N, renderList as U, createSlots as B, provide as C, mergeProps as F } from "vue";
import { writeClipboardData as H } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
import { forEach as M, encodeAttribute as A } from "@dxtmisha/functional-basic";
const R = { class: "dxt-test-block" }, J = { class: "dxt-test-block__title" }, K = {
  key: 0,
  class: "dxt-test-block__description"
}, j = /* @__PURE__ */ c({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {}
  },
  setup(e) {
    return (t, i) => (s(), n("div", R, [
      d("h3", J, a(e.title), 1),
      e.description ? (s(), n("div", K, a(e.description), 1)) : m("", !0),
      u(t.$slots, "default")
    ]));
  }
}), Q = { class: "dxt-test-page" }, X = { class: "dxt-test-page__title" }, Y = {
  key: 0,
  class: "dxt-test-page__description"
}, Z = /* @__PURE__ */ c({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(e) {
    return (t, i) => (s(), n("main", Q, [
      d("h1", X, a(e.title), 1),
      e.description ? (s(), n("div", Y, a(e.description), 1)) : m("", !0),
      u(t.$slots, "default")
    ]));
  }
}), ee = { class: "ui-test-button" }, te = /* @__PURE__ */ c({
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
}, ne = { class: "ui-test-container__context" }, oe = /* @__PURE__ */ c({
  name: "C2TestContainer",
  __name: "UiTestContainer",
  props: {
    label: {},
    description: {},
    isDark: { type: Boolean }
  },
  setup(e) {
    const t = e, i = l(() => ({
      "ui-test-container--dark": t.isDark
    }));
    return (o, r) => (s(), n("div", {
      class: D([i.value, "ui-test-container"])
    }, [
      e.label ? (s(), n("div", se, a(e.label), 1)) : m("", !0),
      e.description ? (s(), n("div", ie, a(e.description), 1)) : m("", !0),
      d("div", ne, [
        u(o.$slots, "default")
      ])
    ], 2));
  }
}), le = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, r] of t)
    i[o] = r;
  return i;
}, ae = {}, ce = { class: "ui-test-group" };
function re(e, t) {
  return s(), n("div", ce, [
    u(e.$slots, "default")
  ]);
}
const ue = /* @__PURE__ */ le(ae, [["render", re]]), I = /* @__PURE__ */ c({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(e) {
    const t = e, i = () => H(String(t.label)).then();
    return (o, r) => (s(), n("div", {
      class: "ui-test-label",
      onClick: i
    }, a(e.label), 1));
  }
}), de = /* @__PURE__ */ c({
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
    const t = e, i = l(() => ({
      "ui-test-item-full--flex": t.isFlex,
      "ui-test-item-full--padding": t.isPadding,
      "ui-test-item-full--background": t.background,
      "ui-test-item-full--rounded": t.rounded,
      "ui-test-item-full--inverse": t.inverse
    }));
    return (o, r) => (s(), n("div", {
      class: D([i.value, "ui-test-item-full"])
    }, [
      e.label ? (s(), v(I, {
        key: 0,
        label: e.label
      }, null, 8, ["label"])) : m("", !0),
      u(o.$slots, "default")
    ], 2));
  }
}), _e = /* @__PURE__ */ c({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(e) {
    const t = e, i = l(() => ({
      [`ui-test-item-squared--size--${t.size}`]: t.size
    }));
    return (o, r) => (s(), n("div", {
      class: D([i.value, "ui-test-item-squared"])
    }, [
      e.label ? (s(), v(I, {
        key: 0,
        label: e.label
      }, null, 8, ["label"])) : m("", !0),
      u(o.$slots, "default")
    ], 2));
  }
}), me = { class: "ui-test-title" }, pe = /* @__PURE__ */ c({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(e) {
    return (t, i) => (s(), n("div", me, a(e.title), 1));
  }
}), ke = { class: "dxt-test-wiki-code" }, w = /* @__PURE__ */ c({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(e) {
    return (t, i) => (s(), n("code", ke, [
      z(a(e.code) + " ", 1),
      u(t.$slots, "default")
    ]));
  }
}), $e = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, fe = ["innerHTML"], ve = { class: "dxt-test-wiki-demo__content" }, S = /* @__PURE__ */ c({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(e) {
    const t = e, i = P("name"), o = P("component"), r = P("values"), $ = {
      item: "dxt-test-wiki-demo__item"
    }, p = l(() => ({
      ...r == null ? void 0 : r.value,
      ...t.args
    })), y = l(() => {
      const _ = M(p.value, (f, b) => f === !0 ? (_.push(), `&nbsp;&nbsp;${b}<br/>`) : `&nbsp;&nbsp;${b}="${A(f)}"<br/>`);
      return `
&lt;${i.value}<br/>
${_.join("")}
/&gt;
  `.trim();
    });
    return (_, f) => E(o) ? (s(), n("div", $e, [
      k(w, null, {
        default: h(() => [
          d("div", { innerHTML: y.value }, null, 8, fe)
        ]),
        _: 1
      }),
      d("div", ve, [
        u(_.$slots, "render", {
          args: p.value,
          classDemo: $
        }, () => [
          d("div", {
            class: D($.item)
          }, [
            (s(), v(G(E(o)), L(V(p.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : m("", !0);
  }
}), be = { class: "dxt-test-wiki-title" }, g = /* @__PURE__ */ c({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(e) {
    return (t, i) => (s(), n("h4", be, [
      z(a(e.label) + " ", 1),
      e.type ? (s(), v(w, {
        key: 0,
        code: e.type
      }, null, 8, ["code"])) : m("", !0)
    ]));
  }
}), xe = { class: "dxt-test-wiki-prop-item" }, Te = { class: "dxt-test-wiki-prop-item__tilte" }, he = { class: "dxt-test-wiki-prop-item__name" }, ge = { class: "dxt-test-wiki-prop-item__description" }, ye = { class: "dxt-test-wiki-prop-item__demo" }, q = /* @__PURE__ */ c({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, i = l(() => t.item.getName()), o = l(() => t.item.getDescription()), r = l(() => t.item.getType()), $ = l(() => t.item.getOptions());
    return console.log(t.item.get()), (p, y) => (s(), n("div", xe, [
      d("div", Te, [
        d("span", he, a(i.value) + ":", 1),
        k(w, { code: r.value }, null, 8, ["code"])
      ]),
      d("div", ge, a(o.value), 1),
      d("div", ye, [
        $.value ? (s(!0), n(N, { key: 0 }, U($.value, (_) => (s(), v(S, {
          key: _,
          args: { [i.value]: _ }
        }, B({ _: 2 }, [
          "render" in p.$slots ? {
            name: "render",
            fn: h(({ args: f, classDemo: b }) => [
              u(p.$slots, "render", {
                args: f,
                classDemo: b
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["args"]))), 128)) : m("", !0)
      ])
    ]));
  }
}), De = { class: "dxt-test-wiki-possibilities" }, we = /* @__PURE__ */ c({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(e) {
    return (t, i) => (s(), n("ul", De, [
      (s(!0), n(N, null, U(e.possibilities, (o) => (s(), n("li", { key: o }, a(o), 1))), 128))
    ]));
  }
}), We = /* @__PURE__ */ c({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(e) {
    const t = e, i = l(() => `${t.design}${t.wiki.getName()}`), o = l(() => `interface ${t.wiki.getName()}Props`), r = l(() => `type ${t.wiki.getName()}Emits`), $ = l(() => `interface ${t.wiki.getName()}Expose`), p = l(() => `interface ${t.wiki.getName()}Slots`), y = l(() => t.wiki.getDescription()), _ = l(() => t.wiki.getPossibilities()), f = l(() => t.wiki.getWikiObject()), b = l(() => t.wiki.getFilteredValues());
    return C("name", i), C("component", t.component), C("values", b), (x, Pe) => (s(), v(j, {
      title: i.value,
      description: y.value,
      class: "dxt-test-wiki"
    }, {
      default: h(() => [
        k(we, { possibilities: _.value }, null, 8, ["possibilities"]),
        d("div", null, [
          k(S, null, B({ _: 2 }, [
            "render" in x.$slots ? {
              name: "render",
              fn: h((T) => [
                u(x.$slots, "render", L(V(T)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        k(g, {
          type: r.value,
          label: "Emits"
        }, null, 8, ["type"]),
        k(g, {
          type: $.value,
          label: "Expose"
        }, null, 8, ["type"]),
        k(g, {
          type: p.value,
          label: "Slots"
        }, null, 8, ["type"]),
        k(g, {
          type: o.value,
          label: "Props"
        }, null, 8, ["type"]),
        (s(!0), n(N, null, U(f.value, (T, O) => (s(), v(q, {
          key: O,
          item: T
        }, B({ _: 2 }, [
          T.name in x.$slots ? {
            name: T.name,
            fn: h((W) => [
              u(x.$slots, T.name, F({ ref_for: !0 }, W))
            ]),
            key: "0"
          } : "render" in x.$slots ? {
            name: "render",
            fn: h((W) => [
              u(x.$slots, "render", F({ ref_for: !0 }, W))
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["item"]))), 128))
      ]),
      _: 3
    }, 8, ["title", "description"]));
  }
}), Ie = j, Se = Z, Ee = te, Fe = oe, ze = ue, Le = de, Ve = _e, je = I, qe = pe, Oe = We, Ge = w, He = S, Me = q, Ae = g;
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
