import { n as e } from "./Image-D8CcYNKv.js";
import { t } from "./D1Scrollbar-C4Yw4mFn.js";
import { t as n } from "./D1Button-s9Rd2h9U.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l, isFilled as u } from "@dxtmisha/functional";
import { WindowDesign as d, defaultsWindow as f } from "@dxtmisha/constructor/Window";
//#region src/components/Ui/Window/props.ts
var p = {
	width: [
		"auto",
		"max",
		"sm",
		"md",
		"lg"
	],
	height: [
		"auto",
		"max",
		"sm",
		"md",
		"lg"
	],
	axis: [
		"x",
		"y",
		"on"
	],
	imagePosition: ["top", "left"],
	alignment: [
		"center",
		"top",
		"topRight",
		"topLeft",
		"topFull",
		"right",
		"rightFull",
		"bottom",
		"bottomRight",
		"bottomLeft",
		"bottomFull",
		"left",
		"leftFull"
	],
	origin: [
		"center",
		"top",
		"right",
		"bottom",
		"left",
		"topToBottom",
		"rightToLeft",
		"bottomToTop",
		"leftToRight"
	],
	adaptive: [
		"menu",
		"menuWindow",
		"modal",
		"modalDynamic",
		"actionSheetRight",
		"actionSheetBottom",
		"static",
		"actionSheet",
		"actionSheetToModal",
		"autoStaticSm",
		"autoStaticMd",
		"autoStaticLg",
		"autoStaticXl",
		"autoStatic2xl"
	],
	imageSize: [
		"sm",
		"md",
		"lg",
		"quarter",
		"half"
	]
}, m = {
	...f,
	iconClose: "close",
	width: "md",
	axis: "y",
	imagePosition: "top",
	overscroll: !0,
	imageSize: "md"
}, h = /* @__PURE__ */ a({
	name: "D1Window",
	__name: "D1Window",
	props: /* @__PURE__ */ o({
		scrollbarAttrs: {},
		image: {},
		role: {},
		ariaLabelledby: {},
		ariaDescribedby: {},
		ariaHaspopup: { type: [String, Boolean] },
		textClose: { type: [String, Function] },
		modelOpen: {},
		"onUpdate:open": { type: Function },
		"onUpdate:modelOpen": { type: Function },
		open: { type: Boolean },
		disabled: { type: Boolean },
		preparation: { type: Function },
		beforeOpening: { type: Function },
		opening: { type: Function },
		beforeClosing: { type: Function },
		closing: { type: Function },
		contextmenu: { type: Boolean },
		staticMode: { type: Boolean },
		overElement: {},
		autoClose: { type: Boolean },
		persistent: { type: Boolean },
		flash: { type: Boolean },
		inDom: { type: Boolean },
		indent: {},
		divider: { type: Boolean },
		closeButton: { type: Boolean },
		iconClose: {},
		inert: { type: Boolean },
		autoTabIndex: { type: Boolean },
		closeOnEsc: { type: Boolean },
		openOnArrowDown: { type: Boolean },
		embedded: { type: Boolean },
		width: {},
		height: {},
		hide: { type: Boolean },
		axis: {},
		imagePosition: {},
		dense: { type: Boolean },
		alignment: {},
		origin: {},
		adaptive: {},
		fullscreen: { type: Boolean },
		overscroll: { type: Boolean },
		closeMobileHide: { type: Boolean },
		widthMatch: { type: Boolean },
		imageSize: {}
	}, m),
	emits: [
		"scrollbarTop",
		"scrollbarReachTop",
		"scrollbarLeaveTop",
		"scrollbarBottom",
		"scrollbarReachBottom",
		"scrollbarLeaveBottom",
		"scrollbarEdge",
		"load",
		"update:open",
		"update:modelOpen",
		"window"
	],
	setup(a, { expose: o, emit: f }) {
		let m = f, h = a, g = new d("d1.window", h, {
			emits: m,
			classes: r(() => ({ main: {
				"d1-window": !0,
				"d1-window--width--custom": u(h.width) && !l(p.width, h.width),
				[`d1-window--width--${h.width}`]: l(p.width, h.width),
				"d1-window--height--custom": u(h.height) && !l(p.height, h.height),
				[`d1-window--height--${h.height}`]: l(p.height, h.height),
				"d1-window--hide": h.hide,
				[`d1-window--axis--${h.axis}`]: l(p.axis, h.axis),
				[`d1-window--imagePosition--${h.imagePosition}`]: l(p.imagePosition, h.imagePosition),
				"d1-window--dense": h.dense,
				[`d1-window--alignment--${h.alignment}`]: l(p.alignment, h.alignment),
				[`d1-window--origin--${h.origin}`]: l(p.origin, h.origin),
				[`d1-window--adaptive--${h.adaptive}`]: l(p.adaptive, h.adaptive),
				"d1-window--fullscreen": h.fullscreen,
				"d1-window--overscroll": h.overscroll,
				"d1-window--closeButton": h.closeButton,
				"d1-window--closeMobileHide": h.closeMobileHide,
				"d1-window--widthMatch": h.widthMatch,
				[`d1-window--imageSize--${h.imageSize}`]: l(p.imageSize, h.imageSize)
			} })),
			styles: r(() => {
				var e, t;
				return {
					"--d1-window-sys-width": (e = h.width) == null ? null : e,
					"--d1-window-sys-height": (t = h.height) == null ? null : t
				};
			}),
			components: {
				scrollbar: t,
				button: n,
				image: e
			},
			compMod: { button: {
				secondary: !0,
				roundedFull: !0,
				size: "xs",
				palette: "neutral"
			} }
		}), _ = g.render();
		return o(g.expose()), (e, t) => (s(), i(c(_)));
	}
});
//#endregion
export { h as t };
