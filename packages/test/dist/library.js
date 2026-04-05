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
}), N = { class: "dxt-test-page" }, ee = { class: "dxt-test-page__title" }, P = {
	key: 0,
	class: "dxt-test-page__description"
}, F = /* @__PURE__ */ l({
	name: "DxtTestPage",
	__name: "DxtTestPage",
	props: {
		title: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (h(), i("main", N, [
			a("h1", ee, b(e.title), 1),
			e.description ? (h(), i("div", P, b(e.description), 1)) : r("", !0),
			v(t.$slots, "default")
		]));
	}
}), I = E(() => {
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
}), L = () => I(), te = { class: "dxt-test-wiki-code" }, R = /* @__PURE__ */ l({
	name: "DxtTestWikiCode",
	__name: "DxtTestWikiCode",
	props: { code: {} },
	setup(e) {
		return (t, n) => (h(), i("code", te, [s(b(e.code) + " ", 1), v(t.$slots, "default")]));
	}
}), z = {
	key: 0,
	class: "dxt-test-wiki-demo"
}, B = ["innerHTML"], V = { class: "dxt-test-wiki-demo__content" }, H = /* @__PURE__ */ l({
	name: "DxtTestWikiDemo",
	__name: "DxtTestWikiDemo",
	props: { args: {} },
	setup(e) {
		let o = e, s = d("name"), l = d("component"), f = d("values"), g = { item: "dxt-test-wiki-demo__item" }, _ = t(() => ({
			...f == null ? void 0 : f.value,
			...o.args
		})), b = t(() => {
			let e = w(_.value, (e, t) => e === !0 ? `&nbsp;&nbsp;${t}<br/>` : e === !1 ? `&nbsp;&nbsp;${t}="false"<br/>` : `&nbsp;&nbsp;${t}="${C(typeof e == "object" ? JSON.stringify(e) : String(e))}"<br/>`);
			return `
&lt;${s.value}<br/>
${e.join("")}
/&gt;
  `.trim();
		});
		return (e, t) => x(l) ? (h(), i("div", z, [c(R, null, {
			default: S(() => [a("div", { innerHTML: b.value }, null, 8, B)]),
			_: 1
		}), a("div", V, [v(e.$slots, "render", {
			args: _.value,
			classDemo: g
		}, () => [a("div", { class: p(g.item) }, [(h(), n(y(x(l)), m(u(_.value)), null, 16))], 2)])])])) : r("", !0);
	}
}), U = { class: "dxt-test-wiki-title" }, W = /* @__PURE__ */ l({
	name: "DxtTestWikiTitle",
	__name: "DxtTestWikiTitle",
	props: {
		label: {},
		type: {}
	},
	setup(e) {
		return (t, a) => (h(), i("h4", U, [s(b(e.label) + " ", 1), e.type ? (h(), n(R, {
			key: 0,
			code: e.type
		}, null, 8, ["code"])) : r("", !0)]));
	}
}), G = E(() => {
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
}), K = () => G(), q = { class: "dxt-test-wiki-prop-item__tilte" }, J = { class: "dxt-test-wiki-prop-item__name" }, Y = { class: "dxt-test-wiki-prop-item__description" }, X = {
	key: 0,
	class: "dxt-test-wiki-prop-item__description"
}, Z = { class: "dxt-test-wiki-prop-item__demo" }, Q = /* @__PURE__ */ l({
	name: "DxtTestWikiPropItem",
	__name: "DxtTestWikiPropItem",
	props: { item: {} },
	setup(s) {
		let l = s, { hide: d } = K(), g = t(() => !d.value || !l.item.isHide()), y = t(() => l.item.isHide()), x = t(() => l.item.getName()), C = t(() => l.item.getDefaultValue()), w = t(() => l.item.getDescription()), T = t(() => l.item.getType()), E = t(() => l.item.getOptions()), D = t(() => l.item.isDemo()), O = t(() => l.item.getDemo()), k = t(() => l.item.getDemoOptions());
		return (t, s) => g.value ? (h(), i("div", {
			key: 0,
			class: p(["dxt-test-wiki-prop-item", { "dxt-test-wiki-prop-item--hide": y.value }])
		}, [
			a("div", q, [a("span", J, b(x.value) + ":", 1), c(R, { code: T.value }, null, 8, ["code"])]),
			a("div", Y, b(w.value), 1),
			C.value === void 0 ? r("", !0) : (h(), i("div", X, " default value: " + b(C.value), 1)),
			a("div", Z, [D.value ? (h(), i(e, { key: 0 }, [E.value ? (h(!0), i(e, { key: 0 }, _(E.value, (e) => (h(), n(H, {
				key: e,
				args: {
					[x.value]: e,
					...k.value
				}
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", f({ ref_for: !0 }, e))]),
				key: "0"
			} : void 0]), 1032, ["args"]))), 128)) : O.value ? (h(), n(H, {
				key: 1,
				args: {
					[x.value]: O.value,
					...k.value
				}
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
				key: "0"
			} : void 0]), 1032, ["args"])) : r("", !0)], 64)) : r("", !0)])
		], 2)) : r("", !0);
	}
}), ne = { class: "dxt-test-wiki__pre" }, re = { class: "dxt-test-wiki__pre" }, ie = { class: "dxt-test-wiki__props" }, ae = /* @__PURE__ */ l({
	name: "DxtTestWiki",
	__name: "DxtTestWiki",
	props: {
		design: {},
		wiki: {},
		component: {}
	},
	setup(s) {
		let l = s, { focus: d } = L(), p = t(() => `${l.design}${l.wiki.getName()}`), y = t(() => `type ${l.wiki.getName()}Props`), C = t(() => `type ${l.wiki.getName()}Emits`), w = t(() => `interface ${l.wiki.getName()}Expose`), E = t(() => `interface ${l.wiki.getName()}Slots`), D = t(() => l.wiki.getWikiObject()), O = t(() => l.wiki.getFilteredValues()), k = t(() => T(l.wiki.getAiRender(), l.wiki.getName(), p.value)), A = t(() => T(l.wiki.getAiDescription(), l.wiki.getName(), p.value));
		return g("name", p), g("component", l.component), g("values", O), (t, s) => x(d) === "all" || x(d) === p.value ? (h(), n(j, {
			key: 0,
			title: p.value,
			anchor: p.value,
			class: "dxt-test-wiki"
		}, {
			default: S(() => [
				k.value ? (h(), i(e, { key: 0 }, [c(W, { label: "Demo" }), a("pre", ne, b(k.value), 1)], 64)) : r("", !0),
				A.value ? (h(), i(e, { key: 1 }, [c(W, { label: "Description" }), a("div", re, b(A.value), 1)], 64)) : r("", !0),
				a("div", null, [c(H, null, o({ _: 2 }, ["render" in t.$slots ? {
					name: "render",
					fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
					key: "0"
				} : void 0]), 1024)]),
				c(W, {
					type: C.value,
					label: "Emits"
				}, null, 8, ["type"]),
				c(W, {
					type: w.value,
					label: "Expose"
				}, null, 8, ["type"]),
				c(W, {
					type: E.value,
					label: "Slots"
				}, null, 8, ["type"]),
				c(W, {
					type: y.value,
					label: "Props"
				}, null, 8, ["type"]),
				s[0] || (s[0] = a("div", { class: "dxt-test-wiki__description" }, " Enumeration of some properties ", -1)),
				a("div", ie, [(h(!0), i(e, null, _(D.value, (e, r) => (h(), n(Q, {
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
}), oe = { class: "dxt-test-wiki-anchor" }, se = ["onClick", "href"], ce = /* @__PURE__ */ l({
	name: "DxtTestWikiAnchor",
	__name: "DxtTestWikiAnchor",
	props: { list: {} },
	setup(n) {
		let r = n, { setFocus: o } = L(), s = t(() => D(r.list, (e) => e.name.replace(/AiWiki$/, "")).sort());
		return (t, n) => (h(), i("div", oe, [a("a", {
			onClick: n[0] || (n[0] = (e) => x(o)("all")),
			href: "#"
		}, "All"), (h(!0), i(e, null, _(s.value, (e) => (h(), i("div", {
			key: e,
			class: "dxt-test-wiki-anchor__item"
		}, [a("a", {
			onClick: (t) => x(o)(e),
			href: `#${e}`
		}, b(e), 9, se)]))), 128))]));
	}
}), le = /* @__PURE__ */ l({
	name: "DxtTestWikiHide",
	__name: "DxtTestWikiHide",
	setup(e) {
		let { hide: t, toggleHide: r } = K();
		return (e, i) => (h(), n(M, {
			label: "Hide all obvious properties",
			selected: x(t),
			onClick: x(r)
		}, null, 8, ["selected", "onClick"]));
	}
}), ue = { class: "dxt-test-wiki-possibilities" }, de = /* @__PURE__ */ l({
	name: "DxtTestWikiPossibilities",
	__name: "DxtTestWikiPossibilities",
	props: { possibilities: {} },
	setup(t) {
		return (n, r) => (h(), i("ul", ue, [(h(!0), i(e, null, _(t.possibilities, (e) => (h(), i("li", { key: e }, b(e), 1))), 128))]));
	}
}), fe = j, pe = M, $ = F, me = ae, he = ce, ge = R, _e = H, ve = le, ye = de, be = Q, xe = W;
//#endregion
export { fe as DxtTestBlock, pe as DxtTestButton, $ as DxtTestPage, me as DxtTestWiki, he as DxtTestWikiAnchor, ge as DxtTestWikiCode, _e as DxtTestWikiDemo, ve as DxtTestWikiHide, ye as DxtTestWikiPossibilities, be as DxtTestWikiPropItem, xe as DxtTestWikiTitle, L as useWikiItemFocus, K as useWikiPropsHide };
