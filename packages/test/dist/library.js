import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createSlots as o, createTextVNode as s, createVNode as c, defineComponent as l, guardReactiveProps as u, inject as d, mergeProps as f, normalizeClass as p, normalizeProps as m, openBlock as h, provide as g, renderList as _, renderSlot as v, resolveDynamicComponent as y, toDisplayString as b, unref as x, withCtx as S } from "vue";
import { encodeAttribute as C, forEach as w, replaceComponentName as T } from "@dxtmisha/functional-basic";
import "@dxtmisha/wiki";
import { executeUseLocal as E, forEach as D, useSessionRef as O } from "@dxtmisha/functional";
//#region src/components/DxtTestBlock.vue?vue&type=script&setup=true&lang.ts
var k = ["id"], A = {
	key: 0,
	class: "dxt-test-block__description"
}, j = /* @__PURE__ */ l({
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
			e.description ? (h(), i("div", A, b(e.description), 1)) : r("", !0),
			v(t.$slots, "default")
		], 8, k));
	}
}), M = /* @__PURE__ */ l({
	name: "DxtTestButton",
	__name: "DxtTestButton",
	props: {
		label: {},
		selected: { type: Boolean }
	},
	setup(e) {
		return (t, n) => (h(), i("button", { class: p(["dxt-test-button", { "dxt-test-button--selected": e.selected }]) }, [s(b(e.label) + " ", 1), v(t.$slots, "default")], 2));
	}
}), ee = { class: "dxt-test-page" }, te = { class: "dxt-test-page__title" }, N = {
	key: 0,
	class: "dxt-test-page__description"
}, P = /* @__PURE__ */ l({
	name: "DxtTestPage",
	__name: "DxtTestPage",
	props: {
		title: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (h(), i("main", ee, [
			a("h1", te, b(e.title), 1),
			e.description ? (h(), i("div", N, b(e.description), 1)) : r("", !0),
			v(t.$slots, "default")
		]));
	}
}), F = E(() => {
	let e = O("--dxt-text-wiki-page-focus", "all");
	return {
		focus: e,
		setFocus: (t) => {
			e.value = t;
		},
		resetFocus: () => {
			e.value = "all";
		}
	};
}), I = () => F(), ne = { class: "dxt-test-wiki-code" }, L = /* @__PURE__ */ l({
	name: "DxtTestWikiCode",
	__name: "DxtTestWikiCode",
	props: { code: {} },
	setup(e) {
		return (t, n) => (h(), i("code", ne, [s(b(e.code) + " ", 1), v(t.$slots, "default")]));
	}
}), R = {
	key: 0,
	class: "dxt-test-wiki-demo"
}, z = ["innerHTML"], B = { class: "dxt-test-wiki-demo__content" }, V = /* @__PURE__ */ l({
	name: "DxtTestWikiDemo",
	__name: "DxtTestWikiDemo",
	props: { args: {} },
	setup(e) {
		let o = e, s = d("name"), l = d("component"), f = d("values"), g = { item: "dxt-test-wiki-demo__item" }, _ = t(() => ({
			...f == null ? void 0 : f.value,
			...o.args
		})), b = t(() => {
			let e = w(_.value, (e, t) => e === !0 ? `&nbsp;&nbsp;${t}<br/>` : `&nbsp;&nbsp;${t}="${C(typeof e == "object" ? JSON.stringify(e) : String(e))}"<br/>`);
			return `
&lt;${s.value}<br/>
${e.join("")}
/&gt;
  `.trim();
		});
		return (e, t) => x(l) ? (h(), i("div", R, [c(L, null, {
			default: S(() => [a("div", { innerHTML: b.value }, null, 8, z)]),
			_: 1
		}), a("div", B, [v(e.$slots, "render", {
			args: _.value,
			classDemo: g
		}, () => [a("div", { class: p(g.item) }, [(h(), n(y(x(l)), m(u(_.value)), null, 16))], 2)])])])) : r("", !0);
	}
}), H = { class: "dxt-test-wiki-title" }, U = /* @__PURE__ */ l({
	name: "DxtTestWikiTitle",
	__name: "DxtTestWikiTitle",
	props: {
		label: {},
		type: {}
	},
	setup(e) {
		return (t, a) => (h(), i("h4", H, [s(b(e.label) + " ", 1), e.type ? (h(), n(L, {
			key: 0,
			code: e.type
		}, null, 8, ["code"])) : r("", !0)]));
	}
}), W = E(() => {
	let e = O("--dxt-text-wiki-page-hide", !0);
	return {
		hide: e,
		setHide: (t) => {
			e.value = t;
		},
		toggleHide: () => {
			e.value = !e.value;
		}
	};
}), G = () => W(), K = {
	key: 0,
	class: "dxt-test-wiki-prop-item"
}, q = { class: "dxt-test-wiki-prop-item__tilte" }, J = { class: "dxt-test-wiki-prop-item__name" }, Y = { class: "dxt-test-wiki-prop-item__description" }, X = {
	key: 0,
	class: "dxt-test-wiki-prop-item__description"
}, Z = { class: "dxt-test-wiki-prop-item__demo" }, Q = /* @__PURE__ */ l({
	name: "DxtTestWikiPropItem",
	__name: "DxtTestWikiPropItem",
	props: { item: {} },
	setup(s) {
		let l = s, { hide: d } = G(), p = t(() => d.value || l.item.isHide()), g = t(() => l.item.getName()), y = t(() => l.item.getDefaultValue()), x = t(() => l.item.getDescription()), C = t(() => l.item.getType()), w = t(() => l.item.getOptions()), T = t(() => l.item.isDemo()), E = t(() => l.item.getDemo()), D = t(() => l.item.getDemoOptions());
		return (t, s) => p.value ? r("", !0) : (h(), i("div", K, [
			a("div", q, [a("span", J, b(g.value) + ":", 1), c(L, { code: C.value }, null, 8, ["code"])]),
			a("div", Y, b(x.value), 1),
			y.value === void 0 ? r("", !0) : (h(), i("div", X, " default value: " + b(y.value), 1)),
			a("div", Z, [T.value ? (h(), i(e, { key: 0 }, [w.value ? (h(!0), i(e, { key: 0 }, _(w.value, (e) => (h(), n(V, {
				key: e,
				args: {
					[g.value]: e,
					...D.value
				}
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", f({ ref_for: !0 }, e))]),
				key: "0"
			} : void 0]), 1032, ["args"]))), 128)) : E.value ? (h(), n(V, {
				key: 1,
				args: {
					[g.value]: E.value,
					...D.value
				}
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
				key: "0"
			} : void 0]), 1032, ["args"])) : r("", !0)], 64)) : r("", !0)])
		]));
	}
}), re = { class: "dxt-test-wiki__pre" }, ie = { class: "dxt-test-wiki__pre" }, ae = { class: "dxt-test-wiki__props" }, oe = /* @__PURE__ */ l({
	name: "DxtTestWiki",
	__name: "DxtTestWiki",
	props: {
		design: {},
		wiki: {},
		component: {}
	},
	setup(s) {
		let l = s, { focus: d } = I(), p = t(() => `${l.design}${l.wiki.getName()}`), y = t(() => `type ${l.wiki.getName()}Props`), C = t(() => `type ${l.wiki.getName()}Emits`), w = t(() => `interface ${l.wiki.getName()}Expose`), E = t(() => `interface ${l.wiki.getName()}Slots`), D = t(() => l.wiki.getWikiObject()), O = t(() => l.wiki.getFilteredValues()), k = t(() => T(l.wiki.getAiRender(), l.wiki.getName(), p.value)), A = t(() => T(l.wiki.getAiDescription(), l.wiki.getName(), p.value));
		return g("name", p), g("component", l.component), g("values", O), (t, s) => x(d) === "all" || x(d) === p.value ? (h(), n(j, {
			key: 0,
			title: p.value,
			anchor: p.value,
			class: "dxt-test-wiki"
		}, {
			default: S(() => [
				k.value ? (h(), i(e, { key: 0 }, [c(U, { label: "Demo" }), a("pre", re, b(k.value), 1)], 64)) : r("", !0),
				A.value ? (h(), i(e, { key: 1 }, [c(U, { label: "Description" }), a("pre", ie, b(A.value), 1)], 64)) : r("", !0),
				a("div", null, [c(V, null, o({ _: 2 }, ["render" in t.$slots ? {
					name: "render",
					fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
					key: "0"
				} : void 0]), 1024)]),
				c(U, {
					type: C.value,
					label: "Emits"
				}, null, 8, ["type"]),
				c(U, {
					type: w.value,
					label: "Expose"
				}, null, 8, ["type"]),
				c(U, {
					type: E.value,
					label: "Slots"
				}, null, 8, ["type"]),
				c(U, {
					type: y.value,
					label: "Props"
				}, null, 8, ["type"]),
				s[0] || (s[0] = a("div", { class: "dxt-test-wiki__description" }, " Enumeration of some properties ", -1)),
				a("div", ae, [(h(!0), i(e, null, _(D.value, (e, r) => (h(), n(Q, {
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
}), se = { class: "dxt-test-wiki-anchor" }, ce = ["onClick", "href"], le = /* @__PURE__ */ l({
	name: "DxtTestWikiAnchor",
	__name: "DxtTestWikiAnchor",
	props: { list: {} },
	setup(n) {
		let r = n, { setFocus: o } = I(), s = t(() => D(r.list, (e) => e.name.replace(/AiWiki$/, "")).sort());
		return (t, n) => (h(), i("div", se, [a("a", {
			onClick: n[0] || (n[0] = (e) => x(o)("all")),
			href: "#"
		}, "All"), (h(!0), i(e, null, _(s.value, (e) => (h(), i("div", {
			key: e,
			class: "dxt-test-wiki-anchor__item"
		}, [a("a", {
			onClick: (t) => x(o)(e),
			href: `#${e}`
		}, b(e), 9, ce)]))), 128))]));
	}
}), ue = /* @__PURE__ */ l({
	name: "DxtTestWikiHide",
	__name: "DxtTestWikiHide",
	setup(e) {
		let { hide: t, toggleHide: r } = G();
		return (e, i) => (h(), n(M, {
			label: "Hide all obvious properties",
			selected: x(t),
			onClick: x(r)
		}, null, 8, ["selected", "onClick"]));
	}
}), de = { class: "dxt-test-wiki-possibilities" }, fe = /* @__PURE__ */ l({
	name: "DxtTestWikiPossibilities",
	__name: "DxtTestWikiPossibilities",
	props: { possibilities: {} },
	setup(t) {
		return (n, r) => (h(), i("ul", de, [(h(!0), i(e, null, _(t.possibilities, (e) => (h(), i("li", { key: e }, b(e), 1))), 128))]));
	}
}), pe = j, $ = M, me = P, he = oe, ge = le, _e = L, ve = V, ye = ue, be = fe, xe = Q, Se = U;
//#endregion
export { pe as DxtTestBlock, $ as DxtTestButton, me as DxtTestPage, he as DxtTestWiki, ge as DxtTestWikiAnchor, _e as DxtTestWikiCode, ve as DxtTestWikiDemo, ye as DxtTestWikiHide, be as DxtTestWikiPossibilities, xe as DxtTestWikiPropItem, Se as DxtTestWikiTitle, I as useWikiItemFocus, G as useWikiPropsHide };
