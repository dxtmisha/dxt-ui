import { defineComponent as r, openBlock as s, createElementBlock as n, createElementVNode as u, toDisplayString as a, createCommentVNode as d, renderSlot as _, createVNode as m, computed as o, normalizeClass as B, createBlock as f, createTextVNode as R, inject as E, unref as q, withCtx as h, resolveDynamicComponent as J, normalizeProps as V, guardReactiveProps as z, Fragment as y, renderList as L, createSlots as C, mergeProps as F, provide as I } from "vue";
import { ElementScreenshot as K, forEach as Q, encodeAttribute as X } from "@dxtmisha/functional-basic";
import { writeClipboardData as Y } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
const Z = { class: "dxt-test-block" }, ee = { class: "dxt-test-block__title" }, te = {
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
    return (e, i) => (s(), n("div", Z, [
      u("h3", ee, a(t.title), 1),
      t.description ? (s(), n("div", te, a(t.description), 1)) : d("", !0),
      _(e.$slots, "default")
    ]));
  }
}), se = { class: "dxt-test-button" }, O = /* @__PURE__ */ r({
  name: "DxtTestButton",
  __name: "DxtTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, i) => (s(), n("button", se, a(t.label), 1));
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
      _(e.$slots, "default")
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
      m(O, {
        label: "Screenshot",
        onClick: i
      })
    ]));
  }
}), re = {
  key: 0,
  class: "ui-test-container__label"
}, ce = {
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
      class: B([i.value, "ui-test-container"])
    }, [
      t.label ? (s(), n("div", re, a(t.label), 1)) : d("", !0),
      t.description ? (s(), n("div", ce, a(t.description), 1)) : d("", !0),
      u("div", ue, [
        _(l.$slots, "default")
      ])
    ], 2));
  }
}), _e = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [l, c] of e)
    i[l] = c;
  return i;
}, pe = {}, me = { class: "ui-test-group" };
function ke(t, e) {
  return s(), n("div", me, [
    _(t.$slots, "default")
  ]);
}
const ve = /* @__PURE__ */ _e(pe, [["render", ke]]), j = /* @__PURE__ */ r({
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
      class: B([i.value, "ui-test-item-full"])
    }, [
      t.label ? (s(), f(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      _(l.$slots, "default")
    ], 2));
  }
}), fe = /* @__PURE__ */ r({
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
      class: B([i.value, "ui-test-item-squared"])
    }, [
      t.label ? (s(), f(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : d("", !0),
      _(l.$slots, "default")
    ], 2));
  }
}), xe = { class: "ui-test-title" }, be = /* @__PURE__ */ r({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", xe, a(t.title), 1));
  }
}), he = { class: "dxt-test-wiki-code" }, S = /* @__PURE__ */ r({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, i) => (s(), n("code", he, [
      R(a(t.code) + " ", 1),
      _(e.$slots, "default")
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
    const e = t, i = E("name"), l = E("component"), c = E("values"), T = {
      item: "dxt-test-wiki-demo__item"
    }, v = o(() => ({
      ...c == null ? void 0 : c.value,
      ...e.args
    })), w = o(() => {
      const $ = Q(v.value, (k, W) => k === !0 ? `&nbsp;&nbsp;${W}<br/>` : `&nbsp;&nbsp;${W}="${X(k)}"<br/>`);
      return `
&lt;${i.value}<br/>
${$.join("")}
/&gt;
  `.trim();
    });
    return ($, k) => q(l) ? (s(), n("div", Te, [
      m(S, null, {
        default: h(() => [
          u("div", { innerHTML: w.value }, null, 8, ge)
        ]),
        _: 1
      }),
      u("div", De, [
        _($.$slots, "render", {
          args: v.value,
          classDemo: T
        }, () => [
          u("div", {
            class: B(T.item)
          }, [
            (s(), f(J(q(l)), V(z(v.value)), null, 16))
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
      R(a(t.label) + " ", 1),
      t.type ? (s(), f(S, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : d("", !0)
    ]));
  }
}), We = { class: "dxt-test-wiki-prop-item" }, Pe = { class: "dxt-test-wiki-prop-item__tilte" }, Ce = { class: "dxt-test-wiki-prop-item__name" }, Ne = { class: "dxt-test-wiki-prop-item__description" }, Be = {
  key: 0,
  class: "dxt-test-wiki-prop-item__description"
}, Se = { class: "dxt-test-wiki-prop-item__demo" }, H = /* @__PURE__ */ r({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, i = o(() => e.item.getName()), l = o(() => e.item.getDefaultValue()), c = o(() => e.item.getDescription()), T = o(() => e.item.getType()), v = o(() => e.item.getOptions()), w = o(() => e.item.isDemo()), $ = o(() => e.item.getDemo());
    return (k, W) => (s(), n("div", We, [
      u("div", Pe, [
        u("span", Ce, a(i.value) + ":", 1),
        m(S, { code: T.value }, null, 8, ["code"])
      ]),
      u("div", Ne, a(c.value), 1),
      l.value !== void 0 ? (s(), n("div", Be, " default value: " + a(l.value), 1)) : d("", !0),
      u("div", Se, [
        w.value ? (s(), n(y, { key: 0 }, [
          v.value ? (s(!0), n(y, { key: 0 }, L(v.value, (x) => (s(), f(N, {
            key: x,
            args: { [i.value]: x }
          }, C({ _: 2 }, [
            "render" in k.$slots ? {
              name: "render",
              fn: h((P) => [
                _(k.$slots, "render", F({ ref_for: !0 }, P))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : $.value ? (s(), f(N, {
            key: 1,
            args: { [i.value]: $.value }
          }, C({ _: 2 }, [
            "render" in k.$slots ? {
              name: "render",
              fn: h((x) => [
                _(k.$slots, "render", V(z(x)))
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
    const e = t, i = o(() => `${e.design}${e.wiki.getName()}`), l = o(() => `type ${e.wiki.getName()}Props`), c = o(() => `type ${e.wiki.getName()}Emits`), T = o(() => `interface ${e.wiki.getName()}Expose`), v = o(() => `interface ${e.wiki.getName()}Slots`), w = o(() => e.wiki.getDescription()), $ = o(() => e.wiki.getPossibilities()), k = o(() => e.wiki.getWikiObject()), W = o(() => e.wiki.getFilteredValues()), x = o(
      () => {
        var p, g;
        return (g = (p = e.wiki.getAiRender()) == null ? void 0 : p.replace(`<${e.wiki.getName()}`, `<${i.value}`)) == null ? void 0 : g.trim();
      }
    ), P = o(
      () => {
        var p, g;
        return (g = (p = e.wiki.getAiDescription()) == null ? void 0 : p.replace(`<${e.wiki.getName()}`, `<${i.value}`)) == null ? void 0 : g.trim();
      }
    );
    return I("name", i), I("component", e.component), I("values", W), (p, g) => (s(), f(A, {
      title: i.value,
      description: w.value,
      class: "dxt-test-wiki"
    }, {
      default: h(() => [
        m(G, { possibilities: $.value }, null, 8, ["possibilities"]),
        u("div", null, [
          m(N, null, C({ _: 2 }, [
            "render" in p.$slots ? {
              name: "render",
              fn: h((D) => [
                _(p.$slots, "render", V(z(D)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        m(b, {
          type: c.value,
          label: "Emits"
        }, null, 8, ["type"]),
        m(b, {
          type: T.value,
          label: "Expose"
        }, null, 8, ["type"]),
        m(b, {
          type: v.value,
          label: "Slots"
        }, null, 8, ["type"]),
        m(b, {
          type: l.value,
          label: "Props"
        }, null, 8, ["type"]),
        u("div", Ue, [
          (s(!0), n(y, null, L(k.value, (D, M) => (s(), f(H, {
            key: M,
            item: D,
            class: "dxt-test-wiki__props__item"
          }, C({ _: 2 }, [
            D.name in p.$slots ? {
              name: D.name,
              fn: h((U) => [
                _(p.$slots, D.name, F({ ref_for: !0 }, U))
              ]),
              key: "0"
            } : "render" in p.$slots ? {
              name: "render",
              fn: h((U) => [
                _(p.$slots, "render", F({ ref_for: !0 }, U))
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["item"]))), 128))
        ]),
        x.value ? (s(), n(y, { key: 0 }, [
          m(b, { label: "Render" }),
          u("pre", Ee, a(x.value), 1)
        ], 64)) : d("", !0),
        P.value ? (s(), n(y, { key: 1 }, [
          m(b, { label: "Description" }),
          u("pre", Ie, a(P.value), 1)
        ], 64)) : d("", !0)
      ]),
      _: 3
    }, 8, ["title", "description"]));
  }
}), qe = A, Re = O, Ae = le, Oe = ae, Ge = de, He = ve, Me = $e, Je = fe, Ke = j, Qe = be, Xe = Fe, Ye = S, Ze = N, et = G, tt = H, st = b;
export {
  qe as DxtTestBlock,
  Re as DxtTestButton,
  Ae as DxtTestPage,
  Oe as DxtTestScreenshot,
  Xe as DxtTestWiki,
  Ye as DxtTestWikiCode,
  Ze as DxtTestWikiDemo,
  et as DxtTestWikiPossibilities,
  tt as DxtTestWikiPropItem,
  st as DxtTestWikiTitle,
  Ge as UiTestContainer,
  He as UiTestGroup,
  Me as UiTestItemFull,
  Je as UiTestItemSquared,
  Ke as UiTestLabel,
  Qe as UiTestTitle
};
