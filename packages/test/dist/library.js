import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createSlots as o, createTextVNode as s, createVNode as c, defineComponent as l, guardReactiveProps as u, inject as d, mergeProps as f, normalizeClass as p, normalizeProps as m, openBlock as h, provide as g, renderList as _, renderSlot as v, resolveDynamicComponent as y, toDisplayString as b, unref as x, withCtx as S } from "vue";
import { executeUseLocal as C, forEach as w, useSessionRef as T, writeClipboardData as E } from "@dxtmisha/functional";
import { encodeAttribute as D, forEach as O, replaceComponentName as k } from "@dxtmisha/functional-basic";
import "@dxtmisha/wiki";
//#region src/components/DxtTestBlock.vue?vue&type=script&setup=true&lang.ts
var A = ["id"], j = {
	key: 0,
	class: "dxt-test-block__description"
}, M = /* @__PURE__ */ l({
	name: "DxtTestBlock",
	__name: "DxtTestBlock",
	props: {
		title: {},
		description: {},
		anchor: {}
	},
	setup(e) {
		let t = e, n = () => {
			t.anchor && (location.hash = t.anchor);
		};
		return (t, o) => (h(), i("div", {
			id: e.anchor,
			class: "dxt-test-block"
		}, [
			a("h3", {
				class: p(["dxt-test-block__title", { "dxt-test-block__title--link": e.anchor }]),
				onClick: n
			}, b(e.title), 3),
			e.description ? (h(), i("div", j, b(e.description), 1)) : r("", !0),
			v(t.$slots, "default")
		], 8, A));
	}
}), N = { class: "dxt-test-button" }, ee = /* @__PURE__ */ l({
	name: "DxtTestButton",
	__name: "DxtTestButton",
	props: { label: {} },
	setup(e) {
		return (t, n) => (h(), i("button", N, [s(b(e.label) + " ", 1), v(t.$slots, "default")]));
	}
}), te = { class: "dxt-test-page" }, ne = { class: "dxt-test-page__title" }, re = {
	key: 0,
	class: "dxt-test-page__description"
}, ie = /* @__PURE__ */ l({
	name: "DxtTestPage",
	__name: "DxtTestPage",
	props: {
		title: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (h(), i("main", te, [
			a("h1", ne, b(e.title), 1),
			e.description ? (h(), i("div", re, b(e.description), 1)) : r("", !0),
			v(t.$slots, "default")
		]));
	}
}), ae = {
	key: 0,
	class: "ui-test-container__label"
}, P = {
	key: 1,
	class: "ui-test-container__description"
}, F = { class: "ui-test-container__context" }, I = /* @__PURE__ */ l({
	name: "C2TestContainer",
	__name: "UiTestContainer",
	props: {
		label: {},
		description: {},
		isDark: { type: Boolean }
	},
	setup(e) {
		let n = e, o = t(() => ({ "ui-test-container--dark": n.isDark }));
		return (t, n) => (h(), i("div", { class: p([o.value, "ui-test-container"]) }, [
			e.label ? (h(), i("div", ae, b(e.label), 1)) : r("", !0),
			e.description ? (h(), i("div", P, b(e.description), 1)) : r("", !0),
			a("div", F, [v(t.$slots, "default")])
		], 2));
	}
}), L = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, R = {}, z = { class: "ui-test-group" };
function B(e, t) {
	return h(), i("div", z, [v(e.$slots, "default")]);
}
var V = /* @__PURE__ */ L(R, [["render", B]]), H = /* @__PURE__ */ l({
	__name: "UiTestLabel",
	props: { label: {} },
	setup(e) {
		let t = e, n = () => E(String(t.label)).then();
		return (t, r) => (h(), i("div", {
			class: "ui-test-label",
			onClick: n
		}, b(e.label), 1));
	}
}), U = /* @__PURE__ */ l({
	__name: "UiTestItemFull",
	props: {
		label: {},
		isFlex: {
			type: Boolean,
			default: !0
		},
		isPadding: { type: Boolean },
		background: {
			type: Boolean,
			default: !0
		},
		rounded: {
			type: Boolean,
			default: !0
		},
		inverse: { type: Boolean }
	},
	setup(e) {
		let a = e, o = t(() => ({
			"ui-test-item-full--flex": a.isFlex,
			"ui-test-item-full--padding": a.isPadding,
			"ui-test-item-full--background": a.background,
			"ui-test-item-full--rounded": a.rounded,
			"ui-test-item-full--inverse": a.inverse
		}));
		return (t, a) => (h(), i("div", { class: p([o.value, "ui-test-item-full"]) }, [e.label ? (h(), n(H, {
			key: 0,
			label: e.label
		}, null, 8, ["label"])) : r("", !0), v(t.$slots, "default")], 2));
	}
}), W = /* @__PURE__ */ l({
	__name: "UiTestItemSquared",
	props: {
		label: {},
		size: {}
	},
	setup(e) {
		let a = e, o = t(() => ({ [`ui-test-item-squared--size--${a.size}`]: a.size }));
		return (t, a) => (h(), i("div", { class: p([o.value, "ui-test-item-squared"]) }, [e.label ? (h(), n(H, {
			key: 0,
			label: e.label
		}, null, 8, ["label"])) : r("", !0), v(t.$slots, "default")], 2));
	}
}), G = { class: "ui-test-title" }, K = /* @__PURE__ */ l({
	name: "C2TestTitle",
	__name: "UiTestTitle",
	props: { title: {} },
	setup(e) {
		return (t, n) => (h(), i("div", G, b(e.title), 1));
	}
}), q = C(() => {
	let e = T("--dxt-text-wiki-page-focus", "all");
	return {
		focus: e,
		setFocus: (t) => {
			e.value = t;
		},
		resetFocus: () => {
			e.value = "all";
		}
	};
}), J = () => q(), oe = { class: "dxt-test-wiki-code" }, Y = /* @__PURE__ */ l({
	name: "DxtTestWikiCode",
	__name: "DxtTestWikiCode",
	props: { code: {} },
	setup(e) {
		return (t, n) => (h(), i("code", oe, [s(b(e.code) + " ", 1), v(t.$slots, "default")]));
	}
}), se = {
	key: 0,
	class: "dxt-test-wiki-demo"
}, ce = ["innerHTML"], le = { class: "dxt-test-wiki-demo__content" }, X = /* @__PURE__ */ l({
	name: "DxtTestWikiDemo",
	__name: "DxtTestWikiDemo",
	props: { args: {} },
	setup(e) {
		let o = e, s = d("name"), l = d("component"), f = d("values"), g = { item: "dxt-test-wiki-demo__item" }, _ = t(() => ({
			...f == null ? void 0 : f.value,
			...o.args
		})), b = t(() => {
			let e = O(_.value, (e, t) => e === !0 ? `&nbsp;&nbsp;${t}<br/>` : `&nbsp;&nbsp;${t}="${D(typeof e == "object" ? JSON.stringify(e) : String(e))}"<br/>`);
			return `
&lt;${s.value}<br/>
${e.join("")}
/&gt;
  `.trim();
		});
		return (e, t) => x(l) ? (h(), i("div", se, [c(Y, null, {
			default: S(() => [a("div", { innerHTML: b.value }, null, 8, ce)]),
			_: 1
		}), a("div", le, [v(e.$slots, "render", {
			args: _.value,
			classDemo: g
		}, () => [a("div", { class: p(g.item) }, [(h(), n(y(x(l)), m(u(_.value)), null, 16))], 2)])])])) : r("", !0);
	}
}), ue = { class: "dxt-test-wiki-title" }, Z = /* @__PURE__ */ l({
	name: "DxtTestWikiTitle",
	__name: "DxtTestWikiTitle",
	props: {
		label: {},
		type: {}
	},
	setup(e) {
		return (t, a) => (h(), i("h4", ue, [s(b(e.label) + " ", 1), e.type ? (h(), n(Y, {
			key: 0,
			code: e.type
		}, null, 8, ["code"])) : r("", !0)]));
	}
}), de = {
	key: 0,
	class: "dxt-test-wiki-prop-item"
}, fe = { class: "dxt-test-wiki-prop-item__tilte" }, pe = { class: "dxt-test-wiki-prop-item__name" }, me = { class: "dxt-test-wiki-prop-item__description" }, he = {
	key: 0,
	class: "dxt-test-wiki-prop-item__description"
}, ge = { class: "dxt-test-wiki-prop-item__demo" }, Q = /* @__PURE__ */ l({
	name: "DxtTestWikiPropItem",
	__name: "DxtTestWikiPropItem",
	props: { item: {} },
	setup(s) {
		let l = s, d = t(() => l.item.isHide()), p = t(() => l.item.getName()), g = t(() => l.item.getDefaultValue()), y = t(() => l.item.getDescription()), x = t(() => l.item.getType()), C = t(() => l.item.getOptions()), w = t(() => l.item.isDemo()), T = t(() => l.item.getDemo()), E = t(() => l.item.getDemoOptions());
		return (t, s) => d.value ? r("", !0) : (h(), i("div", de, [
			a("div", fe, [a("span", pe, b(p.value) + ":", 1), c(Y, { code: x.value }, null, 8, ["code"])]),
			a("div", me, b(y.value), 1),
			g.value === void 0 ? r("", !0) : (h(), i("div", he, " default value: " + b(g.value), 1)),
			a("div", ge, [w.value ? (h(), i(e, { key: 0 }, [C.value ? (h(!0), i(e, { key: 0 }, _(C.value, (e) => (h(), n(X, {
				key: e,
				args: {
					[p.value]: e,
					...E.value
				}
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", f({ ref_for: !0 }, e))]),
				key: "0"
			} : void 0]), 1032, ["args"]))), 128)) : T.value ? (h(), n(X, {
				key: 1,
				args: {
					[p.value]: T.value,
					...E.value
				}
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
				key: "0"
			} : void 0]), 1032, ["args"])) : r("", !0)], 64)) : r("", !0)])
		]));
	}
}), _e = { class: "dxt-test-wiki__pre" }, ve = { class: "dxt-test-wiki__pre" }, ye = { class: "dxt-test-wiki__props" }, be = /* @__PURE__ */ l({
	name: "DxtTestWiki",
	__name: "DxtTestWiki",
	props: {
		design: {},
		wiki: {},
		component: {}
	},
	setup(s) {
		let l = s, { focus: d } = J(), p = t(() => `${l.design}${l.wiki.getName()}`), y = t(() => `type ${l.wiki.getName()}Props`), C = t(() => `type ${l.wiki.getName()}Emits`), w = t(() => `interface ${l.wiki.getName()}Expose`), T = t(() => `interface ${l.wiki.getName()}Slots`), E = t(() => l.wiki.getWikiObject()), D = t(() => l.wiki.getFilteredValues()), O = t(() => k(l.wiki.getAiRender(), l.wiki.getName(), p.value)), A = t(() => k(l.wiki.getAiDescription(), l.wiki.getName(), p.value));
		return g("name", p), g("component", l.component), g("values", D), (t, s) => x(d) === "all" || x(d) === p.value ? (h(), n(M, {
			key: 0,
			title: p.value,
			anchor: p.value,
			class: "dxt-test-wiki"
		}, {
			default: S(() => [
				O.value ? (h(), i(e, { key: 0 }, [c(Z, { label: "Demo" }), a("pre", _e, b(O.value), 1)], 64)) : r("", !0),
				A.value ? (h(), i(e, { key: 1 }, [c(Z, { label: "Description" }), a("pre", ve, b(A.value), 1)], 64)) : r("", !0),
				a("div", null, [c(X, null, o({ _: 2 }, ["render" in t.$slots ? {
					name: "render",
					fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
					key: "0"
				} : void 0]), 1024)]),
				c(Z, {
					type: C.value,
					label: "Emits"
				}, null, 8, ["type"]),
				c(Z, {
					type: w.value,
					label: "Expose"
				}, null, 8, ["type"]),
				c(Z, {
					type: T.value,
					label: "Slots"
				}, null, 8, ["type"]),
				c(Z, {
					type: y.value,
					label: "Props"
				}, null, 8, ["type"]),
				s[0] || (s[0] = a("div", { class: "dxt-test-wiki__description" }, " Enumeration of some properties ", -1)),
				a("div", ye, [(h(!0), i(e, null, _(E.value, (e, r) => (h(), n(Q, {
					key: r,
					item: e,
					class: "dxt-test-wiki__props__item"
				}, o({ _: 2 }, [e.name in t.$slots ? {
					name: e.name,
					fn: S((n) => [v(t.$slots, e.name, f({ ref_for: !0 }, n))]),
					key: "0"
				} : "render" in t.$slots ? {
					name: "render",
					fn: S((e) => [v(t.$slots, "render", f({ ref_for: !0 }, e))]),
					key: "1"
				} : void 0]), 1032, ["item"]))), 128))])
			]),
			_: 3
		}, 8, ["title", "anchor"])) : r("", !0);
	}
}), xe = { class: "dxt-test-wiki-anchor" }, Se = ["onClick", "href"], Ce = /* @__PURE__ */ l({
	name: "DxtTestWikiAnchor",
	__name: "DxtTestWikiAnchor",
	props: { list: {} },
	setup(n) {
		let r = n, { setFocus: o } = J(), s = t(() => w(r.list, (e) => e.name.replace(/AiWiki$/, "")).sort());
		return (t, n) => (h(), i("div", xe, [a("a", {
			onClick: n[0] || (n[0] = (e) => x(o)("all")),
			href: "#"
		}, "All"), (h(!0), i(e, null, _(s.value, (e) => (h(), i("div", {
			key: e,
			class: "dxt-test-wiki-anchor__item"
		}, [a("a", {
			onClick: (t) => x(o)(e),
			href: `#${e}`
		}, b(e), 9, Se)]))), 128))]));
	}
}), we = { class: "dxt-test-wiki-possibilities" }, Te = /* @__PURE__ */ l({
	name: "DxtTestWikiPossibilities",
	__name: "DxtTestWikiPossibilities",
	props: { possibilities: {} },
	setup(t) {
		return (n, r) => (h(), i("ul", we, [(h(!0), i(e, null, _(t.possibilities, (e) => (h(), i("li", { key: e }, b(e), 1))), 128))]));
	}
}), Ee = M, De = ee, $ = ie, Oe = I, ke = V, Ae = U, je = W, Me = H, Ne = K, Pe = be, Fe = Ce, Ie = Y, Le = X, Re = Te, ze = Q, Be = Z;
//#endregion
export { Ee as DxtTestBlock, De as DxtTestButton, $ as DxtTestPage, Pe as DxtTestWiki, Fe as DxtTestWikiAnchor, Ie as DxtTestWikiCode, Le as DxtTestWikiDemo, Re as DxtTestWikiPossibilities, ze as DxtTestWikiPropItem, Be as DxtTestWikiTitle, Oe as UiTestContainer, ke as UiTestGroup, Ae as UiTestItemFull, je as UiTestItemSquared, Me as UiTestLabel, Ne as UiTestTitle, J as useWikiItemFocus };
