import { computed as e, shallowRef as t, watch as n } from "vue";
import { fetchClientStorage as r, fetchFramesSelected as i, fetchStorage as a, fetchTopLevelFrames as o, sendClientStorage as s, sendFramesSelected as c, sendStorage as l } from "@dxtmisha/figma";
//#region src/composables/useFigmaClientStorage.ts
function u(e, i) {
	let a, o = t(), c = t(!0);
	return r(e, (e) => {
		a = e, o.value !== e && (o.value = e), c.value = !1;
	}, i, !1), n(o, (t) => {
		a !== t && s(e, t);
	}), {
		item: o,
		loading: c
	};
}
//#endregion
//#region src/composables/useFigmaStorage.ts
function d(e, r, i) {
	let o, s = t(), c = t(!0);
	return a(e, (e) => {
		o = e, s.value !== e && (s.value = e), c.value = !1;
	}, i, r, !1), n(s, (t) => {
		o !== t && l(e, t, i);
	}), {
		item: s,
		loading: c
	};
}
//#endregion
//#region src/composables/useFigmaUiFrames.ts
var f = t(), p = t(!1), m = !0;
function h() {
	return m && (m = !1, p.value = !0, o((e) => {
		f.value = e, p.value = !1;
	})), {
		frames: e(() => {
			var e;
			return (e = f.value) == null ? [] : e;
		}),
		loading: e(() => p.value)
	};
}
//#endregion
//#region src/composables/useFigmaUiSelected.ts
var g = t(), _ = t(!1), v = !0;
function y() {
	return v && (v = !1, _.value = !0, i((e) => {
		g.value = e, _.value = !1;
	})), {
		selected: e(() => {
			var e;
			return (e = g.value) == null ? [] : e;
		}),
		loading: e(() => _.value),
		isSelected(t) {
			return e(() => {
				var e;
				return (e = g.value) == null ? void 0 : e.includes(t);
			});
		},
		toggleSelected(e, t) {
			c(e, t);
		}
	};
}
//#endregion
export { u as useFigmaClientStorage, d as useFigmaStorage, h as useFigmaUiFrames, y as useFigmaUiSelected };
