import { defineComponent as r, openBlock as s, createElementBlock as n, createElementVNode as u, normalizeClass as C, toDisplayString as a, createCommentVNode as m, renderSlot as d, createTextVNode as F, createVNode as _, computed as o, createBlock as h, inject as U, unref as L, withCtx as T, resolveDynamicComponent as J, normalizeProps as V, guardReactiveProps as z, Fragment as y, renderList as O, createSlots as N, mergeProps as I, provide as E } from "vue";
import { ElementScreenshot as K, forEach as Q, encodeAttribute as X, replaceComponentName as q } from "@dxtmisha/functional-basic";
import { writeClipboardData as Y } from "@dxtmisha/functional";
import "@dxtmisha/wiki";
const Z = ["id"], ee = {
  key: 0,
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
    return (l, c) => (s(), n("div", {
      id: t.anchor,
      class: "dxt-test-block"
    }, [
      u("h3", {
        class: C(["dxt-test-block__title", { "dxt-test-block__title--link": t.anchor }]),
        onClick: i
      }, a(t.title), 3),
      t.description ? (s(), n("div", ee, a(t.description), 1)) : m("", !0),
      d(l.$slots, "default")
    ], 8, Z));
  }
}), te = { class: "dxt-test-button" }, A = /* @__PURE__ */ r({
  name: "DxtTestButton",
  __name: "DxtTestButton",
  props: {
    label: {}
  },
  setup(t) {
    return (e, i) => (s(), n("button", te, [
      F(a(t.label) + " ", 1),
      d(e.$slots, "default")
    ]));
  }
}), se = { class: "dxt-test-page" }, ie = { class: "dxt-test-page__title" }, ne = {
  key: 0,
  class: "dxt-test-page__description"
}, oe = /* @__PURE__ */ r({
  name: "DxtTestPage",
  __name: "DxtTestPage",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    return (e, i) => (s(), n("main", se, [
      u("h1", ie, a(t.title), 1),
      t.description ? (s(), n("div", ne, a(t.description), 1)) : m("", !0),
      d(e.$slots, "default")
    ]));
  }
}), le = /* @__PURE__ */ r({
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
}), ae = {
  key: 0,
  class: "ui-test-container__label"
}, ce = {
  key: 1,
  class: "ui-test-container__description"
}, re = { class: "ui-test-container__context" }, ue = /* @__PURE__ */ r({
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
      t.label ? (s(), n("div", ae, a(t.label), 1)) : m("", !0),
      t.description ? (s(), n("div", ce, a(t.description), 1)) : m("", !0),
      u("div", re, [
        d(l.$slots, "default")
      ])
    ], 2));
  }
}), de = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [l, c] of e)
    i[l] = c;
  return i;
}, me = {}, _e = { class: "ui-test-group" };
function pe(t, e) {
  return s(), n("div", _e, [
    d(t.$slots, "default")
  ]);
}
const ke = /* @__PURE__ */ de(me, [["render", pe]]), j = /* @__PURE__ */ r({
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
}), ve = /* @__PURE__ */ r({
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
      t.label ? (s(), h(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : m("", !0),
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
      class: C([i.value, "ui-test-item-squared"])
    }, [
      t.label ? (s(), h(j, {
        key: 0,
        label: t.label
      }, null, 8, ["label"])) : m("", !0),
      d(l.$slots, "default")
    ], 2));
  }
}), $e = { class: "ui-test-title" }, he = /* @__PURE__ */ r({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(t) {
    return (e, i) => (s(), n("div", $e, a(t.title), 1));
  }
}), xe = { class: "dxt-test-wiki-code" }, S = /* @__PURE__ */ r({
  name: "DxtTestWikiCode",
  __name: "DxtTestWikiCode",
  props: {
    code: {}
  },
  setup(t) {
    return (e, i) => (s(), n("code", xe, [
      F(a(t.code) + " ", 1),
      d(e.$slots, "default")
    ]));
  }
}), be = {
  key: 0,
  class: "dxt-test-wiki-demo"
}, Te = ["innerHTML"], ge = { class: "dxt-test-wiki-demo__content" }, P = /* @__PURE__ */ r({
  name: "DxtTestWikiDemo",
  __name: "DxtTestWikiDemo",
  props: {
    args: {}
  },
  setup(t) {
    const e = t, i = U("name"), l = U("component"), c = U("values"), g = {
      item: "dxt-test-wiki-demo__item"
    }, v = o(() => ({
      ...c == null ? void 0 : c.value,
      ...e.args
    })), w = o(() => {
      const f = Q(v.value, (p, k) => {
        if (p === !0)
          return `&nbsp;&nbsp;${k}<br/>`;
        const W = typeof p == "object" ? JSON.stringify(p) : String(p);
        return `&nbsp;&nbsp;${k}="${X(W)}"<br/>`;
      });
      return `
&lt;${i.value}<br/>
${f.join("")}
/&gt;
  `.trim();
    });
    return (f, p) => L(l) ? (s(), n("div", be, [
      _(S, null, {
        default: T(() => [
          u("div", { innerHTML: w.value }, null, 8, Te)
        ]),
        _: 1
      }),
      u("div", ge, [
        d(f.$slots, "render", {
          args: v.value,
          classDemo: g
        }, () => [
          u("div", {
            class: C(g.item)
          }, [
            (s(), h(J(L(l)), V(z(v.value)), null, 16))
          ], 2)
        ])
      ])
    ])) : m("", !0);
  }
}), De = { class: "dxt-test-wiki-possibilities" }, G = /* @__PURE__ */ r({
  name: "DxtTestWikiPossibilities",
  __name: "DxtTestWikiPossibilities",
  props: {
    possibilities: {}
  },
  setup(t) {
    return (e, i) => (s(), n("ul", De, [
      (s(!0), n(y, null, O(t.possibilities, (l) => (s(), n("li", { key: l }, a(l), 1))), 128))
    ]));
  }
}), ye = { class: "dxt-test-wiki-title" }, b = /* @__PURE__ */ r({
  name: "DxtTestWikiTitle",
  __name: "DxtTestWikiTitle",
  props: {
    label: {},
    type: {}
  },
  setup(t) {
    return (e, i) => (s(), n("h4", ye, [
      F(a(t.label) + " ", 1),
      t.type ? (s(), h(S, {
        key: 0,
        code: t.type
      }, null, 8, ["code"])) : m("", !0)
    ]));
  }
}), we = { class: "dxt-test-wiki-prop-item" }, We = { class: "dxt-test-wiki-prop-item__tilte" }, Ce = { class: "dxt-test-wiki-prop-item__name" }, Ne = { class: "dxt-test-wiki-prop-item__description" }, Pe = {
  key: 0,
  class: "dxt-test-wiki-prop-item__description"
}, Se = { class: "dxt-test-wiki-prop-item__demo" }, H = /* @__PURE__ */ r({
  name: "DxtTestWikiPropItem",
  __name: "DxtTestWikiPropItem",
  props: {
    item: {}
  },
  setup(t) {
    const e = t, i = o(() => e.item.getName()), l = o(() => e.item.getDefaultValue()), c = o(() => e.item.getDescription()), g = o(() => e.item.getType()), v = o(() => e.item.getOptions()), w = o(() => e.item.isDemo()), f = o(() => e.item.getDemo()), p = o(() => e.item.getDemoOptions());
    return (k, W) => (s(), n("div", we, [
      u("div", We, [
        u("span", Ce, a(i.value) + ":", 1),
        _(S, { code: g.value }, null, 8, ["code"])
      ]),
      u("div", Ne, a(c.value), 1),
      l.value !== void 0 ? (s(), n("div", Pe, " default value: " + a(l.value), 1)) : m("", !0),
      u("div", Se, [
        w.value ? (s(), n(y, { key: 0 }, [
          v.value ? (s(!0), n(y, { key: 0 }, O(v.value, (x) => (s(), h(P, {
            key: x,
            args: { [i.value]: x, ...p.value }
          }, N({ _: 2 }, [
            "render" in k.$slots ? {
              name: "render",
              fn: T(($) => [
                d(k.$slots, "render", I({ ref_for: !0 }, $))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"]))), 128)) : f.value ? (s(), h(P, {
            key: 1,
            args: { [i.value]: f.value, ...p.value }
          }, N({ _: 2 }, [
            "render" in k.$slots ? {
              name: "render",
              fn: T((x) => [
                d(k.$slots, "render", V(z(x)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["args"])) : m("", !0)
        ], 64)) : m("", !0)
      ])
    ]));
  }
}), Be = { class: "dxt-test-wiki__props" }, Ue = { class: "dxt-test-wiki__pre" }, Ee = { class: "dxt-test-wiki__pre" }, Ie = /* @__PURE__ */ r({
  name: "DxtTestWiki",
  __name: "DxtTestWiki",
  props: {
    design: {},
    wiki: {},
    component: {}
  },
  setup(t) {
    const e = t, i = o(() => `${e.design}${e.wiki.getName()}`), l = o(() => `type ${e.wiki.getName()}Props`), c = o(() => `type ${e.wiki.getName()}Emits`), g = o(() => `interface ${e.wiki.getName()}Expose`), v = o(() => `interface ${e.wiki.getName()}Slots`), w = o(() => e.wiki.getDescription()), f = o(() => e.wiki.getPossibilities()), p = o(() => e.wiki.getWikiObject()), k = o(() => e.wiki.getFilteredValues()), W = o(
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
    return E("name", i), E("component", e.component), E("values", k), ($, Fe) => (s(), h(R, {
      title: i.value,
      description: w.value,
      anchor: i.value,
      class: "dxt-test-wiki"
    }, {
      default: T(() => [
        _(G, { possibilities: f.value }, null, 8, ["possibilities"]),
        u("div", null, [
          _(P, null, N({ _: 2 }, [
            "render" in $.$slots ? {
              name: "render",
              fn: T((D) => [
                d($.$slots, "render", V(z(D)))
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
          type: v.value,
          label: "Slots"
        }, null, 8, ["type"]),
        _(b, {
          type: l.value,
          label: "Props"
        }, null, 8, ["type"]),
        u("div", Be, [
          (s(!0), n(y, null, O(p.value, (D, M) => (s(), h(H, {
            key: M,
            item: D,
            class: "dxt-test-wiki__props__item"
          }, N({ _: 2 }, [
            D.name in $.$slots ? {
              name: D.name,
              fn: T((B) => [
                d($.$slots, D.name, I({ ref_for: !0 }, B))
              ]),
              key: "0"
            } : "render" in $.$slots ? {
              name: "render",
              fn: T((B) => [
                d($.$slots, "render", I({ ref_for: !0 }, B))
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["item"]))), 128))
        ]),
        W.value ? (s(), n(y, { key: 0 }, [
          _(b, { label: "Render" }),
          u("pre", Ue, a(W.value), 1)
        ], 64)) : m("", !0),
        x.value ? (s(), n(y, { key: 1 }, [
          _(b, { label: "Description" }),
          u("pre", Ee, a(x.value), 1)
        ], 64)) : m("", !0)
      ]),
      _: 3
    }, 8, ["title", "description", "anchor"]));
  }
}), Le = R, qe = A, Re = oe, Ae = le, Ge = ue, He = ke, Me = ve, Je = fe, Ke = j, Qe = he, Xe = Ie, Ye = S, Ze = P, et = G, tt = H, st = b;
export {
  Le as DxtTestBlock,
  qe as DxtTestButton,
  Re as DxtTestPage,
  Ae as DxtTestScreenshot,
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
