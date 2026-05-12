import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { GridItemDesign as s, defaultsGridItem as c } from "@dxtmisha/constructor/GridItem";
//#region src/components/Ui/GridItem/props.ts
var l = {
	base: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	sm: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	md: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	lg: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	xl: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	xl2: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	]
}, u = /* @__PURE__ */ n({
	name: "D1GridItem",
	__name: "D1GridItem",
	props: /* @__PURE__ */ r({
		base: {},
		sm: {},
		md: {},
		lg: {},
		xl: {},
		xl2: {}
	}, { ...c }),
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.gridItem", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-gridItem": !0,
				[`d1-gridItem--base--${d.base}`]: o(l.base, d.base),
				[`d1-gridItem--sm--${d.sm}`]: o(l.sm, d.sm),
				[`d1-gridItem--md--${d.md}`]: o(l.md, d.md),
				[`d1-gridItem--lg--${d.lg}`]: o(l.lg, d.lg),
				[`d1-gridItem--xl--${d.xl}`]: o(l.xl, d.xl),
				[`d1-gridItem--xl2--${d.xl2}`]: o(l.xl2, d.xl2)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { u as t };
