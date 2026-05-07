import { computed as e, shallowRef as t, watch as n } from "vue";
import { fetchClientStorage as r, fetchFrameSelection as i, fetchFrameStyles as a, fetchFramesSelected as o, fetchStorage as s, fetchTopLevelFrames as c, sendClientStorage as l, sendFrameSelection as u, sendFrameStyles as d, sendFramesSelected as f, sendStorage as p } from "@dxtmisha/figma";
//#region src/composables/useFigmaClientStorage.ts
function m(e, i) {
	let a, o = t(), s = t(!0);
	return r(e, (e) => {
		a = e, o.value !== e && (o.value = e), s.value = !1;
	}, i, !1), n(o, (t) => {
		a !== t && l(e, t);
	}), {
		item: o,
		loading: s
	};
}
//#endregion
//#region src/composables/useFigmaFrameSelection.ts
var h = t(), g = t(!1), _ = !0;
function v() {
	return _ && (_ = !1, g.value = !0, i((e) => {
		h.value = e, g.value = !1;
	})), {
		selection: e(() => {
			var e;
			return (e = h.value) == null ? [] : e;
		}),
		setSelection(e) {
			u(e);
		},
		loading: e(() => g.value)
	};
}
//#endregion
//#region src/composables/useFigmaFrameStyles.ts
var y = t([]);
function b() {
	return a((e) => {
		y.value = e;
	}), {
		styles: e(() => y.value),
		send(e) {
			d(e);
		}
	};
}
//#endregion
//#region src/composables/useFigmaStorage.ts
function x(e, r, i) {
	let a, o = t(), c = t(!0);
	return s(e, (e) => {
		a = e, o.value !== e && (o.value = e), c.value = !1;
	}, i, r, !1), n(o, (t) => {
		a !== t && p(e, t, i);
	}), {
		item: o,
		loading: c
	};
}
//#endregion
//#region src/composables/useFigmaUiFrames.ts
var S = t(), C = t(!1), w = !0;
function T() {
	return w && (w = !1, C.value = !0, c((e) => {
		S.value = e, C.value = !1;
	})), {
		frames: e(() => {
			var e;
			return (e = S.value) == null ? [] : e;
		}),
		loading: e(() => C.value)
	};
}
//#endregion
//#region src/composables/useFigmaUiSelected.ts
var E = t(), D = t(!1), O = !0;
function k() {
	return O && (O = !1, D.value = !0, o((e) => {
		E.value = e, D.value = !1;
	})), {
		selected: e(() => {
			var e;
			return (e = E.value) == null ? [] : e;
		}),
		loading: e(() => D.value),
		isSelected(t) {
			return e(() => {
				var e;
				return (e = E.value) == null ? void 0 : e.includes(t);
			});
		},
		toggleSelected(e, t) {
			f(e, t);
		}
	};
}
//#endregion
export { m as useFigmaClientStorage, v as useFigmaFrameSelection, b as useFigmaFrameStyles, x as useFigmaStorage, T as useFigmaUiFrames, k as useFigmaUiSelected };
