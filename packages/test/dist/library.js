import { defineComponent as r, openBlock as s, createElementBlock as n, createElementVNode as u, toDisplayString as a, createCommentVNode as _, renderSlot as d, createTextVNode as F, createVNode as p, computed as o, normalizeClass as P, createBlock as $, inject as U, unref as q, withCtx as b, resolveDynamicComponent as J, normalizeProps as V, guardReactiveProps as z, Fragment as D, renderList as L, createSlots as C, mergeProps as I, provide as E } from "vue";
import { ElementScreenshot as K, forEach as Q, encodeAttribute as X, replaceComponentName as R } from "@dxtmisha/functional-basic";
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
      t.description ? (s(), n("div", te, a(t.description), 1)) : _("", !0),
      d(e.$slots, "default")
    ]));
  }
}), se = { class: "dxt-test-button" }, O = /* @__PURE__ */ r({
  name: "DxtTestButton",
  __name: "DxtTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, i) => (s(), n("button", se, [
      F(a(t.label) + " ", 1),
      d(e.$slots, "default")
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
      t.description ? (s(), n("div", oe, a(t.description), 1)) : _("", !0),
      d(e.$slots, "default")
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
      p(O, {
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
      class: P([i.value, "ui-test-container"])
    }, [
      t.label ? (s(), n("div", re, a(t.label), 1)) : _("", !0),
      t.description ? (s(), n("div", ce, a(t.description), 1)) : _("", !0),
      u("div", ue, [
        d(l.$slots, "default")
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
    d(t.$slots, "default")
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
      class: P([i.value, "ui-test-item-full"])
    }, [
      t.label ? (s(), $(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(l.$slots, "default")
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
      class: P([i.value, "ui-test-item-squared"])
    }, [
      t.label ? (s(), $(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(l.$slots, "default")
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
}), he = { class: "dxt-test-wiki-code" }, B = /* @__PURE__ */ r({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, i) => (s(), n("code", he, [
      F(a(t.code) + " ", 1),
      d(e.$slots, "default")
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
    const e = t, i = U("name"), l = U("component"), c = U("values"), h = {
      item: "dxt-test-wiki-demo__item"
    }, k = o(() => ({
      ...c == null ? void 0 : c.value,
      ...e.args
    })), y = o(() => {
      const v = Q(k.value, (m, w) => m === !0 ? `&nbsp;&nbsp;${w}<br/>` : `&nbsp;&nbsp;${w}="${X(m)}"<br/>`);
      return `
&lt;${i.value}<br/>
${v.join("")}
/&gt;
  `.trim();
    });
    return (v, m) => q(l) ? (s(), n("div", Te, [
      p(B, null, {
        default: b(() => [
          u("div", { innerHTML: y.value }, null, 8, ge)
        ]),
        _: 1
      }),
      u("div", De, [
        d(v.$slots, "render", {
          args: k.value,
          classDemo: h
        }, () => [
          u("div", {
            class: P(h.item)
          }, [
            (s(), $(J(q(l)), V(z(k.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : _("", !0);
  }
}), ye = { class: "dxt-test-wiki-possibilities" }, G = /* @__PURE__ */ r({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(t) {
    return (e, i) => (s(), n("ul", ye, [
      (s(!0), n(D, null, L(t.possibilities, (l) => (s(), n("li", { key: l }, a(l), 1))), 128))
    ]));
  }
}), we = { class: "dxt-test-wiki-title" }, x = /* @__PURE__ */ r({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(t) {
    return (e, i) => (s(), n("h4", we, [
      F(a(t.label) + " ", 1),
      t.type ? (s(), $(B, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : _("", !0)
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
    const e = t, i = o(() => e.item.getName()), l = o(() => e.item.getDefaultValue()), c = o(() => e.item.getDescription()), h = o(() => e.item.getType()), k = o(() => e.item.getOptions()), y = o(() => e.item.isDemo()), v = o(() => e.item.getDemo());
    return (m, w) => (s(), n("div", We, [
      u("div", Ce, [
        u("span", Ne, a(i.value) + ":", 1),
        p(B, { code: h.value }, null, 8, ["code"])
      ]),
      u("div", Pe, a(c.value), 1),
      l.value !== void 0 ? (s(), n("div", Be, " default value: " + a(l.value), 1)) : _("", !0),
      u("div", Se, [
        y.value ? (s(), n(D, { key: 0 }, [
          k.value ? (s(!0), n(D, { key: 0 }, L(k.value, (f) => (s(), $(N, {
            key: f,
            args: { [i.value]: f }
          }, C({ _: 2 }, [
            "render" in m.$slots ? {
              name: "render",
              fn: b((W) => [
                d(m.$slots, "render", I({ ref_for: !0 }, W))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : v.value ? (s(), $(N, {
            key: 1,
            args: { [i.value]: v.value }
          }, C({ _: 2 }, [
            "render" in m.$slots ? {
              name: "render",
              fn: b((f) => [
                d(m.$slots, "render", V(z(f)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"])) : _("", !0)
        ], 64)) : _("", !0)
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
    const e = t, i = o(() => `${e.design}${e.wiki.getName()}`), l = o(() => `type ${e.wiki.getName()}Props`), c = o(() => `type ${e.wiki.getName()}Emits`), h = o(() => `interface ${e.wiki.getName()}Expose`), k = o(() => `interface ${e.wiki.getName()}Slots`), y = o(() => e.wiki.getDescription()), v = o(() => e.wiki.getPossibilities()), m = o(() => e.wiki.getWikiObject()), w = o(() => e.wiki.getFilteredValues()), f = o(
      () => R(
        e.wiki.getAiRender(),
        e.wiki.getName(),
        i.value
      )
    ), W = o(
      () => R(
        e.wiki.getAiDescription(),
        e.wiki.getName(),
        i.value
      )
    );
    return E("name", i), E("component", e.component), E("values", w), (T, Ve) => (s(), $(A, {
      title: i.value,
      description: y.value,
      class: "dxt-test-wiki"
    }, {
      default: b(() => [
        p(G, { possibilities: v.value }, null, 8, ["possibilities"]),
        u("div", null, [
          p(N, null, C({ _: 2 }, [
            "render" in T.$slots ? {
              name: "render",
              fn: b((g) => [
                d(T.$slots, "render", V(z(g)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        p(x, {
          type: c.value,
          label: "Emits"
        }, null, 8, ["type"]),
        p(x, {
          type: h.value,
          label: "Expose"
        }, null, 8, ["type"]),
        p(x, {
          type: k.value,
          label: "Slots"
        }, null, 8, ["type"]),
        p(x, {
          type: l.value,
          label: "Props"
        }, null, 8, ["type"]),
        u("div", Ue, [
          (s(!0), n(D, null, L(m.value, (g, M) => (s(), $(H, {
            key: M,
            item: g,
            class: "dxt-test-wiki__props__item"
          }, C({ _: 2 }, [
            g.name in T.$slots ? {
              name: g.name,
              fn: b((S) => [
                d(T.$slots, g.name, I({ ref_for: !0 }, S))
              ]),
              key: "0"
            } : "render" in T.$slots ? {
              name: "render",
              fn: b((S) => [
                d(T.$slots, "render", I({ ref_for: !0 }, S))
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["item"]))), 128))
        ]),
        f.value ? (s(), n(D, { key: 0 }, [
          p(x, { label: "Render" }),
          u("pre", Ee, a(f.value), 1)
        ], 64)) : _("", !0),
        W.value ? (s(), n(D, { key: 1 }, [
          p(x, { label: "Description" }),
          u("pre", Ie, a(W.value), 1)
        ], 64)) : _("", !0)
      ]),
      _: 3
    }, 8, ["title", "description"]));
  }
}), Re = A, Ae = O, Oe = le, Ge = ae, He = de, Me = ve, Je = $e, Ke = fe, Qe = j, Xe = be, Ye = Fe, Ze = B, et = N, tt = G, st = H, it = x;
export {
  Re as DxtTestBlock,
  Ae as DxtTestButton,
  Oe as DxtTestPage,
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
