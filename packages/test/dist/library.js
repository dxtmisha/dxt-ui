import { defineComponent as r, openBlock as s, createElementBlock as n, createCommentVNode as d, createElementVNode as u, normalizeClass as W, toDisplayString as a, renderSlot as m, createTextVNode as F, createVNode as _, computed as o, createBlock as f, inject as U, unref as j, withCtx as T, resolveDynamicComponent as J, normalizeProps as V, guardReactiveProps as z, Fragment as y, renderList as L, createSlots as C, mergeProps as I, provide as E } from "vue";
import { ElementScreenshot as K, forEach as Q, encodeAttribute as X, replaceComponentName as q } from "@dxtmisha/functional-basic";
import { writeClipboardData as Y } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
const Z = { class: "dxt-test-block" }, ee = ["id"], te = {
  key: 1,
  class: "dxt-test-block__description"
}, R = /* @__PURE__ */ r({
  name: "DxtTestBlock",
  __name: "DxtTestBlock",
  props: {
    title: {},
    description: {},
    anchor: {}
  },
  setup(t) {
    const e = t, i = () => {
      e.anchor && (location.hash = e.anchor);
    };
    return (l, c) => (s(), n("div", Z, [
      t.anchor ? (s(), n("a", {
        key: 0,
        id: t.anchor
      }, null, 8, ee)) : d("", !0),
      u("h3", {
        class: W(["dxt-test-block__title", { "dxt-test-block__title--link": t.anchor }]),
        onClick: i
      }, a(t.title), 3),
      t.description ? (s(), n("div", te, a(t.description), 1)) : d("", !0),
      m(l.$slots, "default")
    ]));
  }
}), se = { class: "dxt-test-button" }, A = /* @__PURE__ */ r({
  name: "DxtTestButton",
  __name: "DxtTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, i) => (s(), n("button", se, [
      F(a(t.label) + " ", 1),
      m(e.$slots, "default")
    ]));
  }
}), ie = { class: "dxt-test-page" }, ne = { class: "dxt-test-page__title" }, oe = {
  key: 0,
  class: "dxt-test-page__description"
}, le = /* @__PURE__ */ r({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, i) => (s(), n("main", ie, [
      u("h1", ne, a(t.title), 1),
      t.description ? (s(), n("div", oe, a(t.description), 1)) : d("", !0),
      m(e.$slots, "default")
    ]));
  }
}), ae = /* @__PURE__ */ r({
  name: "DxtTestScreenshot",
  __name: "DxtTestScreenshot",
  props: {
    element: {}
  },
  setup(t) {
    const e = t, i = () => {
      new K(e.element).download();
    };
    return (l, c) => (s(), n("div", null, [
      _(A, {
        label: "Screenshot",
        onClick: i
      })
    ]));
  }
}), ce = {
  key: 0,
  class: "ui-test-container__label"
}, re = {
  key: 1,
  class: "ui-test-container__description"
}, ue = { class: "ui-test-container__context" }, de = /* @__PURE__ */ r({
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
      class: W([i.value, "ui-test-container"])
    }, [
      t.label ? (s(), n("div", ce, a(t.label), 1)) : d("", !0),
      t.description ? (s(), n("div", re, a(t.description), 1)) : d("", !0),
      u("div", ue, [
        m(l.$slots, "default")
      ])
    ], 2));
  }
}), me = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [l, c] of e)
    i[l] = c;
  return i;
}, _e = {}, pe = { class: "ui-test-group" };
function ke(t, e) {
  return s(), n("div", pe, [
    m(t.$slots, "default")
  ]);
}
const ve = /* @__PURE__ */ me(_e, [["render", ke]]), O = /* @__PURE__ */ r({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(t) {
    const e = t, i = () => Y(String(e.label)).then();
    return (l, c) => (s(), n("div", {
      class: "ui-test-label",
      onClick: i
    }, a(t.label), 1));
  }
}), $e = /* @__PURE__ */ r({
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
      class: W([i.value, "ui-test-item-full"])
    }, [
      t.label ? (s(), f(O, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      m(l.$slots, "default")
    ], 2));
  }
}), he = /* @__PURE__ */ r({
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
      class: W([i.value, "ui-test-item-squared"])
    }, [
      t.label ? (s(), f(O, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      m(l.$slots, "default")
    ], 2));
  }
}), fe = { class: "ui-test-title" }, xe = /* @__PURE__ */ r({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", fe, a(t.title), 1));
  }
}), be = { class: "dxt-test-wiki-code" }, P = /* @__PURE__ */ r({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, i) => (s(), n("code", be, [
      F(a(t.code) + " ", 1),
      m(e.$slots, "default")
    ]));
  }
}), Te = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, ge = ["innerHTML"], De = { class: "dxt-test-wiki-demo__content" }, N = /* @__PURE__ */ r({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(t) {
    const e = t, i = U("name"), l = U("component"), c = U("values"), g = {
      item: "dxt-test-wiki-demo__item"
    }, k = o(() => ({
      ...c == null ? void 0 : c.value,
      ...e.args
    })), w = o(() => {
      const v = Q(k.value, ($, p) => $ === !0 ? `&nbsp;&nbsp;${p}<br/>` : `&nbsp;&nbsp;${p}="${X($)}"<br/>`);
      return `
&lt;${i.value}<br/>
${v.join("")}
/&gt;
  `.trim();
    });
    return (v, $) => j(l) ? (s(), n("div", Te, [
      _(P, null, {
        default: T(() => [
          u("div", { innerHTML: w.value }, null, 8, ge)
        ]),
        _: 1
      }),
      u("div", De, [
        m(v.$slots, "render", {
          args: k.value,
          classDemo: g
        }, () => [
          u("div", {
            class: W(g.item)
          }, [
            (s(), f(J(j(l)), V(z(k.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : d("", !0);
  }
}), ye = { class: "dxt-test-wiki-possibilities" }, G = /* @__PURE__ */ r({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(t) {
    return (e, i) => (s(), n("ul", ye, [
      (s(!0), n(y, null, L(t.possibilities, (l) => (s(), n("li", { key: l }, a(l), 1))), 128))
    ]));
  }
}), we = { class: "dxt-test-wiki-title" }, b = /* @__PURE__ */ r({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(t) {
    return (e, i) => (s(), n("h4", we, [
      F(a(t.label) + " ", 1),
      t.type ? (s(), f(P, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : d("", !0)
    ]));
  }
}), We = { class: "dxt-test-wiki-prop-item" }, Ce = { class: "dxt-test-wiki-prop-item__tilte" }, Ne = { class: "dxt-test-wiki-prop-item__name" }, Pe = { class: "dxt-test-wiki-prop-item__description" }, Be = {
  key: 0,
  class: "dxt-test-wiki-prop-item__description"
}, Se = { class: "dxt-test-wiki-prop-item__demo" }, H = /* @__PURE__ */ r({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, i = o(() => e.item.getName()), l = o(() => e.item.getDefaultValue()), c = o(() => e.item.getDescription()), g = o(() => e.item.getType()), k = o(() => e.item.getOptions()), w = o(() => e.item.isDemo()), v = o(() => e.item.getDemo()), $ = o(() => e.item.getDemoOptions());
    return (p, B) => (s(), n("div", We, [
      u("div", Ce, [
        u("span", Ne, a(i.value) + ":", 1),
        _(P, { code: g.value }, null, 8, ["code"])
      ]),
      u("div", Pe, a(c.value), 1),
      l.value !== void 0 ? (s(), n("div", Be, " default value: " + a(l.value), 1)) : d("", !0),
      u("div", Se, [
        w.value ? (s(), n(y, { key: 0 }, [
          k.value ? (s(!0), n(y, { key: 0 }, L(k.value, (x) => (s(), f(N, {
            key: x,
            args: { [i.value]: x, ...$.value }
          }, C({ _: 2 }, [
            "render" in p.$slots ? {
              name: "render",
              fn: T((h) => [
                m(p.$slots, "render", I({ ref_for: !0 }, h))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : v.value ? (s(), f(N, {
            key: 1,
            args: { [i.value]: v.value, ...$.value }
          }, C({ _: 2 }, [
            "render" in p.$slots ? {
              name: "render",
              fn: T((x) => [
                m(p.$slots, "render", V(z(x)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"])) : d("", !0)
        ], 64)) : d("", !0)
      ])
    ]));
  }
}), Ue = { class: "dxt-test-wiki__props" }, Ee = { class: "dxt-test-wiki__pre" }, Ie = { class: "dxt-test-wiki__pre" }, Fe = /* @__PURE__ */ r({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(t) {
    const e = t, i = o(() => `${e.design}${e.wiki.getName()}`), l = o(() => `type ${e.wiki.getName()}Props`), c = o(() => `type ${e.wiki.getName()}Emits`), g = o(() => `interface ${e.wiki.getName()}Expose`), k = o(() => `interface ${e.wiki.getName()}Slots`), w = o(() => e.wiki.getDescription()), v = o(() => e.wiki.getPossibilities()), $ = o(() => e.wiki.getWikiObject()), p = o(() => e.wiki.getFilteredValues()), B = o(
      () => q(
        e.wiki.getAiRender(),
        e.wiki.getName(),
        i.value
      )
    ), x = o(
      () => q(
        e.wiki.getAiDescription(),
        e.wiki.getName(),
        i.value
      )
    );
    return E("name", i), E("component", e.component), E("values", p), (h, Ve) => (s(), f(R, {
      title: i.value,
      description: w.value,
      anchor: i.value,
      class: "dxt-test-wiki"
    }, {
      default: T(() => [
        _(G, { possibilities: v.value }, null, 8, ["possibilities"]),
        u("div", null, [
          _(N, null, C({ _: 2 }, [
            "render" in h.$slots ? {
              name: "render",
              fn: T((D) => [
                m(h.$slots, "render", V(z(D)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        _(b, {
          type: c.value,
          label: "Emits"
        }, null, 8, ["type"]),
        _(b, {
          type: g.value,
          label: "Expose"
        }, null, 8, ["type"]),
        _(b, {
          type: k.value,
          label: "Slots"
        }, null, 8, ["type"]),
        _(b, {
          type: l.value,
          label: "Props"
        }, null, 8, ["type"]),
        u("div", Ue, [
          (s(!0), n(y, null, L($.value, (D, M) => (s(), f(H, {
            key: M,
            item: D,
            class: "dxt-test-wiki__props__item"
          }, C({ _: 2 }, [
            D.name in h.$slots ? {
              name: D.name,
              fn: T((S) => [
                m(h.$slots, D.name, I({ ref_for: !0 }, S))
              ]),
              key: "0"
            } : "render" in h.$slots ? {
              name: "render",
              fn: T((S) => [
                m(h.$slots, "render", I({ ref_for: !0 }, S))
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["item"]))), 128))
        ]),
        B.value ? (s(), n(y, { key: 0 }, [
          _(b, { label: "Render" }),
          u("pre", Ee, a(B.value), 1)
        ], 64)) : d("", !0),
        x.value ? (s(), n(y, { key: 1 }, [
          _(b, { label: "Description" }),
          u("pre", Ie, a(x.value), 1)
        ], 64)) : d("", !0)
      ]),
      _: 3
    }, 8, ["title", "description", "anchor"]));
  }
}), qe = R, Re = A, Ae = le, Ge = ae, He = de, Me = ve, Je = $e, Ke = he, Qe = O, Xe = xe, Ye = Fe, Ze = P, et = N, tt = G, st = H, it = b;
export {
  qe as DxtTestBlock,
  Re as DxtTestButton,
  Ae as DxtTestPage,
  Ge as DxtTestScreenshot,
  Ye as DxtTestWiki,
  Ze as DxtTestWikiCode,
  et as DxtTestWikiDemo,
  tt as DxtTestWikiPossibilities,
  st as DxtTestWikiPropItem,
  it as DxtTestWikiTitle,
  He as UiTestContainer,
  Me as UiTestGroup,
  Je as UiTestItemFull,
  Ke as UiTestItemSquared,
  Qe as UiTestLabel,
  Xe as UiTestTitle
};
