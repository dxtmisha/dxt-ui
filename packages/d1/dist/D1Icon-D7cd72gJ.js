import { t as e } from "./Image-D8CcYNKv.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { IconDesign as c, defaultsIcon as l } from "@dxtmisha/constructor/Icon";
//#region src/components/Ui/Icon/props.ts
var u = {
	animationType: ["type1", "type2"],
	size: [
		"auto",
		"x",
		"xs",
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl",
		"6xl",
		"7xl",
		"8xl",
		"9xl"
	],
	rounded: [
		"auto",
		"sm",
		"md",
		"lg",
		"xl",
		"full"
	]
}, d = {
	...l,
	animationType: "type1",
	square: !0,
	size: "auto",
	rounded: "auto"
}, f = /* @__PURE__ */ r({
	name: "D1Icon",
	__name: "D1Icon",
	props: /* @__PURE__ */ i({
		isSkeleton: { type: Boolean },
		ariaLabel: {},
		to: {},
		href: {},
		value: {},
		detail: {},
		active: { type: Boolean },
		icon: {},
		iconActive: {},
		role: {},
		tabindex: {},
		turn: { type: Boolean },
		disabled: { type: Boolean },
		hide: { type: Boolean },
		asPalette: { type: Boolean },
		dir: { type: Boolean },
		overlay: { type: Boolean },
		dynamic: { type: Boolean },
		start: { type: Boolean },
		end: { type: Boolean },
		high: { type: Boolean },
		animationType: {},
		animationShow: { type: Boolean },
		square: { type: Boolean },
		circle: { type: Boolean },
		rect: { type: Boolean },
		size: {},
		inverse: { type: Boolean },
		rounded: {}
	}, d),
	emits: [
		"load",
		"click",
		"clickLite"
	],
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = t(() => ({ main: {
			"d1-icon": !0,
			"d1-icon--turn": f.turn,
			"d1-icon--disabled": f.disabled,
			"d1-icon--hide": f.hide,
			"d1-icon--asPalette": f.asPalette,
			"d1-icon--dir": f.dir,
			"d1-icon--overlay": f.overlay,
			"d1-icon--dynamic": f.dynamic,
			"d1-icon--start": f.start,
			"d1-icon--end": f.end,
			"d1-icon--high": f.high,
			[`d1-icon--animationType--${f.animationType}`]: s(u.animationType, f.animationType),
			"d1-icon--animationShow": f.animationShow,
			"d1-icon--square": f.square && !f.circle && !f.rect,
			"d1-icon--circle": f.circle,
			"d1-icon--rect": f.rect,
			[`d1-icon--size--${f.size}`]: s(u.size, f.size),
			"d1-icon--inverse": f.inverse,
			[`d1-icon--rounded--${f.rounded}`]: s(u.rounded, f.rounded)
		} })), m = t(() => ({})), h = new c("d1.icon", f, {
			emits: d,
			components: { image: e },
			classes: p,
			styles: m
		}), g = h.render();
		return i(h.expose()), (e, t) => (a(), n(o(g)));
	}
});
//#endregion
export { f as t };
