import { defineComponent as c, openBlock as s, createElementBlock as n, createElementVNode as u, normalizeClass as C, toDisplayString as a, createCommentVNode as _, renderSlot as d, createTextVNode as F, createVNode as m, computed as l, createBlock as x, inject as E, unref as O, withCtx as g, resolveDynamicComponent as J, normalizeProps as V, guardReactiveProps as z, Fragment as D, renderList as S, createSlots as N, mergeProps as A, provide as I } from "vue";
import { ElementScreenshot as K, forEach as Q, encodeAttribute as X, replaceComponentName as j } from "@dxtmisha/functional-basic";
import { writeClipboardData as Y, forEach as Z } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
const ee = ["id"], te = {
  key: 0,
  class: "dxt-test-block__description"
}, q = /* @__PURE__ */ c({
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
    return (o, r) => (s(), n("div", {
      id: t.anchor,
      class: "dxt-test-block"
    }, [
      u("h3", {
        class: C(["dxt-test-block__title", { "dxt-test-block__title--link": t.anchor }]),
        onClick: i
      }, a(t.title), 3),
      t.description ? (s(), n("div", te, a(t.description), 1)) : _("", !0),
      d(o.$slots, "default")
    ], 8, ee));
  }
}), se = { class: "dxt-test-button" }, R = /* @__PURE__ */ c({
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
}, le = /* @__PURE__ */ c({
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
}), ae = /* @__PURE__ */ c({
  name: "DxtTestScreenshot",
  __name: "DxtTestScreenshot",
  props: {
    element: {}
  },
  setup(t) {
    const e = t, i = () => {
      new K(e.element).download();
    };
    return (o, r) => (s(), n("div", null, [
      m(R, {
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
}, ue = { class: "ui-test-container__context" }, de = /* @__PURE__ */ c({
  name: "C2TestContainer",
  __name: "UiTestContainer",
  props: {
    label: {},
    description: {},
    isDark: { type: Boolean }
  },
  setup(t) {
    const e = t, i = l(() => ({
      "ui-test-container--dark": e.isDark
    }));
    return (o, r) => (s(), n("div", {
      class: C([i.value, "ui-test-container"])
    }, [
      t.label ? (s(), n("div", re, a(t.label), 1)) : _("", !0),
      t.description ? (s(), n("div", ce, a(t.description), 1)) : _("", !0),
      u("div", ue, [
        d(o.$slots, "default")
      ])
    ], 2));
  }
}), _e = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [o, r] of e)
    i[o] = r;
  return i;
}, me = {}, pe = { class: "ui-test-group" };
function ke(t, e) {
  return s(), n("div", pe, [
    d(t.$slots, "default")
  ]);
}
const ve = /* @__PURE__ */ _e(me, [["render", ke]]), L = /* @__PURE__ */ c({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(t) {
    const e = t, i = () => Y(String(e.label)).then();
    return (o, r) => (s(), n("div", {
      class: "ui-test-label",
      onClick: i
    }, a(t.label), 1));
  }
}), he = /* @__PURE__ */ c({
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
    const e = t, i = l(() => ({
      "ui-test-item-full--flex": e.isFlex,
      "ui-test-item-full--padding": e.isPadding,
      "ui-test-item-full--background": e.background,
      "ui-test-item-full--rounded": e.rounded,
      "ui-test-item-full--inverse": e.inverse
    }));
    return (o, r) => (s(), n("div", {
      class: C([i.value, "ui-test-item-full"])
    }, [
      t.label ? (s(), x(L, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(o.$slots, "default")
    ], 2));
  }
}), fe = /* @__PURE__ */ c({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(t) {
    const e = t, i = l(() => ({
      [`ui-test-item-squared--size--${e.size}`]: e.size
    }));
    return (o, r) => (s(), n("div", {
      class: C([i.value, "ui-test-item-squared"])
    }, [
      t.label ? (s(), x(L, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : _("", !0),
      d(o.$slots, "default")
    ], 2));
  }
}), $e = { class: "ui-test-title" }, xe = /* @__PURE__ */ c({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", $e, a(t.title), 1));
  }
}), be = { class: "dxt-test-wiki-code" }, B = /* @__PURE__ */ c({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, i) => (s(), n("code", be, [
      F(a(t.code) + " ", 1),
      d(e.$slots, "default")
    ]));
  }
}), Te = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, ge = ["innerHTML"], De = { class: "dxt-test-wiki-demo__content" }, P = /* @__PURE__ */ c({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(t) {
    const e = t, i = E("name"), o = E("component"), r = E("values"), p = {
      item: "dxt-test-wiki-demo__item"
    }, h = l(() => ({
      ...r == null ? void 0 : r.value,
      ...e.args
    })), w = l(() => {
      const f = Q(h.value, (k, v) => {
        if (k === !0)
          return `&nbsp;&nbsp;${v}<br/>`;
        const W = typeof k == "object" ? JSON.stringify(k) : String(k);
        return `&nbsp;&nbsp;${v}="${X(W)}"<br/>`;
      });
      return `
&lt;${i.value}<br/>
${f.join("")}
/&gt;
  `.trim();
    });
    return (f, k) => O(o) ? (s(), n("div", Te, [
      m(B, null, {
        default: g(() => [
          u("div", { innerHTML: w.value }, null, 8, ge)
        ]),
        _: 1
      }),
      u("div", De, [
        d(f.$slots, "render", {
          args: h.value,
          classDemo: p
        }, () => [
          u("div", {
            class: C(p.item)
          }, [
            (s(), x(J(O(o)), V(z(h.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : _("", !0);
  }
}), ye = { class: "dxt-test-wiki-possibilities" }, G = /* @__PURE__ */ c({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(t) {
    return (e, i) => (s(), n("ul", ye, [
      (s(!0), n(D, null, S(t.possibilities, (o) => (s(), n("li", { key: o }, a(o), 1))), 128))
    ]));
  }
}), we = { class: "dxt-test-wiki-title" }, T = /* @__PURE__ */ c({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(t) {
    return (e, i) => (s(), n("h4", we, [
      F(a(t.label) + " ", 1),
      t.type ? (s(), x(B, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : _("", !0)
    ]));
  }
}), We = { class: "dxt-test-wiki-prop-item" }, Ce = { class: "dxt-test-wiki-prop-item__tilte" }, Ne = { class: "dxt-test-wiki-prop-item__name" }, Pe = { class: "dxt-test-wiki-prop-item__description" }, Se = {
  key: 0,
  class: "dxt-test-wiki-prop-item__description"
}, Be = { class: "dxt-test-wiki-prop-item__demo" }, H = /* @__PURE__ */ c({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, i = l(() => e.item.getName()), o = l(() => e.item.getDefaultValue()), r = l(() => e.item.getDescription()), p = l(() => e.item.getType()), h = l(() => e.item.getOptions()), w = l(() => e.item.isDemo()), f = l(() => e.item.getDemo()), k = l(() => e.item.getDemoOptions());
    return (v, W) => (s(), n("div", We, [
      u("div", Ce, [
        u("span", Ne, a(i.value) + ":", 1),
        m(B, { code: p.value }, null, 8, ["code"])
      ]),
      u("div", Pe, a(r.value), 1),
      o.value !== void 0 ? (s(), n("div", Se, " default value: " + a(o.value), 1)) : _("", !0),
      u("div", Be, [
        w.value ? (s(), n(D, { key: 0 }, [
          h.value ? (s(!0), n(D, { key: 0 }, S(h.value, (b) => (s(), x(P, {
            key: b,
            args: { [i.value]: b, ...k.value }
          }, N({ _: 2 }, [
            "render" in v.$slots ? {
              name: "render",
              fn: g(($) => [
                d(v.$slots, "render", A({ ref_for: !0 }, $))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : f.value ? (s(), x(P, {
            key: 1,
            args: { [i.value]: f.value, ...k.value }
          }, N({ _: 2 }, [
            "render" in v.$slots ? {
              name: "render",
              fn: g((b) => [
                d(v.$slots, "render", V(z(b)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"])) : _("", !0)
        ], 64)) : _("", !0)
      ])
    ]));
  }
}), Ue = { class: "dxt-test-wiki__props" }, Ee = { class: "dxt-test-wiki__pre" }, Ie = { class: "dxt-test-wiki__pre" }, Ae = /* @__PURE__ */ c({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(t) {
    const e = t, i = l(() => `${e.design}${e.wiki.getName()}`), o = l(() => `type ${e.wiki.getName()}Props`), r = l(() => `type ${e.wiki.getName()}Emits`), p = l(() => `interface ${e.wiki.getName()}Expose`), h = l(() => `interface ${e.wiki.getName()}Slots`), w = l(() => e.wiki.getDescription()), f = l(() => e.wiki.getPossibilities()), k = l(() => e.wiki.getWikiObject()), v = l(() => e.wiki.getFilteredValues()), W = l(
      () => j(
        e.wiki.getAiRender(),
        e.wiki.getName(),
        i.value
      )
    ), b = l(
      () => j(
        e.wiki.getAiDescription(),
        e.wiki.getName(),
        i.value
      )
    );
    return I("name", i), I("component", e.component), I("values", v), ($, Le) => (s(), x(q, {
      title: i.value,
      description: w.value,
      anchor: i.value,
      class: "dxt-test-wiki"
    }, {
      default: g(() => [
        m(G, { possibilities: f.value }, null, 8, ["possibilities"]),
        u("div", null, [
          m(P, null, N({ _: 2 }, [
            "render" in $.$slots ? {
              name: "render",
              fn: g((y) => [
                d($.$slots, "render", V(z(y)))
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        m(T, {
          type: r.value,
          label: "Emits"
        }, null, 8, ["type"]),
        m(T, {
          type: p.value,
          label: "Expose"
        }, null, 8, ["type"]),
        m(T, {
          type: h.value,
          label: "Slots"
        }, null, 8, ["type"]),
        m(T, {
          type: o.value,
          label: "Props"
        }, null, 8, ["type"]),
        u("div", Ue, [
          (s(!0), n(D, null, S(k.value, (y, M) => (s(), x(H, {
            key: M,
            item: y,
            class: "dxt-test-wiki__props__item"
          }, N({ _: 2 }, [
            y.name in $.$slots ? {
              name: y.name,
              fn: g((U) => [
                d($.$slots, y.name, A({ ref_for: !0 }, U))
              ]),
              key: "0"
            } : "render" in $.$slots ? {
              name: "render",
              fn: g((U) => [
                d($.$slots, "render", A({ ref_for: !0 }, U))
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["item"]))), 128))
        ]),
        W.value ? (s(), n(D, { key: 0 }, [
          m(T, { label: "Render" }),
          u("pre", Ee, a(W.value), 1)
        ], 64)) : _("", !0),
        b.value ? (s(), n(D, { key: 1 }, [
          m(T, { label: "Description" }),
          u("pre", Ie, a(b.value), 1)
        ], 64)) : _("", !0)
      ]),
      _: 3
    }, 8, ["title", "description", "anchor"]));
  }
}), Fe = { class: "dxt-test-wiki-anchor" }, Ve = ["href"], ze = /* @__PURE__ */ c({
  name: "DxtTestWikiAnchor",
  __name: "DxtTestWikiAnchor",
  props: {
    list: {}
  },
  setup(t) {
    const e = t, i = l(() => Z(
      e.list,
      (o) => o.name.replace(/AiWiki$/, "")
    ).sort());
    return (o, r) => (s(), n("div", Fe, [
      (s(!0), n(D, null, S(i.value, (p) => (s(), n("div", {
        key: p,
        class: "dxt-test-wiki-anchor__item"
      }, [
        u("a", {
          href: `#${p}`
        }, a(p), 9, Ve)
      ]))), 128))
    ]));
  }
}), Ge = q, He = R, Me = le, Je = ae, Ke = de, Qe = ve, Xe = he, Ye = fe, Ze = L, et = xe, tt = Ae, st = ze, it = B, nt = P, ot = G, lt = H, at = T;
export {
  Ge as DxtTestBlock,
  He as DxtTestButton,
  Me as DxtTestPage,
  Je as DxtTestScreenshot,
  tt as DxtTestWiki,
  st as DxtTestWikiAnchor,
  it as DxtTestWikiCode,
  nt as DxtTestWikiDemo,
  ot as DxtTestWikiPossibilities,
  lt as DxtTestWikiPropItem,
  at as DxtTestWikiTitle,
  Ke as UiTestContainer,
  Qe as UiTestGroup,
  Xe as UiTestItemFull,
  Ye as UiTestItemSquared,
  Ze as UiTestLabel,
  et as UiTestTitle
};
