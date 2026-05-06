import { computed as e, shallowRef as t, watch as n } from "vue";
import { fetchClientStorage as r, fetchFrameSelection as i, fetchFramesSelected as a, fetchStorage as o, fetchTopLevelFrames as s, sendClientStorage as c, sendFrameSelection as l, sendFramesSelected as u, sendStorage as d } from "@dxtmisha/figma";
//#region src/composables/useFigmaClientStorage.ts
function f(e, i) {
	let a, o = t(), s = t(!0);
	return r(e, (e) => {
		a = e, o.value !== e && (o.value = e), s.value = !1;
	}, i, !1), n(o, (t) => {
		a !== t && c(e, t);
	}), {
		item: o,
		loading: s
	};
}
//#endregion
//#region src/composables/useFigmaFrameSelection.ts
var p = t(), m = t(!1), h = !0;
function g() {
	return h && (h = !1, m.value = !0, i((e) => {
		p.value = e, m.value = !1;
	})), {
		selection: e(() => {
			var e;
			return (e = p.value) == null ? [] : e;
		}),
		setSelection(e) {
			l(e);
		},
		loading: e(() => m.value)
	};
}
//#endregion
//#region src/composables/useFigmaStorage.ts
function _(e, r, i) {
	let a, s = t(), c = t(!0);
	return o(e, (e) => {
		a = e, s.value !== e && (s.value = e), c.value = !1;
	}, i, r, !1), n(s, (t) => {
		a !== t && d(e, t, i);
	}), {
		item: s,
		loading: c
	};
}
//#endregion
//#region src/composables/useFigmaUiFrames.ts
var v = t(), y = t(!1), b = !0;
function x() {
	return b && (b = !1, y.value = !0, s((e) => {
		v.value = e, y.value = !1;
	})), {
		frames: e(() => {
			var e;
			return (e = v.value) == null ? [] : e;
		}),
		loading: e(() => y.value)
	};
}
//#endregion
//#region src/composables/useFigmaUiSelected.ts
var S = t(), C = t(!1), w = !0;
function T() {
	return w && (w = !1, C.value = !0, a((e) => {
		S.value = e, C.value = !1;
	})), {
		selected: e(() => {
			var e;
			return (e = S.value) == null ? [] : e;
		}),
		loading: e(() => C.value),
		isSelected(t) {
			return e(() => {
				var e;
				return (e = S.value) == null ? void 0 : e.includes(t);
			});
		},
		toggleSelected(e, t) {
			u(e, t);
		}
	};
}
//#endregion
export { f as useFigmaClientStorage, g as useFigmaFrameSelection, _ as useFigmaStorage, x as useFigmaUiFrames, T as useFigmaUiSelected };
