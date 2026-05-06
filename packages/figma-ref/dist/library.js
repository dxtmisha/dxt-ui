import { computed as e, shallowRef as t, watch as n } from "vue";
import { fetchClientStorage as r, fetchFrameSelection as i, fetchFramesSelected as a, fetchStorage as o, fetchTopLevelFrames as s, sendClientStorage as c, sendFramesSelected as l, sendStorage as u } from "@dxtmisha/figma";
//#region src/composables/useFigmaClientStorage.ts
function d(e, i) {
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
var f = t(), p = t(!1), m = !0;
function h() {
	return m && (m = !1, p.value = !0, i((e) => {
		f.value = e, p.value = !1;
	})), {
		selection: e(() => {
			var e;
			return (e = f.value) == null ? [] : e;
		}),
		loading: e(() => p.value)
	};
}
//#endregion
//#region src/composables/useFigmaStorage.ts
function g(e, r, i) {
	let a, s = t(), c = t(!0);
	return o(e, (e) => {
		a = e, s.value !== e && (s.value = e), c.value = !1;
	}, i, r, !1), n(s, (t) => {
		a !== t && u(e, t, i);
	}), {
		item: s,
		loading: c
	};
}
//#endregion
//#region src/composables/useFigmaUiFrames.ts
var _ = t(), v = t(!1), y = !0;
function b() {
	return y && (y = !1, v.value = !0, s((e) => {
		_.value = e, v.value = !1;
	})), {
		frames: e(() => {
			var e;
			return (e = _.value) == null ? [] : e;
		}),
		loading: e(() => v.value)
	};
}
//#endregion
//#region src/composables/useFigmaUiSelected.ts
var x = t(), S = t(!1), C = !0;
function w() {
	return C && (C = !1, S.value = !0, a((e) => {
		x.value = e, S.value = !1;
	})), {
		selected: e(() => {
			var e;
			return (e = x.value) == null ? [] : e;
		}),
		loading: e(() => S.value),
		isSelected(t) {
			return e(() => {
				var e;
				return (e = x.value) == null ? void 0 : e.includes(t);
			});
		},
		toggleSelected(e, t) {
			l(e, t);
		}
	};
}
//#endregion
export { d as useFigmaClientStorage, h as useFigmaFrameSelection, g as useFigmaStorage, b as useFigmaUiFrames, w as useFigmaUiSelected };
