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
}), z = ["innerHTML"], B = { class: "dxt-test-wiki-demo__content" }, V = /* @__PURE__ */ l({
	name: "DxtTestWikiDemo",
	__name: "DxtTestWikiDemo",
	props: {
		args: {},
		compact: { type: Boolean }
	},
	setup(e) {
		let o = e, s = d("name"), l = d("component"), f = d("values"), g = { item: "dxt-test-wiki-demo__item" }, _ = t(() => o.compact ? { ...o.args } : {
			...f == null ? void 0 : f.value,
			...o.args
		}), b = t(() => ({
			...f == null ? void 0 : f.value,
			...o.args
		})), T = t(() => {
			let e = o.compact ? "" : "<br/>", t = o.compact ? " " : "&nbsp;&nbsp;", n = w(_.value, (n, r) => n === !0 ? `${t}${r}${e}` : n === !1 ? `${t}${r}="false"${e}` : `${t}${r}="${C(typeof n == "object" ? JSON.stringify(n) : String(n))}"${e}`);
			return `
&lt;${s.value}${e}
${n.join("")}
/&gt;
  `.trim();
		});
		return (t, o) => x(l) ? (h(), i("div", {
			key: 0,
			class: p([{ "dxt-test-wiki-demo--compact": e.compact }, "dxt-test-wiki-demo"])
		}, [c(R, null, {
			default: S(() => [a("div", { innerHTML: T.value }, null, 8, z)]),
			_: 1
		}), a("div", B, [v(t.$slots, "render", {
			args: b.value,
			classDemo: g
		}, () => [a("div", { class: p(g.item) }, [(h(), n(y(x(l)), m(u(b.value)), null, 16))], 2)])])], 2)) : r("", !0);
	}
}), H = { class: "dxt-test-wiki-title" }, U = /* @__PURE__ */ l({
	name: "DxtTestWikiTitle",
	__name: "DxtTestWikiTitle",
	props: {
		label: {},
		type: {}
	},
	setup(e) {
		return (t, a) => (h(), i("h4", H, [s(b(e.label) + " ", 1), e.type ? (h(), n(R, {
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
}), G = () => W(), K = { class: "dxt-test-wiki-prop-item__tilte" }, q = { class: "dxt-test-wiki-prop-item__name" }, J = { class: "dxt-test-wiki-prop-item__description" }, Y = {
	key: 0,
	class: "dxt-test-wiki-prop-item__description"
}, X = { class: "dxt-test-wiki-prop-item__demo" }, Z = /* @__PURE__ */ l({
	name: "DxtTestWikiPropItem",
	__name: "DxtTestWikiPropItem",
	props: { item: {} },
	setup(s) {
		let l = s, { hide: d } = G(), g = t(() => !d.value || !l.item.isHide()), y = t(() => l.item.isHide()), x = t(() => l.item.getName()), C = t(() => l.item.getDefaultValue()), w = t(() => l.item.getDescription()), T = t(() => l.item.getType()), E = t(() => l.item.getOptions()), D = t(() => l.item.isDemo()), O = t(() => l.item.getDemo()), k = t(() => l.item.getDemoOptions());
		return (t, s) => g.value ? (h(), i("div", {
			key: 0,
			class: p(["dxt-test-wiki-prop-item", { "dxt-test-wiki-prop-item--hide": y.value }])
		}, [
			a("div", K, [a("span", q, b(x.value) + ":", 1), c(R, { code: T.value }, null, 8, ["code"])]),
			a("div", J, b(w.value), 1),
			C.value === void 0 ? r("", !0) : (h(), i("div", Y, " default value: " + b(C.value), 1)),
			a("div", X, [D.value ? (h(), i(e, { key: 0 }, [E.value ? (h(!0), i(e, { key: 0 }, _(E.value, (e) => (h(), n(V, {
				key: e,
				args: {
					[x.value]: e,
					...k.value
				},
				compact: ""
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", f({ ref_for: !0 }, e))]),
				key: "0"
			} : void 0]), 1032, ["args"]))), 128)) : O.value ? (h(), n(V, {
				key: 1,
				args: {
					[x.value]: O.value,
					...k.value
				},
				compact: ""
			}, o({ _: 2 }, ["render" in t.$slots ? {
				name: "render",
				fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
				key: "0"
			} : void 0]), 1032, ["args"])) : r("", !0)], 64)) : r("", !0)])
		], 2)) : r("", !0);
	}
}), Q = { class: "dxt-test-wiki__pre" }, ne = { class: "dxt-test-wiki__pre" }, re = { class: "dxt-test-wiki__props" }, ie = /* @__PURE__ */ l({
	name: "DxtTestWiki",
	__name: "DxtTestWiki",
	props: {
		design: {},
		wiki: {},
		component: {}
	},
	setup(s) {
		let l = s, { focus: d } = L(), p = t(() => `${l.design}${l.wiki.getName()}`), y = t(() => `type ${l.wiki.getName()}Props`), x = t(() => `type ${l.wiki.getName()}Emits`), C = t(() => `interface ${l.wiki.getName()}Expose`), w = t(() => `interface ${l.wiki.getName()}Slots`), E = t(() => l.wiki.getWikiObject()), D = t(() => l.wiki.getFilteredValues()), O = t(() => T(l.wiki.getAiRender(), l.wiki.getName(), p.value)), k = t(() => T(l.wiki.getAiDescription(), l.wiki.getName(), p.value)), A = t(() => !l.wiki.getAiHide() && (d.value === "all" || d.value === p.value));
		return g("name", p), g("component", l.component), g("values", D), (t, s) => A.value ? (h(), n(j, {
			key: 0,
			title: p.value,
			anchor: p.value,
			class: "dxt-test-wiki"
		}, {
			default: S(() => [
				O.value ? (h(), i(e, { key: 0 }, [c(U, { label: "Demo" }), a("pre", Q, b(O.value), 1)], 64)) : r("", !0),
				k.value ? (h(), i(e, { key: 1 }, [c(U, { label: "Description" }), a("div", ne, b(k.value), 1)], 64)) : r("", !0),
				a("div", null, [c(V, null, o({ _: 2 }, ["render" in t.$slots ? {
					name: "render",
					fn: S((e) => [v(t.$slots, "render", m(u(e)))]),
					key: "0"
				} : void 0]), 1024)]),
				c(U, {
					type: x.value,
					label: "Emits"
				}, null, 8, ["type"]),
				c(U, {
					type: C.value,
					label: "Expose"
				}, null, 8, ["type"]),
				c(U, {
					type: w.value,
					label: "Slots"
				}, null, 8, ["type"]),
				c(U, {
					type: y.value,
					label: "Props"
				}, null, 8, ["type"]),
				s[0] || (s[0] = a("div", { class: "dxt-test-wiki__description" }, " Enumeration of some properties ", -1)),
				a("div", re, [(h(!0), i(e, null, _(E.value, (e, r) => (h(), n(Z, {
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
}), ae = { class: "dxt-test-wiki-anchor" }, oe = ["onClick", "href"], se = /* @__PURE__ */ l({
	name: "DxtTestWikiAnchor",
	__name: "DxtTestWikiAnchor",
	props: { list: {} },
	setup(n) {
		let r = n, { setFocus: o } = L(), s = t(() => D(r.list, (e) => e.name.replace(/AiWiki$/, "")).sort());
		return (t, n) => (h(), i("div", ae, [a("a", {
			onClick: n[0] || (n[0] = (e) => x(o)("all")),
			href: "#"
		}, "All"), (h(!0), i(e, null, _(s.value, (e) => (h(), i("div", {
			key: e,
			class: "dxt-test-wiki-anchor__item"
		}, [a("a", {
			onClick: (t) => x(o)(e),
			href: `#${e}`
		}, b(e), 9, oe)]))), 128))]));
	}
}), ce = /* @__PURE__ */ l({
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
}), le = { class: "dxt-test-wiki-possibilities" }, ue = /* @__PURE__ */ l({
	name: "DxtTestWikiPossibilities",
	__name: "DxtTestWikiPossibilities",
	props: { possibilities: {} },
	setup(t) {
		return (n, r) => (h(), i("ul", le, [(h(!0), i(e, null, _(t.possibilities, (e) => (h(), i("li", { key: e }, b(e), 1))), 128))]));
	}
}), de = j, fe = M, pe = F, $ = ie, me = se, he = R, ge = V, _e = ce, ve = ue, ye = Z, be = U;
//#endregion
export { de as DxtTestBlock, fe as DxtTestButton, pe as DxtTestPage, $ as DxtTestWiki, me as DxtTestWikiAnchor, he as DxtTestWikiCode, ge as DxtTestWikiDemo, _e as DxtTestWikiHide, ve as DxtTestWikiPossibilities, ye as DxtTestWikiPropItem, be as DxtTestWikiTitle, L as useWikiItemFocus, G as useWikiPropsHide };
