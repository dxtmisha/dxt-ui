import { computed as e, shallowRef as t } from "vue";
import { addFramesSelected as n, fetchFramesSelected as r, fetchTopLevelFrames as i } from "@dxtmisha/figma";
//#region src/composables/useFigmaUiFrames.ts
var a = t(), o = t(!1), s = !0;
function c() {
	return s && (s = !1, o.value = !0, i((e) => {
		a.value = e, o.value = !1;
	})), {
		frames: e(() => {
			var e;
			return (e = a.value) == null ? [] : e;
		}),
		loading: e(() => o.value)
	};
}
//#endregion
//#region src/composables/useFigmaUiSelected.ts
var l = t(), u = t(!1), d = !0;
function f() {
	return d && (d = !1, u.value = !0, r((e) => {
		console.log("selected", e), l.value = e, u.value = !1;
	})), {
		selected: e(() => {
			var e;
			return (e = l.value) == null ? [] : e;
		}),
		loading: e(() => u.value),
		isSelected(t) {
			return e(() => {
				var e;
				return (e = l.value) == null ? void 0 : e.includes(t);
			});
		},
		toggleSelected(e, t) {
			console.warn("toggleSelected", e, t), n(e, t);
		}
	};
}
//#endregion
export { c as useFigmaUiFrames, f as useFigmaUiSelected };
